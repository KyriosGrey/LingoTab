import browser from 'webextension-polyfill'

interface NotificationSettings {
  enabled: boolean
  frequency: number // in milliseconds
}

interface WordState {
  word: string
  showingTranslation: boolean
}

let currentTimeout: number | null = null
let currentWordState: WordState | null = null
const NOTIFICATION_ID = 'lingotab-word-notification'

// Frequency options (in milliseconds)
const FREQUENCIES = {
  '30min': 30 * 60 * 1000,
  '1h': 60 * 60 * 1000,
  '2h': 2 * 60 * 60 * 1000,
  '3h': 3 * 60 * 60 * 1000,
  '6h': 6 * 60 * 60 * 1000,
}

function updateStatus(message: string) {
  const statusEl = document.getElementById('status')
  if (statusEl) {
    statusEl.textContent = message
  }
  // Use console.warn instead of console.log for linter
  if (__DEV__) {
    // eslint-disable-next-line no-console
    console.log('[Runner]', message)
  }
}

async function getSettings(): Promise<NotificationSettings> {
  try {
    const result = await browser.storage.local.get('nwt_notification_settings')
    const settings = result.nwt_notification_settings as NotificationSettings | undefined
    return settings || { enabled: false, frequency: FREQUENCIES['1h'] }
  }
  catch (error) {
    console.error('[Runner] Failed to get settings:', error)
    return { enabled: false, frequency: FREQUENCIES['1h'] }
  }
}

async function getLearnedWords(): Promise<string[]> {
  try {
    const result = await browser.storage.local.get('nwt_learned_words_mirror_v1')
    const words = result.nwt_learned_words_mirror_v1 as string[] | undefined
    return words || []
  }
  catch (error) {
    console.error('[Runner] Failed to get learned words:', error)
    return []
  }
}

async function getTargetLanguage(): Promise<string> {
  try {
    const result = await browser.storage.local.get('nwt_gttl_mirror_v1')
    const lang = result.nwt_gttl_mirror_v1 as string | undefined
    return lang || 'ru'
  }
  catch (error) {
    console.error('[Runner] Failed to get target language:', error)
    return 'ru'
  }
}

async function translateWord(word: string, targetLang: string): Promise<string> {
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(word)}`

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 8000)

    const response = await fetch(url, { signal: controller.signal })
    clearTimeout(timeoutId)

    if (!response.ok) {
      throw new Error(`Translation failed: ${response.status}`)
    }

    const data = await response.json()
    // Google Translate API returns [[["translation", "original", ...]]]
    if (data && data[0] && data[0][0] && data[0][0][0]) {
      return data[0][0][0]
    }

    return word
  }
  catch (error) {
    console.error('[Runner] Translation failed:', error)
    return word
  }
}

async function showNotification(testMode = false) {
  const learnedWords = await getLearnedWords()

  if (learnedWords.length === 0) {
    updateStatus('No learned words available')
    return
  }

  // Pick random word
  const randomIndex = Math.floor(Math.random() * learnedWords.length)
  const word = learnedWords[randomIndex]

  // 50/50 chance to show word or translation
  const showTranslation = Math.random() < 0.5
  const targetLang = await getTargetLanguage()

  let displayText: string
  let title: string

  if (showTranslation) {
    displayText = await translateWord(word, targetLang)
    title = 'Learned Word (Translation)'
  }
  else {
    displayText = word
    title = 'Learned Word'
  }

  // Save current state for toggle
  currentWordState = { word, showingTranslation: showTranslation }

  const notificationOptions: browser.Notifications.CreateNotificationOptions = {
    type: 'basic',
    iconUrl: browser.runtime.getURL('assets/128.png'),
    title,
    message: displayText,
  }

  // Note: Firefox MV3 doesn't support notification buttons like Chrome does
  // We'll need to use notification clicks to open the new tab
  // For now, just show the notification without buttons

  try {
    await browser.notifications.create(NOTIFICATION_ID, notificationOptions)
    updateStatus(`Notification shown: ${displayText} ${testMode ? '(test mode)' : ''}`)
  }
  catch (error) {
    console.error('[Runner] Failed to create notification:', error)
    updateStatus('Failed to create notification')
  }
}

async function handleNotificationButtonClick(notificationId: string, buttonIndex: number) {
  if (notificationId !== NOTIFICATION_ID || !currentWordState) {
    return
  }

  if (buttonIndex === 0) {
    // Toggle button
    const targetLang = await getTargetLanguage()
    const newShowTranslation = !currentWordState.showingTranslation
    currentWordState.showingTranslation = newShowTranslation

    let displayText: string
    let title: string

    if (newShowTranslation) {
      displayText = await translateWord(currentWordState.word, targetLang)
      title = 'Learned Word (Translation)'
    }
    else {
      displayText = currentWordState.word
      title = 'Learned Word'
    }

    const notificationOptions: browser.Notifications.CreateNotificationOptions = {
      type: 'basic',
      iconUrl: browser.runtime.getURL('assets/128.png'),
      title,
      message: displayText,
    }

    await browser.notifications.create(NOTIFICATION_ID, notificationOptions)
    updateStatus(`Toggled to: ${displayText}`)
  }
  else if (buttonIndex === 1) {
    // Learn again button
    const newTabUrl = browser.runtime.getURL(`dist/newTab/index.html?word=${encodeURIComponent(currentWordState.word)}`)
    await browser.tabs.create({ url: newTabUrl })
    updateStatus(`Opened new tab for word: ${currentWordState.word}`)
  }
}

// Handle notification clicks - open new tab with the word
async function handleNotificationClick(notificationId: string) {
  if (notificationId !== NOTIFICATION_ID || !currentWordState) {
    return
  }

  // When user clicks the notification, open new tab with that word
  const newTabUrl = browser.runtime.getURL(`dist/newTab/index.html?word=${encodeURIComponent(currentWordState.word)}`)
  await browser.tabs.create({ url: newTabUrl })
  updateStatus(`Opened new tab for word: ${currentWordState.word}`)
}

function scheduleNextNotification() {
  // Clear any existing timeout
  if (currentTimeout) {
    clearTimeout(currentTimeout)
  }

  getSettings().then((settings) => {
    if (!settings.enabled) {
      updateStatus('Notifications disabled')
      return
    }

    updateStatus(`Next notification in ${settings.frequency / 1000 / 60} minutes`)

    currentTimeout = setTimeout(() => {
      showNotification()
      scheduleNextNotification() // Schedule the next one
    }, settings.frequency) as unknown as number
  })
}

// Listen for storage changes
browser.storage.onChanged.addListener((changes, areaName) => {
  if (areaName === 'local' && changes.nwt_notification_settings) {
    updateStatus('Settings changed, rescheduling...')
    scheduleNextNotification()
  }
})

// Listen for test notification messages
browser.runtime.onMessage.addListener((message: any) => {
  if (message.action === 'test-notification') {
    updateStatus('Test notification requested')
    showNotification(true)
  }
})

// Listen for notification button clicks (Chrome only)
if (browser.notifications.onButtonClicked) {
  browser.notifications.onButtonClicked.addListener(handleNotificationButtonClick)
}

// Listen for notification clicks (Firefox and Chrome)
browser.notifications.onClicked.addListener(handleNotificationClick)

// Initialize
updateStatus('Runner initialized')
scheduleNextNotification()
