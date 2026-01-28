<script setup lang="ts">
import { computed } from 'vue'
import Section from '@/options/components/Section.vue'
import Select from '@/options/components/Select.vue'

const props = defineProps<{ modelValue?: string }>()
const emit = defineEmits(['update:modelValue'])

const lengthOptions = [
  { value: 'mixed', text: 'Mixed (3–16)' },
  { value: 'long', text: 'Long (8–16)' },
  { value: 'short', text: 'Short (3–7)' },
]

const modelValueLocal = computed({
  get() { return props.modelValue ?? 'short' },
  set(v: any) { emit('update:modelValue', v) },
})
</script>

<template>
  <Section
    title="Sentence length"
    description="Choose target sentence length for generated examples."
  >
    <template #bar>
      <div class="bar-actions">
        <Select
          v-model="modelValueLocal"
          title="Select sentence length"
          :options="lengthOptions"
          class="select"
        />
      </div>
    </template>
  </Section>
</template>

<style scoped>
/* Align the select to the right of the section header (same pattern as CEFR level) */
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

/* keep label style consistent with other small rows (if any) */
.label-inline { font-weight:600; margin-bottom:6px; display:block; }
</style>
