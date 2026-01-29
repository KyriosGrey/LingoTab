# Learned Words Repetition Notifications - Implementation Summary

## Overview

This implementation adds a learned words repetition notification feature for Firefox MV3 using a Runner page approach (no background service worker).

## Key Components

### 1. Runner Page (`src/runner/`)
- **index.html**: Simple HTML page that stays open in background
- **main.ts**: Schedules notifications using `setTimeout` loop
- Reads settings from `browser.storage.local`
- Shows notifications with random learned words
- Handles notification clicks to open New Tab with specific word

### 2. Options UI (`src/options/Sections/Notifications.vue`)
- Enable/disable checkbox
- Frequency selector (30min, 1h, 2h, 3h, 6h)
- "Test notification" button
- Automatically opens runner page when enabling

### 3. Storage Mirror System (`src/composables/useNotificationMirror.ts`)
- Mirrors localStorage data to `browser.storage.local` for runner access
- Keys:
  - `nwt_learned_words_mirror_v1`: Array of learned words
  - `nwt_gttl_mirror_v1`: Target language code
  - `nwt_notification_settings`: { enabled, frequency }

### 4. Automatic Mirroring
- **useLearnedWords**: Mirrors learned words when add/remove
- **useGoogleTranslate**: Mirrors target language when changed

### 5. Deep-Link Support (`src/components/Content/Content.vue`)
- Parses `?word=` parameter from URL
- Calls `searchWord(word)` instead of random word when present

## Technical Details

### Notification Behavior
- Shows random word from learned list
- 50/50 chance: word OR translation
- Click notification → opens New Tab with that word
- Uses Google Translate API for translations

### Scheduling
- Uses `setTimeout` loop (not `setInterval`) for precise control
- Listens for settings changes via `browser.storage.onChanged`
- Reschedules automatically when settings change

### Browser Compatibility
- Firefox MV3: No notification buttons (uses click handler)
- Chrome: Could support notification buttons (future enhancement)

## Files Changed

- `vite.config.mts`: Added runner entry point
- `src/manifest.ts`: Added permissions and web_accessible_resources
- `src/runner/index.html`: New runner page
- `src/runner/main.ts`: New runner logic
- `src/options/Sections/Notifications.vue`: New options section
- `src/options/App.vue`: Integrated Notifications section
- `src/composables/useNotificationMirror.ts`: New mirroring logic
- `src/composables/useLearnedWords.ts`: Added auto-mirroring
- `src/composables/useGoogleTranslate.ts`: Added auto-mirroring
- `src/components/Content/Content.vue`: Added deep-link support
- `src/composables/useSmartMix.ts`: Stub for existing feature

## Build Output

```
extension/
├── manifest.json (updated with permissions)
├── dist/
│   ├── runner/
│   │   └── index.html (runner page)
│   ├── newTab/
│   │   └── index.html (supports ?word=)
│   ├── options/
│   │   └── index.html (includes Notifications section)
│   └── assets/
│       ├── runner-*.js
│       └── ...
```

## Testing

See `TESTING.md` for comprehensive testing instructions.

## Known Limitations

1. Runner page must stay open in background tab
2. No persistent background script (Firefox MV3 constraint)
3. No notification action buttons (Firefox limitation)
4. Translation uses unofficial Google Translate API

## Future Enhancements

- Add Chrome support with notification buttons
- Implement runner auto-restart on browser startup
- Add more notification customization options
- Support for multiple target languages
