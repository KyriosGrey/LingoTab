<script setup lang="ts">
import { ref, watch } from 'vue'
import storage from '@/modules/localStorage'
import Section from '../components/Section.vue'

// Load current frequency setting
const repetitionFrequency = ref(storage.get('repetitionFrequency') ?? 'off')

// Watch for changes and save
watch(repetitionFrequency, (val) => {
  storage.set('repetitionFrequency', val)
})
</script>

<template>
  <Section
    title="Learned Words Repetition"
    description="Show a random learned word for practice every N words shown. This helps reinforce vocabulary you've already learned."
  >
    <div class="setting-row">
      <label class="setting-label">
        <b>Frequency</b>
        <small class="setting-description">How often to show learned words (off to disable)</small>
      </label>

      <select v-model="repetitionFrequency" class="frequency-select">
        <option value="off">
          Off
        </option>
        <option value="5">
          Every 5 words
        </option>
        <option value="10">
          Every 10 words
        </option>
        <option value="20">
          Every 20 words
        </option>
        <option value="30">
          Every 30 words
        </option>
      </select>
    </div>
  </Section>
</template>

<style scoped>
.setting-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  gap: 20px;
}

.setting-label {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.setting-description {
  color: hsla(var(--color-raw), 0.75);
  font-size: 0.8rem;
  font-weight: normal;
}

.frequency-select {
  padding: 8px 12px;
  border-radius: 6px;
  background-color: hsla(var(--color-raw), 0.1);
  border: 1px solid hsla(var(--color-raw), 0.3);
  color: var(--color);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  min-width: 150px;
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

@media (max-width: 600px) {
  .setting-row {
    flex-direction: column;
    align-items: flex-start;
  }

  .frequency-select {
    width: 100%;
  }
}
</style>
