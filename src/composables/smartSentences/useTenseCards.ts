/**
 * Composable for normalizing and managing tense keys for Smart Sentences
 */

// Canonical tense keys (matching the keys in tenseCardsMap)
const CANONICAL_TENSE_KEYS = [
  'present-simple',
  'present-continuous',
  'present-perfect',
  'past-simple',
  'past-continuous',
  'past-perfect',
  'future-simple',
  'future-continuous',
  'future-perfect-continuous',
] as const

type CanonicalTenseKey = typeof CANONICAL_TENSE_KEYS[number]

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

  // Future Simple
  'future simple': 'future-simple',
  'futuresimple': 'future-simple',
  'simple future': 'future-simple',

  // Future Continuous
  'future continuous': 'future-continuous',
  'futurecontinuous': 'future-continuous',
  'future progressive': 'future-continuous',

  // Future Perfect Continuous
  'future perfect continuous': 'future-perfect-continuous',
  'futureperfectcontinuous': 'future-perfect-continuous',
  'future perfect progressive': 'future-perfect-continuous',
}

const DEFAULT_TENSE_KEY: CanonicalTenseKey = 'present-simple'

/**
 * Normalizes a tense string to a canonical tense key
 * @param tense - The tense string from sentence.tense (can be undefined)
 * @returns Canonical tense key or default if not recognized
 */
export function normalizeTense(tense?: string): CanonicalTenseKey {
  if (!tense || typeof tense !== 'string') {
    return DEFAULT_TENSE_KEY
  }

  // Normalize: trim, lowercase, and check if it's already a canonical key
  const normalized = tense.trim().toLowerCase()

  if (CANONICAL_TENSE_KEYS.includes(normalized as CanonicalTenseKey)) {
    return normalized as CanonicalTenseKey
  }

  // Check aliases
  if (normalized in TENSE_ALIASES) {
    return TENSE_ALIASES[normalized]
  }

  // If not found, return default
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
