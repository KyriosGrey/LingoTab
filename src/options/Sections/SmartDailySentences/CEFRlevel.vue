<script setup lang="ts">
import { computed } from 'vue'
import Section from '@/options/components/Section.vue'
import Select from '@/options/components/Select.vue'

const props = defineProps<{ modelValue?: string }>()
const emit = defineEmits(['update:modelValue'])

const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
const levelOptions = levels.map(l => ({ value: l, text: l }))

const modelValueLocal = computed({
  get() { return props.modelValue ?? 'B1' },
  set(v: any) { emit('update:modelValue', v) },
})
</script>

<template>
  <Section
    title="CEFR level"
    description="Choose the target CEFR proficiency level used when generating practice sentences."
  >
    <template #bar>
      <div class="bar-actions">
        <Select
          v-model="modelValueLocal"
          title="Choose CEFR level"
          :options="levelOptions"
          class="select"
        />
      </div>
    </template>
  </Section>
</template>

<style scoped>
/* Container for controls that sit in the section bar (keeps them aligned to the right) */
.bar-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  /* allow the actions to shrink if viewport is narrow so the title can wrap */
  flex: 0 0 auto;
}

/* Make the select look like in GoogleTranslate: limited width on desktop,
   but responsive on small screens (moves under the title and stretches) */
.select {
  min-width: 160px;
  max-width: 280px;
  width: auto;
}

/* On narrow screens let the bar-actions take full width and make select full width */
@media (max-width: 740px) {
  .bar-actions {
    width: 100%;
    justify-content: flex-start; /* keep control aligned natural on small screens */
    margin-top: 8px; /* spacing when it wraps under title/description */
  }
  .select {
    width: 100%;
    max-width: none;
  }
}
</style>
