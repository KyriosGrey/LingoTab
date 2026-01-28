import type { GoogleTranslateCodeLang } from '@/data/googleTranslateLanguages'

import GOOGLE_TRANSLATE_LANGUAGES from '@/data/googleTranslateLanguages'
import storage from '@/modules/localStorage'
import { syncTargetLanguage } from '@/utils/storage-sync'

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

export default function useGoogleTranslate() {
  const targetLanguage = getTargetLanguageFromStorage()

  function storeTargetLanguageCode(code: GoogleTranslateCodeLang['code']) {
    storage.set(GOOGLE_TRANSLATE_TARGET_LANGUAGE_CODE_STORAGE_KEY, code)
    
    // Mirror target language to browser.storage.local for background access
    syncTargetLanguage(code).catch(err => {
      console.error('Failed to sync target language:', err)
    })
  }

  return {
    storeTargetLanguageCode,
    targetLanguage,
  }
}
