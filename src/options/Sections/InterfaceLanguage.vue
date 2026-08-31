<script setup lang="ts">
import GOOGLE_TRANSLATE_LANGUAGES from '@/data/googleTranslateLanguages'
import { t, translatedLanguageCodes } from '@/i18n'
import { AUTO_LANGUAGE, getUiLanguagePreference, setUiLanguagePreference } from '@/i18n/useUiLanguage'
import { computed, ref } from 'vue'

import Section from '../components/Section.vue'
import Select from '../components/Select.vue'

const selected = ref(getUiLanguagePreference())

// Built from the languages that actually have a translation, so the list can never
// offer one that would quietly fall back to English. Language names stay in English
// on purpose — same as the "Translation language" dropdown.
const options = computed(() => [
  { text: t('interface.auto'), value: AUTO_LANGUAGE },
  { text: 'English', value: 'en' },
  ...translatedLanguageCodes.map(code => ({
    text: GOOGLE_TRANSLATE_LANGUAGES.find(l => l.code === code)?.lang ?? code,
    value: code,
  })),
])

function handleChange() {
  setUiLanguagePreference(selected.value)
}
</script>

<template>
  <Section
    :title="t('interface.title')"
    :description="t('interface.description')"
  >
    <template #bar>
      <Select
        v-model="selected"
        :title="t('interface.select')"
        :options="options"
        @change="handleChange"
      />
    </template>
  </Section>
</template>
