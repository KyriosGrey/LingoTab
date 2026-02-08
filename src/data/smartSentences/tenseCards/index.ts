import type { TenseCardSet, TenseOption } from './types'
import { futureContinuous } from './future-continuous'
import { futurePerfectContinuous } from './future-perfect-continuous'
import { futureSimple } from './future-simple'
import { pastContinuous } from './past-continuous'
import { pastPerfect } from './past-perfect'
import { pastSimple } from './past-simple'
import { presentContinuous } from './present-continuous'
import { presentPerfect } from './present-perfect'
import { presentSimple } from './present-simple'

// List of all tense options for the dropdown
export const tenseOptions: TenseOption[] = [
  { value: 'present-simple', text: 'Present Simple' },
  { value: 'present-continuous', text: 'Present Continuous' },
  { value: 'present-perfect', text: 'Present Perfect' },
  { value: 'past-simple', text: 'Past Simple' },
  { value: 'past-continuous', text: 'Past Continuous' },
  { value: 'past-perfect', text: 'Past Perfect' },
  { value: 'future-simple', text: 'Future Simple' },
  { value: 'future-continuous', text: 'Future Continuous' },
  { value: 'future-perfect-continuous', text: 'Future Perfect Continuous' },
]

// Mapping from tense key to content
export const tenseCardsMap: Record<string, TenseCardSet> = {
  'present-simple': presentSimple,
  'present-continuous': presentContinuous,
  'present-perfect': presentPerfect,
  'past-simple': pastSimple,
  'past-continuous': pastContinuous,
  'past-perfect': pastPerfect,
  'future-simple': futureSimple,
  'future-continuous': futureContinuous,
  'future-perfect-continuous': futurePerfectContinuous,
}

// Export types
export type { TenseCardSet, TenseOption } from './types'
