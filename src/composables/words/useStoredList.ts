import storage from '@/modules/localStorage'
import { syncLearnedWords } from '@/utils/storage-sync'

import { computed, ref } from 'vue'

const LEARNED_WORDS_KEY = 'lw'

export function useStoredList(storageKey: string) {
  const _listSet = ref(new Set<string>())
  const list = computed(() => Array.from(_listSet.value))

  function has(item: string) {
    return _listSet.value.has(item)
  }

  function add(items: string | string[]) {
    if (Array.isArray(items)) {
      items.forEach(item => _listSet.value.add(item))
    }
    else {
      _listSet.value.add(items)
    }

    _saveToStorage()
  }

  function remove(items: string | string[]) {
    if (Array.isArray(items)) {
      items.forEach(_listSet.value.delete)
    }
    else {
      _listSet.value.delete(items)
    }

    _saveToStorage()
  }

  function _saveToStorage() {
    storage.set(storageKey, list.value.join())
    
    // Mirror learned words to browser.storage.local for background access
    if (storageKey === LEARNED_WORDS_KEY) {
      syncLearnedWords(list.value).catch(err => {
        console.error('Failed to sync learned words:', err)
      })
    }
  }

  function load() {
    try {
      const localCommaSeparatedList = storage.get(storageKey)

      const parsedList = localCommaSeparatedList?.length
        ? localCommaSeparatedList.split(',')
        : []

      const set = new Set(parsedList)

      _listSet.value = set
    }
    catch {
      _listSet.value = new Set()
    }
  }

  return {
    list,
    remove,
    load,
    add,
    has,
  }
}
