<script setup lang="ts">
import Toggle from '@/components/shared/Toggle.vue'
import Section from '@/options/components/Section.vue'
import * as storage from '@/utils/storage'
import { onMounted, ref } from 'vue'

const storageKey = 'smartDailySettings'

const localShowHints = ref(false)

onMounted(async () => {
  try {
    const s = await storage.get([storageKey])
    const st = s?.[storageKey] ?? {}
    localShowHints.value = !!st.showHints
  }
  catch (e) {
    console.warn('[Hints] failed to read settings', e)
    localShowHints.value = false
  }
})

async function onToggle(v: boolean) {
  localShowHints.value = v

  // Merge into smartDailySettings without overwriting other fields
  try {
    const s = await storage.get([storageKey])
    const base = s?.[storageKey] ?? {}
    const merged = { ...base, showHints: v }
    await storage.set({ [storageKey]: merged })
  }
  catch (err) {
    console.warn('[Hints] failed to save showHints', err)
  }
}
</script>

<template>
  <Section
    title="Hints"
    description="When enabled, each generated sentence may include a grammar hint"
  >
    <template #bar>
      <Toggle :model-value="localShowHints" @update:model-value="onToggle" />
    </template>
  </Section>
</template>

<style scoped>
.muted { color: hsla(var(--color-raw), 0.6); font-size: 0.9rem; }
.hint-note { color: hsla(var(--color-raw), 0.65); font-size: 0.85rem; }
</style>
