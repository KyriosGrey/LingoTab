import { ref, type Ref } from 'vue'
import { randomNumberBetween } from '@/utils/number'
import storage from '@/modules/localStorage'
import useLearningWords from '@/composables/words/useLearningWords'

export default function useRandomWord(wordsList: Ref<string[]>) {
  const randomWord = ref('')
  const { learningWords } = useLearningWords()

  function getRandomWord() {
    const showLearningOnly = storage.get('showLearningOnly') === 'true'

    if (showLearningOnly && learningWords.value?.length) {
      const i = randomNumberBetween(0, learningWords.value.length - 1)
      randomWord.value = learningWords.value[i]
      return randomWord
    }

    const i = randomNumberBetween(0, wordsList.value.length - 1)
    randomWord.value = wordsList.value[i]
    return randomWord
  }

  return { getRandomWord, randomWord }
}
