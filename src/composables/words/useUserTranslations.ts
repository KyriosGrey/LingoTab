import storage from '@/modules/localStorage'

import { ref } from 'vue'

// ut = user translations: { "apple": "яблоко, яблоня" }
// Kept apart from mw/lw/iw so their comma-joined format stays untouched.
const USER_TRANSLATIONS_STORAGE_KEY = 'ut'
export const USER_TRANSLATION_MAX_LENGTH = 100

// Module-level, so an edit made in one place (popup) shows up everywhere at once.
const translations = ref<Record<string, string>>(load())

function load(): Record<string, string> {
  try {
    const parsed = JSON.parse(storage.get(USER_TRANSLATIONS_STORAGE_KEY) || '{}')
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {}
  }
  catch {
    return {}
  }
}

function save() {
  storage.set(USER_TRANSLATIONS_STORAGE_KEY, JSON.stringify(translations.value))
}

function normalizeWord(word: string) {
  return word.trim().toLowerCase()
}

function get(word: string): string | undefined {
  return translations.value[normalizeWord(word)]
}

function has(word: string) {
  return !!get(word)
}

function remove(word: string) {
  const { [normalizeWord(word)]: _, ...rest } = translations.value
  translations.value = rest
  save()
}

// An empty translation removes the user's one, so the word goes back to the API translation.
function set(word: string, translation: string) {
  const text = translation.trim().slice(0, USER_TRANSLATION_MAX_LENGTH)
  if (!text) {
    remove(word)
    return
  }

  translations.value = { ...translations.value, [normalizeWord(word)]: text }
  save()
}

export default function useUserTranslations() {
  return {
    userTranslations: translations,
    getUserTranslation: get,
    hasUserTranslation: has,
    setUserTranslation: set,
    removeUserTranslation: remove,
  }
}
