import type { IWordExample } from './useWordExamples'
import storage from '@/modules/localStorage'

import { ref } from 'vue'

// ue = user examples: { "bargain": [{ "text": "It's a bargain!", "translation": "По рукам!" }] }
// Kept apart from ut, so the translations' format stays untouched.
// When a word has its own examples, they replace Tatoeba's and no request is made.
const USER_EXAMPLES_STORAGE_KEY = 'ue'
export const USER_EXAMPLES_MAX_COUNT = 5
export const USER_EXAMPLE_MAX_LENGTH = 200

// Module-level, so an edit made in the popup shows up on the card at once.
const userExamples = ref<Record<string, IWordExample[]>>(load())

function load(): Record<string, IWordExample[]> {
  try {
    const parsed = JSON.parse(storage.get(USER_EXAMPLES_STORAGE_KEY) || '{}')
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {}
  }
  catch {
    return {}
  }
}

function save() {
  storage.set(USER_EXAMPLES_STORAGE_KEY, JSON.stringify(userExamples.value))
}

function normalizeWord(word: string) {
  return word.trim().toLowerCase()
}

function get(word: string): IWordExample[] {
  return userExamples.value[normalizeWord(word)] ?? []
}

function has(word: string) {
  return get(word).length > 0
}

function remove(word: string) {
  const { [normalizeWord(word)]: _, ...rest } = userExamples.value
  userExamples.value = rest
  save()
}

// Examples without a sentence are dropped; the translation may stay empty.
// No examples left removes the word's entry, so Tatoeba is used again.
function set(word: string, examples: IWordExample[]) {
  const cleaned = examples
    .map(({ text, translation }) => ({
      text: text.trim().slice(0, USER_EXAMPLE_MAX_LENGTH),
      translation: translation.trim().slice(0, USER_EXAMPLE_MAX_LENGTH),
    }))
    .filter(({ text }) => text)
    .slice(0, USER_EXAMPLES_MAX_COUNT)

  if (!cleaned.length) {
    remove(word)
    return
  }

  userExamples.value = { ...userExamples.value, [normalizeWord(word)]: cleaned }
  save()
}

export default function useUserExamples() {
  return {
    getUserExamples: get,
    hasUserExamples: has,
    setUserExamples: set,
    removeUserExamples: remove,
  }
}
