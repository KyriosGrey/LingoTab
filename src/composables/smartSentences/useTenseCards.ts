/**
 * Composable for normalizing and managing tense keys for Smart Sentences
 */

// Canonical tense keys (matching the keys in tenseCardsMap)
const CANONICAL_TENSE_KEYS = [
  'present-simple',
  'present-continuous',
  'present-perfect',
  'present-perfect-continuous',
  'past-simple',
  'past-continuous',
  'past-perfect',
  'past-perfect-continuous',
  'future-simple',
  'future-perfect',
  'future-continuous',
  'future-perfect-continuous',

  // ✅ NEW "Other"
  'conditionals',
  'passive-voice',
  'modal-verbs',
  'reported-speech',
  'gerund-and-infinitive',
] as const

export type CanonicalTenseKey = typeof CANONICAL_TENSE_KEYS[number]

// Alias mapping: maps various representations to canonical keys
const TENSE_ALIASES: Record<string, CanonicalTenseKey> = {
  // Present Simple
  'present simple': 'present-simple',
  'presentsimple': 'present-simple',
  'simple present': 'present-simple',

  // Present Continuous
  'present continuous': 'present-continuous',
  'presentcontinuous': 'present-continuous',
  'present progressive': 'present-continuous',

  // Present Perfect
  'present perfect': 'present-perfect',
  'presentperfect': 'present-perfect',

  // Present Perfect Continuous
  'present perfect continuous': 'present-perfect-continuous',
  'presentperfectcontinuous': 'present-perfect-continuous',
  'present perfect progressive': 'present-perfect-continuous',
  'presentperfectprogressive': 'present-perfect-continuous',

  // Past Simple
  'past simple': 'past-simple',
  'pastsimple': 'past-simple',
  'simple past': 'past-simple',

  // Past Continuous
  'past continuous': 'past-continuous',
  'pastcontinuous': 'past-continuous',
  'past progressive': 'past-continuous',

  // Past Perfect
  'past perfect': 'past-perfect',
  'pastperfect': 'past-perfect',

  // Past Perfect Continuous
  'past perfect continuous': 'past-perfect-continuous',
  'pastperfectcontinuous': 'past-perfect-continuous',
  'past perfect progressive': 'past-perfect-continuous',
  'pastperfectprogressive': 'past-perfect-continuous',

  // Future Simple
  'future simple': 'future-simple',
  'futuresimple': 'future-simple',
  'simple future': 'future-simple',

  // Future Perfect
  'future perfect': 'future-perfect',
  'futureperfect': 'future-perfect',

  // Future Continuous
  'future continuous': 'future-continuous',
  'futurecontinuous': 'future-continuous',
  'future progressive': 'future-continuous',

  // Future Perfect Continuous
  'future perfect continuous': 'future-perfect-continuous',
  'futureperfectcontinuous': 'future-perfect-continuous',
  'future perfect progressive': 'future-perfect-continuous',
  'futureperfectprogressive': 'future-perfect-continuous',

  // ✅ NEW "Other" aliases
  conditional: 'conditionals',
  conditionals: 'conditionals',

  'passive voice': 'passive-voice',
  passivevoice: 'passive-voice',
  passive: 'passive-voice',
  'passive-voice': 'passive-voice',

  'modal verbs': 'modal-verbs',
  modalverbs: 'modal-verbs',
  modals: 'modal-verbs',
  'modal-verbs': 'modal-verbs',

  'reported speech': 'reported-speech',
  reportedspeech: 'reported-speech',
  reported: 'reported-speech',
  'reported-speech': 'reported-speech',

  'gerund & infinitive': 'gerund-and-infinitive',
  'gerunds & infinitives': 'gerund-and-infinitive',
  'gerund and infinitive': 'gerund-and-infinitive',
  gerundinfinitive: 'gerund-and-infinitive',
  'gerund-and-infinitive': 'gerund-and-infinitive',
}

const DEFAULT_TENSE_KEY: CanonicalTenseKey = 'present-simple'

export function normalizeTense(tense?: string): CanonicalTenseKey {
  if (!tense || typeof tense !== 'string') {
    return DEFAULT_TENSE_KEY
  }

  const normalized = tense.trim().toLowerCase()

  if (CANONICAL_TENSE_KEYS.includes(normalized as CanonicalTenseKey)) {
    return normalized as CanonicalTenseKey
  }

  if (normalized in TENSE_ALIASES) {
    return TENSE_ALIASES[normalized]
  }

  return DEFAULT_TENSE_KEY
}

/**
 * Composable for tense card operations
 */
export function useTenseCards() {
  return {
    normalizeTense,
    defaultTenseKey: DEFAULT_TENSE_KEY,
    canonicalKeys: CANONICAL_TENSE_KEYS,
  }
}