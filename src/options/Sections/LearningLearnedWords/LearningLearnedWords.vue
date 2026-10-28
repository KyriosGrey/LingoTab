<script setup lang="ts">
import type { WordsFileEntry } from '@/utils/wordsFileValidator'
import ActionButton from '@/components/shared/ActionButton.vue'
import useGoogleTranslate from '@/composables/useGoogleTranslate'
import useLearnedWords from '@/composables/words/useLearnedWords'
import useLearningWords from '@/composables/words/useLearningWords'
import useUserExamples from '@/composables/words/useUserExamples'
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
const { getUserExamples, hasUserExamples, setUserExamples } = useUserExamples()
const { targetLanguage } = useGoogleTranslate()

function handleImportLearning(words: string[]) {
  setAsLearning(words)
}

function handleImportLearned(words: string[]) {
  setAsLearned(words)
}

// Words go to Learning; a translation or examples from the file replace the user's existing ones.
function handleImportLearningJson(entries: WordsFileEntry[]) {
  setAsLearning(entries.map(({ word }) => word))
  entries.forEach(({ word, translation, examples }) => {
    if (translation)
      setUserTranslation(word, translation)
    if (examples?.length)
      setUserExamples(word, examples)
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

// Only the user's own translations and examples go into the file - not the service cache or Tatoeba.
function handleExportLearningJson() {
  const entries = learningWords.value.map((word) => {
    const entry: WordsFileEntry = { word }
    const translation = getUserTranslation(word)
    const examples = getUserExamples(word)
    if (translation)
      entry.translation = translation
    if (examples.length)
      entry.examples = examples
    return entry
  })
  downloadFile(JSON.stringify(buildWordsFile(entries), null, 2), 'lingotab-words.json', 'application/json')
}

// Learning words worth sending to an AI: without the user's own translation (they get a
// translation and examples), or translated but without examples (examples only, so the
// user's translation isn't overwritten). Words that have both are left out.
const untranslatedWords = computed(() => learningWords.value.filter(word => !hasUserTranslation(word)))
const wordsWithoutExamples = computed(() => learningWords.value.filter(word => hasUserTranslation(word) && !hasUserExamples(word)))
const promptWordsCount = computed(() => untranslatedWords.value.length + wordsWithoutExamples.value.length)

const PROMPT_EXAMPLES_COUNT = 3

// In English on purpose: chat models follow an English format spec most reliably.
// Words may be in any language - the user can add Polish, Japanese, etc. ones.
const aiPrompt = computed(() => {
  const exampleEntry = { text: '<sentence with the word>', translation: `<its translation into ${targetLanguage.lang}>` }
  const examples = Array.from({ length: PROMPT_EXAMPLES_COUNT }, () => exampleEntry)
  const lines = [
    `For each word below, write ${PROMPT_EXAMPLES_COUNT} short, natural example sentences showing its most common meanings, each with a translation into ${targetLanguage.lang}. The words may be in different languages; detect each word's language yourself and write the sentences in that language.`,
    `Words in the first list also need a translation into ${targetLanguage.lang}: 1-3 common meanings, comma-separated, max 100 characters. For words in the second list leave out "translation" - the user already has one.`,
    'Keep every sentence and its translation under 200 characters.',
    'Reply with JSON only, in exactly this format:',
    '',
    JSON.stringify(buildWordsFile([
      { word: 'apple', translation: '<translation>', examples },
      { word: 'bargain', examples },
    ]), null, 2),
  ]
  if (untranslatedWords.value.length || !promptWordsCount.value)
    lines.push('', 'Words that need a translation and examples:', untranslatedWords.value.join('\n') || '<paste your words here>')
  if (wordsWithoutExamples.value.length)
    lines.push('', 'Words that need examples only:', wordsWithoutExamples.value.join('\n'))
  return lines.join('\n')
})

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
    :description="`${t('aiPrompt.description')} ${t('aiPrompt.wordsCount')} ${promptWordsCount}`"
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
