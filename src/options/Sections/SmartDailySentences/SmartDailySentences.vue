<script setup lang="ts">
import { usePackSource } from '@/composables/smartSentences/usePackSource'
import * as aiProviders from '@/modules/aiProviders'
import SettingsGroup from '@/options/components/SettingsGroup.vue'
import * as storage from '@/utils/storage'
import { computed, onMounted, ref, watch } from 'vue'
import ApiKeyRow from './ApiKeyRow.vue'
import BuiltInPackRow from './BuiltInPackRow.vue'
import CEFRlevel from './CEFRlevel.vue'
import CreatePackPrompt from './CreatePackPrompt.vue'
import EnableRow from './EnableRow.vue'
import GenerationControls from './GenerationControls.vue'
import GrammarFocus from './GrammarFocus.vue'
import Header2 from './Header2.vue'
import Hints from './Hints.vue'
import ImportedPackRow from './ImportedPackRow.vue'
import LanguageRow from './LanguageRow.vue'

import Length from './Length.vue'
import MixMode from './MixMode.vue'
import PreviewPanel from './PreviewPanel.vue'
import Topics from './Topics.vue'
import UpdateFrequency from './UpdateFrequency.vue'

interface Settings {
  enabled?: boolean
  apiKey?: string
  targetLang?: string
  level?: string
  topics?: string[]
  grammarFocus?: string[]
  lengthPreset?: string
  frequency?: string | number
  showHints?: boolean
}

const storageKey = 'smartDailySettings'
const storageApiKey = 'smartDailyApiKey'
const storagePackKey = 'lastSmartPack'
const storageUploadedPackKey = 'smartUploadedPack'

const { loadSource, setSource, getSource, isBuiltInActive, isUploadedActive } = usePackSource()

// state
const enabled = ref(false)
const apiKey = ref('')
const targetLang = ref('ru')
const level = ref('B1')
const topics = ref<string[]>(['Daily Life'])
const grammarFocus = ref<string[]>(['All'])
const lengthPreset = ref('mixed')
const frequency = ref<string | number>('24')

const topicsList = ['IT-Dev', 'Finance and Banking', 'Gaming', 'Travel and Directions', 'Daily Life', 'Workplace Communication', 'Design', 'Social Media', 'Education', 'Entertainment']

const grammarOptions = [
  'All',
  'Present Simple',
  'Present Continuous',
  'Present Perfect',
  'Present Perfect Continuous',
  'Past Simple',
  'Past Continuous',
  'Past Perfect',
  'Past Perfect Continuous',
  'Future Simple',
  'Future Continuous',
  'Future Perfect',
  'Future Perfect Continuous',
  'Conditionals',
  'Passive Voice',
  'Modal Verbs',
  'Reported Speech',
  'Gerund & Infinitive',
]

const generating = ref(false)
const testing = ref(false)
const genResult = ref('')
const testResult = ref('')
const previewPack = ref<any | null>(null)
const previewRaw = ref<any | null>(null)
const previewWarning = ref('')

// helper: return length range array based on current lengthPreset
function getLengthRange(): [number, number] {
  if (lengthPreset.value === 'short')
    return [4, 7]
  if (lengthPreset.value === 'mixed')
    return [3, 16]
  return [8, 16]
}

// Compute visual type for testResult using explicit mapping for known messages.
const testResultType = computed(() => {
  const sRaw = testResult.value ?? ''
  const s = sRaw.trim().toLowerCase()
  if (!s)
    return ''

  const exactMap: Record<string, 'success' | 'error'> = {
    'connection ok': 'success',
    'connection successful': 'success',
    'saved': 'success',
    'no api key': 'error',
    'connection failed or invalid response': 'error',
  }

  if (exactMap[s])
    return exactMap[s]
  if (s.includes('ok') || s.includes('success'))
    return 'success'
  if (s.includes('error') || s.includes('fail') || s.includes('invalid'))
    return 'error'
  return ''
})

// Compute visual type for genResult (Preview messages).
const genResultType = computed(() => {
  const sRaw = genResult.value ?? ''
  const s = sRaw.trim().toLowerCase()
  if (!s)
    return ''

  const exactMap: Record<string, 'success' | 'error'> = {
    'preview ready': 'success',
    'pack saved.': 'success',
    'pack saved': 'success',
    'built-in pack loaded: 25 sentences. review and accept to save.': 'success',
    'uploaded pack loaded': 'success',
  }

  if (s.startsWith('built-in pack loaded'))
    return 'success'
  if (s.startsWith('uploaded pack loaded'))
    return 'success'
  if (s.startsWith('preview ready'))
    return 'success'
  if (exactMap[s])
    return exactMap[s]
  if (s.includes('saved') || s.includes('loaded'))
    return 'success'
  if (s.includes('error') || s.includes('fail') || s.includes('no api key'))
    return 'error'
  return ''
})

// load saved settings
onMounted(async () => {
  // Load pack source preference
  await loadSource()

  const s = await storage.get([storageKey, storageApiKey, storagePackKey])
  if (s && s[storageKey]) {
    const st: Settings = s[storageKey]
    enabled.value = !!st.enabled
    if (st.apiKey)
      apiKey.value = st.apiKey
    if (st.targetLang)
      targetLang.value = st.targetLang
    level.value = st.level || 'B1'
    topics.value = st.topics && st.topics.length ? st.topics : ['Daily Life & Slang']
    grammarFocus.value = st.grammarFocus && st.grammarFocus.length ? st.grammarFocus : ['All']
    lengthPreset.value = st.lengthPreset || 'short'
    frequency.value = st.frequency || '24'
  }
  else {
    // if there's separate saved apiKey
    const s2 = await storage.get([storageApiKey])
    if (s2 && s2[storageApiKey])
      apiKey.value = s2[storageApiKey]
  }
})

// save settings when they change (merge into existing storage)
watch([enabled, apiKey, targetLang, level, topics, grammarFocus, lengthPreset, frequency], () => {
  saveSettings()
}, { deep: true })

async function saveSettings() {
  const obj: Settings = {
    enabled: enabled.value,
    apiKey: apiKey.value,
    targetLang: targetLang.value,
    level: level.value,
    topics: topics.value,
    grammarFocus: grammarFocus.value,
    lengthPreset: lengthPreset.value,
    frequency: frequency.value,
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

function onApiKeySaved(val: string) {
  apiKey.value = val
  storage.set({ [storageApiKey]: val })
  testResult.value = ''
}

async function onTestConnection(passedKey?: string) {
  console.debug('[SmartDailySentences] onTestConnection called, passedKey=', passedKey, 'apiKey=', apiKey.value)
  testResult.value = ''
  const usedKey = (typeof passedKey === 'string' && passedKey.trim()) ? passedKey.trim() : apiKey.value
  if (!usedKey) { testResult.value = 'No API key'; return }
  if (usedKey !== apiKey.value)
    apiKey.value = usedKey

  testing.value = true
  try {
    const settings = {
      count: 1,
      level: level.value,
      grammarFocus: grammarFocus.value,
      topics: topics.value,
      lengthRange: getLengthRange(),
      targetLang: targetLang.value,
    }
    const ok = await aiProviders.testConnection(usedKey, settings)
    testResult.value = ok ? 'Connection OK' : 'Connection failed or invalid response'
  }
  catch (e: any) {
    testResult.value = `Error: ${e?.message || String(e)}`
    console.debug('[SmartDailySentences] onTestConnection caught', e)
  }
  finally {
    testing.value = false
  }
}

/**
 * Generate now (preview).
 * Priority: Uploaded → API
 * Generating a new pack always means the user wants a fresh AI pack,
 * so if the built-in pack is active it gets switched off first.
 */
async function onGenerateNow() {
  console.debug('[SmartDailySentences] onGenerateNow called, source=', getSource())
  previewPack.value = null
  previewRaw.value = null
  previewWarning.value = ''
  genResult.value = ''

  // Requesting a new pack means leaving the built-in pack behind.
  if (isBuiltInActive()) {
    await setSource(null)
  }

  // ✅ Check: if uploaded enabled, load from storage
  if (isUploadedActive()) {
    try {
      const data = await storage.get([storageUploadedPackKey])
      if (data && data[storageUploadedPackKey]) {
        const uploaded = data[storageUploadedPackKey]
        previewPack.value = uploaded
        genResult.value = `Uploaded pack loaded: ${uploaded.count} sentences. Review and Accept to save.`
        return
      }
    }
    catch (e: any) {
      genResult.value = `Error loading uploaded pack: ${e?.message || String(e)}`
      console.debug('[SmartDailySentences] onGenerateNow uploaded error', e)
      return
    }
  }

  // Otherwise, use API (neurosource)
  if (!apiKey.value) { genResult.value = 'No API key'; return }
  generating.value = true
  try {
    const st = {
      count: 25,
      level: level.value,
      grammarFocus: grammarFocus.value,
      topics: topics.value,
      lengthRange: getLengthRange(),
      targetLang: targetLang.value,
    }
    const res = await aiProviders.generatePack(apiKey.value, st)
    previewRaw.value = res.raw
    previewPack.value = res.pack
    if ((previewPack.value?.sentences?.length ?? 0) < st.count) {
      previewWarning.value = `Generated ${previewPack.value?.sentences?.length ?? 0} of ${st.count} requested sentences. You may retry.`
    }
    genResult.value = `Preview ready: ${res.pack.sentences.length} sentences. Review and Accept to save.`
  }
  catch (e: any) {
    genResult.value = `Error: ${e?.message || String(e)}`
    console.debug('[SmartDailySentences] onGenerateNow error', e)
  }
  finally {
    generating.value = false
  }
}

/**
 * Accept preview — handle different sources
 */
async function acceptPreview() {
  if (!previewPack.value)
    return

  try {
    const source = getSource()

    // If this was built-in or uploaded, just save
    if (source === 'builtin' || source === 'uploaded') {
      await storage.set({ [storagePackKey]: previewPack.value, lastSmartPackGeneratedAt: Date.now() })
    }
    else {
      // This is AI-generated, so clear alternative sources
      await setSource('ai')
      await storage.set({
        [storagePackKey]: previewPack.value,
        lastSmartPackGeneratedAt: Date.now(),
        smartBuiltInEnabled: false,
      })
    }

    previewPack.value = null
    previewRaw.value = null
    previewWarning.value = ''
    genResult.value = 'Pack saved.'
  }
  catch (e: any) {
    genResult.value = `Error saving pack: ${e?.message || String(e)}`
    console.warn('[SmartDailySentences] acceptPreview error', e)
  }
}

function discardPreview() {
  previewPack.value = null
  previewRaw.value = null
  previewWarning.value = ''
  genResult.value = 'Preview discarded.'
}
</script>

<template>
  <section class="smart-root">
    <Header2 />
    <div class="smart-root__divider" />

    <SettingsGroup title="General">
      <EnableRow v-model="enabled" />
      <Hints />
      <MixMode />
      <BuiltInPackRow />
      <CreatePackPrompt />
      <ImportedPackRow />
    </SettingsGroup>

    <SettingsGroup title="AI Generation Configuration" ai>
      <!-- ApiKey row: Test button is colocated here -->
      <ApiKeyRow
        v-model="apiKey"
        :testing="testing"
        :status="testResult"
        :status-type="testResultType"
        @save="onApiKeySaved"
        @test="onTestConnection"
      />

      <!-- show test result near API row — kept for backward compatibility if needed.
           ApiKeyRow now also receives testResult via props; this is a visual fallback
           and will use the same .status-badge styles. -->
      <div v-if="testResult" class="status-badge text-body-sm" :class="[testResultType]">
        {{ testResult }}
      </div>
    </SettingsGroup>

    <SettingsGroup title="Language & Proficiency" ai>
      <LanguageRow v-model="targetLang" />
      <CEFRlevel v-model="level" />
      <Topics v-model="topics" :items="topicsList" />
    </SettingsGroup>

    <SettingsGroup title="Grammar focus" ai>
      <GrammarFocus v-model="grammarFocus" :items="grammarOptions" />
    </SettingsGroup>

    <SettingsGroup title="Generation settings" ai>
      <Length v-model="lengthPreset" />
      <UpdateFrequency v-model="frequency" />

      <GenerationControls
        :api-key="apiKey"
        :generating="generating"
        @generate="onGenerateNow"
      />

      <!-- genResult styled as status-badge (button-like notification) -->
      <div v-if="genResult" class="status-badge text-body-sm" :class="[genResultType]">
        {{ genResult }}
      </div>

      <PreviewPanel
        :pack="previewPack"
        :warning="previewWarning"
        @accept="acceptPreview"
        @discard="discardPreview"
      />
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

/* Status badge styles (same as ApiKeyRow) */
.status-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  border-radius: 4px;
  color: var(--color);
  line-height: 1;
  user-select: none;
  pointer-events: none;
  margin-top: 8px;
  background: var(--overlay-weak);
  border: 1px solid transparent;
}

.status-badge.success {
  background: hsla(150, 42.6%, 50.8%, 0.12);
  border-color: hsla(150, 42.6%, 50.8%, 0.3);
}

.status-badge.error {
  background: hsla(0, 78.7%, 63.1%, 0.1);
  border-color: hsla(0, 78.7%, 63.1%, 0.25);
}
</style>
