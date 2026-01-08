// aiProviders — Groq (OpenAI-compatible chat/completions) implementation (updated).
// generatePack now orchestrates requests: request extra candidates, filter by lengthWords, do 1 automatic retry for missing sentences.

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
2) RETURN EXACTLY ONE VALID JSON OBJECT AND NOTHING ELSE (NO EXPLANATIONS, NO MARKDOWN, NO EXTRA TEXT).
3) The JSON must follow this schema exactly (order inside each sentence object matters: lengthWords then text):
{
  "count": integer,
  "settings": { "level": string, "grammarFocus": [string], "topics":[string], "lengthWords":[${min},${max}], "targetLang":"${targetLang}" },
  "sentences": [
    { "id": "1", "lengthWords": integer, "text":"English sentence.", "translation":"Translation in ${targetLang}.", "tense":"", "topic":"" }
  ]
}
4) Use simple numeric ids starting from "1" up to the count (e.g. "1","2","3"). IDs must be unique within the returned pack.
5) Each sentence.text MUST end with appropriate punctuation ('.' '?' or '!').
6) 'translation' must be a short neutral translation in one sentence; do NOT include extra commentary.
7) Use ASCII quotes and a parsable JSON (no trailing commas). Ensure numbers are integers.

Example (for reference only — output must match schema exactly):
{
  "count": ${count},
  "settings": { "level": "${level}", "grammarFocus": ${JSON.stringify(grammarFocus)}, "topics": ${JSON.stringify(topics)}, "lengthWords":[${min},${max}], "targetLang":"${targetLang}" },
  "sentences": [
    {
      "id":"1",
      "lengthWords":5,
      "text":"I will write code tomorrow.",
      "translation":"Я буду писать код завтра.",
      "tense":"Future Simple",
      "topic":"IT & Dev"
    }
  ]
}`
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

    const res = await fetch(base, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
      signal: controller.signal
    })

    const text = await res.text().catch(() => '')
    let json = null
    try { json = text ? JSON.parse(text) : null } catch { /* keep json null */ }
    return { ok: res.ok, status: res.status, text, json }
  } catch (err: any) {
    if (err?.name === 'AbortError') throw new Error('Groq call timeout')
    throw err
  } finally {
    clearTimeout(timeout)
  }
}

/** single-request helper: performs one chat/completions call, parses JSON and normalizes pack */
async function generatePackOnce(apiKey: string, settings: GeneratorSettings, model = DEFAULT_GROQ_MODEL, apiUrl?: string) {
  const prompt = buildPrompt(settings)
  const messages = [
    { role: 'system', content: 'You are a helpful assistant that outputs ONLY JSON, exactly one JSON object, no commentary.' },
    { role: 'user', content: prompt }
  ]

  const bodyWithFormat = {
    model,
    messages,
    temperature: 0.0, // deterministic
    max_tokens: 1000,
    response_format: { type: 'json_object' }
  }

  const bodyNoFormat = { model, messages, temperature: 0.0, max_tokens: 1000 }

  let attempt = await doGroqRequest(apiKey, bodyWithFormat, apiUrl)
  if (!attempt.ok) {
    const errText = attempt.text || ''
    const badFieldRE = /response_format|response[_]?mime|Unknown name|Unknown field/i
    if ((attempt.status === 400 || attempt.status === 422) && badFieldRE.test(errText)) {
      attempt = await doGroqRequest(apiKey, bodyNoFormat, apiUrl)
      if (!attempt.ok) throw new Error(`Groq API Error ${attempt.status}: ${attempt.text}`)
    } else {
      throw new Error(`Groq API Error ${attempt.status}: ${errText}`)
    }
  }

  // Save raw response (only last)
  try {
    await storage.set({ lastSmartRawResponse: attempt.json ?? attempt.text ?? null, lastSmartRawResponseAt: Date.now() })
  } catch (e) {
    console.warn('Failed to save raw response', e)
  }

  const contentText = extractTextFromChatResponse(attempt.json || attempt.text)
  if (!contentText) {
    const rawText = attempt.text || JSON.stringify(attempt.json || {})
    throw new Error(`Groq returned no content to parse: ${rawText}`)
  }

  // Parse JSON
  let parsed: any
  try {
    parsed = JSON.parse(contentText)
  } catch {
    const m = contentText.match(/(\{[\s\S]*\})/)
    if (m) {
      try { parsed = JSON.parse(m[1]) } catch { throw new Error('No valid JSON found in model response') }
    } else {
      throw new Error('No valid JSON found in model response')
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
 * - return combined pack (may contain fewer than requested sentences)
 */
export async function generatePack(apiKey: string, settings: GeneratorSettings, model = DEFAULT_GROQ_MODEL, apiUrl?: string): Promise<{ raw: any, pack: Pack }> {
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
    const final = candidates.slice(0, desired)
    return { raw: first.raw, pack: { ...first.pack, sentences: final, count: final.length } }
  }
}

/** Quick test (count=1) returns boolean (true if pack ok) */
export async function testConnection(apiKey: string, settings?: Partial<GeneratorSettings>, model?: string, apiUrl?: string) {
  const s: GeneratorSettings = {
    count: settings?.count || 1,
    level: settings?.level || 'B1',
    grammarFocus: settings?.grammarFocus || ['All'],
    topics: settings?.topics || ['Daily Life & Slang'],
    lengthRange: settings?.lengthRange || [5,15],
    targetLang: settings?.targetLang || 'ru'
  }
  const usedModel = model || DEFAULT_GROQ_MODEL
  const res = await generatePack(apiKey, s, usedModel, apiUrl)
  return Array.isArray(res.pack.sentences) && res.pack.sentences.length >= 1
}