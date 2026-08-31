import type { IWordDefinition } from './wordEntry'
import { ref } from 'vue'
import { fetchWordEntry } from './wordProvider'

export type { IWordDefinition } from './wordEntry'

const definitions = ref<IWordDefinition[] | null>(null)
const isLoading = ref(false)
const error = ref<unknown>(null)

export default function useWordDefinitions() {
  async function getDefinitions(word: string) {
    try {
      isLoading.value = true
      error.value = null

      definitions.value = await fetchWordEntry(word)
    }
    catch (e: unknown) {
      error.value = e
    }
    finally {
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
