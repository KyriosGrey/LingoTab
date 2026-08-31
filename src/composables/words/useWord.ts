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

  const { ignoredWords, isIgnoredWord, reloadIgnoredWords } = useIgnoredWords()
  const { addWordToHistory } = wordsHistory()

  // when "Learning words only" is on and the user has words saved,
  // getRandomWord() (useRandomWord.ts) pulls from learningWords instead of
  // the vocabulary-lists pool — this pool must match that so the
  // "nothing to show" gate reflects the words actually used
  const wordsPoll = computed(() => {
    const showLearningOnly = storage.get('showLearningOnly') === 'true'

    return showLearningOnly && learningWords.value.length
      ? learningWords.value
      : listsWordsPoll.value
  })

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
