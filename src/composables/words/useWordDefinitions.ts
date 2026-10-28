import type { IWordDefinition } from './wordEntry'
import { ref } from 'vue'
import { fetchWordEntry } from './wordProvider'

export type { IWordDefinition } from './wordEntry'

const definitions = ref<IWordDefinition[] | null>(null)
const isLoading = ref(false)
const error = ref<unknown>(null)

// The word asked for last: a slower answer for an earlier word must not replace its definitions.
let latestWord = ''

export default function useWordDefinitions() {
  async function getDefinitions(word: string) {
    latestWord = word
    try {
      isLoading.value = true
      error.value = null

      const result = await fetchWordEntry(word)
      if (word === latestWord)
        definitions.value = result
    }
    catch (e: unknown) {
      if (word === latestWord)
        error.value = e
    }
    finally {
      if (word === latestWord)
        isLoading.value = false
    }
  }

  return {
    getDefinitions,
    definitions,
    isLoading,
    error,
  }
}
