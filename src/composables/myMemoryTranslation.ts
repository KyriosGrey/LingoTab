import { fetchWithTimeout } from './words/providers/fetchWithTimeout'

const API_BASE = 'https://api.mymemory.translated.net/get'

// MyMemory refuses anything longer outright, so length is checked before sending rather
// than spending a round-trip to be told so.
const MAX_QUERY_CHARS = 500

// Longer than the dictionary providers' 3s: measured response times swing between 0.5s
// and 7s, and cutting at 3s would drop translations that were genuinely on their way.
// Still short enough that a stalled request doesn't leave a tooltip hanging.
const TIMEOUT_MS = 4000

// Our language list still carries a few of Google's legacy codes, which MyMemory doesn't
// recognise. Same problem, and same fix, as in wiktionaryWordTranslation.ts - the two
// lists differ, though: MyMemory does understand zh-CN/zh-TW.
const LANGUAGE_CODE_ALIASES: Record<string, string> = {
  iw: 'he',
  jw: 'jv',
}

// Once the daily free quota is gone every further request is a wasted round-trip that
// comes back with the same refusal, so it's remembered for the rest of this page's life.
// LingoTab replaces the New Tab page, so the next new tab is a fresh page load and gets
// to find out for itself - which is what we want, since the quota resets on its own.
let quotaExhausted = false

export function isQuotaExhausted(): boolean {
  return quotaExhausted
}

interface MyMemoryResponse {
  responseData?: { translatedText?: string }
  responseStatus?: number | string
  quotaFinished?: boolean | null
}

// Fallback for when Google Translate refuses us. In Firefox that's its permanent state
// rather than a passing rate limit: Chrome signs its requests to Google domains with
// headers (x-client-data, x-browser-validation) that no other browser can produce, and
// the free translate_a endpoint leans on them.
//
// MyMemory reports its own failures with HTTP 200 and puts the error text where the
// translation belongs ("QUERY LENGTH LIMIT EXCEEDED...", "MYMEMORY WARNING: YOU USED ALL
// AVAILABLE FREE TRANSLATIONS FOR TODAY..."), so responseStatus - not res.ok - decides
// whether there's a translation here. Passing that text through to the UI unchecked is
// how sites end up with "MYMEMORY WARNING..." as a product name.
export async function fetchTranslationFallback(text: string, sl: string, tl: string): Promise<string | null> {
  if (quotaExhausted || text.length > MAX_QUERY_CHARS)
    return null

  const source = LANGUAGE_CODE_ALIASES[sl] || sl
  const target = LANGUAGE_CODE_ALIASES[tl] || tl
  const langpair = encodeURIComponent(`${source}|${target}`)

  try {
    const res = await fetchWithTimeout(`${API_BASE}?q=${encodeURIComponent(text)}&langpair=${langpair}`, TIMEOUT_MS)
    if (!res.ok)
      return null

    const data = await res.json() as MyMemoryResponse

    if (data.quotaFinished)
      quotaExhausted = true

    if (Number(data.responseStatus) !== 200)
      return null

    return data.responseData?.translatedText?.trim() || null
  }
  catch {
    return null
  }
}
