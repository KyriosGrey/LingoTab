<script setup lang="ts">
import { computed } from 'vue'

type Value = any

interface Option {
  value: Value
  text: string | number
}

interface Props {
  modelValue: Value
  title?: string
  options?: Option[]
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  options: () => [],
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: Value): void
}>()

const value = computed({
  get() {
    return props.modelValue
  },
  set(value: Value) {
    emit('update:modelValue', value)
  },
})
</script>

<template>
  <div class="select-wrapper">
    <select v-model="value" :title="title" class="select-field text-body tiny-scrollbar">
      <option v-for="option of options" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <span class="select-wrapper__chevron" />
  </div>
</template>

<style scoped>
.select-wrapper {
  position: relative;
  display: inline-block;
  max-width: 100%;
}

/* Custom chevron (Figma "chevron-down") drawn in CSS instead of an SVG asset, so it
   always matches --color — the browser's own native arrow can't be repositioned or
   recolored, which is why this exists instead of just padding the native one. */
.select-wrapper__chevron {
  position: absolute;
  top: 50%;
  right: 12px;
  width: 6px;
  height: 6px;
  border: solid var(--color);
  border-width: 0 1.5px 1.5px 0;
  transform: translateY(-75%) rotate(45deg);
  pointer-events: none;
}

/* Named "select-field", not "select" — callers commonly pass a sizing class named
   "select" onto this component (e.g. `<Select class="select" />`), and since Vue's
   scoped-CSS fallthrough stamps this component's own scope id onto that wrapper too,
   a same-named class here would make the wrapper match this rule as well, doubling
   the border/background visibly. */
.select-field {
  /* Figma: 12px padding + 12px gap + 10px chevron on the right */
  width: 100%;
  padding: 4px 34px 4px 12px;
  border-radius: 4px;
  border: 1px solid var(--overlay-weak);
  background: var(--surface-color);
  color: var(--color);
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  transition: border-color 0.15s ease-in-out;
}
.select-field:hover {
  border-color: var(--overlay-strong);
}
.select-field:focus {
  outline: none;
  border-color: var(--accent-color-hover);
}
.select-field:disabled {
  opacity: 0.4;
  cursor: default;
  color: var(--text-tertiary);
}
.select-field:disabled ~ .select-wrapper__chevron {
  opacity: 0.4;
}
</style>
