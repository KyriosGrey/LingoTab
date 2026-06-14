<template>
  <Section
    title="Built-in sentence pack"
    description="Enable to use a pre-loaded set of practice sentences instead of generating new ones."
  >
    <template #bar>
      <label class="switch">
        <input type="checkbox" :checked="isEnabled" @change="onToggle($event)" />
        <span class="slider round" />
      </label>
    </template>
  </Section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import Section from '@/options/components/Section.vue'
import { usePackSource } from '@/composables/smartSentences/usePackSource'
import { builtInPack } from '@/data/smartSentences/builtInPack'

const { getSource, setSource, isBuiltInActive } = usePackSource()

const isEnabled = computed({
  get: () => isBuiltInActive(),
  set: () => {} // handled by onToggle
})

onMounted(async () => {
  await (usePackSource().loadSource as () => Promise<void>)()
})

async function onToggle(e: Event) {
  const target = e.target as HTMLInputElement
  const v = !!target.checked

  if (v) {
    // Enable built-in pack
    await setSource('builtin')
  } else {
    // Disable built-in pack
    await setSource(null)
  }
}
</script>

<style scoped>
/* Reuse switch styles from other sections (EnableRow, Hints) */
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
  transition: 0.4s;
}

input:checked + .slider {
  background-color: var(--color);
}

input:focus + .slider {
  box-shadow: 0 0 2px var(--color);
}

input:checked + .slider:before {
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
