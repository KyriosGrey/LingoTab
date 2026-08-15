<script setup lang="ts">
import Toggle from '@/components/shared/Toggle.vue'
import { resetMixState } from '@/composables/useSmartMix'
import Section from '@/options/components/Section.vue'
import Select from '@/options/components/Select.vue'
import * as storage from '@/utils/storage'
import { onMounted, ref, watch } from 'vue'

const storageKey = 'smartDailySettings'

const localEnabled = ref(false)
const localWordsPerSentence = ref<number>(2)

// Options for select — keep small range by default, can be extended later
const options = [
  { value: 1, text: '1' },
  { value: 2, text: '2' },
  { value: 3, text: '3' },
  { value: 4, text: '4' },
  { value: 5, text: '5' },
  { value: 6, text: '6' },
  { value: 7, text: '7' },
  { value: 8, text: '8' },
  { value: 9, text: '9' },
  { value: 10, text: '10' },
  { value: 25, text: '25' },

]

onMounted(async () => {
  try {
    const s = await storage.get([storageKey])
    const st = s?.[storageKey] ?? {}
    const mix = st.mixMode ?? {}
    localEnabled.value = !!mix.enabled
    const v = Number(mix.wordsPerSentence ?? 2) || 2
    // clamp to available options
    localWordsPerSentence.value = options.some(o => o.value === v) ? v : 2
  }
  catch (e) {
    console.warn('[MixMode] failed to read settings', e)
    localEnabled.value = false
    localWordsPerSentence.value = 2
  }
})

async function savePartial(upd: any) {
  try {
    const s = await storage.get([storageKey])
    const base = s?.[storageKey] ?? {}
    const merged = { ...base, mixMode: { ...(base.mixMode || {}), ...upd } }
    await storage.set({ [storageKey]: merged })
  }
  catch (err) {
    console.warn('[MixMode] failed to save mixMode', err)
  }
}

async function onToggle(v: boolean) {
  localEnabled.value = v
  await savePartial({ enabled: v })
  // reset internal mix state so cycles start fresh after toggling
  try { await resetMixState() }
  catch (err) { /* ignore */ }
}

// watch the select value and persist changes (debounced behavior not required for small updates)
watch(localWordsPerSentence, async (val, oldVal) => {
  const clamped = Math.max(1, Math.round(Number(val || 1)))
  localWordsPerSentence.value = options.some(o => o.value === clamped) ? clamped : 2
  try {
    await savePartial({ wordsPerSentence: localWordsPerSentence.value })
    // reset internal mix state when ratio changes
    try { await resetMixState() }
    catch (err) { /* ignore */ }
  }
  catch (err) {
    console.warn('[MixMode] failed to persist wordsPerSentence', err)
  }
})
</script>

<template>
  <Section
    title="Mix words & sentences"
    description="When enabled, New Tab will alternate showing words and generated sentences."
  >
    <template #bar>
      <Toggle :model-value="localEnabled" @update:model-value="onToggle" />
    </template>
  </Section>

  <Section
    title="Words per sentence"
    description="If sentences are not available, the system falls back to individual words."
  >
    <template #bar>
      <Select
        v-model="localWordsPerSentence"
        :options="options"
        class="select"
      />
    </template>
  </Section>
</template>

<style scoped>
.select {
  min-width: 120px;
  max-width: 220px;
  width: auto;
}

@media (max-width: 740px) {
  .select {
    width: 100%;
    max-width: none;
  }
}
</style>
