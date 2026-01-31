import { ref } from 'vue'
import storage from '@/modules/localStorage'

const REPETITION_FREQUENCY_KEY = 'repetitionFrequency'
const REPETITION_COUNTER_KEY = 'repetitionCounter'

export default function useRepetition() {
  const shouldShowThisView = ref(false)

  function onWordShown() {
    // Read frequency setting
    const frequency = storage.get(REPETITION_FREQUENCY_KEY)

    // If 'off' or not set, don't show and don't increment
    if (!frequency || frequency === 'off') {
      shouldShowThisView.value = false
      return
    }

    // Parse frequency as number
    const frequencyNum = Number.parseInt(frequency, 10)
    if (Number.isNaN(frequencyNum) || frequencyNum <= 0) {
      shouldShowThisView.value = false
      return
    }

    // Read current counter (default to 0)
    const counterStr = storage.get(REPETITION_COUNTER_KEY)
    let counter = 0
    if (counterStr) {
      counter = Number.parseInt(counterStr, 10)
      if (Number.isNaN(counter)) {
        counter = 0
      }
    }

    // Increment counter
    counter += 1

    // Check if we've reached the frequency threshold
    if (counter >= frequencyNum) {
      shouldShowThisView.value = true
      // Reset counter
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
