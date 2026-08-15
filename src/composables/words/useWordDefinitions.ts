import { ref } from 'vue'

export interface IWordDefinition {
  word: string
  phonetic?: string
  phonetics: { text?: string, audio?: string }[]
  meanings: {
    partOfSpeech: string
    definitions: {
      definition: string
      example?: string
      synonyms?: string[]
      antonyms?: string[]
    }[]
  }[]
}

const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

// dictionaryapi.dev intermittently returns 502/503 (or drops the connection) even for
// words that do exist; a 404 means the word genuinely isn't in their dictionary, so we
// don't retry that. Growing delays between attempts avoid hammering their service.
const RETRY_DELAYS_MS = [400, 800, 1200]

const definitions = ref<IWordDefinition[] | null>(null)
const isLoading = ref(false)
const error = ref<unknown>(null)

export default function useWordDefinitions() {
  async function getDefinitions(word: string) {
    try {
      isLoading.value = true
      error.value = null

      let response: Response | null = null
      let lastError: unknown = null

      for (let attempt = 0; attempt <= RETRY_DELAYS_MS.length; attempt++) {
        try {
          response = await fetch(API_URL + word)
          lastError = null
          if (response.ok || response.status === 404)
            break
        }
        catch (e) {
          response = null
          lastError = e
        }

        if (attempt < RETRY_DELAYS_MS.length) {
          await new Promise(resolve => setTimeout(resolve, RETRY_DELAYS_MS[attempt]))
        }
      }

      if (lastError) {
        throw lastError
      }

      if (!response || !response.ok) {
        throw new Error('Failed due to network response.')
      }

      const data: IWordDefinition[] = await response.json()

      definitions.value = data
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
