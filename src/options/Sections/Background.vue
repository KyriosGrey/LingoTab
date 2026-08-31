<script setup lang="ts">
import FileSelector from '@/components/shared/FileSelector.vue'

import useBackground, { BackgroundMode } from '@/composables/useBackground'
import { t } from '@/i18n'
import Section from '@/options/components/Section.vue'

import Select from '@/options/components/Select.vue'
import { readFile } from '@/utils/file'
import { computed } from 'vue'

const { url, mode, saveImageDataURL } = useBackground({ initialize: true })

// computed, not a plain array: the labels have to be rebuilt when the interface
// language changes, and `t()` only tracks the language where it is re-evaluated.
const options = computed(() => [
  {
    text: t('background.none'),
    value: BackgroundMode.NO_BG,
  },
  {
    text: t('background.custom'),
    value: BackgroundMode.IMAGE,
  },
])

async function handleFileSelect(file: File) {
  const base64 = (await readFile(file, 'dataURL')) as string
  saveImageDataURL(base64)
}

const handleURLChange = () => saveImageDataURL(url.value)
</script>

<template>
  <Section :title="t('background.title')" :description="t('background.description')">
    <template #bar>
      <Select v-model="mode" :options="options" />
    </template>

    <div v-if="mode === BackgroundMode.IMAGE" class="actions">
      <label class="url-input">
        <i-ic-round-search class="icon" />
        <input
          v-model="url"
          type="url"
          :placeholder="t('background.urlPlaceholder')"
          class="text-body-sm"
          @change="handleURLChange"
        >
      </label>

      <span class="or text-body-sm">{{ t('background.or') }}</span>

      <FileSelector
        id="bg-file"
        :label="t('background.chooseFile')"
        accept="image/*"
        :max-size="2100000"
        @file="handleFileSelect"
      />
    </div>
  </Section>
</template>

<style scoped>
.actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.or {
  color: var(--color);
  flex-shrink: 0;
}

/* Mirrors src/components/shared/SearchInput.vue's look — kept local rather than
   reusing that component because this field needs a native `change` event (save
   on blur/enter), which SearchInput doesn't expose (it only emits on every
   keystroke via v-model). */
.url-input {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1 1 auto;
  min-width: 200px;
  padding: 8px 10px;
  border-radius: 6px;
  border: 1px solid var(--overlay-weak);
  background: var(--surface-color);
  transition: border-color 0.15s ease-in-out;
}
.url-input:has(input:focus) {
  border-color: var(--accent-color-hover);
}

.url-input .icon {
  flex-shrink: 0;
  color: var(--text-secondary);
}

.url-input input {
  flex: 1;
  min-width: 0;
  border: none;
  outline: none;
  background: transparent;
  color: var(--color);
}
.url-input input::placeholder {
  color: var(--text-secondary);
}
</style>
