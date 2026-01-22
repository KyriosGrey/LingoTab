<template>
  <Section
    title="Mix words & sentences"
    description="When enabled, New Tab will alternate showing words and generated sentences."
  >
    <template #bar>
      <label class="switch">
        <input type="checkbox" :checked="localEnabled" @change="onToggle($event)" />
        <span class="slider round" />
      </label>
    </template>

    <div style="margin-top:10px;">
      <div class="row">
        <div
          class="label-block" 
        >
          Words per sentence(If sentences are not available, the flow falls back to words):
        </div>

        <!-- Select aligned to the right (same visual family as Length.vue) -->
        <Select
          v-model="localWordsPerSentence"
          :options="options"
          class="select"
        />
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import Section from '@/options/components/Section.vue'
import Select from '@/options/components/Select.vue'
import * as storage from '@/utils/storage'
import { resetMixState } from '@/composables/useSmartMix'

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
  { value: 25, text: '25' }

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
  } catch (e) {
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
  } catch (err) {
    console.warn('[MixMode] failed to save mixMode', err)
  }
}

async function onToggle(e: Event) {
  const target = e.target as HTMLInputElement
  const v = !!target.checked
  localEnabled.value = v
  await savePartial({ enabled: v })
  // reset internal mix state so cycles start fresh after toggling
  try { await resetMixState() } catch (err) { /* ignore */ }
}

// watch the select value and persist changes (debounced behavior not required for small updates)
watch(localWordsPerSentence, async (val, oldVal) => {
  const clamped = Math.max(1, Math.round(Number(val || 1)))
  localWordsPerSentence.value = options.some(o => o.value === clamped) ? clamped : 2
  try {
    await savePartial({ wordsPerSentence: localWordsPerSentence.value })
    // reset internal mix state when ratio changes
    try { await resetMixState() } catch (err) { /* ignore */ }
  } catch (err) {
    console.warn('[MixMode] failed to persist wordsPerSentence', err)
  }
})
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

/* layout: label left, select right on one line */
.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  max-width: 100%;
}

/* label block styled like section description (muted/subheading description) */
.label-block {
  color: hsla(var(--color-raw), 0.6);
  font-size: 0.75rem; /* requested size */
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 8px;

  /* allow shrinking so the select stays at right edge */
  flex: 1 1 auto;
  min-width: 0;

  /* keep it one line and ellipsize if too long */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Match Length.vue select sizing and responsive behavior */
.select {
  flex: 0 0 auto;
  min-width: 120px;
  max-width: 220px;
  width: auto;
}

@media (max-width: 740px) {
  .row {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }
  .label-block {
    white-space: normal;
  }
  .select {
    width: 100%;
    max-width: none;
  }
}
</style>