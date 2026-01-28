import * as storage from '@/utils/storage'

const MIX_STATE_KEY = 'mixState'
const MIX_SETTINGS_KEY = 'smartDailySettings'

interface MixState {
  wordsShownInCycle: number
}

/**
 * Reset mix state (e.g., when toggling mix mode or changing ratio)
 */
export async function resetMixState() {
  try {
    await storage.set({ [MIX_STATE_KEY]: { wordsShownInCycle: 0 } })
  } catch (err) {
    console.warn('[useSmartMix] failed to reset state', err)
  }
}

/**
 * Decide if the next item should be a sentence based on the mix ratio
 * Returns true for sentence, false for word
 */
export async function decideNextIsSentence(): Promise<boolean> {
  try {
    // Read current state and settings
    const s = await storage.get([MIX_STATE_KEY, MIX_SETTINGS_KEY])
    
    const state: MixState = s?.[MIX_STATE_KEY] || { wordsShownInCycle: 0 }
    const settings = s?.[MIX_SETTINGS_KEY] || {}
    const mixMode = settings.mixMode || {}
    
    const wordsPerSentence = Number(mixMode.wordsPerSentence) || 2
    const wordsShown = Number(state.wordsShownInCycle) || 0
    
    // If we've shown enough words, show a sentence next
    if (wordsShown >= wordsPerSentence) {
      // Reset counter and show sentence
      await storage.set({ [MIX_STATE_KEY]: { wordsShownInCycle: 0 } })
      return true
    }
    
    // Otherwise show a word and increment counter
    await storage.set({ [MIX_STATE_KEY]: { wordsShownInCycle: wordsShown + 1 } })
    return false
  } catch (err) {
    console.warn('[useSmartMix] failed to decide', err)
    // Default to word on error
    return false
  }
}
