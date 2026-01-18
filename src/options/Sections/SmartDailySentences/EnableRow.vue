<template>
  <Section
    title="Smart Sentences"
    description="When enabled, New Tab will show Smart Sentences practice instead of the regular word study interface."
  >
    <template #bar>
      <label class="switch">
        <input type="checkbox" :checked="local" @change="onChange($event)" />
        <span class="slider round" />
      </label>
    </template>
  </Section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import Section from '@/options/components/Section.vue'

const props = defineProps<{ modelValue?: boolean }>()
const emit = defineEmits(['update:modelValue'])

const local = ref<boolean>(!!props.modelValue)

watch(() => props.modelValue, v => { local.value = !!v })

function onChange(e: Event) {
  const target = e.target as HTMLInputElement
  local.value = !!target.checked
  emit('update:modelValue', local.value)
}
</script>

<style scoped>
/* Copied switch styles from SiteShortcuts.vue for pixel-perfect match */
.switch {
  position: relative;
  display: inline-block;
  width: 54px;
  height: 28px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid hsla(var(--color-raw), 0.4);
  background-color: var(--bg-color);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 20px;
  width: 20px;
  left: 4px;
  bottom: 3px;
  background-color: var(--color);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: var(--color);
}

input:focus + .slider {
  box-shadow: 0 0 2px var(--color);
}

input:checked + .slider:before {
  -webkit-transform: translateX(25px);
  -ms-transform: translateX(25px);
  transform: translateX(25px);
  background-color: var(--bg-color);
}

.slider.round {
  border-radius: 30px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>