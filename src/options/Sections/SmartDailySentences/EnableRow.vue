<script setup lang="ts">
import Toggle from '@/components/shared/Toggle.vue'
import { t } from '@/i18n'
import Section from '@/options/components/Section.vue'

const { modelValue } = defineProps<{ modelValue?: boolean }>()
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <Section
    :title="t('smart.enable.title')"
    :description="t('smart.enable.description')"
  >
    <template #bar>
      <Toggle :model-value="!!modelValue" @update:model-value="emit('update:modelValue', $event)" />
    </template>
  </Section>
</template>
