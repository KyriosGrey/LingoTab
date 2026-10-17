import { USER_TRANSLATION_MAX_LENGTH } from '@/composables/words/useUserTranslations'
import { isSingleWord } from '@/utils/string'

// "Words with translations" file - the JSON format of the Learning import/export:
// { "format": "lingotab-words", "version": 1, "words": [{ "word": "apple", "translation": "яблоко" }] }
export const WORDS_FILE_FORMAT = 'lingotab-words'
export const WORDS_FILE_VERSION = 1

export interface WordsFileEntry {
  word: string
  translation?: string
}

export function buildWordsFile(words: WordsFileEntry[]) {
  return { format: WORDS_FILE_FORMAT, version: WORDS_FILE_VERSION, words }
}

/**
 * Throws when the content is not JSON or has no word list at all.
 * Otherwise returns the valid entries plus how many were skipped.
 *
 * Lenient on purpose, since these files are often written by an AI chat: a bare
 * array instead of the wrapper, plain strings instead of objects, and a reply
 * still wrapped in a ```json code fence are all accepted.
 */
export function parseWordsFile(content: string): { words: WordsFileEntry[], skipped: number } {
  const json = content.trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '')
  const data = JSON.parse(json)
  const list = Array.isArray(data) ? data : data?.words
  if (!Array.isArray(list))
    throw new Error('No "words" list')

  // Keyed by word, so a repeated word keeps its last translation.
  const entries = new Map<string, WordsFileEntry>()
  let skipped = 0

  for (const item of list) {
    const rawWord = typeof item === 'string' ? item : item?.word
    const word = typeof rawWord === 'string' ? rawWord.trim().toLowerCase() : ''
    if (!isSingleWord(word)) {
      skipped++
      continue
    }

    const rawTranslation = typeof item?.translation === 'string' ? item.translation.trim() : ''
    const translation = rawTranslation.slice(0, USER_TRANSLATION_MAX_LENGTH)
    entries.set(word, translation ? { word, translation } : { word })
  }

  return { words: [...entries.values()], skipped }
}
