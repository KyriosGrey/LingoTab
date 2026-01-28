// Background service worker for New Word Tab
import browser from 'webextension-polyfill'

const ALARM_NAME = 'nwt-learned-words-notification'
const NOTIFICATION_ID = 'nwt-learned-word'

// In-memory map for tracking notification states (word vs translation display)
const notificationStates = new Map<string, {
  word: string
  translation: string
  showingTranslation: boolean
}>()

// Storage keys
const STORAGE_KEYS = {
  LEARNED_WORDS: 'nwt_learned_words_mirror_v1',
  TARGET_LANG: 'nwt_gttl_mirror_v1',
  SETTINGS: 'nwt_notification_settings',
}

interface NotificationSettings {
  enabled: boolean
  intervalMinutes: number
}

// Get notification settings from storage
async function getSettings(): Promise<NotificationSettings> {
  const result = await browser.storage.local.get(STORAGE_KEYS.SETTINGS)
  return result[STORAGE_KEYS.SETTINGS] || { enabled: false, intervalMinutes: 60 }
}

// Get learned words from mirror storage
async function getLearnedWords(): Promise<string[]> {
  const result = await browser.storage.local.get(STORAGE_KEYS.LEARNED_WORDS)
  return result[STORAGE_KEYS.LEARNED_WORDS] || []
}

// Get target language from mirror storage
async function getTargetLanguage(): Promise<string> {
  const result = await browser.storage.local.get(STORAGE_KEYS.TARGET_LANG)
  return result[STORAGE_KEYS.TARGET_LANG] || 'ru'
}

// Translate text using Google Translate API
async function translateText(text: string, targetLang: string): Promise<string> {
  try {
    const q = encodeURIComponent(text)
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${q}`
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Translation failed: ${response.status}`)
    }
    const data = await response.json()
    const chunks: string[] = (data?.[0] || [])
      .map((seg: any) => seg?.[0])
      .filter(Boolean)
    return chunks.join('').trim()
  }
  catch (error) {
    console.error('Translation error:', error)
    return text // Fallback to original text
  }
}

// Pick a random word from the learned words list
function getRandomWord(words: string[]): string | null {
  if (words.length === 0) return null
  return words[Math.floor(Math.random() * words.length)]
}

// Create and show notification
async function showLearnedWordNotification() {
  const learnedWords = await getLearnedWords()
  
  if (learnedWords.length === 0) {
    console.log('No learned words to show notification for')
    return
  }

  const word = getRandomWord(learnedWords)
  if (!word) return

  const targetLang = await getTargetLanguage()
  const translation = await translateText(word, targetLang)
  
  // 50/50 chance to show word or translation
  const showTranslation = Math.random() < 0.5
  
  // Store state for button handling
  notificationStates.set(NOTIFICATION_ID, {
    word,
    translation,
    showingTranslation,
  })

  const title = showTranslation ? translation : word
  const message = showTranslation 
    ? 'Click "Show word" to reveal the original word' 
    : 'Click "Show translation" to see the translation'

  await browser.notifications.create(NOTIFICATION_ID, {
    type: 'basic',
    iconUrl: browser.runtime.getURL('assets/128.png'),
    title,
    message,
    buttons: [
      { title: showTranslation ? 'Show word' : 'Show translation' },
      { title: 'Learn again' },
    ],
    requireInteraction: false,
  })
}

// Handle notification button clicks
browser.notifications.onButtonClicked.addListener(async (notificationId, buttonIndex) => {
  if (notificationId !== NOTIFICATION_ID) return

  const state = notificationStates.get(notificationId)
  if (!state) return

  if (buttonIndex === 0) {
    // Toggle between word and translation
    state.showingTranslation = !state.showingTranslation
    
    const title = state.showingTranslation ? state.translation : state.word
    const message = state.showingTranslation
      ? 'Click "Show word" to reveal the original word'
      : 'Click "Show translation" to see the translation'

    await browser.notifications.update(notificationId, {
      type: 'basic',
      iconUrl: browser.runtime.getURL('assets/128.png'),
      title,
      message,
      buttons: [
        { title: state.showingTranslation ? 'Show word' : 'Show translation' },
        { title: 'Learn again' },
      ],
    })
  }
  else if (buttonIndex === 1) {
    // Open new tab with the word
    const url = browser.runtime.getURL(`dist/newTab/index.html?word=${encodeURIComponent(state.word)}`)
    await browser.tabs.create({ url })
    await browser.notifications.clear(notificationId)
  }
})

// Handle notification close
browser.notifications.onClosed.addListener((notificationId) => {
  if (notificationId === NOTIFICATION_ID) {
    notificationStates.delete(notificationId)
  }
})

// Handle alarm events
browser.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === ALARM_NAME) {
    showLearnedWordNotification()
  }
})

// Update alarm based on settings
async function updateAlarm() {
  const settings = await getSettings()
  
  // Clear existing alarm
  await browser.alarms.clear(ALARM_NAME)
  
  if (settings.enabled && settings.intervalMinutes > 0) {
    // Create new alarm with specified interval
    await browser.alarms.create(ALARM_NAME, {
      periodInMinutes: settings.intervalMinutes,
      delayInMinutes: settings.intervalMinutes,
    })
    console.log(`Alarm set for every ${settings.intervalMinutes} minutes`)
  }
  else {
    console.log('Alarm disabled')
  }
}

// Listen for storage changes to update alarm
browser.storage.onChanged.addListener((changes, areaName) => {
  if (areaName === 'local' && changes[STORAGE_KEYS.SETTINGS]) {
    updateAlarm()
  }
})

// Listen for messages from options page (e.g., test notification)
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'test-notification') {
    showLearnedWordNotification()
    sendResponse({ success: true })
  }
  return true // Keep message channel open for async response
})

// Initialize on install/update
browser.runtime.onInstalled.addListener(() => {
  console.log('New Word Tab background script installed')
  updateAlarm()
})

// Initialize alarm on startup
updateAlarm()

console.log('New Word Tab background script loaded')
