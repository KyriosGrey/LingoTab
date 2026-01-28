// Storage sync utilities for mirroring localStorage to browser.storage.local
import browser from 'webextension-polyfill'

export const STORAGE_KEYS = {
  LEARNED_WORDS: 'nwt_learned_words_mirror_v1',
  TARGET_LANG: 'nwt_gttl_mirror_v1',
  SETTINGS: 'nwt_notification_settings',
}

/**
 * Sync learned words from localStorage to browser.storage.local
 * @param words - Array of learned words
 */
export async function syncLearnedWords(words: string[]) {
  try {
    await browser.storage.local.set({
      [STORAGE_KEYS.LEARNED_WORDS]: words,
    })
    console.log('Synced learned words to storage:', words.length, 'words')
  }
  catch (error) {
    console.error('Failed to sync learned words:', error)
  }
}

/**
 * Sync target language from localStorage to browser.storage.local
 * @param langCode - Target language code
 */
export async function syncTargetLanguage(langCode: string) {
  try {
    await browser.storage.local.set({
      [STORAGE_KEYS.TARGET_LANG]: langCode,
    })
    console.log('Synced target language to storage:', langCode)
  }
  catch (error) {
    console.error('Failed to sync target language:', error)
  }
}

/**
 * Get notification settings from storage
 */
export async function getNotificationSettings() {
  try {
    const result = await browser.storage.local.get(STORAGE_KEYS.SETTINGS)
    return result[STORAGE_KEYS.SETTINGS] || { enabled: false, intervalMinutes: 60 }
  }
  catch (error) {
    console.error('Failed to get notification settings:', error)
    return { enabled: false, intervalMinutes: 60 }
  }
}

/**
 * Set notification settings
 */
export async function setNotificationSettings(settings: { enabled: boolean, intervalMinutes: number }) {
  try {
    await browser.storage.local.set({
      [STORAGE_KEYS.SETTINGS]: settings,
    })
    console.log('Saved notification settings:', settings)
  }
  catch (error) {
    console.error('Failed to save notification settings:', error)
  }
}

/**
 * Initialize mirrors from localStorage
 * This should be called when enabling notifications for the first time
 */
export async function initializeMirrors() {
  try {
    // Sync learned words
    const lwRaw = localStorage.getItem('lw')
    if (lwRaw) {
      const words = lwRaw.split(',').filter(Boolean)
      await syncLearnedWords(words)
    }

    // Sync target language
    const gttl = localStorage.getItem('gttl')
    if (gttl) {
      await syncTargetLanguage(gttl)
    }

    console.log('Initialized storage mirrors')
  }
  catch (error) {
    console.error('Failed to initialize mirrors:', error)
  }
}
