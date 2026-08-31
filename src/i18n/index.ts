import type { MessageKey } from './en'
import { de } from './de'
import { en } from './en'
import { es } from './es'
import { fr } from './fr'
import { hi } from './hi'
import { ja } from './ja'
import { ko } from './ko'
import { pl } from './pl'
import { pt } from './pt'
import { ru } from './ru'
import { uk } from './uk'
import { uiLanguage } from './useUiLanguage'
import { zhCN } from './zh-CN'

/**
 * Translations, keyed by the language code used by the "Translation language"
 * setting (see src/data/googleTranslateLanguages.ts).
 *
 * Imported statically, on purpose — the opposite call from the built-in sentence
 * packs, which are lazy. Those weigh ~800KB; all interface languages together are
 * a few dozen KB, and loading them asynchronously would paint the English text
 * first and visibly swap it a moment later.
 *
 * `Partial` is the point: a language may translate as few keys as it likes, and
 * whatever is missing falls back to English key by key. TypeScript still rejects a
 * key that does not exist in `en`, so a typo can't silently become a dead entry.
 */
const translations: Record<string, Partial<Record<MessageKey, string>>> = {
  // Languages are added here one at a time: ru, uk, ja, zh-CN, hi, fr, de, pl, es.
  // Keys must match the codes in googleTranslateLanguages.ts — hence 'zh-CN',
  // which is why every key here is quoted.
  'ru': ru,
  'uk': uk,
  'pl': pl,
  'de': de,
  'ja': ja,
  'fr': fr,
  'es': es,
  'zh-CN': zhCN,
  'hi': hi,
  'pt': pt,
  'ko': ko,
}

/**
 * Language codes the interface is actually available in.
 *
 * The "Interface language" dropdown builds itself from this, so adding a language
 * above is the only step needed — no second list to keep in sync, and the dropdown
 * can never offer a language that would silently fall back to English.
 */
export const translatedLanguageCodes = Object.keys(translations)

/**
 * Look up an interface string in the current language.
 *
 * Call it from templates. It reads `uiLanguage` while rendering, which is what
 * makes the whole interface re-render when the language changes.
 */
export function t(key: MessageKey): string {
  return translations[uiLanguage.value]?.[key] ?? en[key]
}
