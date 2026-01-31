<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import * as storage from '@/utils/storage'
import Select from '@/options/components/Select.vue'

const repetitionFrequency = ref<string>('off')

// Load initial value from storage
onMounted(async () => {
  const data = await storage.get({ repetitionFrequency: 'off' })
  repetitionFrequency.value = data.repetitionFrequency || 'off'
})

// Save changes to storage
watch(repetitionFrequency, async (newValue) => {
  await storage.set({ repetitionFrequency: newValue })
})

const frequencyOptions = [
  { value: 'off', text: 'Off' },
  { value: '3', text: 'Every 3 words' },
  { value: '5', text: 'Every 5 words' },
  { value: '10', text: 'Every 10 words' },
  { value: '15', text: 'Every 15 words' },
  { value: '20', text: 'Every 20 words' },
]
</script>

<template>
  <div class="repetition-frequency">
    <div class="frequency-header">
      <h3 class="frequency-title">
        Repetition Frequency
      </h3>
      <Select
        v-model="repetitionFrequency"
        :options="frequencyOptions"
        title="How often to show repetition block"
      />
    </div>
    <p class="frequency-description">
      Review learned words periodically. The repetition block will appear every N words shown.
    </p>
  </div>
</template>

<style scoped>
.repetition-frequency {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 15px;
  border-radius: 8px;
  background-color: hsla(var(--color-raw), 0.03);
  margin-top: 15px;
}

.frequency-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.frequency-title {
  font-size: 0.95rem;
  font-weight: 600;
  margin: 0;
  color: var(--color);
}

.frequency-description {
  font-size: 0.85rem;
  color: hsla(var(--color-raw), 0.7);
  margin: 0;
  line-height: 1.4;
}
</style>
