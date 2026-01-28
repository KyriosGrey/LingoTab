<script setup lang="ts">
import { computed } from 'vue'
import Section from '@/options/components/Section.vue'
import Select from '@/options/components/Select.vue'

const props = defineProps<{ modelValue?: string | number }>()
const emit = defineEmits(['update:modelValue'])

const frequencyOptions = [
  { value: '24', text: 'Once per 24 hours' },
  { value: '12', text: 'Once per 12 hours' },
  { value: 'manual', text: 'Manual only' },
]

const modelValueLocal = computed({
  get() { return props.modelValue ?? '24' },
  set(v: any) { emit('update:modelValue', v) },
})
</script>

<template>
  <Section
    title="Update frequency"
    description="Choose how often new sentence packs should be generated automatically."
  >
    <template #bar>
      <div class="bar-actions">
        <Select
          v-model="modelValueLocal"
          title="Select update frequency"
          :options="frequencyOptions"
          class="select"
        />
      </div>
    </template>
  </Section>
</template>

<style scoped>
/* Align the select to the right of the section header (consistent with other rows) */
.bar-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  flex: 0 0 auto;
}

/* Select sizing to match other sections: compact on desktop, full width on small screens */
.select {
  min-width: 160px;
  max-width: 280px;
  width: auto;
}

@media (max-width: 740px) {
  .bar-actions {
    width: 100%;
    justify-content: flex-start;
    margin-top: 8px;
  }
  .select {
    width: 100%;
    max-width: none;
  }
}
</style>
