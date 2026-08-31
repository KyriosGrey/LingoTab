<script setup lang="ts">
import { usePackSource } from '@/composables/smartSentences/usePackSource'
import { t } from '@/i18n'
import SettingsGroup from '@/options/components/SettingsGroup.vue'
import * as storage from '@/utils/storage'
import { onMounted, ref, watch } from 'vue'
import BuiltInPackRow from './BuiltInPackRow.vue'
import CreatePackPrompt from './CreatePackPrompt.vue'
import EnableRow from './EnableRow.vue'
import Header2 from './Header2.vue'
import Hints from './Hints.vue'
import ImportedPackRow from './ImportedPackRow.vue'

import MixMode from './MixMode.vue'

interface Settings {
  enabled?: boolean
}

const storageKey = 'smartDailySettings'

const { loadSource } = usePackSource()

// state
const enabled = ref(false)

// load saved settings
onMounted(async () => {
  // Load pack source preference
  await loadSource()

  const s = await storage.get([storageKey])
  if (s && s[storageKey]) {
    const st: Settings = s[storageKey]
    enabled.value = !!st.enabled
  }
})

// save settings when they change (merge into existing storage)
watch(enabled, () => {
  saveSettings()
})

async function saveSettings() {
  const obj: Settings = {
    enabled: enabled.value,
  }
  try {
    const s = await storage.get([storageKey])
    const base = s?.[storageKey] ?? {}
    await storage.set({ [storageKey]: { ...base, ...obj } })
  }
  catch (e) {
    console.warn('[SmartDailySentences] failed to save settings', e)
  }
}
</script>

<template>
  <section class="smart-root">
    <Header2 />
    <div class="smart-root__divider" />

    <SettingsGroup :title="t('group.general')">
      <EnableRow v-model="enabled" />
      <Hints />
      <MixMode />
    </SettingsGroup>

    <SettingsGroup :title="t('group.sentencePack')">
      <BuiltInPackRow />
      <CreatePackPrompt />
      <ImportedPackRow />
    </SettingsGroup>
  </section>
</template>

<style scoped>
.smart-root {
  max-width: 640px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.smart-root__divider {
  height: 1px;
  background: var(--overlay-weak);
}

.muted { color: var(--text-secondary); }
</style>
