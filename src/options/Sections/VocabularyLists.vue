<script setup lang="ts">
import Checkbox from '@/components/shared/Checkbox.vue'
import useWordLists from '@/composables/words/useWordLists'
import WORD_LISTS from '@/data/words'

import storage from '@/modules/localStorage'

import { ref, watch } from 'vue'
import Section from '../components/Section.vue'

const { selectedListKeys } = useWordLists()

function toggleListKey(listKey: string, checked: boolean) {
  selectedListKeys.value = checked
    ? [...selectedListKeys.value, listKey]
    : selectedListKeys.value.filter(key => key !== listKey)
}

const showLearningOnly = ref(storage.get('showLearningOnly') === 'true')

watch(showLearningOnly, (val) => {
  storage.set('showLearningOnly', String(val))
})
</script>

<template>
  <Section
    title="Vocabulary lists"
    description="Select the vocabulary lists that you would like to get a random word from."
  >
    <ul class="vocab-list">
      <li
        v-for="(listValue, listKey) in WORD_LISTS"
        :key="listKey"
        class="vocab-list__item"
      >
        <Checkbox
          :model-value="selectedListKeys.includes(listKey)"
          @update:model-value="toggleListKey(listKey, $event)"
        >
          <span class="vocab-list__item__name text-body-sm">{{ listValue.name }}</span>
          <span class="vocab-list__item__count text-body-sm-italic">
            ({{ listValue.list.length }} words)
          </span>
        </Checkbox>
      </li>
    </ul>
    <div class="vocab-list__item" style="margin-top: 10px;">
      <Checkbox v-model="showLearningOnly">
        <span class="vocab-list__item__name text-body-sm">Learning words only</span>
        <span class="vocab-list__item__count text-body-sm-italic">(show only your saved words)</span>
      </Checkbox>
    </div>
  </Section>
</template>

<style scoped>
.vocab-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
}
.vocab-list__item {
  display: flex;
  align-items: center;
  flex-basis: 50%;
  padding: 8px 0;
}

@media all and (max-width: 320px) {
  .vocab-list__item {
    flex-basis: 100%;
  }
}

.vocab-list__item__name {
  margin-right: 4px;
  color: var(--color);
}

.vocab-list__item__count {
  color: var(--text-secondary);
}
</style>
