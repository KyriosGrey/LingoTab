<script setup lang="ts">
import ActionButton from '@/components/shared/ActionButton.vue'
import useLearnedWords from '@/composables/words/useLearnedWords'
import useLearningWords from '@/composables/words/useLearningWords'

import Section from '@/options/components/Section.vue'
import ImportLearnedFile from './ImportLearnedFile.vue'
import ImportLearningFile from './ImportLearningFile.vue'

const { learningWords, setAsLearning } = useLearningWords()
const { learnedWords, setAsLearned } = useLearnedWords()

function handleImportLearning(words: string[]) {
  setAsLearning(words)
}

function handleImportLearned(words: string[]) {
  setAsLearned(words)
}

function exportWords(words: string[], filename: string) {
  try {
    const content = words.join('\n')
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }
  catch (error) {
    console.error('Error exporting words:', error)
    // Fallback: show error in console as we don't have a notification system
  }
}

function handleExportLearning() {
  exportWords(learningWords.value, 'nwt-learning-words.txt')
}

function handleExportLearned() {
  exportWords(learnedWords.value, 'nwt-learned-words.txt')
}
</script>

<template>
  <Section
    title="Learning & Learned Words"
    description="Import or export your learning and learned word lists"
  >
    <div class="word-lists">
      <div class="word-list-section">
        <h3 class="list-title text-heading-18">
          Learning Words
          <span class="count text-body-sm">({{ learningWords.length }})</span>
        </h3>
        <div class="actions">
          <ImportLearningFile @import="handleImportLearning" />
          <ActionButton
            :disabled="learningWords.length === 0"
            @click="handleExportLearning"
          >
            <i-ic-round-download /> Export
          </ActionButton>
        </div>
      </div>

      <div class="word-list-section">
        <h3 class="list-title text-heading-18">
          Learned Words
          <span class="count text-body-sm">({{ learnedWords.length }})</span>
        </h3>
        <div class="actions">
          <ImportLearnedFile @import="handleImportLearned" />
          <ActionButton
            :disabled="learnedWords.length === 0"
            @click="handleExportLearned"
          >
            <i-ic-round-download /> Export
          </ActionButton>
        </div>
      </div>
    </div>
  </Section>
</template>

<style scoped>
.word-lists {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: stretch;
  flex-wrap: wrap; /* важно */
}

.word-list-section {
  /* две колонки, если ширины хватает */
  flex: 1 1 calc(50% - 10px); /* 10px = половина gap */
  min-width: 280px; /* чтобы кнопки/заголовок не ломались слишком узко */

  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid var(--overlay-weak);
  border-radius: 10px;
  background-color: var(--surface-color);
}

/* на очень узких экранах — одна колонка */
@media (max-width: 700px) {
  .word-list-section {
    flex-basis: 100%;
  }
}

.list-title {
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin: 0;
  color: var(--color);
}

.count {
  color: var(--text-secondary);
}

.actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
</style>
