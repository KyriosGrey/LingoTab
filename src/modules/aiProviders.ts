// aiProviders — Groq (OpenAI-compatible chat/completions) implementation
// Added robust parsing: attempts to salvage partial JSON responses (cut/truncated model output),
// retries with x-api-key header on auth failure, logs and saves raw responses for debugging.

import * as storage from '@/utils/storage'
import { validateAndNormalizePack, Pack } from '@/utils/packValidator'

export type GeneratorSettings = {
  count: number
  level: string
  grammarFocus: string[]
  topics: string[]
  lengthRange: [number, number]
  targetLang: string
}

const DEFAULT_GROQ_MODEL = 'llama-3.3-70b-versatile'

function buildPrompt(s: GeneratorSettings) {
  const { count, level, grammarFocus, topics, lengthRange, targetLang } = s
  const [min, max] = lengthRange

  return `You are an assistant that generates practice sentences for English learners.
Generate EXACTLY ${count} DISTINCT English sentences that match these constraints:
- CEFR level: ${level}
- Grammar focus: ${grammarFocus.join(', ')}
- Topics: ${topics.join(', ')}
- Sentence length MUST be between ${min} and ${max} words (inclusive).
- For each sentence provide a short, direct, neutral translation into '${targetLang}'.

IMPORTANT RULES (FOLLOW THESE EXACTLY):
1) LENGTH CONSTRAINT FIRST: EACH sentence.text MUST contain between ${min} and ${max} WORDS INCLUSIVE. The field "lengthWords" MUST equal the actual number of words in "text". IF A SENTENCE IS TOO SHORT, ADD DESCRIPTIVE ADJECTIVES (e.g., "big", "fast"), ADVERBS (e.g., "often", "quickly"), OR SPECIFIC TIME MARKERS (e.g., "at five o'clock", "every single day") TO REACH THE MINIMUM. 
2) RETURN EXACTLY ONE VALID JSON OBJECT described in rule (4) AND NOTHING ELSE (NO EXPLANATIONS, NO MARKDOWN, NO EXTRA TEXT).

3) IMPORTANT NEW RULE (HINT): For each sentence produce an additional field "hint" — a short hint string that is THE ORIGINAL ENGLISH SENTENCE with KEY GRAMMAR TOKENS REPLACED IN-PLACE by the exact placeholder [____].

Follow these strict rules for the "hint" field:
- IN-PLACE REPLACEMENT ONLY: Do not reorder words, do not add or remove other words, and do not leave the replaced original token visible next to the placeholder. Replace each target token exactly where it appears with the exact substring [____].
- TOKENS TO REPLACE: Replace ONLY grammar-bearing tokens, including:
  * auxiliary verbs (be / am / is / are / was / were / been / being),
  * perfect auxiliaries (have / has / had and their contracted forms),
  * modal verbs (can, could, will, would, should, must, may, might),
  * negation words (not and n't),
  * main verb forms that carry aspect/tense information — including present participle (the -ing form, e.g. "testing") and past participle (e.g. "done", "written") when they are part of the verb phrase expressing tense/aspect.
- DO NOT replace content words: nouns, adjectives, adverbs, determiners, prepositions, numerals, punctuation, or translation text must remain unchanged.
- WHITESPACE & PUNCTUATION: Preserve original spacing and punctuation exactly. The hint must be the original sentence with placeholders inserted — not a paraphrase.
- PLACEHOLDER FORMAT: Use the exact placeholder [____] (four underscores inside square brackets). Use one [____] per replaced token.
- MULTIPLE REPLACEMENTS: If a verb phrase contains several grammar tokens (e.g. "has been testing"), replace each grammar token separately and in-place (e.g. "[____] [____] [____]").
- IF NO RELIABLE GRAMMAR TOKEN IS IDENTIFIABLE: set "hint" to be exactly equal to the original "text" (i.e., no change) rather than producing an invalid or reordered hint.
- EXAMPLES (valid hints):
  - text: "She has not done her homework yet."
    hint: "She [____] [____] [____] her homework yet."
  - text: "The team has not won any big tournaments yet."
    hint: "The team [____] [____] [____] any big tournaments yet."
  - text: "The team has been testing the software every day."
    hint: "The team [____] [____] [____] the software every day."
  - text: "He hasn't finished the task."
    hint: "He [____] [____] the task."
- FORBIDDEN HINTS (invalid):
  - Reordering tokens (e.g. "The team not [____] won ...")
  - Keeping the replaced word next to the placeholder (e.g. "[____] won")
  - Paraphrasing or changing punctuation

4) The JSON must follow this schema exactly (order inside each sentence object matters: lengthWords then text):
{
  "count": integer,
  "settings": { "level": string, "grammarFocus": [string], "topics":[string], "lengthWords":[${min},${max}], "targetLang":"${targetLang}" },
  "sentences": [
    { "id": "1", "lengthWords": integer, "text":"English sentence.", "translation":"Translation in ${targetLang}.", "hint":"Sentence with [____] blanks.", "tense":"", "topic":"" }
  ]
}
5) Use simple numeric ids starting from "1" up to the count (e.g. "1","2","3"). IDs must be unique within the returned pack.
6) Each sentence.text MUST end with appropriate punctuation ('.' '?' or '!').
7) 'translation' must be a short neutral translation in one sentence; do NOT include extra commentary.
8) Use ASCII quotes and a parsable JSON (no trailing commas). Ensure numbers are integers.
`
}

/** helper to extract text from chat/completions (choices) */
function extractTextFromChatResponse(resp: any): string | null {
  if (!resp) return null
  const c = resp?.choices
  if (Array.isArray(c) && c.length) {
    const first = c[0]
    if (first?.message?.content && typeof first.message.content === 'string') return first.message.content.trim()
    if (typeof first.text === 'string' && first.text.trim()) return first.text.trim()
    if (typeof resp.output_text === 'string' && resp.output_text.trim()) return resp.output_text.trim()
  }
  const seen = new Set<any>()
  const stack = [resp]
  while (stack.length) {
    const node = stack.pop()
    if (!node || seen.has(node)) continue
    seen.add(node)
    if (typeof node === 'string' && node.trim()) return node.trim()
    if (Array.isArray(node)) {
      for (let i = node.length - 1; i >= 0; i--) stack.push(node[i])
    } else if (typeof node === 'object') {
      for (const k of Object.keys(node).reverse()) stack.push(node[k])
    }
  }
  return null
}

async function doGroqRequest(apiKey: string, body: any, apiUrl?: string, useXApiKeyHeader = false) {
  const base = apiUrl || 'https://api.groq.com/openai/v1/chat/completions'
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 20000)
  try {
    const headers: Record<string,string> = { 'Content-Type': 'application/json' }
    if (useXApiKeyHeader) headers['x-api-key'] = apiKey
    else headers['Authorization'] = `Bearer ${apiKey}`

    console.debug('[aiProviders] doGroqRequest ->', { url: base, useXApiKeyHeader, headersPreview: { ...(headers['Authorization'] ? { Authorization: 'Bearer ***' } : {}), ...(headers['x-api-key'] ? { 'x-api-key': '***' } : {}) }, bodyPreview: typeof body === 'object' ? { model: body.model, messagesCount: Array.isArray(body.messages) ? body.messages.length : 0 } : undefined })

    const res = await fetch(base, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
      signal: controller.signal
    })

    const text = await res.text().catch(() => '')
    let json = null
    try { json = text ? JSON.parse(text) : null } catch { /* keep json null */ }

    console.debug('[aiProviders] doGroqRequest response', { ok: res.ok, status: res.status, textSnippet: (text || '').slice(0, 1000), parsedJsonPresent: !!json })

    return { ok: res.ok, status: res.status, text, json }
  } catch (err: any) {
    if (err?.name === 'AbortError') throw new Error('Groq call timeout')
    throw err
  } finally {
    clearTimeout(timeout)
  }
}

/** attempt to clean trailing commas before object/array closing braces */
function stripTrailingCommas(s: string) {
  // remove ",}" -> "}" and ",]" -> "]"
  return s.replace(/,\s*}/g, '}').replace(/,\s*]/g, ']')
}

/** single-request helper: performs one chat/completions call, parses JSON and normalizes pack */
async function generatePackOnce(apiKey: string, settings: GeneratorSettings, model = DEFAULT_GROQ_MODEL, apiUrl?: string) {
  const prompt = buildPrompt(settings)
  const messages = [
    { role: 'system', content: 'You are a helpful assistant that outputs ONLY JSON, exactly one JSON object, no commentary.' },
    { role: 'user', content: prompt }
  ]

  // raised tokens slightly to reduce truncation chance
  const bodyWithFormat = {
    model,
    messages,
    temperature: 0.0,
    max_tokens: 1500,
    response_format: { type: 'json_object' }
  }

  const bodyNoFormat = { model, messages, temperature: 0.0, max_tokens: 1500 }

  // Try: first with Authorization header (Bearer)
  let attempt = await doGroqRequest(apiKey, bodyWithFormat, apiUrl, false)

  // If auth error (401/403), try again using x-api-key header
  if (!attempt.ok && (attempt.status === 401 || attempt.status === 403)) {
    console.debug('[aiProviders] Authorization failed with Bearer, retrying with x-api-key header')
    const second = await doGroqRequest(apiKey, bodyWithFormat, apiUrl, true)
    // store both attempts for debugging
    try {
      await storage.set({ lastSmartRawResponse: [attempt.json ?? attempt.text ?? null, second.json ?? second.text ?? null], lastSmartRawResponseAt: Date.now() })
    } catch (e) { console.warn('Failed to save raw responses', e) }
    attempt = second
  }

  // If still not ok and error mentions response_format, retry without response_format
  if (!attempt.ok) {
    const errText = attempt.text || ''
    const badFieldRE = /response_format|response[_]?mime|Unknown name|Unknown field/i
    if ((attempt.status === 400 || attempt.status === 422) && badFieldRE.test(errText)) {
      console.debug('[aiProviders] response_format unsupported — retrying without it')
      attempt = await doGroqRequest(apiKey, bodyNoFormat, apiUrl, false)
      if (!attempt.ok && (attempt.status === 401 || attempt.status === 403)) {
        console.debug('[aiProviders] Authorization failed on bodyNoFormat with Bearer, retrying with x-api-key header')
        const second = await doGroqRequest(apiKey, bodyNoFormat, apiUrl, true)
        try { await storage.set({ lastSmartRawResponse: [attempt.json ?? attempt.text ?? null, second.json ?? second.text ?? null], lastSmartRawResponseAt: Date.now() }) } catch (e) { console.warn('Failed to save raw responses', e) }
        attempt = second
      }
      if (!attempt.ok) throw new Error(`Groq API Error ${attempt.status}: ${attempt.text?.slice?.(0,500) ?? attempt.text}`)
    } else {
      // Save raw attempt for debugging
      try { await storage.set({ lastSmartRawResponse: attempt.json ?? attempt.text ?? null, lastSmartRawResponseAt: Date.now() }) } catch (e) { console.warn('Failed to save raw response', e) }
      throw new Error(`Groq API Error ${attempt.status}: ${errText?.slice?.(0,500) ?? errText}`)
    }
  }

  // Save raw response (only last)
  try {
    await storage.set({ lastSmartRawResponse: attempt.json ?? attempt.text ?? null, lastSmartRawResponseAt: Date.now() })
  } catch (e) {
    console.warn('Failed to save raw response', e)
  }

  // extract assistant content (may be a JSON string or raw text)
  const contentText = extractTextFromChatResponse(attempt.json || attempt.text)
  if (!contentText) {
    const rawText = attempt.text || JSON.stringify(attempt.json || {})
    throw new Error(`Groq returned no content to parse: ${rawText}`)
  }

  // Try to parse JSON strictly first, then fallback to several salvage attempts
  let parsed: any = null
  try {
    parsed = JSON.parse(contentText)
  } catch (err1) {
    // try to find JSON object inside text (greedy)
    const m = contentText.match(/(\{[\s\S]*\})/)
    if (m) {
      try {
        parsed = JSON.parse(m[1])
      } catch (err2) {
        // Try salvage: cut up to last closing brace and clean trailing commas
        const lastBrace = contentText.lastIndexOf('}')
        if (lastBrace > -1) {
          const candidate = stripTrailingCommas(contentText.slice(0, lastBrace + 1))
          try {
            parsed = JSON.parse(candidate)
            console.debug('[aiProviders] salvage parse succeeded by trimming to last }')
          } catch (err3) {
            console.debug('[aiProviders] salvage parse failed after trimming last }, errors:', err1, err2, err3)
            throw new Error('No valid JSON found in model response')
          }
        } else {
          console.debug('[aiProviders] JSON regex found but parse failed and no trailing } to salvage:', err1, err2)
          throw new Error('No valid JSON found in model response')
        }
      }
    } else {
      // If no {…} match, try salvage by trimming to last } anyway (some outputs are plain strings)
      const lastBrace = contentText.lastIndexOf('}')
      if (lastBrace > -1) {
        const candidate = stripTrailingCommas(contentText.slice(0, lastBrace + 1))
        try {
          parsed = JSON.parse(candidate)
          console.debug('[aiProviders] salvage parse succeeded by trimming to last } (no regex match)')
        } catch (errFinal) {
          console.debug('[aiProviders] final salvage parse failed', errFinal)
          throw new Error('No valid JSON found in model response')
        }
      } else {
        console.debug('[aiProviders] no JSON object found inside contentText, snippet:', contentText.slice(0,1000))
        throw new Error('No valid JSON found in model response')
      }
    }
  }

  // Normalize & validate pack
  const normalized = validateAndNormalizePack(parsed, { lengthRange: settings.lengthRange })

  return { raw: parsed, pack: normalized }
}

/**
 * generatePack orchestration:
 * - request candidates (count * 2)
 * - filter by actual lengthWords (validator computes actual lengths)
 * - if not enough, request missing count once
 */
export async function generatePack(apiKey: string, settings: GeneratorSettings, model = DEFAULT_GROQ_MODEL, apiUrl?: string): Promise<{ raw: any, pack: Pack }> {
  console.debug('[aiProviders] generatePack start', { apiKeyPresent: !!apiKey, settings })
  const desired = Math.max(1, settings.count)
  const [min, max] = settings.lengthRange

  // First attempt: request double candidates (clamped)
  const firstSettings = { ...settings, count: Math.max(desired * 2, desired) }
  const first = await generatePackOnce(apiKey, firstSettings, model, apiUrl)
  let candidates = (first.pack.sentences || []).filter(s => {
    const len = Number(s.lengthWords) || 0
    return Number.isFinite(len) && len >= min && len <= max && typeof s.text === 'string' && s.text.trim().length > 0
  })

  // If enough, return first desired
  if (candidates.length >= desired) {
    const chosen = candidates.slice(0, desired)
    const outPack = { ...first.pack, sentences: chosen, count: desired }
    return { raw: first.raw, pack: outPack }
  }

  // Second attempt: request only missing number
  const missing = desired - candidates.length
  try {
    const secondSettings = { ...settings, count: missing }
    const second = await generatePackOnce(apiKey, secondSettings, model, apiUrl)
    const candidates2 = (second.pack.sentences || []).filter(s => {
      const len = Number(s.lengthWords) || 0
      return Number.isFinite(len) && len >= min && len <= max && typeof s.text === 'string' && s.text.trim().length > 0
    })
    candidates = candidates.concat(candidates2)
    const final = candidates.slice(0, desired)
    // raw: include both raw responses for debugging
    return { raw: [first.raw, second.raw], pack: { ...first.pack, sentences: final, count: final.length } }
  } catch (e) {
    // if second attempt failed, return whatever we have from first attempt
    console.debug('[aiProviders] second attempt failed, returning partial candidates', e)
    const final = candidates.slice(0, desired)
    return { raw: first.raw, pack: { ...first.pack, sentences: final, count: final.length } }
  }
}

/** Quick test (count=1) returns boolean (true if pack ok) */
export async function testConnection(apiKey: string, settings?: Partial<GeneratorSettings>, model?: string, apiUrl?: string) {
  console.debug('[aiProviders] testConnection start', { apiKeyPresent: !!apiKey, settings })
  const s: GeneratorSettings = {
    count: settings?.count || 1,
    level: settings?.level || 'B1',
    grammarFocus: settings?.grammarFocus || ['All'],
    topics: settings?.topics || ['Daily Life & Slang'],
    lengthRange: settings?.lengthRange || [5,15],
    targetLang: settings?.targetLang || 'ru'
  }
  const usedModel = model || DEFAULT_GROQ_MODEL
  try {
    const res = await generatePack(apiKey, s, usedModel, apiUrl)
    console.debug('[aiProviders] testConnection finished, sentences:', res.pack.sentences?.length)
    return Array.isArray(res.pack.sentences) && res.pack.sentences.length >= 1
  } catch (err) {
    console.debug('[aiProviders] testConnection error', err)
    return false
  }
}