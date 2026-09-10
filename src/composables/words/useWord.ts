import storage from '@/modules/localStorage'
import { capitalizeFirstLetter } from '@/utils/string'
import { computed, ref } from 'vue'
import useIgnoredWords from './useIgnoredWords'
import useLearningWords from './useLearningWords'
import useRandomWord from './useRandomWord'
import useWordDefinitions from './useWordDefinitions'
import useWordLists from './useWordLists'
import wordsHistory from './useWordsHistory'

const word = ref('')

// true when the current word came from an explicit user request
// (search bar, history, marked words, inventory) instead of the random flow.
// MixedPractice.vue reads it to leave the sentence screen for the word screen.
const isSearchedWord = ref(false)

export default function useWord() {
  const { wordsPoll: listsWordsPoll } = useWordLists()
  const { learningWords } = useLearningWords()

  const { isIgnoredWord, reloadIgnoredWords } = useIgnoredWords()
  const { addWordToHistory } = wordsHistory()

  // "Learning words only" is on and the user has words saved: the personal
  // list wins over everything else — it is the single pool both the word
  // picker and the empty-state gates read, and the ignored list does not apply
  const isLearningOnlyMode = computed(
    () => storage.get('showLearningOnly') === 'true' && !!learningWords.value.length,
  )

  const wordsPoll = computed(() =>
    isLearningOnlyMode.value ? learningWords.value : listsWordsPoll.value,
  )

  // ✅ Исправлено: явно указываем тип word: string
  const unIgnoredWords = computed(() =>
    isLearningOnlyMode.value
      ? wordsPoll.value
      : wordsPoll.value.filter((word: string) => !isIgnoredWord(word)),
  )

  const { getRandomWord } = useRandomWord(unIgnoredWords)
  const { isLoading, definitions, error, getDefinitions } = useWordDefinitions()

  // compare the actual words, not the list sizes: a big ignored list must not
  // make a smaller pool look fully learned
  const hasLearnedAllWords = computed(
    () => !!wordsPoll.value.length && !unIgnoredWords.value.length,
  )

  async function getWord() {
    reloadIgnoredWords()

    const randomWord = getRandomWord().value
    if (!randomWord)
      return

    isSearchedWord.value = false
    await loadWord(randomWord)
  }

  async function searchWord(searchedWord: string) {
    isSearchedWord.value = true
    await loadWord(searchedWord)
  }

  async function loadWord(value: string) {
    const lowerCaseWord = value.toLowerCase()
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
    isSearchedWord,
    definitions,
    searchWord,
    isLoading,
    wordsPoll,
    getWord,
    error,
    word,
  }
}
