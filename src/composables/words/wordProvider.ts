import type { IWordDefinition } from './wordEntry'
import useDictionarySource from './useDictionarySource'
import { fetchWordFromDictionaryApiDev } from './providers/dictionaryApiDevProvider'
import { fetchWordFromWiktionary } from './providers/wiktionaryProvider'

export async function fetchWordEntry(word: string): Promise<IWordDefinition[]> {
  const { dictionarySource } = useDictionarySource()

  if (dictionarySource === 'dictionaryapi')
    return fetchWordFromDictionaryApiDev(word)

  if (dictionarySource === 'wiktionary')
    return fetchWordFromWiktionary(word)

  // 'auto' (default): Wiktionary is the primary source (more stable in practice than
  // dictionaryapi.dev); if it fails for any reason, dictionaryapi.dev is tried
  // silently as a fallback before giving up, so a transient outage on one service
  // doesn't look like "word not found".
  try {
    return await fetchWordFromWiktionary(word)
  }
  catch (primaryError) {
    try {
      return await fetchWordFromDictionaryApiDev(word)
    }
    catch {
      throw primaryError
    }
  }
}
