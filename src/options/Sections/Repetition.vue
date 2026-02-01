<script setup lang="ts">
import { ref, watch } from 'vue'
import { loadRepetitionFrequency, resetRepetitionState } from '@/composables/useRepetition'
import storage from '@/modules/localStorage'
import Section from '../components/Section.vue'
import Select from '../components/Select.vue'

// Load current value
const repetitionFrequency = ref(loadRepetitionFrequency())

// Options for the dropdown
const frequencyOptions = [
  { value: 'off', text: 'Off' },
  { value: '5', text: 'Every 5 words' },
  { value: '10', text: 'Every 10 words' },
  { value: '20', text: 'Every 20 words' },
  { value: '30', text: 'Every 30 words' },
]

// Watch for changes and save + reset counter
watch(repetitionFrequency, (val) => {
  storage.set('repetitionFrequency', val)
  resetRepetitionState()
})
</script>

<template>
  <Section
    title="Learned words review"
    description="Shows a random learned word for review. Configure how often it appears."
  >
    <template #bar>
      <Select
        v-model="repetitionFrequency"
        :options="frequencyOptions"
        title="Choose repetition frequency"
      />
    </template>
  </Section>
</template>