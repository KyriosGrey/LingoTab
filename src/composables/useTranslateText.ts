// src/composables/useTranslateText.ts
import { fetchTranslationFallback } from '@/composables/myMemoryTranslation'
import useGoogleTranslate from '@/composables/useGoogleTranslate'
import { DEFAULT_FETCH_TIMEOUT_MS, fetchWithTimeout } from '@/composables/words/providers/fetchWithTimeout'
import storage from '@/modules/localStorage'

type CacheMap = Record<string, string>
const CACHE_KEY = 'gtr_cache_v1'

// Грубая защита от переполнения кэша (~2–4 МБ)
const MAX_CACHE_ENTRIES = 1500

function loadCache(): CacheMap {
  try {
    const raw = storage.get(CACHE_KEY)
    return raw ? JSON.parse(raw) : {}
  }
  catch {
    return {}
  }
}

function saveCache(cache: CacheMap) {
  try {
    const entries = Object.entries(cache)
    if (entries.length > MAX_CACHE_ENTRIES) {
      // Обрезаем старые ключи
      entries.slice(0, entries.length - MAX_CACHE_ENTRIES)
        .forEach(([k]) => delete cache[k])
    }
    storage.set(CACHE_KEY, JSON.stringify(cache))
  }
  catch {
    // ignore quota errors
  }
}

function key(text: string, sl: string, tl: string) {
  return `${sl}::${tl}::${text.trim().toLowerCase()}`
}

// Неофициальный, но часто работающий JSON-эндпоинт Google Translate.
// Возвращает структуру типа [[["перевод","original",...],...],...]
//
// Timed out rather than left to hang: a request that never resolves would otherwise stall
// the MyMemory fallback below forever, which defeats the point of having one.
async function fetchTranslate(text: string, sl: string, tl: string): Promise<string> {
  const q = encodeURIComponent(text)
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sl}&tl=${tl}&dt=t&q=${q}`
  const res = await fetchWithTimeout(url)
  if (!res.ok)
    throw new Error(`Translate HTTP ${res.status}`)
  const data = await res.json() as any
  const chunks: string[] = (data?.[0] || [])
    .map((seg: any) => seg?.[0])
    .filter(Boolean)
  return chunks.join('').trim()
}

// Joins several texts with "\n" and translates them in one request instead of one
// request per text. Google may still split a single line into more than one
// internal segment (e.g. a line with two sentences) - that's fine, because we
// reassemble output by walking the *original*-text echo Google returns per segment
// and cutting only where we find our own "\n", not wherever Google's own segmenter
// found one.
//
// Sent as POST because the joined text easily outgrows a sane query string.
//
// A network/HTTP failure here is deliberately NOT retried as one request per text:
// the usual cause is Google rate-limiting us (429), and answering that by firing N
// more requests is what triggers the rate limit in the first place. Only a
// segmentation mismatch - a valid response we can't align - falls back to single
// requests, so a mismatch can never produce a misaligned translation.
async function fetchTranslateBatch(texts: string[], sl: string, tl: string): Promise<string[]> {
  const combined = texts.join('\n')
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sl}&tl=${tl}&dt=t`
  const res = await fetchWithTimeout(url, DEFAULT_FETCH_TIMEOUT_MS, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `q=${encodeURIComponent(combined)}`,
  })
  if (!res.ok)
    throw new Error(`Translate HTTP ${res.status}`)

  const data = await res.json() as any
  const segments: [string, string][] = (data?.[0] || [])
    .map((seg: any) => [seg?.[0] ?? '', seg?.[1] ?? ''])

  const results: string[] = []
  let translatedChunk = ''
  let originalChunk = ''

  for (const [translatedSeg, originalSeg] of segments) {
    translatedChunk += translatedSeg
    originalChunk += originalSeg

    if (originalChunk.endsWith('\n')) {
      results.push(translatedChunk.replace(/\n+$/, '').trim())
      translatedChunk = ''
      originalChunk = ''
    }
  }
  if (translatedChunk.trim())
    results.push(translatedChunk.trim())

  if (results.length !== texts.length)
    return Promise.all(texts.map(text => fetchTranslate(text, sl, tl)))

  return results
}

export default function useTranslateText() {
  const { targetLanguage } = useGoogleTranslate()
  const tl = (targetLanguage?.code || 'ru').toLowerCase()

  async function translate(text: string, sl = 'en', tlOverride?: string): Promise<string> {
    const target = (tlOverride || tl).toLowerCase()
    const k = key(text, sl, target)
    const cache = loadCache()
    if (cache[k])
      return cache[k]

    let translated: string
    try {
      translated = await fetchTranslate(text, sl, target)
    }
    catch {
      // Google refusing us is Firefox's permanent state, not a passing rate limit (see
      // myMemoryTranslation.ts), so falling back beats failing. The result is cached
      // alongside Google's own: without that, re-reading the same words would burn
      // through MyMemory's small daily quota. The trade-off is that a word looked up
      // while Google was down keeps its slightly weaker translation afterwards.
      const fallback = await fetchTranslationFallback(text, sl, target)
      if (!fallback)
        throw new Error('Translate unavailable')
      translated = fallback
    }

    cache[k] = translated
    saveCache(cache)
    return translated
  }

  async function translateBatch(texts: string[], sl = 'en', tlOverride?: string): Promise<string[]> {
    const target = (tlOverride || tl).toLowerCase()
    const cache = loadCache()

    const results: string[] = Array.from({ length: texts.length })
    const missingIndexes: number[] = []
    const missingTexts: string[] = []

    texts.forEach((text, i) => {
      const k = key(text, sl, target)
      if (cache[k]) {
        results[i] = cache[k]
      }
      else {
        missingIndexes.push(i)
        missingTexts.push(text)
      }
    })

    if (missingTexts.length === 0)
      return results

    const translated = missingTexts.length === 1
      ? [await fetchTranslate(missingTexts[0], sl, target)]
      : await fetchTranslateBatch(missingTexts, sl, target)

    translated.forEach((t, i) => {
      results[missingIndexes[i]] = t
      cache[key(missingTexts[i], sl, target)] = t
    })
    saveCache(cache)

    return results
  }

  return { translate, translateBatch }
}
