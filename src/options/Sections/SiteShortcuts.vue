<script setup lang="ts">
import Toggle from '@/components/shared/Toggle.vue'
import useShortcuts from '@/composables/shortcuts/useShortcuts'

import Section from '../components/Section.vue'

const { isActive } = useShortcuts()
</script>

<template>
  <Section
    title="Site shortcuts"
    description="Control the visibility of shortcuts sidebar."
  >
    <template #bar>
      <Toggle v-model="isActive" />
    </template>
  </Section>
</template>
