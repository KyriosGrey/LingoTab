# UI Changes - Notifications Feature

## Options Page - New Notifications Section

The Notifications section appears in the "New Word Tab" settings, positioned after "Google Translate" and before "Site Shortcuts".

### Layout

```
┌─────────────────────────────────────────────────────────────┐
│ Settings                                                     │
├──────────────┬──────────────────────────────────────────────┤
│              │                                               │
│ New Word Tab │  Header                                       │
│   (active)   │  ─────────────────────────────────────────   │
│              │                                               │
│ Smart        │  Google Translate                            │
│ Sentences    │  ─────────────────────────────────────────   │
│              │                                               │
│              │  Notifications                                │
│              │  Get periodic reminders to practice learned  │
│              │  words.                                       │
│              │                                               │
│              │  ☑ Enable notifications                      │
│              │                                               │
│              │  Frequency: [Every hour ▼]                   │
│              │                                               │
│              │  [Test notification]                         │
│              │                                               │
│              │  ─────────────────────────────────────────   │
│              │                                               │
│              │  Site Shortcuts                              │
│              │  ...                                          │
│              │                                               │
└──────────────┴──────────────────────────────────────────────┘
```

### Component Details

**Section Header:**
- Title: "Notifications"
- Description: "Get periodic reminders to practice learned words."

**Enable Checkbox:**
- Standard checkbox with label "Enable notifications"
- When unchecked, frequency and test button are hidden
- Saves immediately on change

**Frequency Dropdown:**
- Only visible when notifications are enabled
- Label: "Frequency:"
- Options:
  - Every 30 minutes
  - Every hour (default)
  - Every 2 hours
  - Every 3 hours
  - Every 6 hours
- Saves immediately on change

**Test Button:**
- Only visible when notifications are enabled
- Text: "Test notification"
- Hover state: slightly transparent
- Disabled state: "Testing..." with reduced opacity
- Click triggers an immediate test notification

### Styling
- Follows existing section styles with `.section` class
- Uses existing Select component for dropdown
- Uses CSS variables for colors:
  - `var(--color)`: Primary color
  - `var(--bg-color)`: Background color
  - `hsla(var(--color-raw), 0.7)`: Muted text
- Consistent spacing with other sections (12px gaps, 8px margins)

## Notification Appearance

When a notification is triggered, it appears as a browser notification:

```
┌─────────────────────────────────────────┐
│ 🔔 New Word Tab                          │
├─────────────────────────────────────────┤
│ Word: serendipity                       │
│ What's the translation?                 │
└─────────────────────────────────────────┘

OR

┌─────────────────────────────────────────┐
│ 🔔 New Word Tab                          │
├─────────────────────────────────────────┤
│ Translation: случайность                │
│ What's the English word?                │
└─────────────────────────────────────────┘
```

**Notification Details:**
- Icon: Extension icon (128px)
- Title: Either "Word: [word]" or "Translation: [translation]"
- Message: Either "What's the translation?" or "What's the English word?"
- Click action: Opens new tab with the word pre-loaded

## New Tab with Deep Link

When clicking a notification or using the deep link feature:

```
URL: chrome-extension://[id]/dist/newTab/index.html?word=serendipity

┌─────────────────────────────────────────────────────────────┐
│                                                              │
│                                                              │
│                    serendipity                               │
│                    /ˌser.ənˈdɪp.ə.ti/                       │
│                                                              │
│  noun                                                        │
│  1. The occurrence and development of events by chance      │
│     in a happy or beneficial way.                           │
│                                                              │
│  Example: "A fortunate stroke of serendipity brought the    │
│            two together"                                     │
│                                                              │
│  [✓ Mark as learned]                                        │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

The word is immediately fetched and displayed, bypassing the random word selection.

## State Changes

### Initial State (Notifications Disabled)
```
Notifications
Get periodic reminders to practice learned words.

☐ Enable notifications
```

### Enabled State (With Frequency Selection)
```
Notifications
Get periodic reminders to practice learned words.

☑ Enable notifications

Frequency: [Every hour ▼]

[Test notification]
```

### Testing State
```
Notifications
Get periodic reminders to practice learned words.

☑ Enable notifications

Frequency: [Every hour ▼]

[Testing...] (button disabled, reduced opacity)
```

## Responsive Behavior

On narrow screens (< 740px):
- Frequency label and dropdown stack vertically
- Test button remains full width
- Maintains consistent spacing

## Accessibility

- All interactive elements are keyboard accessible
- Checkbox has proper focus states
- Select dropdown has title attribute
- Button has disabled state that's clearly indicated
- All text meets WCAG contrast requirements
