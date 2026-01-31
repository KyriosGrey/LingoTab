<script setup lang="ts">
import useRepetition, { type RepetitionFrequency } from '@/composables/useRepetition'
import Section from '../components/Section.vue'

const { frequency, setFrequency } = useRepetition()

function handleFrequencyChange(event: Event) {
  const target = event.target as HTMLSelectElement
  setFrequency(target.value as RepetitionFrequency)
}
</script>

<template>
  <Section
    title="Repetition Frequency"
    description="Show a learned word for review on the New Tab page at regular intervals."
  >
    <div class="frequency-setting">
      <label for="repetition-frequency" class="frequency-label">
        <b>Show repetition block every:</b>
      </label>
      <select
        id="repetition-frequency"
        :value="frequency"
        class="frequency-select"
        @change="handleFrequencyChange"
      >
        <option value="off">
          Off (disabled)
        </option>
        <option value="5">
          5 words
        </option>
        <option value="10">
          10 words
        </option>
        <option value="20">
          20 words
        </option>
        <option value="30">
          30 words
        </option>
      </select>
    </div>
  </Section>
</template>

<style scoped>
.frequency-setting {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 10px;
  flex-wrap: wrap;
}

.frequency-label {
  font-size: 0.9rem;
  color: var(--color);
}

.frequency-select {
  padding: 6px 10px;
  border-radius: 5px;
  background-color: hsla(var(--color-raw), 0.1);
  color: var(--color);
  border: 1px solid hsla(var(--color-raw), 0.3);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.frequency-select:hover {
  background-color: hsla(var(--color-raw), 0.15);
  border-color: hsla(var(--color-raw), 0.4);
}

.frequency-select:focus {
  outline: none;
  border-color: var(--color);
  box-shadow: 0 0 0 2px hsla(var(--color-raw), 0.2);
}
</style>
