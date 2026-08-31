<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { loadRepetitionFrequency, resetRepetitionState } from '@/composables/useRepetition'
import { t } from '@/i18n'
import storage from '@/modules/localStorage'
import Section from '../components/Section.vue'
import Select from '../components/Select.vue'

// Load current value
const repetitionFrequency = ref(loadRepetitionFrequency())

// Options for the dropdown
const frequencyOptions = computed(() => [
  { value: 'off', text: t('repetition.off') },
  { value: '1', text: t('repetition.every1') },
  { value: '2', text: t('repetition.every2') },
  { value: '3', text: t('repetition.every3') },
  { value: '4', text: t('repetition.every4') },
  { value: '5', text: t('repetition.every5') },
  { value: '10', text: t('repetition.every10') },
  { value: '20', text: t('repetition.every20') },
])

// Watch for changes and save + reset counter
watch(repetitionFrequency, (val) => {
  storage.set('repetitionFrequency', val)
  resetRepetitionState()
})
</script>

<template>
  <Section
    :title="t('repetition.title')"
    :description="t('repetition.description')"
  >
    <template #bar>
      <Select
        v-model="repetitionFrequency"
        :options="frequencyOptions"
        :title="t('repetition.select')"
      />
    </template>
  </Section>
</template>