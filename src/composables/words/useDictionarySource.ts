import storage from '@/modules/localStorage'

export type DictionarySource = 'auto' | 'dictionaryapi' | 'wiktionary'

const DICTIONARY_SOURCE_STORAGE_KEY = 'dictionarySource'
const DEFAULT_SOURCE: DictionarySource = 'auto'

function getDictionarySourceFromStorage(): DictionarySource {
  const value = storage.get(DICTIONARY_SOURCE_STORAGE_KEY)

  if (value === 'dictionaryapi' || value === 'wiktionary')
    return value

  return DEFAULT_SOURCE
}

export default function useDictionarySource() {
  const dictionarySource = getDictionarySourceFromStorage()

  function storeDictionarySource(source: DictionarySource) {
    storage.set(DICTIONARY_SOURCE_STORAGE_KEY, source)
  }

  return {
    storeDictionarySource,
    dictionarySource,
  }
}
