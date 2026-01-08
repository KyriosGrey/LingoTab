// Safe pack validator + normalizer
export type Sentence = {
  id: string
  text: string
  translation: string
  tense?: string
  topic?: string
  lengthWords?: number
  [k: string]: any
}

export type Pack = {
  count: number
  settings?: any
  sentences: Sentence[]
}

/** Простейшая функция подсчёта слов в строке */
function countWords(s: string): number {
  if (!s) return 0
  return s.trim().split(/\s+/).filter(Boolean).length
}

/**
 * Приемлемый id:
 * - простые числовые id "1","2",... (до 6 цифр)
 * - UUID v4
 * - короткие альфанумерные строки (до 12 символов)
 */
function isAcceptableId(id: string): boolean {
  if (!id || typeof id !== 'string') return false
  const uuidV4 = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
  if (uuidV4.test(id)) return true
  if (/^[0-9]{1,6}$/.test(id)) return true
  if (/^[a-zA-Z0-9_-]{1,12}$/.test(id)) return true
  return false
}

/** Нормализует и валидирует пакет.
 *  Возвращает нормализованный pack или бросает Error с сообщением.
 *  expectedSettings.lengthRange может быть передан, чтобы исправить settings.lengthWords при ошибке модели.
 */
export function validateAndNormalizePack(raw: any, expectedSettings?: { lengthRange?: [number, number] | null }): Pack {
  if (!raw || typeof raw !== 'object') throw new Error('Invalid pack: not an object')
  if (!Array.isArray(raw.sentences)) throw new Error('Invalid pack: sentences missing or not an array')

  const sentences: Sentence[] = raw.sentences.map((s: any, idx: number) => {
    if (!s || typeof s !== 'object') throw new Error(`Invalid sentence at index ${idx}`)

    // Text & translation
    const text = (s.text ?? '').toString().trim()
    const translation = (s.translation ?? '').toString().trim()
    if (!text) throw new Error(`Empty text for sentence at index ${idx}`)

    // id: accept if looks acceptable, otherwise generate local id
    let id = typeof s.id === 'string' && s.id.trim() ? s.id.trim() : ''
    if (!isAcceptableId(id)) {
      try { id = (globalThis as any).crypto?.randomUUID?.() ?? `local-${Date.now()}-${idx}` } catch { id = `local-${Date.now()}-${idx}` }
    }

    // lengthWords: ALWAYS compute from text (model-provided value ignored)
    const lengthWords = countWords(text)

    // canonicalize expected fields; structure is intentionally ignored/removed
    const tense = (s.tense ?? '').toString().trim()
    const topic = (s.topic ?? '').toString().trim()

    return {
      ...s,
      id,
      text,
      translation,
      tense,
      topic,
      lengthWords
    } as Sentence
  })

  // count: if provided and consistent, keep; else set to sentences.length
  const count = Number.isInteger(Number(raw.count)) ? Number(raw.count) : sentences.length

  // settings: ensure lengthWords is [min,max] using expectedSettings if needed
  const settings = raw.settings && typeof raw.settings === 'object' ? { ...raw.settings } : {}
  if (!Array.isArray(settings.lengthWords) || settings.lengthWords.length !== 2 || !settings.lengthWords.every((n: any) => Number.isFinite(Number(n)))) {
    if (expectedSettings?.lengthRange && Array.isArray(expectedSettings.lengthRange) && expectedSettings.lengthRange.length === 2) {
      settings.lengthWords = [Number(expectedSettings.lengthRange[0]), Number(expectedSettings.lengthRange[1])]
    } else {
      const lens = sentences.map((s: Sentence) => s.lengthWords ?? 0)
      const min = lens.length ? Math.min(...lens) : 0
      const max = lens.length ? Math.max(...lens) : 0
      settings.lengthWords = [min, max]
    }
  } else {
    settings.lengthWords = settings.lengthWords.map((n: any) => Math.round(Number(n)))
  }

  return { count, settings, sentences }
}