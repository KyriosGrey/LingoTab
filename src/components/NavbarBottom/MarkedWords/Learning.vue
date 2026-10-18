<script lang="ts" setup>
import type { SortState } from '@/composables/useSort'
import WordList, { ActionButton } from '@/components/shared/WordList'
import useTranslateText from '@/composables/useTranslateText'
import useEditWordModal from '@/composables/words/useEditWordModal'
import useIgnoredWords from '@/composables/words/useIgnoredWords'
import useLearnedWords from '@/composables/words/useLearnedWords'

import useLearningWords from '@/composables/words/useLearningWords'
import useUserTranslations from '@/composables/words/useUserTranslations'
import { t } from '@/i18n'
import storage from '@/modules/localStorage'
import { openOptionsPage } from '@/utils/browser'
import { computed } from 'vue'
import IcOutlineEdit from '~icons/ic/outline-edit'

defineEmits<{
  (e: 'showDefinition', word: string): void
}>()

const { setAsIgnored } = useIgnoredWords()
const { setAsLearned } = useLearnedWords()
const { learningWords, removeLearningWords, reloadLearningWords } = useLearningWords()
const { openEditWordModal } = useEditWordModal()
const { getUserTranslation, hasUserTranslation } = useUserTranslations()
const { getCachedTranslations } = useTranslateText()

// Fifth state of the sort button, Learning only: words with the user's own translation
// on top, the rest below, each group A-Z. Nothing is hidden.
const ownTranslationsFirst: SortState = {
  titleKey: 'list.sort.ownFirst',
  icon: IcOutlineEdit,
  sortMethod: list => [...list].sort((a, b) =>
    Number(hasUserTranslation(b)) - Number(hasUserTranslation(a)) || a.localeCompare(b)),
}

// Only worth suggesting once the list has words: with an empty list "Learning words only"
// is ignored by useWord.ts and the tab keeps showing the built-in lists anyway.
// Read on mount - the panel re-mounts every time it opens.
const showLearningOnlyTip = storage.get('showLearningOnly') !== 'true'

// Cache only: showing the list must not fire a translate request per word.
const cachedTranslations = computed(() => getCachedTranslations(learningWords.value))

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
    :extra-sort-states="[ownTranslationsFirst]"
    max-height="calc(100vh - 297px)"
    stretch
    pointer
    @row-click="$emit('showDefinition', $event)"
  >
    <template #subtitle="{ word }">
      <span v-if="getUserTranslation(word)" class="row-translation text-body-sm">
        <i-ic-outline-edit class="row-translation__icon" :title="t('word.ownTranslation')" />
        {{ getUserTranslation(word) }}
      </span>
      <span v-else-if="cachedTranslations[word]" class="row-translation text-body-sm">
        {{ cachedTranslations[word] }}
      </span>
    </template>

    <template #actions="{ word }">
      <ActionButton :title="t('action.editTranslation')" @click="openEditWordModal(word, reloadLearningWords)">
        <i-ic-outline-edit />
      </ActionButton>

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

    <!-- Shown under the words only - WordList renders the footer just when the list isn't empty. -->
    <template v-if="showLearningOnlyTip" #footer>
      <p class="learning-only-tip text-body-sm">
        <i-ic-outline-info class="learning-only-tip__icon" />
        <span>
          {{ t('learningOnlyTip.text') }}
          <button type="button" class="learning-only-tip__link" @click="openOptionsPage">
            {{ t('learningOnlyTip.openSettings') }}
          </button>
        </span>
      </p>
    </template>

    <template #empty>
      <div class="empty-state">
        <i-ic-round-bookmark-add class="empty-state__icon" />
        <p class="empty-state__title text-heading-18">
          {{ t('empty.learningTitle') }}
        </p>
        <p class="empty-state__text text-body-sm">
          {{ t('empty.learning') }}
        </p>
      </div>
    </template>
  </WordList>
</template>

<style scoped>
/* Translation under the word, always grey; the user's own one is marked by the pencil only. */
.row-translation {
  color: var(--text-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.row-translation__icon {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 2px;
  vertical-align: -1px;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 30px 5px;
  text-align: center;
  color: var(--text-secondary);
}

.empty-state__icon {
  display: inline-block;
  width: 24px;
  height: 24px;
}

.empty-state__title {
  margin: 4px 0 0;
  color: var(--color);
}

.empty-state__text {
  margin: 0;
  max-width: 260px;
}

/* "Learning words only" hint under the list */
.learning-only-tip {
  display: flex;
  gap: 8px;
  margin: 0;
  padding: 10px 12px;
  border-radius: 6px;
  background-color: var(--overlay-weak);
  color: var(--text-secondary);
}

.learning-only-tip__icon {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  margin-top: 1px;
}

.learning-only-tip__link {
  display: inline;
  padding: 0;
  border: none;
  background: none;
  font: inherit;
  color: var(--accent-color-hover);
  text-decoration: underline;
  cursor: pointer;
}
</style>
