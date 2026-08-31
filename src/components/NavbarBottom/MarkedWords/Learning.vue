<script lang="ts" setup>
import WordList, { ActionButton } from '@/components/shared/WordList'
import useIgnoredWords from '@/composables/words/useIgnoredWords'
import useLearnedWords from '@/composables/words/useLearnedWords'

import useLearningWords from '@/composables/words/useLearningWords'
import { t } from '@/i18n'

defineEmits<{
  (e: 'showDefinition', word: string): void
}>()

const { setAsIgnored } = useIgnoredWords()
const { setAsLearned } = useLearnedWords()
const { learningWords, removeLearningWords } = useLearningWords()

function handleMarkAsLearned(word: string) {
  setAsLearned(word)
  removeLearningWords(word)
}

function handleMarkAsIgnored(word: string) {
  setAsIgnored(word)
  removeLearningWords(word)
}
</script>

<template>
  <WordList
    :list="learningWords"
    max-height="calc(100vh - 165px)"
    stretch
    pointer
    @row-click="$emit('showDefinition', $event)"
  >
    <template #actions="{ word }">
      <ActionButton :title="t('action.markLearned')" @click="handleMarkAsLearned(word)">
        <i-ic-round-check-circle-outline />
      </ActionButton>

      <ActionButton :title="t('action.ignore')" @click="handleMarkAsIgnored(word)">
        <i-ic-outline-visibility-off />
      </ActionButton>

      <ActionButton :title="t('list.remove')" @click="removeLearningWords(word)">
        <i-ic-round-remove-circle-outline />
      </ActionButton>
    </template>

    <template #empty>
      <p class="empty-state text-body-sm">
        <i-ic-round-bookmark-add class="empty-state__icon" />
        <br>
        {{ t('empty.learning') }}
      </p>
    </template>
  </WordList>
</template>

<style scoped>
.empty-state {
  padding: 30px 5px;
  text-align: center;
  color: var(--text-secondary);
}

.empty-state__icon {
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-bottom: 6px;
}
</style>
