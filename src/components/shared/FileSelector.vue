<script lang="ts" setup>
import { t } from '@/i18n'
import { formatBytes } from '@/utils/number'
import { computed, ref } from 'vue'

interface Props {
  id: string
  accept: string
  label?: string
  maxSize?: number
  maxWidth?: string
}

const props = withDefaults(defineProps<Props>(), {
  label: undefined,
  maxWidth: undefined,
  maxSize: Infinity,
})

const emit = defineEmits<{
  (e: 'file', file: File): void
}>()

// Resolved while rendering rather than as a prop default, so the fallback label
// follows the interface language instead of freezing at component setup.
const labelText = computed(() => props.label ?? t('file.select'))

const input = ref<HTMLInputElement | null>(null)
const fileName = ref('')

async function handleFile() {
  if (input.value?.files?.length) {
    const file = input.value.files[0]

    if (file.size > props.maxSize) {
      // eslint-disable-next-line no-alert
      alert(
        `File size (${formatBytes(
          file.size,
        )}) should not be greater than ${formatBytes(props.maxSize)}!`,
      )
      return
    }

    fileName.value = file.name
    emit('file', file)
  }
}
</script>

<template>
  <div class="file-input">
    <input
      :id="id"
      ref="input"
      class="input"
      type="file"
      :accept="accept"
      @change="handleFile"
    >

    <label :for="id" class="text-body-sm" :style="{ maxWidth }">
      <i-ic-round-upload-file />
      <span class="label-text">{{ fileName ? fileName : labelText }}</span>
    </label>
  </div>
</template>

<style scoped>
.file-input {
  position: relative;
}

.input {
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
}

label {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid var(--overlay-strong);
  color: var(--color);
  background: var(--overlay-weak);
  cursor: pointer;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
}

.label-text {
  min-width: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.input:hover + label,
.input:focus + label {
  background: var(--overlay-strong);
  border-color: var(--accent-color-hover);
}
</style>
