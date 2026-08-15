<script setup lang="ts">
import Toggle from '@/components/shared/Toggle.vue'
import { usePackSource } from '@/composables/smartSentences/usePackSource'
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
    title="Built-in sentence pack"
    description="Enable to use a pre-loaded set of practice sentences instead of generating new ones."
  >
    <template #bar>
      <Toggle :model-value="isEnabled" @update:model-value="onToggle" />
    </template>
  </Section>
</template>
