import browser from 'webextension-polyfill'

const MIRROR_LEARNED_KEY = 'nwt_learned_words_mirror_v1'
const MIRROR_GTTL_KEY = 'nwt_gttl_mirror_v1'

/**
 * Mirror learned words from localStorage to browser.storage.local
 * Called whenever the learned words list changes
 */
export async function syncLearnedWordsMirror(learnedWords: string[]) {
  try {
    await browser.storage.local.set({
      [MIRROR_LEARNED_KEY]: learnedWords,
    })
  }
  catch (error) {
    console.error('Failed to sync learned words mirror:', error)
  }
}

/**
 * Mirror Google Translate target language from localStorage to browser.storage.local
 * Called whenever the target language changes
 */
export async function syncGttlMirror(targetLanguageCode: string) {
  try {
    await browser.storage.local.set({
      [MIRROR_GTTL_KEY]: targetLanguageCode,
    })
  }
  catch (error) {
    console.error('Failed to sync gttl mirror:', error)
  }
}
