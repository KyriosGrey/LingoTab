<script lang="ts" setup>
import ActionButton from '@/components/shared/ActionButton.vue'
import FileSelector from '@/components/shared/FileSelector.vue'

import Modal from '@/components/shared/Modal.vue'
import useWordLists from '@/composables/words/useWordLists'
import { readFile } from '@/utils/file'

import { getWordsOfText } from '@/utils/string'
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'import', words: string[]): void
}>()

const { getIntersection } = useWordLists()

const isModalOpen = ref(false)
const isFileSelected = ref(false)
const importedWords = ref<string[]>([])

async function handleFile(file: File) {
  const content = (await readFile(file)) as string
  const words = getWordsOfText(content, 30).map(w => w.toLowerCase())
  const intersect = getIntersection(words)

  importedWords.value = intersect
  isFileSelected.value = true
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
  isFileSelected.value = false
}
</script>

<template>
  <ActionButton @click="isModalOpen = true">
    <i-ic-round-upload-file /> Import file
  </ActionButton>

  <Modal
    v-model="isModalOpen"
    title="Import file"
    subtitle="Easily expand ignored words by importing a file containing a list of words"
    @close="handleCleanUp"
  >
    <div class="description text-body-sm">
      <b>Constraints:</b>
      <ul>
        <li>
          Only the words that are available in our vocabulary lists will be
          matched
        </li>
        <li>
          Words can be separated using <b>space</b>, <b>tab</b>, <b>comma</b>,
          or
          <b>newline</b>
        </li>
        <li>Only words with less than <b>30</b> characters will be included</li>
        <li>All words will be auto-converted to <b>lowercase</b></li>
        <li>A <b>plain text</b> file will do the job</li>
      </ul>
    </div>

    <FileSelector id="ignore-file" accept="text/plain" @file="handleFile" />

    <div v-if="isFileSelected" class="footer">
      <template v-if="importedWords.length">
        <p class="footer-msg text-body-sm">
          <i-ic-round-check-circle class="icon icon--success" />
          Found <b>{{ importedWords.length }}</b> word{{
            importedWords.length > 1 ? 's' : ''
          }}
        </p>

        <div class="actions">
          <button class="btn text-body-sm" @click="handleClose">
            Cancel
          </button>
          <button class="btn btn--primary text-body-sm" @click="handleImport">
            Import
          </button>
        </div>
      </template>
      <template v-else>
        <p class="footer-msg text-body-sm">
          <i-ic-round-error class="icon icon--error" /> No word found! Select another file.
        </p>
      </template>
    </div>
  </Modal>
</template>

<style scoped>
.description {
  color: var(--color);
}
.description b {
  font-weight: 600;
}

ul {
  padding-left: 25px;
}
ul li {
  margin: 0 0 5px;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--overlay-strong);
  padding-top: 15px;
}

.footer p {
  margin: 0;
  color: var(--color);
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
