<script setup lang="ts">
import Checkbox from '@/components/shared/Checkbox.vue'
import Section from '@/options/components/Section.vue'
import { computed } from 'vue'

const props = defineProps<{ modelValue?: string[], items: string[], counts?: (number | undefined)[] }>()
const emit = defineEmits(['update:modelValue'])

const localValue = computed({
  get() { return props.modelValue ?? [] },
  set(v: any) { emit('update:modelValue', v) },
})

function toggle(value: string, checked: boolean) {
  localValue.value = checked
    ? [...localValue.value, value]
    : localValue.value.filter((v: string) => v !== value)
}

const items = props.items || []
const counts = props.counts || []
</script>

<template>
  <Section
    title="Topics"
    description="Select the topics you'd like generated sentences to be focused on."
  >
    <ul class="vocab-list">
      <li v-for="(t, idx) in items" :key="t" class="vocab-list__item">
        <Checkbox :model-value="localValue.includes(t)" @update:model-value="toggle(t, $event)">
          <span class="vocab-list__item__name text-body-sm">{{ t }}</span>
          <span v-if="counts && counts[idx]" class="vocab-list__item__count text-body-sm-italic">({{ counts[idx] }})</span>
        </Checkbox>
      </li>
    </ul>
  </Section>
</template>

<style scoped>
.vocab-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
}
.vocab-list__item {
  display: flex;
  align-items: center;
  flex-basis: 50%;
  padding: 8px 0;
}

/* collapse to single column on very narrow screens */
@media all and (max-width: 320px) {
  .vocab-list__item {
    flex-basis: 100%;
  }
}

.vocab-list__item__name {
  margin-right: 4px;
  color: var(--color);
}

.vocab-list__item__count {
  color: var(--text-secondary);
}
</style>
