import * as storage from '@/utils/storage'

const MIX_STATE_KEY = 'mixState'
const MIX_SETTINGS_KEY = 'smartDailySettings'

interface MixState {
  wordCount: number
}

export async function resetMixState() {
  try {
    await storage.remove(MIX_STATE_KEY)
  }
  catch (err) {
    console.warn('[useSmartMix] failed to reset mix state', err)
  }
}

export async function decideNextIsSentence(): Promise<boolean> {
  try {
    // Load current state and settings
    const s = await storage.get([MIX_STATE_KEY, MIX_SETTINGS_KEY])
    const state: MixState = s?.[MIX_STATE_KEY] ?? { wordCount: 0 }
    const settings = s?.[MIX_SETTINGS_KEY] ?? {}
    const mixMode = settings.mixMode ?? {}
    const wordsPerSentence = Number(mixMode.wordsPerSentence ?? 2) || 2

    // Increment word count
    const newWordCount = (state.wordCount || 0) + 1

    // Decide: if we've reached the target, show sentence and reset
    let showSentence = false
    let nextCount = newWordCount

    if (newWordCount >= wordsPerSentence) {
      showSentence = true
      nextCount = 0
    }

    // Save updated state
    await storage.set({ [MIX_STATE_KEY]: { wordCount: nextCount } })

    return showSentence
  }
  catch (err) {
    console.warn('[useSmartMix] decideNextIsSentence error', err)
    return false
  }
}

export default function useSmartMix() {
  return {
    resetMixState,
    decideNextIsSentence,
  }
}
