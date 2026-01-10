<template>
  <Section
    title="Target language"
    description="Choose the target language used for automatic translations."
  >
    <template #bar>
      <div class="bar-actions">
        <Select
          v-model="selectedLangObject"
          title="Select target language"
          :options="langSelectOptions"
          class="select"
        />
      </div>
    </template>
  </Section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Section from '@/options/components/Section.vue'
import Select from '@/options/components/Select.vue'
import languages from '@/data/googleTranslateLanguages'

/**
 * API: parent passes modelValue (string) — language code (e.g. 'ru').
 * Internally we present Select with option.value = language object {code, lang}
 * and map between code <-> object so parent keeps string API unchanged.
 */
const props = defineProps<{ modelValue?: string }>()
const emit = defineEmits(['update:modelValue'])

// build options exactly like GoogleTranslate: text = lang.lang, value = object
const langSelectOptions = languages.map((l: any) => ({ value: l, text: l.lang }))

// computed that maps parent's code <-> object used by Select
const selectedLangObject = computed({
  get() {
    const code = props.modelValue ?? 'ru'
    const found = languages.find((l: any) => l.code === code)
    return found ?? languages[0]
  },
  set(val: any) {
    // val is language object selected from Select
    const code = val?.code ?? 'ru'
    emit('update:modelValue', code)
  }
})
</script>

<style scoped>
.bar-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  flex: 0 0 auto;
}

.select {
  min-width: 160px;
  max-width: 280px;
  width: auto;
}

@media (max-width: 740px) {
  .bar-actions {
    width: 100%;
    justify-content: flex-start;
    margin-top: 8px;
  }
  .select {
    width: 100%;
    max-width: none;
  }
}
</style>