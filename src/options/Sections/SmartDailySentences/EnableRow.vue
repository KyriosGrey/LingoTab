<script setup lang="ts">
import Toggle from '@/components/shared/Toggle.vue'
import Section from '@/options/components/Section.vue'

const { modelValue } = defineProps<{ modelValue?: boolean }>()
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <Section
    title="Smart Sentences"
    description="When enabled, New Tab will show Smart Sentences practice instead of the regular word study interface."
  >
    <template #bar>
      <Toggle :model-value="!!modelValue" @update:model-value="emit('update:modelValue', $event)" />
    </template>
  </Section>
</template>
