<script setup lang="ts">
import Toggle from '@/components/shared/Toggle.vue'
import { t } from '@/i18n'
import storage from '@/modules/localStorage'
import { ref, watch } from 'vue'
import Section from '../components/Section.vue'

// Загружаем текущее значение настройки
const hideTranslationUnderSpoiler = ref(storage.get('hideTranslationUnderSpoiler') === 'true')

// Следим за изменением и сохраняем
watch(hideTranslationUnderSpoiler, (val) => {
  storage.set('hideTranslationUnderSpoiler', String(val))
})
</script>

<template>
  <Section
    :title="t('translation.title')"
    :description="t('translation.description')"
  >
    <template #bar>
      <Toggle v-model="hideTranslationUnderSpoiler" />
    </template>
  </Section>
</template>
