import * as storage from '@/utils/storage'
import { ref } from 'vue'

// Repetition state managed centrally
const shouldShowRepetition = ref(false)

export default function useRepetition() {
  /**
   * Atomic function that determines if repetition block should be shown now.
   * This function:
   * 1. Reads repetitionFrequency and counter from localStorage
   * 2. Increments the counter
   * 3. Checks if counter reached frequency threshold
   * 4. If yes, resets counter and returns true
   * 5. If no, saves incremented counter and returns false
   * 
   * Should be called exactly once per page load after a word is displayed.
   */
  async function shouldShowNowAndResetIfNeeded(): Promise<boolean> {
    try {
      // Read settings from localStorage
      const data = await storage.get({
        repetitionFrequency: 'off',
        repetitionCounter: 0,
      })

      const frequency = data.repetitionFrequency
      const counter = Number(data.repetitionCounter) || 0

      // If repetition is disabled, always return false
      if (frequency === 'off' || !frequency) {
        shouldShowRepetition.value = false
        return false
      }

      const frequencyNum = Number(frequency)
      if (isNaN(frequencyNum) || frequencyNum <= 0) {
        shouldShowRepetition.value = false
        return false
      }

      // Increment counter
      const newCounter = counter + 1

      // Check if we've reached the threshold
      if (newCounter >= frequencyNum) {
        // Reset counter and show repetition
        await storage.set({ repetitionCounter: 0 })
        shouldShowRepetition.value = true
        return true
      }

      // Save incremented counter and don't show repetition
      await storage.set({ repetitionCounter: newCounter })
      shouldShowRepetition.value = false
      return false
    } catch (error) {
      console.error('Error in shouldShowNowAndResetIfNeeded:', error)
      shouldShowRepetition.value = false
      return false
    }
  }

  return {
    shouldShowRepetition,
    shouldShowNowAndResetIfNeeded,
  }
}
