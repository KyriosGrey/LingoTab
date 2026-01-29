import { capitalizeFirstLetter } from '@/utils/string'
import { computed, ref } from 'vue'
import useIgnoredWords from './useIgnoredWords'
import useRandomWord from './useRandomWord'
import useWordDefinitions from './useWordDefinitions'
import useWordLists from './useWordLists'
import wordsHistory from './useWordsHistory'

const word = ref('')

export default function useWord() {
  const { wordsPoll } = useWordLists()

  const { ignoredWords, isIgnoredWord, reloadIgnoredWords } = useIgnoredWords()
  const { addWordToHistory } = wordsHistory()

  // ✅ Исправлено: явно указываем тип word: string
  const unIgnoredWords = computed(() =>
    wordsPoll.value.filter((word: string) => !isIgnoredWord(word)),
  )

  const { getRandomWord } = useRandomWord(unIgnoredWords)
  const { isLoading, definitions, error, getDefinitions } = useWordDefinitions()

  const hasLearnedAllWords = computed(
    () => wordsPoll.value.length <= ignoredWords.value.length,
  )

  async function getWord() {
    reloadIgnoredWords()

    const randomWord = getRandomWord().value
    if (!randomWord)
      return

    searchWord(randomWord)
  }

  async function searchWord(searchedWord: string) {
    const lowerCaseWord = searchedWord.toLowerCase()
    await getDefinitions(lowerCaseWord)
    handleUpdateWord(lowerCaseWord)
  }

  function handleUpdateWord(value: string) {
    word.value = value
    addWordToHistory(value)
    document.title = `LingoTab • ${capitalizeFirstLetter(value)}`
  }

  return {
    hasLearnedAllWords,
    definitions,
    searchWord,
    isLoading,
    wordsPoll,
    getWord,
    error,
    word,
  }
}
