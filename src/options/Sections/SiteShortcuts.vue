<script setup lang="ts">
import Toggle from '@/components/shared/Toggle.vue'
import useShortcuts from '@/composables/shortcuts/useShortcuts'
import { t } from '@/i18n'

import Section from '../components/Section.vue'

const { isActive } = useShortcuts()
</script>

<template>
  <Section
    :title="t('shortcuts.title')"
    :description="t('shortcuts.description')"
  >
    <template #bar>
      <Toggle v-model="isActive" />
    </template>
  </Section>
</template>
