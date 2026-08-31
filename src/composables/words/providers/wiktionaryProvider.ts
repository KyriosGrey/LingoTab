import type { IWordDefinition } from '../wordEntry'
import { fetchWithRetry } from './fetchWithRetry'

const DEFINITION_API_URL = 'https://en.wiktionary.org/api/rest_v1/page/definition/'
const MEDIA_LIST_API_URL = 'https://en.wiktionary.org/api/rest_v1/page/media-list/'
const COMMONS_API_URL = 'https://commons.wikimedia.org/w/api.php'

function isFinalResponse(response: Response): boolean {
  return response.ok || response.status === 404
}

interface WiktionaryDefinitionEntry {
  partOfSpeech: string
  language: string
  definitions: {
    definition: string
    examples?: string[]
  }[]
}

interface WiktionaryMediaItem {
  title: string
  type: string
}

function stripHtml(html: string): string {
  return new DOMParser().parseFromString(html, 'text/html').body.textContent?.trim() || ''
}

// Wiktionary's definition endpoint has no audio/transcription at all - the audio file
// lives on Wikimedia Commons and is reached in two more steps: find its filename via
// media-list, then resolve that filename to an actual playable URL. A failure here
// shouldn't fail the whole word lookup, since text-only is still a usable result.
async function fetchAudioUrl(word: string): Promise<string | undefined> {
  try {
    const mediaResponse = await fetchWithRetry(MEDIA_LIST_API_URL + encodeURIComponent(word), isFinalResponse)
    if (!mediaResponse.ok)
      return undefined

    const mediaList: { items?: WiktionaryMediaItem[] } = await mediaResponse.json()
    const audioItem = mediaList.items?.find(item => item.type === 'audio')
    if (!audioItem)
      return undefined

    // origin=* is required for the MediaWiki action API to answer with CORS headers
    const commonsUrl = `${COMMONS_API_URL}?action=query&titles=${encodeURIComponent(audioItem.title)}&prop=imageinfo&iiprop=url&format=json&origin=*`
    const commonsResponse = await fetchWithRetry(commonsUrl, isFinalResponse)
    if (!commonsResponse.ok)
      return undefined

    const commonsData = await commonsResponse.json()
    const pages = commonsData?.query?.pages
    const page = pages ? Object.values(pages)[0] as { imageinfo?: { url?: string }[] } : null
    return page?.imageinfo?.[0]?.url
  }
  catch {
    return undefined
  }
}

export async function fetchWordFromWiktionary(word: string): Promise<IWordDefinition[]> {
  const response = await fetchWithRetry(DEFINITION_API_URL + encodeURIComponent(word), isFinalResponse)

  if (!response.ok) {
    throw new Error('Failed due to network response.')
  }

  // Wiktionary keys the response by language code, since one word can exist in many
  // languages at once - we only want the English entries.
  const data: Record<string, WiktionaryDefinitionEntry[]> = await response.json()
  const englishEntries = data.en

  if (!englishEntries || !englishEntries.length) {
    throw new Error('Word not found.')
  }

  const audioUrl = await fetchAudioUrl(word)

  const meanings = englishEntries.map(entry => ({
    partOfSpeech: entry.partOfSpeech,
    definitions: entry.definitions.map(def => ({
      definition: stripHtml(def.definition),
      example: def.examples?.[0] ? stripHtml(def.examples[0]) : undefined,
    })),
  }))

  return [{
    word,
    phonetics: audioUrl ? [{ audio: audioUrl }] : [],
    meanings,
  }]
}
