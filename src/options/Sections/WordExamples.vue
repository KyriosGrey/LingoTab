<script setup lang="ts">
import Toggle from '@/components/shared/Toggle.vue'
import { isWordExamplesEnabled, WORD_EXAMPLES_ENABLED_STORAGE_KEY } from '@/composables/words/useWordExamples'
import { t } from '@/i18n'
import storage from '@/modules/localStorage'
import { ref, watch } from 'vue'
import Section from '../components/Section.vue'

const isEnabled = ref(isWordExamplesEnabled())

watch(isEnabled, (val) => {
  storage.set(WORD_EXAMPLES_ENABLED_STORAGE_KEY, String(val))
})
</script>

<template>
  <Section
    :title="t('wordExamples.title')"
    :description="t('wordExamples.description')"
  >
    <template #bar>
      <Toggle v-model="isEnabled" />
    </template>
  </Section>
</template>
