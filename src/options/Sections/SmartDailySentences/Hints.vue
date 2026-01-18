<template>
  <Section
    title="Hints"
    description="When enabled, each generated sentence may include a grammar hint"
  >
    <template #bar>
      <label class="switch">
        <input type="checkbox" :checked="localShowHints" @change="onToggle($event)" />
        <span class="slider round" />
      </label>
    </template>
  </Section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Section from '@/options/components/Section.vue'
import * as storage from '@/utils/storage'

const storageKey = 'smartDailySettings'

const localShowHints = ref(false)

onMounted(async () => {
  try {
    const s = await storage.get([storageKey])
    const st = s?.[storageKey] ?? {}
    localShowHints.value = !!st.showHints
  } catch (e) {
    console.warn('[Hints] failed to read settings', e)
    localShowHints.value = false
  }
})

async function onToggle(e: Event) {
  const target = e.target as HTMLInputElement
  const v = !!target.checked
  localShowHints.value = v

  // Merge into smartDailySettings without overwriting other fields
  try {
    const s = await storage.get([storageKey])
    const base = s?.[storageKey] ?? {}
    const merged = { ...base, showHints: v }
    await storage.set({ [storageKey]: merged })
  } catch (err) {
    console.warn('[Hints] failed to save showHints', err)
  }
}
</script>

<style scoped>
/* reuse same switch styles as other sections */
.switch {
  position: relative;
  display: inline-block;
  width: 54px;
  height: 28px;
}

.switch input { opacity: 0; width: 0; height: 0; }

.slider {
  position: absolute;
  cursor: pointer;
  top: 0; left: 0; right: 0; bottom: 0;
  border: 1px solid hsla(var(--color-raw), 0.4);
  background-color: var(--bg-color);
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 20px; width: 20px;
  left: 4px; bottom: 3px;
  background-color: var(--color);
  transition: 0.4s;
}

input:checked + .slider { background-color: var(--color); }
input:checked + .slider:before { transform: translateX(25px); background-color: var(--bg-color); }

.slider.round { border-radius: 30px; }
.slider.round:before { border-radius: 50%; }

.muted { color: hsla(var(--color-raw), 0.6); font-size: 0.9rem; }
.hint-note { color: hsla(var(--color-raw), 0.65); font-size: 0.85rem; }
</style>