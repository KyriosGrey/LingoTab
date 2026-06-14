<template>
  <Section
    title="Import sentence pack"
    description="Load a custom pack from a JSON file. Toggle below to enable it."
  >
    <template #bar>
      <div class="bar-actions">
        <button class="btn" @click="triggerFileInput" type="button">
          {{ selectedFileName ? 'Change file' : 'Choose file' }}
        </button>
        <span v-if="selectedFileName" class="file-name">{{ selectedFileName }}</span>
      </div>
    </template>
  </Section>

  <!-- Conditionally show preview panel if file was loaded -->
  <div v-if="loadedPack" class="import-preview">
    <PreviewPanel
      :pack="loadedPack"
      :warning="loadWarning"
      @accept="acceptImportedPack"
      @discard="discardImportedPack"
    />
  </div>

  <!-- File input (hidden) -->
  <input
    ref="fileInput"
    type="file"
    accept=".json"
    @change="onFileSelected"
    style="display: none"
  />

  <!-- Status message -->
  <div v-if="statusMessage" :class="['status-badge', statusType]">
    {{ statusMessage }}
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import Section from '@/options/components/Section.vue'
import PreviewPanel from './PreviewPanel.vue'
import { validateAndNormalizePack, type Pack } from '@/utils/packValidator'
import { usePackSource } from '@/composables/smartSentences/usePackSource'
import * as storage from '@/utils/storage'

const { setSource, isUploadedActive } = usePackSource()

const storagePackKey = 'lastSmartPack'
const storageUploadedPackKey = 'smartUploadedPack'

const fileInput = ref<HTMLInputElement>()
const selectedFileName = ref('')
const loadedPack = ref<Pack | null>(null)
const loadWarning = ref('')
const statusMessage = ref('')

const statusType = computed(() => {
  const s = (statusMessage.value ?? '').trim().toLowerCase()
  if (!s) return ''
  if (s.includes('error') || s.includes('invalid')) return 'error'
  if (s.includes('loaded') || s.includes('accepted')) return 'success'
  return ''
})

onMounted(async () => {
  // Load saved uploaded pack if it exists and is active
  try {
    const data = await storage.get([storageUploadedPackKey])
    if (data && data[storageUploadedPackKey]) {
      const saved = data[storageUploadedPackKey]
      if (isUploadedActive()) {
        loadedPack.value = saved
        selectedFileName.value = 'Loaded from storage'
      }
    }
  } catch (e) {
    console.warn('[ImportedPackRow] failed to load saved uploaded pack', e)
  }
})

function triggerFileInput() {
  fileInput.value?.click()
}

async function onFileSelected(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) return

  selectedFileName.value = file.name
  statusMessage.value = ''
  loadWarning.value = ''

  const reader = new FileReader()
  reader.onload = (e) => {
    try {
      const text = e.target?.result as string
      const rawPack = JSON.parse(text)

      // Validate and normalize
      const normalized = validateAndNormalizePack(rawPack)
      loadedPack.value = normalized
      statusMessage.value = `Loaded: ${normalized.count} sentences. Review and Accept to enable.`
    } catch (err: any) {
      statusMessage.value = `Error: ${err?.message || 'Invalid JSON file'}`
      loadedPack.value = null
      selectedFileName.value = ''
    }
  }
  reader.onerror = () => {
    statusMessage.value = 'Error: Failed to read file'
    loadedPack.value = null
    selectedFileName.value = ''
  }
  reader.readAsText(file)
}

async function acceptImportedPack() {
  if (!loadedPack.value) return

  try {
    // Save uploaded pack and set as active source
    await storage.set({
      [storageUploadedPackKey]: loadedPack.value,
      [storagePackKey]: loadedPack.value
    })
    await setSource('uploaded')

    statusMessage.value = 'Pack accepted and enabled.'
    // Keep the pack visible
  } catch (e) {
    statusMessage.value = `Error: ${(e as any)?.message || 'Failed to save pack'}`
    console.warn('[ImportedPackRow] failed to accept pack', e)
  }
}

function discardImportedPack() {
  loadedPack.value = null
  selectedFileName.value = ''
  statusMessage.value = 'File discarded.'
}
</script>

<style scoped>
.bar-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 0 0 auto;
}

.btn {
  padding: 8px 10px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 0.8rem;
  border: none;
  color: var(--color);
  background-color: hsla(var(--color-raw), 0.08);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.13s ease-in-out;
  line-height: 1;
}

.btn:hover {
  background-color: hsla(var(--color-raw), 0.12);
}

.file-name {
  color: hsla(var(--color-raw), 0.7);
  font-size: 0.85rem;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.import-preview {
  margin-top: 12px;
  margin-bottom: 12px;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 0.8rem;
  color: var(--color);
  line-height: 1;
  user-select: none;
  pointer-events: none;
  margin-top: 8px;
  background: hsla(var(--color-raw), 0.04);
  border: 1px solid transparent;
}

.status-badge.success {
  background: rgba(46, 204, 113, 0.12);
  border-color: rgba(46, 204, 113, 0.22);
}

.status-badge.error {
  background: rgba(204, 67, 67, 0.10);
  border-color: rgba(204, 67, 67, 0.18);
}
</style>
