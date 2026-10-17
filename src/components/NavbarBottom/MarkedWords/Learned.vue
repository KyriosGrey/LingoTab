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
const { setAsLearning } = useLearningWords()
const { learnedWords, removeLearnedWords } = useLearnedWords()

function handleMarkAsLearning(word: string) {
  setAsLearning(word)
  removeLearnedWords(word)
}

function handleMarkAsIgnored(word: string) {
  setAsIgnored(word)
  removeLearnedWords(word)
}
</script>

<template>
  <WordList
    :list="learnedWords"
    max-height="calc(100vh - 297px)"
    stretch
    pointer
    @row-click="$emit('showDefinition', $event)"
  >
    <template #actions="{ word }">
      <ActionButton
        :title="t('action.markLearning')"
        @click="handleMarkAsLearning(word)"
      >
        <i-ic-outline-school />
      </ActionButton>

      <ActionButton :title="t('action.ignore')" @click="handleMarkAsIgnored(word)">
        <i-ic-outline-visibility-off />
      </ActionButton>

      <ActionButton :title="t('list.remove')" @click="removeLearnedWords(word)">
        <i-ic-round-remove-circle-outline />
      </ActionButton>
    </template>

    <template #empty>
      <p class="empty-state text-body-sm">
        <i-ic-round-check-circle-outline class="empty-state__icon" />
        <br>
        {{ t('empty.learned') }}
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
