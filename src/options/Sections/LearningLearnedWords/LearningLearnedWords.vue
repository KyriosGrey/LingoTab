<script setup lang="ts">
import useLearnedWords from '@/composables/words/useLearnedWords'
import useLearningWords from '@/composables/words/useLearningWords'

import Section from '@/options/components/Section.vue'
import ImportLearnedFile from './ImportLearnedFile.vue'
import ImportLearningFile from './ImportLearningFile.vue'
import RepetitionFrequency from './RepetitionFrequency.vue'

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
        <h3 class="list-title">
          Learning Words
          <span class="count">({{ learningWords.length }})</span>
        </h3>
        <div class="actions">
          <ImportLearningFile @import="handleImportLearning" />
          <button
            class="export-btn"
            :disabled="learningWords.length === 0"
            @click="handleExportLearning"
          >
            <i-ic-round-download /> Export
          </button>
        </div>
      </div>

      <div class="word-list-section">
        <h3 class="list-title">
          Learned Words
          <span class="count">({{ learnedWords.length }})</span>
        </h3>
        <div class="actions">
          <ImportLearnedFile @import="handleImportLearned" />
          <button
            class="export-btn"
            :disabled="learnedWords.length === 0"
            @click="handleExportLearned"
          >
            <i-ic-round-download /> Export
          </button>
        </div>
      </div>
    </div>

    <!-- Repetition Frequency Setting -->
    <RepetitionFrequency />
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
  gap: 10px;
  padding: 15px;
  border: 0px solid hsla(var(--color-raw), 0.2);
  border-radius: 8px;
  background-color: hsla(var(--color-raw), 0.03);
}

/* на очень узких экранах — одна колонка */
@media (max-width: 700px) {
  .word-list-section {
    flex-basis: 100%;
  }
}

/* остальное без изменений */
.list-title {
  font-size: 0.95rem;
  font-weight: 600;
  margin: 0 0 5px 0;
  color: var(--color);
}

.count {
  font-weight: normal;
  font-size: 0.85rem;
  color: hsla(var(--color-raw), 0.6);
}

.actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.export-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 8px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  border: none;
  color: var(--color);
  background-color: hsla(var(--color-raw), 0.1);
  transition: background-color ease-in-out 0.13s;
}

.export-btn:hover:not(:disabled) {
  background-color: hsla(var(--color-raw), 0.2);
}

.export-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>