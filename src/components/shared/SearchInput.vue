<script setup lang="ts">
import { ref } from 'vue'

withDefaults(defineProps<{
  modelValue: string
  placeholder?: string
  disabled?: boolean
}>(), {
  placeholder: '',
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const inputEl = ref<HTMLInputElement | null>(null)

function onInput(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

defineExpose({
  focus: () => inputEl.value?.focus(),
})
</script>

<template>
  <label class="search-input" :class="{ disabled }">
    <i-ic-round-search class="icon" />
    <input
      ref="inputEl"
      type="search"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      class="text-body-sm"
      @input="onInput"
    >
  </label>
</template>

<style scoped>
.search-input {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  border-radius: 6px;
  border: 1px solid var(--overlay-weak);
  background: var(--surface-color);
  transition: border-color 0.15s ease-in-out;
}

.search-input:has(input:focus) {
  border-color: var(--accent-color-hover);
}

.search-input.disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.icon {
  flex-shrink: 0;
  color: var(--text-secondary);
}

input {
  flex: 1;
  min-width: 0;
  border: none;
  outline: none;
  background: transparent;
  color: var(--color);
}

input::placeholder {
  color: var(--text-secondary);
}
</style>
