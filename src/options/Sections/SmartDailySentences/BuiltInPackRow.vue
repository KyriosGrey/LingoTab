<script setup lang="ts">
import Toggle from '@/components/shared/Toggle.vue'
import { usePackSource } from '@/composables/smartSentences/usePackSource'
import { t } from '@/i18n'
import Section from '@/options/components/Section.vue'
import { computed, onMounted } from 'vue'

const { getSource, setSource, isBuiltInActive } = usePackSource()

const isEnabled = computed({
  get: () => isBuiltInActive(),
  set: () => {}, // handled by onToggle
})

onMounted(async () => {
  await (usePackSource().loadSource as () => Promise<void>)()
})

async function onToggle(v: boolean) {
  if (v) {
    // Enable built-in pack
    await setSource('builtin')
  }
  else {
    // Disable built-in pack
    await setSource(null)
  }
}
</script>

<template>
  <Section
    :title="t('smart.builtIn.title')"
    :description="t('smart.builtIn.description')"
  >
    <template #bar>
      <Toggle :model-value="isEnabled" @update:model-value="onToggle" />
    </template>
  </Section>
</template>
