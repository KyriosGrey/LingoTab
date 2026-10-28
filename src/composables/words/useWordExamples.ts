import useGoogleTranslate from '@/composables/useGoogleTranslate'
import storage from '@/modules/localStorage'
import { ref } from 'vue'
import { fetchWithTimeout, isTimeoutError } from './providers/fetchWithTimeout'
import useUserExamples from './useUserExamples'

// Usage examples for the current word from Tatoeba (tatoeba.org): real sentences with
// human-made translations. The API sends `Access-Control-Allow-Origin: *`, so it needs
// no host permission in the manifest.

export interface IWordExample {
  text: string
  translation: string
}

export const WORD_EXAMPLES_ENABLED_STORAGE_KEY = 'showWordExamples'
const CACHE_KEY = 'tex_cache_v1'
const PAUSE_UNTIL_KEY = 'tex_pause_until'

const MAX_EXAMPLES = 5
// Asked for more than shown: near-duplicates ("Don't insist!" / "Don't insist.") are dropped.
const REQUEST_LIMIT = 15
// Words remembered, including "nothing found" - about 1KB each.
const MAX_CACHE_ENTRIES = 500
// After an error (e.g. "too many requests") Tatoeba is left alone for a while.
const PAUSE_AFTER_ERROR_MS = 10 * 60 * 1000
// Tatoeba usually answers in 2-5 seconds; the skeleton in the tab stays at most this long.
const REQUEST_TIMEOUT_MS = 8000

// Translation language setting (Google codes) -> Tatoeba's language codes.
// A language missing here simply gets no examples.
const TATOEBA_LANGUAGES: Record<string, string> = {
  'af': 'afr',
  'sq': 'sqi',
  'am': 'amh',
  'ar': 'ara',
  'hy': 'hye',
  'az': 'aze',
  'eu': 'eus',
  'be': 'bel',
  'bn': 'ben',
  'bs': 'bos',
  'bg': 'bul',
  'ca': 'cat',
  'zh-CN': 'cmn',
  'zh-TW': 'cmn',
  'hr': 'hrv',
  'cs': 'ces',
  'da': 'dan',
  'nl': 'nld',
  'eo': 'epo',
  'et': 'est',
  'tl': 'tgl',
  'fi': 'fin',
  'fr': 'fra',
  'gl': 'glg',
  'ka': 'kat',
  'de': 'deu',
  'el': 'ell',
  'iw': 'heb',
  'hi': 'hin',
  'hu': 'hun',
  'is': 'isl',
  'id': 'ind',
  'ga': 'gle',
  'it': 'ita',
  'ja': 'jpn',
  'kk': 'kaz',
  'ko': 'kor',
  'la': 'lat',
  'lv': 'lvs',
  'lt': 'lit',
  'mk': 'mkd',
  'ms': 'zsm',
  'mr': 'mar',
  'mn': 'khk',
  'no': 'nob',
  'fa': 'pes',
  'pl': 'pol',
  'pt': 'por',
  'ro': 'ron',
  'ru': 'rus',
  'sr': 'srp',
  'sk': 'slk',
  'sl': 'slv',
  'es': 'spa',
  'sv': 'swe',
  'ta': 'tam',
  'tt': 'tat',
  'th': 'tha',
  'tr': 'tur',
  'uk': 'ukr',
  'ur': 'urd',
  'uz': 'uzb',
  'vi': 'vie',
  'cy': 'cym',
}

type CacheMap = Record<string, IWordExample[]>

const examples = ref<IWordExample[]>([])
const isLoading = ref(false)

function loadCache(): CacheMap {
  try {
    return JSON.parse(storage.get(CACHE_KEY) || '{}')
  }
  catch {
    return {}
  }
}

function saveCache(cache: CacheMap) {
  try {
    const keys = Object.keys(cache)
    keys.slice(0, keys.length - MAX_CACHE_ENTRIES).forEach(k => delete cache[k])
    storage.set(CACHE_KEY, JSON.stringify(cache))
  }
  catch {
    // ignore quota errors
  }
}

export function isWordExamplesEnabled() {
  return storage.get(WORD_EXAMPLES_ENABLED_STORAGE_KEY) !== 'false'
}

// "Don't insist!" and "Don't insist." count as the same sentence.
function normalize(text: string) {
  return text.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim()
}

async function fetchExamples(word: string, lang: string): Promise<IWordExample[]> {
  const params = new URLSearchParams({
    'lang': 'eng',
    'q': `=${word}`,
    'trans:lang': lang,
    'sort': 'words',
    'limit': String(REQUEST_LIMIT),
  })
  const response = await fetchWithTimeout(`https://api.tatoeba.org/unstable/sentences?${params}`, REQUEST_TIMEOUT_MS)
  if (!response.ok)
    throw new Error(`Tatoeba responded ${response.status}`)

  const { data } = await response.json()
  const seen = new Set<string>()
  const result: IWordExample[] = []

  for (const sentence of data ?? []) {
    const translation = sentence.translations?.find((t: any) => t.lang === lang && !t.is_unapproved)
    const key = normalize(sentence.text)
    if (sentence.is_unapproved || !translation || seen.has(key))
      continue
    seen.add(key)
    result.push({ text: sentence.text, translation: translation.text })
  }

  // Sorted shortest first; one- and two-word replies ("I insist!") go last.
  const isShort = (e: IWordExample) => e.text.split(/\s+/).length < 3
  return [...result.filter(e => !isShort(e)), ...result.filter(isShort)].slice(0, MAX_EXAMPLES)
}

// The word asked for last: a slower answer for an earlier word must not replace its examples.
let latestWord = ''

async function getExamples(word: string) {
  latestWord = word
  examples.value = []
  isLoading.value = false

  const lang = TATOEBA_LANGUAGES[useGoogleTranslate().targetLanguage.code]
  // The user's own examples are shown instead (see Word.vue) - Tatoeba isn't asked at all.
  if (!isWordExamplesEnabled() || !lang || useUserExamples().hasUserExamples(word))
    return

  const cacheKey = `${lang}::${word.trim().toLowerCase()}`
  const cached = loadCache()[cacheKey]
  if (cached) {
    examples.value = cached
    return
  }

  if (Date.now() < Number(storage.get(PAUSE_UNTIL_KEY) || 0))
    return

  try {
    isLoading.value = true
    const found = await fetchExamples(word, lang)
    const cache = loadCache()
    cache[cacheKey] = found
    saveCache(cache)
    if (word === latestWord)
      examples.value = found
  }
  catch (e) {
    // Not cached, so the word is tried again next time. A slow answer is just skipped;
    // an error from the server pauses all requests.
    if (!isTimeoutError(e))
      storage.set(PAUSE_UNTIL_KEY, String(Date.now() + PAUSE_AFTER_ERROR_MS))
  }
  finally {
    if (word === latestWord)
      isLoading.value = false
  }
}

export default function useWordExamples() {
  return {
    examples,
    isLoading,
    getExamples,
  }
}
