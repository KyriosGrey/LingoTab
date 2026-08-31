<script setup lang="ts">
import WordList, { ActionButton } from '@/components/shared/WordList'
import useIgnoredWords from '@/composables/words/useIgnoredWords'
import { t } from '@/i18n'

import Section from '@/options/components/Section.vue'
import ImportFile from './ImportFile.vue'

const { ignoredWords, removeIgnoredWords, setAsIgnored } = useIgnoredWords()

function handleImportFile(words: string[]) {
  setAsIgnored(words)
}
</script>

<template>
  <Section
    :description="t('ignored.description')"
  >
    <WordList :list="ignoredWords" max-height="250px" dense border>
      <template #top-action>
        <ImportFile @import="handleImportFile" />
      </template>

      <template #actions="{ word }">
        <ActionButton
          :title="t('list.remove')"
          @click="removeIgnoredWords(word)"
        >
          <i-ic-round-remove-circle-outline />
        </ActionButton>
      </template>

      <template #empty>
        <p class="empty-state text-body-sm">
          <i-ic-round-visibility-off class="empty-state__icon" />
          <br>
          {{ t('ignored.empty') }}
        </p>
      </template>
    </WordList>
  </Section>
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
