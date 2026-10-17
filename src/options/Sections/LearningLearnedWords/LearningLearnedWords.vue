<script setup lang="ts">
import type { WordsFileEntry } from '@/utils/wordsFileValidator'
import ActionButton from '@/components/shared/ActionButton.vue'
import useGoogleTranslate from '@/composables/useGoogleTranslate'
import useLearnedWords from '@/composables/words/useLearnedWords'
import useLearningWords from '@/composables/words/useLearningWords'
import useUserTranslations from '@/composables/words/useUserTranslations'
import { t } from '@/i18n'

import Section from '@/options/components/Section.vue'
import { buildWordsFile } from '@/utils/wordsFileValidator'
import { computed, ref } from 'vue'
import ImportLearnedFile from './ImportLearnedFile.vue'
import ImportLearningFile from './ImportLearningFile.vue'
import ImportLearningJsonFile from './ImportLearningJsonFile.vue'

const { learningWords, setAsLearning } = useLearningWords()
const { learnedWords, setAsLearned } = useLearnedWords()
const { getUserTranslation, hasUserTranslation, setUserTranslation } = useUserTranslations()
const { targetLanguage } = useGoogleTranslate()

function handleImportLearning(words: string[]) {
  setAsLearning(words)
}

function handleImportLearned(words: string[]) {
  setAsLearned(words)
}

// Words go to Learning; a translation from the file replaces the user's existing one.
function handleImportLearningJson(entries: WordsFileEntry[]) {
  setAsLearning(entries.map(({ word }) => word))
  entries.forEach(({ word, translation }) => {
    if (translation)
      setUserTranslation(word, translation)
  })
}

function exportWords(words: string[], filename: string) {
  downloadFile(words.join('\n'), filename, 'text/plain')
}

function downloadFile(content: string, filename: string, type: string) {
  try {
    const blob = new Blob([content], { type })
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

// Only the user's own translations go into the file - not the service cache.
function handleExportLearningJson() {
  const entries = learningWords.value.map((word) => {
    const translation = getUserTranslation(word)
    return translation ? { word, translation } : { word }
  })
  downloadFile(JSON.stringify(buildWordsFile(entries), null, 2), 'lingotab-words.json', 'application/json')
}

// Learning words still without the user's own translation - the ones worth sending to an AI.
const untranslatedWords = computed(() => learningWords.value.filter(word => !hasUserTranslation(word)))

// In English on purpose: chat models follow an English format spec most reliably.
// Words may be in any language - the user can add Polish, Japanese, etc. ones.
const aiPrompt = computed(() => [
  `Translate each word below into ${targetLanguage.lang}. The words may be in different languages; detect each word's language yourself.`,
  'Give 1-3 common meanings, comma-separated, max 100 characters per translation.',
  'Reply with JSON only, in exactly this format:',
  '',
  JSON.stringify(buildWordsFile([{ word: 'apple', translation: '<translation>' }]), null, 2),
  '',
  'Words:',
  untranslatedWords.value.length ? untranslatedWords.value.join('\n') : '<paste your words here>',
].join('\n'))

const isPromptCopied = ref(false)

async function handleCopyPrompt() {
  try {
    await navigator.clipboard.writeText(aiPrompt.value)
    isPromptCopied.value = true
    setTimeout(() => (isPromptCopied.value = false), 2000)
  }
  catch (error) {
    console.error('Error copying prompt:', error)
  }
}
</script>

<template>
  <Section
    :title="t('wordLists.title')"
    :description="t('wordLists.description')"
  >
    <div class="word-lists">
      <div class="word-list-section">
        <h3 class="list-title text-heading-18">
          {{ t('wordLists.learning') }}
          <span class="count text-body-sm">({{ learningWords.length }})</span>
        </h3>
        <div class="actions">
          <ImportLearningFile @import="handleImportLearning" />
          <ActionButton
            :disabled="learningWords.length === 0"
            @click="handleExportLearning"
          >
            <i-ic-round-download /> {{ t('wordLists.export') }}
          </ActionButton>
          <ImportLearningJsonFile @import="handleImportLearningJson" />
          <ActionButton
            :disabled="learningWords.length === 0"
            @click="handleExportLearningJson"
          >
            <i-ic-round-download /> {{ t('wordLists.exportJson') }}
          </ActionButton>
        </div>
      </div>

      <div class="word-list-section">
        <h3 class="list-title text-heading-18">
          {{ t('wordLists.learned') }}
          <span class="count text-body-sm">({{ learnedWords.length }})</span>
        </h3>
        <div class="actions">
          <ImportLearnedFile @import="handleImportLearned" />
          <ActionButton
            :disabled="learnedWords.length === 0"
            @click="handleExportLearned"
          >
            <i-ic-round-download /> {{ t('wordLists.export') }}
          </ActionButton>
        </div>
      </div>
    </div>
  </Section>

  <!-- A plain row like "Create your own" in Smart Sentences, not a framed card.
       Kept in this component so its word count follows imports made just above. -->
  <Section
    :title="t('aiPrompt.title')"
    :description="`${t('aiPrompt.description')} ${t('aiPrompt.wordsCount')} ${untranslatedWords.length}`"
  >
    <template #bar>
      <div class="bar-actions">
        <ActionButton @click="handleCopyPrompt">
          <i-ic-round-content-copy /> {{ t('aiPrompt.copy') }}
        </ActionButton>
        <span v-if="isPromptCopied" class="copied-badge text-body-sm">{{ t('aiPrompt.copied') }}</span>
      </div>
    </template>
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

/* Copy button + "Copied!" badge, as in SmartDailySentences/CreatePackPrompt.vue */
.bar-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 0 0 auto;
}

.copied-badge {
  display: inline-flex;
  align-items: center;
  padding: 8px 10px;
  border-radius: 4px;
  color: var(--success-color);
  background: hsla(150, 42.6%, 50.8%, 0.12);
  border: 1px solid hsla(150, 42.6%, 50.8%, 0.3);
  line-height: 1;
}
</style>
