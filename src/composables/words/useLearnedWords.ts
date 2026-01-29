import { useStoredList } from './useStoredList'

const LEARNED_WORDS_STORAGE_KEY = 'lw'

export default function useLearnedWords() {
  const { list, add, has, remove, load } = useStoredList(
    LEARNED_WORDS_STORAGE_KEY,
  )

  load()

  // Mirror to browser.storage after operations
  async function mirrorToBrowserStorage() {
    try {
      const browser = await import('webextension-polyfill')
      const learnedWords = list.value
      await browser.default.storage.local.set({ nwt_learned_words_mirror_v1: learnedWords })
      console.log('[useLearnedWords] Mirrored to browser.storage:', learnedWords.length)
    }
    catch (error) {
      // Silently fail if webextension-polyfill is not available
      console.debug('[useLearnedWords] Mirror skipped:', error)
    }
  }

  function addWithMirror(items: string | string[]) {
    add(items)
    mirrorToBrowserStorage()
  }

  function removeWithMirror(items: string | string[]) {
    remove(items)
    mirrorToBrowserStorage()
  }

  return {
    removeLearnedWords: removeWithMirror,
    reloadLearnedWords: load,
    isLearnedWord: has,
    setAsLearned: addWithMirror,
    learnedWords: list,
  }
}
