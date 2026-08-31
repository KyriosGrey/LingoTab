import useGoogleTranslate, { hasStoredTargetLanguage } from '@/composables/useGoogleTranslate'
import storage from '@/modules/localStorage'
import { ref } from 'vue'

const UI_LANGUAGE_STORAGE_KEY = 'uil'

/** What the interface falls back to until the user expresses any preference. */
const DEFAULT_LANGUAGE = 'en'

/** Stored instead of a language code when the interface follows the translation language. */
export const AUTO_LANGUAGE = 'auto'

/**
 * Which language the interface itself is shown in.
 *
 * Everything that renders text reads this through `t()`, and nothing reads the
 * translation-language setting directly — so what the interface follows can be
 * changed here alone, without touching a single call site.
 *
 * It is a `ref` so switching language repaints the page instead of waiting for a
 * reload: `t()` reads it while rendering, so every template using `t()` re-renders.
 *
 * Resolved synchronously from localStorage, before the first paint — which is why
 * a new tab opens straight in the right language rather than showing English first.
 */
export const uiLanguage = ref(resolveUiLanguage())

function resolveUiLanguage(): string {
  const preference = storage.get(UI_LANGUAGE_STORAGE_KEY)

  if (preference && preference !== AUTO_LANGUAGE)
    return preference

  // "Auto" (and anyone who has never touched the setting) follows the language
  // chosen in "Translation language" — but only once one has actually been chosen.
  // Its default is Russian, so without this check every new user, anywhere in the
  // world, would open LingoTab to a Russian interface.
  if (!hasStoredTargetLanguage())
    return DEFAULT_LANGUAGE

  return useGoogleTranslate().targetLanguage.code
}

/** What the "Interface language" dropdown should show — a language code, or "auto". */
export function getUiLanguagePreference(): string {
  return storage.get(UI_LANGUAGE_STORAGE_KEY) || AUTO_LANGUAGE
}

export function setUiLanguagePreference(preference: string) {
  storage.set(UI_LANGUAGE_STORAGE_KEY, preference)
  uiLanguage.value = resolveUiLanguage()
}

/**
 * Call after the translation language changes: on "Auto" the interface follows it,
 * and without this the page around the dropdown would keep its old language until
 * the next reload, which reads as a bug.
 */
export function refreshUiLanguage() {
  uiLanguage.value = resolveUiLanguage()
}
