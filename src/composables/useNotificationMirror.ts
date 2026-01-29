import browser from 'webextension-polyfill'
import storage from '@/modules/localStorage'

const MIRROR_KEYS = {
  learnedWords: 'nwt_learned_words_mirror_v1',
  targetLanguage: 'nwt_gttl_mirror_v1',
  notificationSettings: 'nwt_notification_settings',
}

const LOCALSTORAGE_KEYS = {
  learnedWords: 'lw',
  targetLanguage: 'gttl',
}

export async function mirrorLearnedWords() {
  try {
    const learnedWordsStr = storage.get(LOCALSTORAGE_KEYS.learnedWords)
    const learnedWords = learnedWordsStr ? learnedWordsStr.split(',').filter(Boolean) : []
    await browser.storage.local.set({ [MIRROR_KEYS.learnedWords]: learnedWords })
    console.log('[Mirror] Learned words mirrored:', learnedWords.length)
  }
  catch (error) {
    console.error('[Mirror] Failed to mirror learned words:', error)
  }
}

export async function mirrorTargetLanguage() {
  try {
    const targetLang = storage.get(LOCALSTORAGE_KEYS.targetLanguage) || 'ru'
    await browser.storage.local.set({ [MIRROR_KEYS.targetLanguage]: targetLang })
    console.log('[Mirror] Target language mirrored:', targetLang)
  }
  catch (error) {
    console.error('[Mirror] Failed to mirror target language:', error)
  }
}

export async function getNotificationSettings() {
  try {
    const result = await browser.storage.local.get(MIRROR_KEYS.notificationSettings)
    return result[MIRROR_KEYS.notificationSettings] || { enabled: false, frequency: 3600000 }
  }
  catch (error) {
    console.error('[Mirror] Failed to get notification settings:', error)
    return { enabled: false, frequency: 3600000 }
  }
}

export async function setNotificationSettings(settings: { enabled: boolean, frequency: number }) {
  try {
    await browser.storage.local.set({ [MIRROR_KEYS.notificationSettings]: settings })
    console.log('[Mirror] Notification settings saved:', settings)
  }
  catch (error) {
    console.error('[Mirror] Failed to save notification settings:', error)
  }
}

export async function initializeMirrors() {
  await mirrorLearnedWords()
  await mirrorTargetLanguage()
  console.log('[Mirror] All mirrors initialized')
}

export async function ensureRunnerPageOpen() {
  try {
    const runnerUrl = browser.runtime.getURL('dist/runner/index.html')
    const tabs = await browser.tabs.query({})

    // Check if runner page is already open
    const runnerTab = tabs.find(tab => tab.url === runnerUrl)

    if (!runnerTab) {
      // Open runner page in background
      await browser.tabs.create({ url: runnerUrl, active: false })
      console.log('[Mirror] Runner page opened')
    }
    else {
      console.log('[Mirror] Runner page already open')
    }
  }
  catch (error) {
    console.error('[Mirror] Failed to ensure runner page:', error)
  }
}

export function setupMirrorWatchers() {
  // Watch for localStorage changes and mirror them
  // This needs to be called from a component that has access to localStorage
  // We'll add event listeners in the options page

  // For now, we'll rely on manual mirroring when settings change
  console.log('[Mirror] Mirror watchers would be set up here')
}
