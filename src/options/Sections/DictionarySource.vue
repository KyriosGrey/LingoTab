<script setup lang="ts">
import type { DictionarySource } from '@/composables/words/useDictionarySource'
import useDictionarySource from '@/composables/words/useDictionarySource'
import { t } from '@/i18n'
import { computed, ref } from 'vue'

import Section from '../components/Section.vue'
import Select from '../components/Select.vue'

const { dictionarySource, storeDictionarySource } = useDictionarySource()
const selectedSource = ref<DictionarySource>(dictionarySource)

function handleSaveDictionarySource() {
  storeDictionarySource(selectedSource.value)
}

// The two service names are proper nouns and stay untranslated on purpose.
const options = computed<{ text: string, value: DictionarySource }[]>(() => [
  { text: t('dictionary.auto'), value: 'auto' },
  { text: 'Free Dictionary API', value: 'dictionaryapi' },
  { text: 'Wiktionary', value: 'wiktionary' },
])
</script>

<template>
  <Section
    :title="t('dictionary.title')"
    :description="t('dictionary.description')"
  >
    <template #bar>
      <Select
        v-model="selectedSource"
        :title="t('dictionary.select')"
        :options="options"
        @change="handleSaveDictionarySource"
      />
    </template>
  </Section>
</template>
