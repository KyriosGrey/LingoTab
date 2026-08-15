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
  <label class="toggle" :class="{ disabled }">
    <input
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      @change="onChange"
    >
    <span class="track">
      <span class="thumb" />
    </span>
  </label>
</template>

<style scoped>
.toggle {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}
.toggle.disabled {
  cursor: default;
  opacity: 0.4;
}

.toggle input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.track {
  display: flex;
  align-items: center;
  width: 40px;
  height: 20px;
  padding: 2px;
  border-radius: 10px;
  background: var(--toggle-track-off);
  transition: background-color 0.15s ease-in-out;
}

.thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  transition: transform 0.15s ease-in-out;
}

.toggle input:checked ~ .track {
  background: var(--accent-color);
  justify-content: flex-end;
}
</style>
