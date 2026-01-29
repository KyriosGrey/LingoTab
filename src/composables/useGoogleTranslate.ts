import type { GoogleTranslateCodeLang } from '@/data/googleTranslateLanguages'

import GOOGLE_TRANSLATE_LANGUAGES from '@/data/googleTranslateLanguages'
import storage from '@/modules/localStorage'

const GOOGLE_TRANSLATE_TARGET_LANGUAGE_CODE_STORAGE_KEY = 'gttl'

function getTargetLanguageFromStorage(
  fallbackTargetLanguage: GoogleTranslateCodeLang = {
    code: 'ru',
    lang: 'Russian',
  },
) {
  const localTargetLanguageCode = storage.get(
    GOOGLE_TRANSLATE_TARGET_LANGUAGE_CODE_STORAGE_KEY,
  )

  const targetLanguage = GOOGLE_TRANSLATE_LANGUAGES.find(
    ({ code }) => code === localTargetLanguageCode,
  )

  return targetLanguage || fallbackTargetLanguage
}

// Mirror to browser.storage
async function mirrorToBrowserStorage(code: string) {
  try {
    const browser = await import('webextension-polyfill')
    await browser.default.storage.local.set({ nwt_gttl_mirror_v1: code })
    console.log('[useGoogleTranslate] Mirrored to browser.storage:', code)
  }
  catch (error) {
    // Silently fail if webextension-polyfill is not available
    console.debug('[useGoogleTranslate] Mirror skipped:', error)
  }
}

export default function useGoogleTranslate() {
  const targetLanguage = getTargetLanguageFromStorage()

  function storeTargetLanguageCode(code: GoogleTranslateCodeLang['code']) {
    storage.set(GOOGLE_TRANSLATE_TARGET_LANGUAGE_CODE_STORAGE_KEY, code)
    mirrorToBrowserStorage(code)
  }

  return {
    storeTargetLanguageCode,
    targetLanguage,
  }
}
