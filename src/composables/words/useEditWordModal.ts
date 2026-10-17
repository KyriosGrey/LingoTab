import { ref } from 'vue'

const isEditWordModalOpen = ref(false)
// Empty = "add a new word" mode.
const editedWord = ref('')
let onSaved: ((word: string) => void) | undefined

export default function useEditWordModal() {
  function openEditWordModal(word: string, onSavedCallback?: (word: string) => void) {
    editedWord.value = word
    onSaved = onSavedCallback
    isEditWordModalOpen.value = true
  }

  function openAddWordModal(onSavedCallback?: (word: string) => void) {
    openEditWordModal('', onSavedCallback)
  }

  function closeEditWordModal() {
    isEditWordModalOpen.value = false
  }

  function notifySaved(word: string) {
    onSaved?.(word)
  }

  return {
    isEditWordModalOpen,
    editedWord,
    openEditWordModal,
    openAddWordModal,
    closeEditWordModal,
    notifySaved,
  }
}
