import { fetchWithTimeout } from './words/providers/fetchWithTimeout'

const TRANSLATIONS_API_BASE = 'https://api.wiktapi.dev/v1/en/word/'

// Wiktionary's own translation-table codes occasionally differ from the codes in our
// Google Translate language list, which mixes in some of Google's older codes.
const LANGUAGE_CODE_ALIASES: Record<string, string> = {
  'zh-CN': 'zh',
  'zh-TW': 'zh',
  'iw': 'he',
  'jw': 'jv',
}

interface WiktApiTranslation {
  code: string
  word: string
}

interface WiktApiTranslationGroup {
  lang_code: string
  translations: WiktApiTranslation[]
}

// Last-resort fallback for translating just the headword itself, used only when Google
// Translate is unreachable (e.g. rate-limited). Covers only single words, since
// Wiktionary has translation tables for headwords, not for arbitrary sentences
// (definitions, examples, grammar cards) - callers must not use this for anything else.
//
// Wiktionary groups translations by sense in whatever order the page lists them, not by
// how common a translation is, so the first match found can occasionally be a secondary
// or rarer sense rather than the primary one. That's an acceptable trade-off here: the
// alternative is blank space, not a better translation.
export async function fetchWordTranslationFallback(word: string, tl: string): Promise<string | null> {
  const targetCode = LANGUAGE_CODE_ALIASES[tl] || tl

  try {
    const res = await fetchWithTimeout(`${TRANSLATIONS_API_BASE}${encodeURIComponent(word)}/translations`)
    if (!res.ok)
      return null

    const data = await res.json() as { translations?: WiktApiTranslationGroup[] }
    const englishGroups = (data.translations || []).filter(g => g.lang_code === 'en')

    for (const group of englishGroups) {
      const match = group.translations.find(t => t.code === targetCode)
      if (match)
        return match.word
    }

    return null
  }
  catch {
    return null
  }
}
