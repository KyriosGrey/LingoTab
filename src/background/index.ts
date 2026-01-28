import browser from 'webextension-polyfill'

// In-memory map: notificationId -> { word, translation?, showingTranslation }
const notificationData = new Map<string, { word: string, translation?: string, showingTranslation: boolean }>()

const ALARM_NAME = 'learnedWordReminder'
const MIRROR_LEARNED_KEY = 'nwt_learned_words_mirror_v1'
const MIRROR_GTTL_KEY = 'nwt_gttl_mirror_v1'
const SETTINGS_KEY = 'notificationSettings'

interface NotificationSettings {
  enabled: boolean
  frequency: number // periodInMinutes: 30, 60, 120, 180, 360
}

// Get notification settings from storage
async function getSettings(): Promise<NotificationSettings> {
  const result = await browser.storage.local.get(SETTINGS_KEY)
  const settings = result[SETTINGS_KEY]
  if (settings && typeof settings === 'object' && 'enabled' in settings && 'frequency' in settings) {
    return settings as NotificationSettings
  }
  return { enabled: false, frequency: 60 }
}

// Schedule or clear alarm based on settings
async function rescheduleAlarm() {
  const settings = await getSettings()
  
  // Clear existing alarm
  await browser.alarms.clear(ALARM_NAME)
  
  if (settings.enabled) {
    // Create new alarm with specified frequency
    await browser.alarms.create(ALARM_NAME, {
      periodInMinutes: settings.frequency,
      delayInMinutes: settings.frequency,
    })
    console.log(`Alarm scheduled with ${settings.frequency} minutes frequency`)
  } else {
    console.log('Alarm cleared (notifications disabled)')
  }
}

// Get a random learned word from mirrored storage
async function getRandomLearnedWord(): Promise<string | null> {
  const result = await browser.storage.local.get(MIRROR_LEARNED_KEY)
  const learnedWords = result[MIRROR_LEARNED_KEY]
  if (!Array.isArray(learnedWords) || learnedWords.length === 0) {
    return null
  }
  
  const randomIndex = Math.floor(Math.random() * learnedWords.length)
  return learnedWords[randomIndex]
}

// Get Google Translate target language from mirrored storage
async function getTargetLanguage(): Promise<string> {
  const result = await browser.storage.local.get(MIRROR_GTTL_KEY)
  const lang = result[MIRROR_GTTL_KEY]
  return typeof lang === 'string' ? lang : 'ru'
}

// Translate a word using Google Translate API
async function translateWord(word: string, targetLang: string): Promise<string | null> {
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(word)}`
    const response = await fetch(url)
    const data = await response.json()
    
    if (data && data[0] && data[0][0] && data[0][0][0]) {
      return data[0][0][0]
    }
  } catch (error) {
    console.error('Translation failed:', error)
  }
  
  return null
}

// Show a notification with a learned word
async function showNotification(isTest = false) {
  const word = await getRandomLearnedWord()
  
  if (!word) {
    console.log('No learned words to show notification')
    return
  }
  
  const targetLang = await getTargetLanguage()
  const translation = await translateWord(word, targetLang)
  
  // 50/50 probability: show word or translation
  const showingTranslation = Math.random() < 0.5
  
  const notificationId = isTest ? `test-${Date.now()}` : `reminder-${Date.now()}`
  
  // Store data for this notification
  notificationData.set(notificationId, {
    word,
    translation: translation || undefined,
    showingTranslation,
  })
  
  // Create notification
  const title = showingTranslation && translation
    ? `Translation: ${translation}`
    : `Word: ${word}`
  
  const message = showingTranslation && translation
    ? `What's the English word?`
    : `What's the translation?`
  
  await browser.notifications.create(notificationId, {
    type: 'basic',
    iconUrl: browser.runtime.getURL('assets/128.png'),
    title,
    message,
  } as any)
}

// Handle notification button clicks (Firefox supports this differently)
if (browser.notifications.onButtonClicked) {
  browser.notifications.onButtonClicked.addListener(async (notificationId, buttonIndex) => {
    const data = notificationData.get(notificationId)
    
    if (!data) {
      console.warn('Notification data not found for:', notificationId)
      return
    }
    
    if (buttonIndex === 0) {
      // Show translation button
      const { word, translation, showingTranslation } = data
      
      // Toggle what we're showing
      const newShowingTranslation = !showingTranslation
      notificationData.set(notificationId, { ...data, showingTranslation: newShowingTranslation })
      
      const title = newShowingTranslation && translation
        ? `Translation: ${translation}`
        : `Word: ${word}`
      
      const messageText = newShowingTranslation && translation
        ? `English word: ${word}`
        : translation ? `Translation: ${translation}` : 'Translation not available'
      
      // Clear and recreate notification (Firefox doesn't support update)
      await browser.notifications.clear(notificationId)
      await browser.notifications.create(notificationId, {
        type: 'basic',
        iconUrl: browser.runtime.getURL('assets/128.png'),
        title,
        message: messageText,
      } as any)
    } else if (buttonIndex === 1) {
      // Learn again button - open new tab with the word
      const { word } = data
      await browser.tabs.create({
        url: browser.runtime.getURL(`dist/newTab/index.html?word=${encodeURIComponent(word)}`),
      })
      
      // Clear notification
      await browser.notifications.clear(notificationId)
      notificationData.delete(notificationId)
    }
  })
}

// Handle notification clicks - open new tab with the word
browser.notifications.onClicked.addListener(async (notificationId) => {
  const data = notificationData.get(notificationId)
  
  if (data) {
    const { word } = data
    await browser.tabs.create({
      url: browser.runtime.getURL(`dist/newTab/index.html?word=${encodeURIComponent(word)}`),
    })
    
    // Clear notification
    await browser.notifications.clear(notificationId)
    notificationData.delete(notificationId)
  }
})

// Clean up notification data when notification is closed
browser.notifications.onClosed.addListener((notificationId) => {
  notificationData.delete(notificationId)
})

// Handle alarm triggers
browser.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name === ALARM_NAME) {
    const settings = await getSettings()
    if (settings.enabled) {
      await showNotification(false)
    }
  }
})

// Handle messages from options page
browser.runtime.onMessage.addListener(async (message: any) => {
  if (message.type === 'updateNotificationSettings') {
    await rescheduleAlarm()
    return { success: true }
  }
  
  if (message.type === 'testNotification') {
    await showNotification(true)
    return { success: true }
  }
  
  if (message.type === 'syncLearnedWords') {
    // Mirroring is triggered from content/options, just acknowledge
    return { success: true }
  }
  
  if (message.type === 'syncGttl') {
    // Mirroring is triggered from options, just acknowledge
    return { success: true }
  }
})

// Initialize on install/update
browser.runtime.onInstalled.addListener(async () => {
  console.log('Extension installed/updated, scheduling alarms')
  await rescheduleAlarm()
})

// Initialize on startup
browser.runtime.onStartup.addListener(async () => {
  console.log('Extension started, scheduling alarms')
  await rescheduleAlarm()
})

console.log('Background service worker initialized')
