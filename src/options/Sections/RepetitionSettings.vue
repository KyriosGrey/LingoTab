<script setup lang="ts">
import { ref, watch } from 'vue'

import useRepetition, { type RepetitionFrequency } from '@/composables/useRepetition'

import Section from '../components/Section.vue'
import Select from '../components/Select.vue'

const { frequency, setFrequency } = useRepetition()

const localFrequency = ref<RepetitionFrequency>(frequency.value)

// Sync with composable
watch(frequency, (val) => {
  localFrequency.value = val
})

// Save changes
watch(localFrequency, (val) => {
  setFrequency(val)
})

const options = [
  { value: 'off', text: 'Off' },
  { value: '5', text: 'Every 5 words' },
  { value: '10', text: 'Every 10 words' },
  { value: '20', text: 'Every 20 words' },
  { value: '30', text: 'Every 30 words' },
]
</script>

<template>
  <Section
    title="Learned Words Repetition"
    description="Show a random learned word periodically on the New Tab to help you review."
  >
    <div style="margin-top: 10px;">
      <div class="row">
        <div class="label-block">
          Show repetition block:
        </div>

        <Select
          v-model="localFrequency"
          :options="options"
          class="select"
        />
      </div>
    </div>
  </Section>
</template>

<style scoped>
.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  max-width: 100%;
}

.label-block {
  color: hsla(var(--color-raw), 0.6);
  font-size: 0.75rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1 1 auto;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.select {
  flex: 0 0 auto;
  min-width: 120px;
  max-width: 220px;
  width: auto;
}

@media (max-width: 740px) {
  .row {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }
  .label-block {
    white-space: normal;
  }
  .select {
    width: 100%;
    max-width: none;
  }
}
</style>
