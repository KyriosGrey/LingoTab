<script setup lang="ts">
import { ref, watch } from 'vue'

import storage from '@/modules/localStorage'

import Section from '../components/Section.vue'

// Load current repetition frequency setting
const repetitionFrequency = ref(storage.get('repetitionFrequency') || 'off')

// Watch for changes and save to localStorage
watch(repetitionFrequency, (val) => {
  storage.set('repetitionFrequency', val)
})
</script>

<template>
  <Section
    title="Learned Words Repetition"
    description="Show a random learned word every N words for review and reinforcement."
  >
    <div class="option-row">
      <label class="option-label">
        <span class="option-name">Show repetition block every:</span>

        <select v-model="repetitionFrequency" class="option-select">
          <option value="off">Off</option>
          <option value="5">5 words</option>
          <option value="10">10 words</option>
          <option value="20">20 words</option>
          <option value="30">30 words</option>
        </select>
      </label>
    </div>
  </Section>
</template>

<style scoped>
.option-row {
  display: flex;
  align-items: center;
  padding: 10px 0;
}

.option-label {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  cursor: pointer;
}

.option-name {
  font-size: 0.9rem;
  font-weight: 500;
}

.option-select {
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid hsla(var(--color-raw), 0.3);
  background-color: hsla(var(--bg-color-raw), 0.5);
  color: var(--color);
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.option-select:hover {
  border-color: hsla(var(--color-raw), 0.5);
  background-color: hsla(var(--bg-color-raw), 0.7);
}

.option-select:focus {
  outline: none;
  border-color: var(--color);
  box-shadow: 0 0 0 2px hsla(var(--color-raw), 0.2);
}
</style>
