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
1) QUALITY + TIME CONTEXT:
- Each sentence.text must be ${min}-${max} words and must not aim for the minimum; prefer learner-friendly sentences with clear context.
- lengthWords must equal the true word count of sentence.text.
- Every sentence.text MUST include at least ONE explicit time anchor / temporal cue that helps infer tense/aspect (e.g., yesterday/last night, two hours ago, right now, these days, tomorrow/next week, already/yet/still, for/since, by the time..., before/after..., when/while + clause).
- Forbidden: bare tense-only sentences without time/context (e.g., "I had eaten.").
- The time cue should naturally match the tense/aspect and should vary across sentences (avoid repeating the same marker too often).
- If a sentence feels bare (simple subject + auxiliary + verb), add a time marker and one small concrete detail (place/reason/object/short clause) while staying within the word limit.

2) OUTPUT: Return EXACTLY ONE valid JSON object described in rule (4) and NOTHING ELSE (no explanations, no markdown, no extra text).

3) HINT FIELD (IN-PLACE TOKEN MASKING):
For each sentence add "hint": the original English sentence with key grammar tokens replaced IN-PLACE by the exact placeholder [____].
Rules:
- Do not reorder words and do not add/remove words; preserve spacing and punctuation exactly.
- Replace ONLY grammar-bearing tokens:
  * auxiliaries (be/am/is/are/was/were/been/being),
  * perfect auxiliaries (have/has/had and contractions),
  * modals (can/could/will/would/should/must/may/might),
  * negation (not / n't),
  * verb forms that carry tense/aspect inside the verb phrase (e.g., -ing participle, past participle).
- Do NOT replace content words (nouns/adjectives/adverbs/determiners/prepositions/numerals).
- Use exactly one [____] per replaced token; if multiple tokens in a verb phrase, replace each (e.g., "has been testing" -> "[____] [____] [____]").
- If no reliable grammar token is identifiable, set hint exactly equal to text.
Example:
- text: "She has not done her homework yet."
  hint: "She [____] [____] [____] her homework yet."

4) The JSON must follow this schema exactly (order inside each sentence object matters: lengthWords then text):
{
  "count": integer,
  "settings": { "level": string, "grammarFocus": [string], "topics":[string], "lengthWords":[${min},${max}], "targetLang":"${targetLang}" },
  "sentences": [
    { "id": "1", "lengthWords": integer, "text":"English sentence.", "translation":"Translation in ${targetLang}.", "hint":"Sentence with [____] blanks.", "tense":"", "topic":"" }
  ]
}

5) IDs: Use simple numeric string ids "1".."${count}" (unique).

6) FORM MIX (PACK-LEVEL):
- Keep forms balanced across the pack (~1/3 each): affirmative, negative (contains not/n't/never/no as negation), interrogative (ends with '?').
- If ${count} is not divisible by 3: allocate remainder to affirmative first, then negative, then interrogative.
- Questions MUST end with '?'. Non-questions MUST end with '.' or '!'.

7) translation: one short neutral sentence in ${targetLang}, no extra commentary.

8) JSON: Use ASCII quotes, valid parsable JSON, no trailing commas, integers where required.
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