import storage from '@/modules/localStorage'

const FREQUENCY_KEY = 'repetitionFrequency'
const COUNTER_KEY = 'repetitionCounter'

type FrequencyOption = 'off' | '1' | '2' | '3' | '4' | '5' | '10' | '20'

/** Load repetition frequency from localStorage */
export function loadRepetitionFrequency(): FrequencyOption {
  const val = storage.get(FREQUENCY_KEY)
  if (
    val === 'off'
    || val === '1'
    || val === '2'
    || val === '3'
    || val === '4'
    || val === '5'
    || val === '10'
    || val === '20'
  ) {
    return val
  }
  return 'off'
}

/** Load repetition counter from localStorage */
function loadCounter(): number {
  const val = storage.get(COUNTER_KEY)
  const parsed = Number(val)
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0
}

/** Save counter to localStorage */
function saveCounter(count: number): void {
  storage.set(COUNTER_KEY, String(count))
}

/**
 * Decide whether to show repetition now.
 * Returns true = show repetition block, false = don't show.
 * Updates persistent counter atomically.
 */
export function decideShowRepetitionNow(): boolean {
  const frequency = loadRepetitionFrequency()

  // If off, don't increment counter and return false
  if (frequency === 'off') {
    return false
  }

  const threshold = Number(frequency)
  let counter = loadCounter()

  // Increment counter
  counter += 1

  // Check if we've reached the threshold
  if (counter >= threshold) {
    // Reset counter and show repetition
    saveCounter(0)
    return true
  }
  else {
    // Save incremented counter and don't show
    saveCounter(counter)
    return false
  }
}

/**
 * Reset repetition counter to 0.
 * Used when frequency setting changes.
 */
export function resetRepetitionState(): void {
  saveCounter(0)
}