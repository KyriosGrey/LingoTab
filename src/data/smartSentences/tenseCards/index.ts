import type { TenseCardSet, TenseOption } from './types'
import { futureContinuous } from './future-continuous'
import { futurePerfectContinuous } from './future-perfect-continuous'
import { futurePerfect } from './future-perfect'
import { futureSimple } from './future-simple'
import { pastPerfectContinuous } from './past-perfect-continuous'
import { pastContinuous } from './past-continuous'
import { pastPerfect } from './past-perfect'
import { pastSimple } from './past-simple'
import { presentPerfectContinuous } from './present-perfect-continuous'
import { presentContinuous } from './present-continuous'
import { presentPerfect } from './present-perfect'
import { presentSimple } from './present-simple'

// ✅ NEW "Other" grammar cards
import { conditionals } from './conditionals'
import { passiveVoice } from './passive-voice'
import { modalVerbs } from './modal-verbs'
import { reportedSpeech } from './reported-speech'
import { gerundAndInfinitive } from './gerund-and-infinitive'

// List of all tense options for the dropdown
export const tenseOptions: TenseOption[] = [
  { value: 'present-simple', text: 'Present Simple' },
  { value: 'present-continuous', text: 'Present Continuous' },
  { value: 'present-perfect', text: 'Present Perfect' },
  { value: 'present-perfect-continuous', text: 'Present Perfect Continuous' },
  { value: 'past-simple', text: 'Past Simple' },
  { value: 'past-continuous', text: 'Past Continuous' },
  { value: 'past-perfect', text: 'Past Perfect' },
  { value: 'past-perfect-continuous', text: 'Past Perfect Continuous' },
  { value: 'future-simple', text: 'Future Simple' },
  { value: 'future-perfect', text: 'Future Perfect' },
  { value: 'future-continuous', text: 'Future Continuous' },
  { value: 'future-perfect-continuous', text: 'Future Perfect Continuous' },

  // ✅ NEW "Other"
  { value: 'conditionals', text: 'Conditionals' },
  { value: 'passive-voice', text: 'Passive Voice' },
  { value: 'modal-verbs', text: 'Modal Verbs' },
  { value: 'reported-speech', text: 'Reported Speech' },
  { value: 'gerund-and-infinitive', text: 'Gerund & Infinitive' },
]

// Mapping from tense key to content
export const tenseCardsMap: Record<string, TenseCardSet> = {
  'present-simple': presentSimple,
  'present-continuous': presentContinuous,
  'present-perfect': presentPerfect,
  'present-perfect-continuous': presentPerfectContinuous,

  'past-simple': pastSimple,
  'past-continuous': pastContinuous,
  'past-perfect': pastPerfect,
  'past-perfect-continuous': pastPerfectContinuous,

  'future-simple': futureSimple,
  'future-continuous': futureContinuous,
  'future-perfect': futurePerfect,
  'future-perfect-continuous': futurePerfectContinuous,

  // ✅ NEW "Other"
  conditionals,
  'passive-voice': passiveVoice,
  'modal-verbs': modalVerbs,
  'reported-speech': reportedSpeech,
  'gerund-and-infinitive': gerundAndInfinitive,
}

// Export types
export type { TenseCardSet, TenseOption } from './types'