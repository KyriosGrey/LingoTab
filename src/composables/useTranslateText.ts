// src/composables/useTranslateText.ts
import useGoogleTranslate from '@/composables/useGoogleTranslate'
import storage from '@/modules/localStorage'

type CacheMap = Record<string, string>
const CACHE_KEY = 'gtr_cache_v1'

// Грубая защита от переполнения кэша (~2–4 МБ)
const MAX_CACHE_ENTRIES = 1500

function loadCache(): CacheMap {
  try {
    const raw = storage.get(CACHE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
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
  } catch {
    // ignore quota errors
  }
}

function key(text: string, sl: string, tl: string) {
  return `${sl}::${tl}::${text.trim().toLowerCase()}`
}

// Неофициальный, но часто работающий JSON-эндпоинт Google Translate.
// Возвращает структуру типа [[["перевод","original",...],...],...]
async function fetchTranslate(text: string, sl: string, tl: string): Promise<string> {
  const q = encodeURIComponent(text)
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sl}&tl=${tl}&dt=t&q=${q}`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Translate HTTP ${res.status}`)
  const data = await res.json() as any
  const chunks: string[] = (data?.[0] || [])
    .map((seg: any) => seg?.[0])
    .filter(Boolean)
  return chunks.join('').trim()
}

export default function useTranslateText() {
  const { targetLanguage } = useGoogleTranslate()
  const tl = (targetLanguage?.code || 'ru').toLowerCase()

  async function translate(text: string, sl = 'en', tlOverride?: string): Promise<string> {
    const target = (tlOverride || tl).toLowerCase()
    const k = key(text, sl, target)
    const cache = loadCache()
    if (cache[k]) return cache[k]

    // Короткие строки переводятся очень быстро; длинным даём таймаут
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 8000)

    try {
      const translated = await fetchTranslate(text, sl, target)
      cache[k] = translated
      saveCache(cache)
      return translated
    } finally {
      clearTimeout(timer)
    }
  }

  return { translate }
}
