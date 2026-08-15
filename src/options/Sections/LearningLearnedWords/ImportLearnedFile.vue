<script lang="ts" setup>
import ActionButton from '@/components/shared/ActionButton.vue'
import FileSelector from '@/components/shared/FileSelector.vue'
import Modal from '@/components/shared/Modal.vue'

import { readFile } from '@/utils/file'
import { getWordsOfText } from '@/utils/string'

import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'import', words: string[]): void
}>()

const isModalOpen = ref(false)
const isFileSelected = ref(false)
const importedWords = ref<string[]>([])
const errorMessage = ref<string>('')

async function handleFile(file: File) {
  try {
    errorMessage.value = ''
    const content = (await readFile(file)) as string
    const words = getWordsOfText(content, 30).map(w => w.toLowerCase())

    importedWords.value = words
    isFileSelected.value = true
  }
  catch (error) {
    errorMessage.value = 'Failed to read file. Please try again.'
    console.error('Error reading file:', error)
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
  isFileSelected.value = false
  errorMessage.value = ''
}
</script>

<template>
  <ActionButton @click="isModalOpen = true">
    <i-ic-round-upload-file /> Import file
  </ActionButton>

  <Modal
    v-model="isModalOpen"
    title="Import Learned Words"
    subtitle="Import a file containing a list of words to add to your learned list"
    @close="handleCleanUp"
  >
    <div class="description text-body-sm">
      <b>Constraints:</b>
      <ul>
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

    <FileSelector id="learned-file" accept="text/plain" @file="handleFile" />

    <div v-if="errorMessage" class="footer error-footer">
      <p class="footer-msg text-body-sm">
        <i-ic-round-error class="icon icon--error" /> {{ errorMessage }}
      </p>
    </div>

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
