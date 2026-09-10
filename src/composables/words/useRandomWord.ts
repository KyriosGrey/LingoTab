import { ref, type Ref } from 'vue'
import { randomNumberBetween } from '@/utils/number'

export default function useRandomWord(wordsList: Ref<string[]>) {
  const randomWord = ref('')

  function getRandomWord() {
    const i = randomNumberBetween(0, wordsList.value.length - 1)
    randomWord.value = wordsList.value[i]
    return randomWord
  }

  return { getRandomWord, randomWord }
}
