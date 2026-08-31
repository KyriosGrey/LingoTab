import * as storage from '@/utils/storage'

const SETTINGS_KEY = 'smartDailySettings'
const MIX_STATE_KEY = 'smartDailyMixState'

type MixConfig = { enabled: boolean, wordsPerSentence: number }
type MixState = { wordsShownInCycle: number, wordsPerSentence: number }

/** Load config from smartDailySettings.mixMode */
export async function loadMixConfig(): Promise<MixConfig> {
  try {
    const s = await storage.get([SETTINGS_KEY])
    const cfg = s?.[SETTINGS_KEY]?.mixMode ?? {}
    // Nothing saved yet = new user -> mixing is on by default.
    // An explicit false means the user turned it off, so it must stay off.
    return {
      enabled: cfg.enabled ?? true,
      wordsPerSentence: Math.max(1, Number(cfg.wordsPerSentence ?? 5))
    }
  } catch (e) {
    return { enabled: true, wordsPerSentence: 5 }
  }
}

/**
 * Decide whether the next display should be a sentence.
 * Returns true = sentence, false = word.
 * Updates persistent mix state (wordsShownInCycle).
 */
export async function decideNextIsSentence(): Promise<boolean> {
  const cfg = await loadMixConfig()
  if (!cfg.enabled) return false

  const s = await storage.get([MIX_STATE_KEY])
  const st: MixState = s?.[MIX_STATE_KEY] ?? { wordsShownInCycle: 0, wordsPerSentence: cfg.wordsPerSentence }

  // If ratio changed, reset counter
  if (!Number.isFinite(st.wordsPerSentence) || st.wordsPerSentence !== cfg.wordsPerSentence) {
    st.wordsPerSentence = cfg.wordsPerSentence
    st.wordsShownInCycle = 0
  }

  if ((st.wordsShownInCycle ?? 0) < cfg.wordsPerSentence) {
    st.wordsShownInCycle = (st.wordsShownInCycle ?? 0) + 1
    await storage.set({ [MIX_STATE_KEY]: st })
    return false // show word
  } else {
    // time to show a sentence; reset counter
    st.wordsShownInCycle = 0
    st.wordsPerSentence = cfg.wordsPerSentence
    await storage.set({ [MIX_STATE_KEY]: st })
    return true // show sentence
  }
}

/** Reset mix state (useful after changing settings) */
export async function resetMixState(): Promise<void> {
  const cfg = await loadMixConfig()
  const st: MixState = { wordsShownInCycle: 0, wordsPerSentence: cfg.wordsPerSentence }
  await storage.set({ [MIX_STATE_KEY]: st })
}