<script lang="ts" setup>
import type { WordsFileEntry } from '@/utils/wordsFileValidator'
import ActionButton from '@/components/shared/ActionButton.vue'
import FileSelector from '@/components/shared/FileSelector.vue'
import Modal from '@/components/shared/Modal.vue'
import useLearningWords from '@/composables/words/useLearningWords'
import useUserExamples from '@/composables/words/useUserExamples'
import useUserTranslations from '@/composables/words/useUserTranslations'
import { t } from '@/i18n'

import { readFile } from '@/utils/file'
import { parseWordsFile } from '@/utils/wordsFileValidator'

import { computed, ref } from 'vue'

const emit = defineEmits<{
  (e: 'import', words: WordsFileEntry[]): void
}>()

const { isLearningWord, reloadLearningWords } = useLearningWords()
const { getUserTranslation } = useUserTranslations()
const { getUserExamples } = useUserExamples()

const isModalOpen = ref(false)
const isFileSelected = ref(false)
const importedWords = ref<WordsFileEntry[]>([])
const skippedCount = ref(0)
const errorMessage = ref('')

const newWordsCount = computed(() => importedWords.value.filter(({ word }) => !isLearningWord(word)).length)
const translationsCount = computed(() => importedWords.value.filter(({ translation }) => translation).length)
// Translations that will overwrite a different one the user already has.
const replacedCount = computed(() => importedWords.value.filter(({ word, translation }) => {
  const current = getUserTranslation(word)
  return translation && current && current !== translation
}).length)
const examplesCount = computed(() => importedWords.value.filter(({ examples }) => examples?.length).length)
// Words whose own examples will be replaced by different ones from the file.
const replacedExamplesCount = computed(() => importedWords.value.filter(({ word, examples }) => {
  const current = getUserExamples(word)
  return examples?.length && current.length && JSON.stringify(current) !== JSON.stringify(examples)
}).length)

async function handleFile(file: File) {
  errorMessage.value = ''
  isFileSelected.value = false
  try {
    const content = (await readFile(file)) as string
    const { words, skipped } = parseWordsFile(content)
    reloadLearningWords()
    importedWords.value = words
    skippedCount.value = skipped
    isFileSelected.value = true
  }
  catch (error) {
    errorMessage.value = t('import.json.invalid')
    console.error('Error reading words file:', error)
  }
}

function handleImport() {
  emit('import', importedWords.value)
  handleClose()
}

function handleClose() {
  isModalOpen.value = false
}

function handleCleanUp() {
  importedWords.value = []
  skippedCount.value = 0
  isFileSelected.value = false
  errorMessage.value = ''
}
</script>

<template>
  <ActionButton @click="isModalOpen = true">
    <i-ic-round-upload-file /> {{ t('wordLists.importJson') }}
  </ActionButton>

  <Modal
    v-model="isModalOpen"
    :title="t('import.json.title')"
    :subtitle="t('import.json.subtitle')"
    @close="handleCleanUp"
  >
    <FileSelector id="learning-json-file" accept="application/json,.json" @file="handleFile" />

    <div v-if="errorMessage" class="footer">
      <p class="footer-msg text-body-sm">
        <i-ic-round-error class="icon icon--error" /> {{ errorMessage }}
      </p>
    </div>

    <div v-if="isFileSelected" class="footer">
      <template v-if="importedWords.length">
        <div class="summary text-body-sm">
          <p class="footer-msg">
            <i-ic-round-check-circle class="icon icon--success" />
            {{ t('import.found') }} <b>{{ importedWords.length }}</b>
          </p>
          <p class="summary__line">
            {{ t('import.json.newWords') }} <b>{{ newWordsCount }}</b>
            · {{ t('import.json.translations') }} <b>{{ translationsCount }}</b>
            <template v-if="replacedCount">
              · {{ t('import.json.replaced') }} <b>{{ replacedCount }}</b>
            </template>
          </p>
          <p v-if="examplesCount" class="summary__line">
            {{ t('import.json.examples') }} <b>{{ examplesCount }}</b>
            <template v-if="replacedExamplesCount">
              · {{ t('import.json.replacedExamples') }} <b>{{ replacedExamplesCount }}</b>
            </template>
          </p>
          <p v-if="skippedCount" class="summary__line">
            {{ t('import.json.skipped') }} <b>{{ skippedCount }}</b>
          </p>
        </div>

        <div class="actions">
          <button class="btn text-body-sm" @click="handleClose">
            {{ t('import.cancel') }}
          </button>
          <button class="btn btn--primary text-body-sm" @click="handleImport">
            {{ t('import.confirm') }}
          </button>
        </div>
      </template>
      <template v-else>
        <p class="footer-msg text-body-sm">
          <i-ic-round-error class="icon icon--error" /> {{ t('import.none') }}
        </p>
      </template>
    </div>
  </Modal>
</template>

<style scoped>
/* Same footer/buttons as ImportLearningFile.vue */
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  border-top: 1px solid var(--overlay-strong);
  padding-top: 15px;
}

.footer p {
  margin: 0;
  color: var(--color);
}

.summary {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.summary .summary__line {
  color: var(--text-secondary);
}

.actions {
  display: flex;
  gap: 8px;
}

.icon--success {
  color: var(--success-color);
}
.icon--error {
  color: var(--error-color);
}

.btn {
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid var(--overlay-strong);
  background-color: var(--overlay-weak);
  color: var(--color);
  transition: background-color 0.15s ease-in-out;
}
.btn:hover {
  background-color: var(--overlay-strong);
}

.btn--primary {
  border: 1px solid var(--overlay-strong);
  background-color: var(--accent-color-hover);
  color: #fff;
  transition: filter 0.15s ease-in-out;
}
.btn--primary:hover {
  filter: brightness(1.1);
}

.footer-msg {
  display: flex;
  align-items: center;
  gap: 6px;
}
</style>
