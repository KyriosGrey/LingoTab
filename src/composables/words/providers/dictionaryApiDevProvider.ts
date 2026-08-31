import type { IWordDefinition } from '../wordEntry'
import { fetchWithRetry } from './fetchWithRetry'

const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

export async function fetchWordFromDictionaryApiDev(word: string): Promise<IWordDefinition[]> {
  // dictionaryapi.dev intermittently returns 502/503 (or drops the connection) even for
  // words that do exist; a 404 means the word genuinely isn't in their dictionary, so we
  // don't retry that.
  const response = await fetchWithRetry(API_URL + word, r => r.ok || r.status === 404)

  if (!response.ok) {
    throw new Error('Failed due to network response.')
  }

  return response.json()
}
