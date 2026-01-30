import { computed, ref } from 'vue'

import storage from '@/modules/localStorage'

import useLearnedWords from './words/useLearnedWords'

const REPETITION_FREQUENCY_KEY = 'repetitionFrequency'
const REPETITION_COUNTER_KEY = 'repetitionCounter'

export type RepetitionFrequency = 'off' | '5' | '10' | '20' | '30'

export interface RepetitionWord {
  word: string
  mode: 'word' | 'translation'
}

export default function useRepetition() {
  const { learnedWords } = useLearnedWords()

  const frequency = ref<RepetitionFrequency>(
    (storage.get(REPETITION_FREQUENCY_KEY) as RepetitionFrequency) || 'off',
  )
  const counter = ref<number>(
    Number.parseInt(storage.get(REPETITION_COUNTER_KEY) || '0', 10),
  )

  const shouldShowRepetition = ref(false)
  const currentRepetitionWord = ref<RepetitionWord | null>(null)

  const isEnabled = computed(() => frequency.value !== 'off')

  function setFrequency(value: RepetitionFrequency) {
    frequency.value = value
    storage.set(REPETITION_FREQUENCY_KEY, value)
    // Reset counter when frequency changes
    resetCounter()
  }

  function incrementCounter() {
    if (!isEnabled.value)
      return

    counter.value += 1
    storage.set(REPETITION_COUNTER_KEY, String(counter.value))

    // Check if we should show repetition
    const targetCount = Number.parseInt(frequency.value, 10)
    if (counter.value >= targetCount) {
      showRepetition()
      resetCounter()
    }
  }

  function resetCounter() {
    counter.value = 0
    storage.set(REPETITION_COUNTER_KEY, '0')
  }

  function showRepetition() {
    // Only show if we have learned words
    if (learnedWords.value.length === 0) {
      shouldShowRepetition.value = false
      currentRepetitionWord.value = null
      return
    }

    // Select random word from learned list
    const randomIndex = Math.floor(Math.random() * learnedWords.value.length)
    const randomWord = learnedWords.value[randomIndex]

    // Random display mode (50/50)
    const randomMode = Math.random() < 0.5 ? 'word' : 'translation'

    currentRepetitionWord.value = {
      word: randomWord,
      mode: randomMode,
    }

    shouldShowRepetition.value = true
  }

  function hideRepetition() {
    shouldShowRepetition.value = false
    currentRepetitionWord.value = null
  }

  return {
    frequency,
    counter,
    isEnabled,
    shouldShowRepetition,
    currentRepetitionWord,
    setFrequency,
    incrementCounter,
    resetCounter,
    hideRepetition,
  }
}
