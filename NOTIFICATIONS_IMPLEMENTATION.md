# Learned-Word Repetition Notifications Implementation

## Overview
This implementation adds periodic notification reminders to practice learned words in the New Word Tab Firefox MV3 extension.

## Features Implemented

### 1. Background Service Worker (`src/background/index.ts`)
- Manages alarms using `browser.alarms` API
- Selects random learned words from mirrored storage
- Translates words using Google Translate API
- Shows notifications with 50/50 probability (word or translation)
- Handles notification clicks to open new tab with pre-loaded word
- Initializes alarms on extension install/startup

### 2. Storage Mirroring (`src/utils/storageMirror.ts`)
- Mirrors `lw` (learned words) from localStorage to `nwt_learned_words_mirror_v1` in browser.storage.local
- Mirrors `gttl` (Google Translate target language) from localStorage to `nwt_gttl_mirror_v1`
- Event-driven updates when data changes

### 3. Notifications Options UI (`src/options/Sections/Notifications.vue`)
- Enable/disable notifications checkbox
- Frequency selector: 30m, 1h, 2h, 3h, 6h
- Test notification button
- Syncs mirrors when enabling notifications
- Sends messages to background worker to update alarms

### 4. Deep Linking (`src/components/Content/Content.vue`)
- Parses `?word=<word>` URL parameter
- Calls `searchWord()` instead of `getWord()` when word parameter is present
- Preserves existing smart mode behavior

### 5. Manifest Updates (`src/manifest.ts`)
- Added background service worker configuration
- Added permissions: notifications, alarms, tabs, storage
- Maintained existing host_permissions for translate.googleapis.com

### 6. Build Configuration (`vite.config.mts`)
- Added background entry point to rollupOptions
- Configured output to place background worker at `dist/background/index.js`

## File Structure
```
src/
├── background/
│   └── index.ts              # Background service worker
├── composables/
│   ├── useGoogleTranslate.ts # Updated to mirror gttl changes
│   ├── useSmartMix.ts        # Mix mode state management (created)
│   └── words/
│       └── useStoredList.ts  # Updated to mirror learned words changes
├── components/Content/
│   └── Content.vue           # Updated for ?word= deep linking
├── options/
│   ├── App.vue               # Updated to include Notifications section
│   └── Sections/
│       └── Notifications.vue # New notifications settings UI
├── utils/
│   └── storageMirror.ts      # Storage mirroring utilities
└── manifest.ts               # Updated with permissions and background worker

extension/
├── dist/
│   ├── background/
│   │   └── index.js          # Compiled background worker
│   ├── newTab/
│   │   └── index.html
│   └── options/
│       └── index.html
└── manifest.json             # Generated manifest with all permissions
```

## How It Works

### Mirroring Flow
1. User marks a word as learned → `useStoredList.ts` saves to localStorage → triggers `syncLearnedWordsMirror()`
2. User changes Google Translate language → `useGoogleTranslate.ts` saves to localStorage → triggers `syncGttlMirror()`
3. User enables notifications in Options → immediately syncs both mirrors

### Notification Flow
1. Background worker schedules alarm based on user-selected frequency
2. When alarm fires:
   - Gets random word from mirrored learned words
   - Translates word to target language
   - 50/50 chance: shows either word OR translation
   - Stores word/translation data in memory map
3. User clicks notification → opens new tab with `?word=<word>` parameter
4. Content.vue detects parameter → calls `searchWord()` with the word

### Deep Linking Flow
1. URL: `chrome-extension://xxx/dist/newTab/index.html?word=example`
2. Content.vue `onMounted()` → checks URLSearchParams for `word` parameter
3. If found → calls `searchWord(wordParam)` instead of `getWord()`
4. Displays the specific word with definitions

## Testing Instructions

### Manual Testing

#### 1. Build and Load Extension
```bash
npm install
npm run build
```
Load the `extension` directory in Firefox as a temporary add-on.

#### 2. Test Options UI
1. Open extension options (right-click extension icon → Options)
2. Navigate to "New Word Tab" section
3. Verify "Notifications" section is visible
4. Enable notifications
5. Select a frequency (e.g., "Every hour")
6. Verify settings are saved

#### 3. Test Notification
1. In Options, ensure you have some learned words
2. Set Google Translate target language
3. Enable notifications in Notifications section
4. Click "Test notification" button
5. Verify a notification appears with either a word or translation
6. Click the notification
7. Verify it opens a new tab with that word pre-loaded

#### 4. Test Deep Linking
1. Open a new tab to get the extension's URL
2. Add `?word=example` to the URL (replace `example` with any word)
3. Press Enter
4. Verify the word "example" is loaded and its definition is shown

#### 5. Test Periodic Notifications
1. Set frequency to "Every 30 minutes"
2. Wait 30 minutes
3. Verify notification appears automatically
4. Test clicking to open word in new tab

#### 6. Test Mirroring
1. Open browser console for the background worker
2. Mark a new word as learned in the extension
3. Check browser.storage.local for `nwt_learned_words_mirror_v1`
4. Verify it contains the learned words array
5. Change Google Translate language
6. Check `nwt_gttl_mirror_v1` is updated

## Storage Keys

### localStorage (window.localStorage)
- `lw`: Comma-separated list of learned words (existing)
- `gttl`: Google Translate target language code (existing)

### browser.storage.local
- `nwt_learned_words_mirror_v1`: Array of learned words (mirrored)
- `nwt_gttl_mirror_v1`: Target language code (mirrored)
- `notificationSettings`: { enabled: boolean, frequency: number }

## Permissions Required
- `notifications`: To show browser notifications
- `alarms`: To schedule periodic reminders
- `tabs`: To open new tabs when clicking notifications
- `storage`: To store notification settings and mirrors
- `host_permissions`: https://translate.googleapis.com/* (existing, for translations)

## Browser Compatibility
- Designed for Firefox MV3
- Uses `webextension-polyfill` for cross-browser compatibility
- Notification buttons may work differently in Chrome (Chrome supports action buttons)

## Future Enhancements
- Add notification sound preference
- Allow customizing notification text
- Add statistics for notification clicks
- Support for multiple notification types
