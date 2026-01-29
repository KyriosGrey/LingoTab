# Testing Guide: Learned Words Repetition Notifications

This document provides instructions for testing the new learned words repetition notification feature.

## Prerequisites

1. Build the extension: `npm run build`
2. Load the extension in Firefox (Firefox Developer Edition recommended for MV3 support)
3. Have at least one word marked as "learned" (stored in localStorage key `lw`)

## Test Cases

### 1. Enable Notifications

**Steps:**
1. Open the extension options page
2. Scroll to the "Learned Words Notifications" section
3. Check the "Enable notifications" checkbox

**Expected Results:**
- The runner page opens automatically in a background tab (check tabs for "LingoTab Notification Runner")
- The notification settings section expands to show frequency dropdown and test button
- Learned words and target language are mirrored to `browser.storage.local`

### 2. Select Notification Frequency

**Steps:**
1. With notifications enabled, click the frequency dropdown
2. Select different frequencies (30 minutes, 1 hour, 2 hours, 3 hours, 6 hours)

**Expected Results:**
- Selected frequency is saved to `browser.storage.local`
- Runner page updates its schedule (check runner page status text)

### 3. Test Notification Button

**Steps:**
1. With notifications enabled, click "Test notification" button
2. Wait for the notification to appear

**Expected Results:**
- Browser notification appears immediately
- Notification shows either:
  - A word from your learned list, OR
  - The translation of that word (50/50 chance)
- Notification title indicates whether it's showing word or translation
- Notification uses the extension icon

### 4. Notification Click Action

**Steps:**
1. Trigger a test notification
2. Click on the notification

**Expected Results:**
- A new tab opens with the New Tab page
- The word from the notification is loaded (not a random word)
- The word definition and translation are displayed

### 5. Deep-Link Support

**Steps:**
1. Manually open: `chrome-extension://[extension-id]/dist/newTab/index.html?word=test`
   (Replace [extension-id] with your actual extension ID)

**Expected Results:**
- New Tab page loads with the word "test"
- Definition for "test" is fetched and displayed
- Page title shows "LingoTab • Test"

### 6. Automatic Mirroring - Learned Words

**Steps:**
1. Open the extension New Tab page
2. Mark a new word as "Learning" (bookmark icon)
3. Open browser console and check `browser.storage.local.get('nwt_learned_words_mirror_v1')`

**Expected Results:**
- The newly marked word is immediately mirrored to browser.storage
- Console shows the updated learned words array

### 7. Automatic Mirroring - Target Language

**Steps:**
1. Open the extension options page
2. Change the Google Translate target language
3. Open browser console and check `browser.storage.local.get('nwt_gttl_mirror_v1')`

**Expected Results:**
- The new language code is immediately mirrored to browser.storage
- Future notifications will use the new language for translations

### 8. Scheduled Notifications

**Steps:**
1. Enable notifications with 30-minute frequency
2. Keep the runner page open in background
3. Wait 30 minutes

**Expected Results:**
- A notification appears automatically after 30 minutes
- The notification shows a random learned word or its translation
- After showing, the runner schedules the next notification

### 9. Settings Change During Runtime

**Steps:**
1. Enable notifications with 1-hour frequency
2. Wait 10 minutes
3. Change frequency to 30 minutes

**Expected Results:**
- The runner page detects the settings change
- The schedule is updated (status text on runner page updates)
- The next notification follows the new schedule

### 10. Disable Notifications

**Steps:**
1. With notifications enabled, uncheck "Enable notifications"

**Expected Results:**
- Notification settings section collapses
- No new notifications are scheduled
- The runner page status shows "Notifications disabled"

## Known Limitations

1. **Runner Page Must Stay Open**: The runner page must remain open in a background tab for notifications to work. Firefox MV3 does not support persistent background scripts.

2. **No Notification Buttons**: Firefox MV3 doesn't support notification action buttons. Instead, clicking the notification opens the New Tab with the word.

3. **Translation Quality**: Translations use Google Translate unofficial API, which may occasionally fail or return poor translations.

## Debugging

### Check Storage Values

Open browser console and run:
```javascript
// Check notification settings
browser.storage.local.get('nwt_notification_settings').then(console.log)

// Check learned words mirror
browser.storage.local.get('nwt_learned_words_mirror_v1').then(console.log)

// Check target language mirror
browser.storage.local.get('nwt_gttl_mirror_v1').then(console.log)
```

### Check Runner Status

1. Open the runner page tab
2. Check the status text at the bottom
3. Open browser console for detailed logs

### Check localStorage

Open browser console on New Tab page:
```javascript
// Check learned words
localStorage.getItem('lw')

// Check target language
localStorage.getItem('gttl')
```

## Manual Test Checklist

- [ ] Enable notifications opens runner page
- [ ] Test notification button works
- [ ] Notification click opens New Tab with word
- [ ] Deep-link ?word= parameter works
- [ ] Frequency selection updates schedule
- [ ] Learned words are mirrored on change
- [ ] Target language is mirrored on change
- [ ] Scheduled notifications fire at correct intervals
- [ ] Disable notifications stops scheduling
- [ ] No regressions in existing New Tab functionality
