import storage from '@/modules/localStorage'
import { ref } from 'vue'

// LingoTab replaces the browser's own New Tab page, so every new tab is a full page
// reload - in-memory state alone would mean a dismissed notice reappears on every single
// new tab opened while Google is still rate-limiting requests. Persisting a cooldown
// timestamp in localStorage instead means "dismissed" survives across tabs, without
// silencing the notice forever (a new rate-limit episode days later still gets flagged).
const DISMISS_STORAGE_KEY = 'gttf_dismissed_until'
const DISMISS_COOLDOWN_MS = 30 * 60 * 1000

// 'quota' means the fallback service has handed out its free translations for today and
// will start again tomorrow - a normal, self-healing state that deserves a calmer message
// than 'unavailable', which means nothing could be reached at all.
export type TranslateFailureReason = 'quota' | 'unavailable'

const hasFailure = ref(false)
const failureReason = ref<TranslateFailureReason>('unavailable')

function getDismissedUntil(): number {
  const raw = storage.get(DISMISS_STORAGE_KEY)
  const value = raw ? Number(raw) : 0
  return Number.isFinite(value) ? value : 0
}

export default function useTranslateFailureNotice() {
  function reportFailure(reason: TranslateFailureReason) {
    if (Date.now() < getDismissedUntil())
      return
    failureReason.value = reason
    hasFailure.value = true
  }

  function dismiss() {
    storage.set(DISMISS_STORAGE_KEY, String(Date.now() + DISMISS_COOLDOWN_MS))
    hasFailure.value = false
  }

  return {
    hasFailure,
    failureReason,
    reportFailure,
    dismiss,
  }
}
