<script setup lang="ts">
import type { IWordExample } from '@/composables/words/useWordExamples'
import Modal from '@/components/shared/Modal.vue'
import useGoogleTranslate from '@/composables/useGoogleTranslate'
import useTranslateText from '@/composables/useTranslateText'
import { fetchWordTranslationFallback } from '@/composables/wiktionaryWordTranslation'
import useEditWordModal from '@/composables/words/useEditWordModal'
import useIgnoredWords from '@/composables/words/useIgnoredWords'
import useLearnedWords from '@/composables/words/useLearnedWords'
import useLearningWords from '@/composables/words/useLearningWords'
import useUserExamples, { USER_EXAMPLE_MAX_LENGTH, USER_EXAMPLES_MAX_COUNT } from '@/composables/words/useUserExamples'
import useUserTranslations, { USER_TRANSLATION_MAX_LENGTH } from '@/composables/words/useUserTranslations'
import { t } from '@/i18n'
import { guessSourceLanguage, isSingleWord } from '@/utils/string'
import { computed, ref, watch } from 'vue'

const { isEditWordModalOpen, editedWord, closeEditWordModal, notifySaved } = useEditWordModal()
const { getUserTranslation, setUserTranslation, removeUserTranslation } = useUserTranslations()
const { getUserExamples, setUserExamples, removeUserExamples } = useUserExamples()
const { translate, getCachedTranslation } = useTranslateText()
const { targetLanguage } = useGoogleTranslate()
const { isLearningWord, setAsLearning, removeLearningWords, reloadLearningWords } = useLearningWords()
const { isLearnedWord, removeLearnedWords, reloadLearnedWords } = useLearnedWords()
const { isIgnoredWord, removeIgnoredWords, reloadIgnoredWords } = useIgnoredWords()

const isAddMode = computed(() => !editedWord.value)

const word = ref('')
const translation = ref('')
// The user's own usage examples; empty ones are dropped on save.
const examples = ref<IWordExample[]>([])
// The API translation the field was prefilled with, if any. Saving it back untouched must
// not turn it into "your" translation.
let prefilledApiTranslation = ''

const isTranslating = ref(false)
const translateError = ref(false)

watch(isEditWordModalOpen, (open) => {
  if (!open)
    return

  // Other instances (the card, the drawer) may have changed the lists since these loaded.
  reloadLearningWords()
  reloadLearnedWords()
  reloadIgnoredWords()
  word.value = editedWord.value
  const userTranslation = getUserTranslation(editedWord.value)
  prefilledApiTranslation = userTranslation || isAddMode.value
    ? ''
    : (getCachedTranslation(editedWord.value, guessSourceLanguage(editedWord.value)) ?? '')
  translation.value = userTranslation ?? prefilledApiTranslation
  examples.value = getUserExamples(editedWord.value).map(example => ({ ...example }))
  isTranslating.value = false
  translateError.value = false
})

watch([word, translation], () => {
  translateError.value = false
})

const normalizedWord = computed(() => word.value.trim().toLowerCase())

const wordError = computed(() => {
  const w = normalizedWord.value
  if (!w)
    return ''
  if (!isSingleWord(w))
    return t('editWord.invalidWord')
  if (w !== editedWord.value.toLowerCase() && isLearningWord(w))
    return t('editWord.duplicateWord')
  return ''
})

// Not an error: a word from Learned / Ignored is simply moved over to Learning on save.
const wordHint = computed(() => {
  const w = normalizedWord.value
  if (!w || wordError.value)
    return ''
  if (isLearnedWord(w))
    return t('editWord.movedFromLearned')
  if (isIgnoredWord(w))
    return t('editWord.movedFromIgnored')
  return ''
})

const isFormValid = computed(() => Boolean(normalizedWord.value) && !wordError.value)

async function handleTranslate() {
  if (!isFormValid.value || isTranslating.value)
    return

  const w = normalizedWord.value
  const sl = guessSourceLanguage(w)
  isTranslating.value = true
  let result = ''
  try {
    result = await translate(w, sl)
  }
  catch {
    // Wiktionary's fallback reads English entries only.
    if (sl === 'en')
      result = (await fetchWordTranslationFallback(w, (targetLanguage?.code || 'ru').toLowerCase())) || ''
  }
  isTranslating.value = false

  if (!result) {
    translateError.value = true
    return
  }

  // Asked for explicitly, so saving it counts as the user's own translation.
  prefilledApiTranslation = ''
  translation.value = result.slice(0, USER_TRANSLATION_MAX_LENGTH)
}

function addExample() {
  if (examples.value.length < USER_EXAMPLES_MAX_COUNT)
    examples.value.push({ text: '', translation: '' })
}

function removeExample(index: number) {
  examples.value.splice(index, 1)
}

function handleSubmit() {
  if (!isFormValid.value)
    return

  const oldWord = editedWord.value.toLowerCase()
  const newWord = normalizedWord.value

  if (oldWord && newWord !== oldWord) {
    removeLearningWords(oldWord)
    removeUserTranslation(oldWord)
    removeUserExamples(oldWord)
  }

  removeLearnedWords(newWord)
  removeIgnoredWords(newWord)
  setAsLearning(newWord)
  const isUntouchedApiTranslation = prefilledApiTranslation && translation.value.trim() === prefilledApiTranslation
  setUserTranslation(newWord, isUntouchedApiTranslation ? '' : translation.value)
  setUserExamples(newWord, examples.value)

  notifySaved(newWord)
  closeEditWordModal()
}
</script>

<template>
  <Modal
    v-model="isEditWordModalOpen"
    :title="isAddMode ? t('editWord.addTitle') : t('editWord.title')"
    max-width="420px"
  >
    <form class="form" @submit.prevent="handleSubmit">
      <label class="form__label text-body-sm">
        {{ t('editWord.word') }}
        <input
          v-model="word"
          class="form__input text-body"
          :class="{ 'form__input--error': wordError }"
        >
        <small v-if="wordError" class="form__error text-body-sm-italic">
          {{ wordError }}
        </small>
        <small v-else-if="wordHint" class="form__hint text-body-sm-italic">
          {{ wordHint }}
        </small>
      </label>

      <div class="form__label text-body-sm">
        <span class="form__label-row">
          <label for="edit-word-translation">{{ t('editWord.translation') }}</label>
          <span class="form__counter">{{ translation.length }}/{{ USER_TRANSLATION_MAX_LENGTH }}</span>
        </span>
        <div class="form__textarea-wrap">
          <textarea
            id="edit-word-translation"
            v-model="translation"
            class="form__input form__textarea text-body"
            rows="2"
            :maxlength="USER_TRANSLATION_MAX_LENGTH"
            :placeholder="t('editWord.translationPlaceholder')"
            @keydown.enter.prevent="handleSubmit"
          />
          <button
            type="button"
            class="form__translate-btn"
            :class="{ 'form__translate-btn--loading': isTranslating }"
            :title="t('editWord.translate')"
            :aria-label="t('editWord.translate')"
            :disabled="!isFormValid || isTranslating"
            @click="handleTranslate"
          >
            <i-ic-round-g-translate />
          </button>
        </div>
        <small v-if="translateError" class="form__error text-body-sm-italic">
          {{ t('editWord.translateFailed') }}
        </small>
      </div>

      <div class="form__label text-body-sm">
        <span class="form__label-row">
          <span>{{ t('editWord.examples') }}</span>
          <span class="form__counter">{{ examples.length }}/{{ USER_EXAMPLES_MAX_COUNT }}</span>
        </span>
        <div v-if="examples.length" class="form__examples">
          <div v-for="(example, index) of examples" :key="index" class="form__example">
            <div class="form__example-fields">
              <input
                v-model="example.text"
                class="form__example-input text-body"
                :maxlength="USER_EXAMPLE_MAX_LENGTH"
                :placeholder="t('editWord.examplePlaceholder')"
              >
              <input
                v-model="example.translation"
                class="form__example-input text-body"
                :maxlength="USER_EXAMPLE_MAX_LENGTH"
                :placeholder="t('editWord.exampleTranslationPlaceholder')"
              >
            </div>
            <button
              type="button"
              class="form__remove-example-btn"
              :title="t('editWord.removeExample')"
              :aria-label="t('editWord.removeExample')"
              @click="removeExample(index)"
            >
              <i-ic-round-close />
            </button>
          </div>
        </div>
        <button
          v-if="examples.length < USER_EXAMPLES_MAX_COUNT"
          type="button"
          class="form__add-example-btn text-body-sm"
          @click="addExample"
        >
          <i-ic-round-add /> {{ t('editWord.addExample') }}
        </button>
      </div>

      <div class="form__footer">
        <button type="button" class="form__cancel-btn text-body-sm" @click="closeEditWordModal">
          {{ t('shortcut.cancel') }}
        </button>
        <button type="submit" class="form__submit-btn text-body-sm" :disabled="!isFormValid">
          {{ t('shortcut.done') }}
        </button>
      </div>
    </form>
  </Modal>
</template>

<style scoped>
/* Form styles follow AddShortcutForm.vue so both popups look the same. */
.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.form__label {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
  color: var(--text-secondary);
}
.form__label-row {
  display: flex;
  justify-content: space-between;
}
.form__counter {
  font-variant-numeric: tabular-nums;
}
.form__input {
  background-color: var(--bg-color);
  color: var(--color);
  border: 1px solid var(--overlay-weak);
  outline: none;
  height: 34px;
  border-radius: 6px;
  padding: 8px 10px;
  transition: border-color 0.15s ease-in-out;
}
.form__textarea {
  width: 100%;
  height: auto;
  resize: none;
  font-family: inherit;
  /* room for the translate button in the corner */
  padding-right: 40px;
}
.form__textarea-wrap {
  position: relative;
  display: flex;
}
.form__translate-btn {
  position: absolute;
  top: 4px;
  right: 4px;
  display: inline-flex;
  padding: 5px;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  transition: background-color 0.13s ease-in-out, color 0.13s ease-in-out;
}
.form__translate-btn :deep(svg) {
  width: 18px;
  height: 18px;
}
.form__translate-btn:hover:not(:disabled) {
  background-color: var(--overlay-weak);
  color: var(--accent-color-hover);
}
.form__translate-btn:disabled {
  cursor: not-allowed;
  opacity: 0.4;
}
.form__translate-btn--loading:disabled {
  cursor: progress;
  opacity: 1;
  color: var(--accent-color-hover);
  animation: translate-pulse 0.9s ease-in-out infinite alternate;
}
@keyframes translate-pulse {
  from { opacity: 1; }
  to { opacity: 0.35; }
}
.form__hint {
  color: var(--text-secondary);
}
.form__input:focus {
  border-color: var(--accent-color-hover);
}
.form__input--error,
.form__input--error:focus {
  border-color: var(--error-color);
}

/* In the flow (not absolute as in AddShortcutForm) so it can't overlap the next label. */
.form__error {
  color: var(--error-color);
}

/* Each example: sentence + translation fields joined in one box, × on the right.
   The list scrolls on its own, since the popup itself doesn't. */
.form__examples {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 40vh;
  overflow-y: auto;
}
.form__example {
  display: flex;
  align-items: center;
  gap: 4px;
}
.form__example-fields {
  flex: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--overlay-weak);
  border-radius: 6px;
  background-color: var(--bg-color);
  transition: border-color 0.15s ease-in-out;
}
.form__example-fields:focus-within {
  border-color: var(--accent-color-hover);
}
.form__example-input {
  height: 34px;
  padding: 8px 10px;
  border: none;
  outline: none;
  background: transparent;
  color: var(--color);
  font-family: inherit;
}
.form__example-input + .form__example-input {
  border-top: 1px solid var(--overlay-weak);
}
.form__remove-example-btn {
  display: inline-flex;
  padding: 5px;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  transition: background-color 0.13s ease-in-out, color 0.13s ease-in-out;
}
.form__remove-example-btn :deep(svg) {
  width: 18px;
  height: 18px;
}
.form__remove-example-btn:hover {
  background-color: var(--overlay-weak);
  color: var(--color);
}
.form__add-example-btn {
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: 4px;
  padding: 4px 6px;
  margin-left: -6px;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: var(--accent-color-hover);
  font-family: inherit;
  cursor: pointer;
  transition: background-color 0.13s ease-in-out;
}
.form__add-example-btn:hover {
  background-color: var(--overlay-weak);
}

.form__footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
.form__footer button {
  border-radius: 4px;
  font-family: inherit;
}

.form__cancel-btn {
  padding: 8px 12px;
  border: 1px solid var(--overlay-strong);
  background-color: var(--overlay-weak);
  color: var(--color);
}
.form__cancel-btn:hover {
  background-color: var(--overlay-strong);
}

.form__submit-btn {
  padding: 8px 16px;
  height: 34px;
  border: 1px solid var(--overlay-strong);
  background-color: var(--accent-color-hover);
  color: #fff;
  transition: filter 0.15s ease-in-out;
}
.form__submit-btn:hover:not(:disabled) {
  filter: brightness(1.1);
}
.form__submit-btn:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
