import { ref } from 'vue'

import storage from '@/modules/localStorage'

const REPETITION_COUNTER_KEY = 'repetitionCounter'
const REPETITION_FREQUENCY_KEY = 'repetitionFrequency'

const shouldShowThisView = ref(false)

export default function useRepetition() {
  /**
   * Atomic method to decide if repetition block should be shown.
   * Called on every word shown (including page reloads).
   * - Reads repetitionFrequency from localStorage
   * - If 'off': does not increment counter, sets shouldShowThisView = false
   * - Else: increments counter, and if counter reaches N, shows block and resets counter
   */
  function onWordShown() {
    const frequency = storage.get(REPETITION_FREQUENCY_KEY) || 'off'

    // If frequency is off, don't show and don't increment counter
    if (frequency === 'off') {
      shouldShowThisView.value = false
      return
    }

    // Parse frequency as number
    const frequencyNum = Number.parseInt(frequency, 10)
    if (Number.isNaN(frequencyNum) || frequencyNum <= 0) {
      shouldShowThisView.value = false
      return
    }

    // Read current counter
    const counterStr = storage.get(REPETITION_COUNTER_KEY) || '0'
    let counter = Number.parseInt(counterStr, 10)
    if (Number.isNaN(counter)) {
      counter = 0
    }

    // Increment counter
    counter++

    // Check if we should show
    if (counter >= frequencyNum) {
      shouldShowThisView.value = true
      // Reset counter to 0
      storage.set(REPETITION_COUNTER_KEY, '0')
    }
    else {
      shouldShowThisView.value = false
      // Save incremented counter
      storage.set(REPETITION_COUNTER_KEY, String(counter))
    }
  }

  return {
    shouldShowThisView,
    onWordShown,
  }
}
