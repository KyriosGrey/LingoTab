import storage from '@/modules/localStorage'
import { computed, ref } from 'vue'
import useLearnedWords from './words/useLearnedWords'

export type RepetitionFrequency = 'off' | '5' | '10' | '20' | '30'

const REPETITION_FREQUENCY_KEY = 'repetitionFrequency'
const REPETITION_COUNTER_KEY = 'repetitionCounter'

export default function useRepetition() {
  const { learnedWords } = useLearnedWords()

  // Load frequency setting from localStorage
  const frequency = ref<RepetitionFrequency>(
    (storage.get(REPETITION_FREQUENCY_KEY) as RepetitionFrequency) || 'off',
  )

  // Load counter from localStorage
  const counter = ref<number>(
    Number.parseInt(storage.get(REPETITION_COUNTER_KEY) || '0', 10),
  )

  const isEnabled = computed(() => frequency.value !== 'off')

  const shouldShowRepetition = computed(() => {
    if (!isEnabled.value)
      return false
    if (learnedWords.value.length === 0)
      return false

    const targetCount = Number.parseInt(frequency.value, 10)
    return counter.value >= targetCount
  })

  function incrementCounter() {
    if (!isEnabled.value)
      return

    counter.value += 1
    storage.set(REPETITION_COUNTER_KEY, String(counter.value))
  }

  function resetCounter() {
    counter.value = 0
    storage.set(REPETITION_COUNTER_KEY, '0')
  }

  function setFrequency(newFrequency: RepetitionFrequency) {
    frequency.value = newFrequency
    storage.set(REPETITION_FREQUENCY_KEY, newFrequency)

    // Reset counter when changing frequency
    resetCounter()
  }

  function getRandomLearnedWord(): string | null {
    if (learnedWords.value.length === 0)
      return null

    const randomIndex = Math.floor(Math.random() * learnedWords.value.length)
    return learnedWords.value[randomIndex]
  }

  // Mixed mode: 50/50 chance to show word or translation first
  function shouldShowWordFirst(): boolean {
    return Math.random() < 0.5
  }

  return {
    frequency,
    counter,
    isEnabled,
    shouldShowRepetition,
    incrementCounter,
    resetCounter,
    setFrequency,
    getRandomLearnedWord,
    shouldShowWordFirst,
  }
}
