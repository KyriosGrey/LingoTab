<script setup lang="ts">
defineProps<{
  modelValue: boolean
  disabled?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

function onChange(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).checked)
}
</script>

<template>
  <label class="checkbox" :class="{ disabled }">
    <input
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      @change="onChange"
    >
    <span class="box" />
    <slot />
  </label>
</template>

<style scoped>
.checkbox {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}
.checkbox.disabled {
  cursor: default;
  opacity: 0.4;
}

.checkbox input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.box {
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  border: 1px solid var(--overlay-strong);
  background: var(--overlay-strong);
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
}

.checkbox:hover input:not(:checked) ~ .box {
  border-color: var(--accent-color);
}

.checkbox input:checked ~ .box {
  background: var(--accent-color);
  border-color: var(--accent-color);
}

.box::after {
  content: '';
  position: absolute;
  display: none;
  left: 5px;
  top: 2px;
  width: 4px;
  height: 8px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox input:checked ~ .box::after {
  display: block;
}
</style>
