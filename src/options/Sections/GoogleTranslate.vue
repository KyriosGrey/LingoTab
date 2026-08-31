<script setup lang="ts">
import useGoogleTranslate from '@/composables/useGoogleTranslate'

import languages from '@/data/googleTranslateLanguages'
import { t } from '@/i18n'
import { refreshUiLanguage } from '@/i18n/useUiLanguage'
import { ref } from 'vue'

import Section from '../components/Section.vue'

import Select from '../components/Select.vue'

const { targetLanguage, storeTargetLanguageCode } = useGoogleTranslate()
const selectedTargetLanguage = ref(targetLanguage)

function handleSaveGoogleTranslateLanguage() {
  storeTargetLanguageCode(selectedTargetLanguage.value.code)
  // On "Auto" the interface follows this setting, so repaint it right away instead
  // of leaving the page in its old language until the next reload.
  refreshUiLanguage()
}

const options = languages.map(lang => ({ text: lang.lang, value: lang }))
</script>

<template>
  <Section
    :title="t('lang.title')"
    :description="t('lang.description')"
  >
    <template #bar>
      <Select
        v-model="selectedTargetLanguage"
        :title="t('lang.select')"
        :options="options"
        @change="handleSaveGoogleTranslateLanguage"
      />
    </template>
  </Section>
</template>
