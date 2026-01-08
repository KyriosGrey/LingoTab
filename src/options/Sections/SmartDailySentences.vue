<template>
  <!-- Общий Section — заголовок/описание наследуются от Section.vue -->
  <Section title="Smart Daily Sentences (Groq)" description="Персональный пакет предложений. Переводы генерируются автоматически.">
    <template #bar></template>

    <div class="content">
      <!-- Enable -->
      <div class="row">
        <label class="checkbox">
          <b class="vocab-list__item__name">Enable Smart Daily Sentences</b>
          <input type="checkbox" v-model="enabled" @change="saveSettings" />
          <span class="checkmark" />
        </label>
      </div>

      <!-- API key -->
      <div class="row">
        <label class="label-inline">Groq API Key</label>
        <div class="input-with-actions">
          <input class="input" type="password" v-model="apiKey" placeholder="Paste your Groq API key" />
          <div class="actions">
            <button class="btn" @click="saveApiKey">Save</button>
            <button class="btn ghost" @click="clearApiKey">Clear</button>
          </div>
        </div>
      </div>

      <div class="row small-gap">
        <button class="btn btn--primary" @click="onTestConnection" :disabled="!apiKey || testing">
          {{ testing ? 'Testing…' : 'Test connection' }}
        </button>
        <span class="muted" v-if="testResult">{{ testResult }}</span>
      </div>

      <hr />

      <!-- Use global language -->
      <div class="row">
        <label class="label-inline">Target language for translations</label>

        <label class="checkbox">
          <span class="vocab-list__item__name">Use global Translate target language</span>
          <input type="checkbox" id="use-global" v-model="useGlobalTargetLang" @change="saveSettings" />
          <span class="checkmark" />
        </label>

        <div v-if="!useGlobalTargetLang" class="inline" style="margin-top:8px;">
          <Select class="select" v-model="targetLang" :options="langSelectOptions" />
        </div>
      </div>

      <!-- Level -->
      <div class="row">
        <label class="label-inline">CEFR level</label>
        <Select class="select" v-model="level" :options="levelOptions" />
      </div>

      <!-- Topics (list of checkboxes) -->
      <div class="row">
        <label class="label-inline">Topics</label>
        <div class="checkboxes">
          <label v-for="t in topicsList" :key="t" class="checkbox">
            <span class="vocab-list__item__name">{{ t }}</span>
            <input type="checkbox" :value="t" v-model="topics" @change="saveSettings" />
            <span class="checkmark" />
          </label>
        </div>
      </div>

      <!-- Grammar focus (list of checkboxes) -->
      <div class="row">
        <label class="label-inline">Grammar focus</label>
        <div class="checkboxes">
          <label v-for="g in grammarOptions" :key="g" class="checkbox">
            <span class="vocab-list__item__name">{{ g }}</span>
            <input type="checkbox" :value="g" v-model="grammarFocus" @change="saveSettings" />
            <span class="checkmark" />
          </label>
        </div>
      </div>

      <!-- Sentence length -->
      <div class="row">
        <label class="label-inline">Sentence length</label>
        <div class="inline">
          <label class="radio-inline">
            <input type="radio" value="short" v-model="lengthPreset" @change="saveSettings" /> Short (3–7)
          </label>
          <label class="radio-inline">
            <input type="radio" value="long" v-model="lengthPreset" @change="saveSettings" /> Long (8–16)
          </label>
        </div>
      </div>

      <!-- Frequency -->
      <div class="row">
        <label class="label-inline">Update frequency</label>
        <Select class="select" v-model="frequency" :options="frequencyOptions" />
      </div>

      <div class="row small-gap">
        <button class="btn btn--primary" @click="onGenerateNow" :disabled="!apiKey || generating">
          {{ generating ? 'Generating…' : 'Generate now (preview)' }}
        </button>
        <span class="muted" v-if="genResult">{{ genResult }}</span>
      </div>

      <!-- Preview -->
      <div v-if="previewPack" class="preview">
        <h3 class="preview-title">Preview generated pack</h3>
        <pre class="json-preview">{{ prettyPreview }}</pre>
        <div class="row small-gap">
          <button class="btn" @click="acceptPreview">Accept (save pack)</button>
          <button class="btn ghost" @click="discardPreview">Discard</button>
        </div>
        <div v-if="previewWarning" class="muted warn">{{ previewWarning }}</div>
        <p class="muted">Raw response saved for debugging (one entry): lastSmartRawResponse.</p>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import Section from '@/options/components/Section.vue'
import Select from '@/options/components/Select.vue'
import * as aiProviders from '@/modules/aiProviders'
import * as storage from '@/utils/storage'

type Settings = {
  enabled: boolean
  targetLang?: string
  useGlobalTargetLang: boolean
  level: string
  topics: string[]
  grammarFocus: string[]
  lengthPreset: string
  frequency: string | number
}

const storageKey = 'smartDailySettings'
const storageApiKey = 'smartDailyApiKey'
const storagePackKey = 'lastSmartPack'

const enabled = ref(false)
const apiKey = ref('')
const testing = ref(false)
const testResult = ref('')
const generating = ref(false)
const genResult = ref('')

const previewPack = ref<any | null>(null)
const previewRaw = ref<any | null>(null)
const previewWarning = ref('')

const useGlobalTargetLang = ref(true)
const targetLang = ref('ru')
const levels = ['A1','A2','B1','B2','C1','C2']
const topicsList = ['IT & Dev','Business','Travel','Gaming','Daily Life & Slang']
const grammarOptions = ['All','Tenses:Present','Tenses:Past','Tenses:Future','Conditionals','Passive Voice','Modal Verbs','Reported Speech','Gerund & Infinitive']
const level = ref('B1')
const topics = ref<string[]>(['Daily Life & Slang'])
const grammarFocus = ref<string[]>(['All'])
const lengthPreset = ref('short')
const frequency = ref<string | number>('24')

const langOptions = {
  ru: 'Russian',
  uk: 'Ukrainian',
  es: 'Spanish',
  fr: 'French',
  de: 'German',
  ja: 'Japanese'
}

const levelOptions = levels.map(l => ({ value: l, text: l }))
const frequencyOptions = [
  { value: '24', text: 'Once per 24 hours' },
  { value: '12', text: 'Once per 12 hours' },
  { value: 'manual', text: 'Manual only' }
]
const langSelectOptions = Object.entries(langOptions).map(([code, name]) => ({ value: code, text: `${name} (${code})` }))

onMounted(async () => {
  const s = await storage.get([storageKey, storageApiKey, storagePackKey])
  if (s && s[storageKey]) {
    const st: Settings = s[storageKey]
    enabled.value = !!st.enabled
    useGlobalTargetLang.value = !!st.useGlobalTargetLang
    if (st.targetLang) targetLang.value = st.targetLang
    level.value = st.level || 'B1'
    topics.value = st.topics && st.topics.length ? st.topics : ['Daily Life & Slang']
    grammarFocus.value = st.grammarFocus && st.grammarFocus.length ? st.grammarFocus : ['All']
    lengthPreset.value = st.lengthPreset || 'short'
    frequency.value = st.frequency || '24'
  }
  if (s && s[storageApiKey]) apiKey.value = s[storageApiKey]
})

function saveSettings() {
  const obj: Settings = {
    enabled: enabled.value,
    targetLang: targetLang.value,
    useGlobalTargetLang: useGlobalTargetLang.value,
    level: level.value,
    topics: topics.value,
    grammarFocus: grammarFocus.value,
    lengthPreset: lengthPreset.value,
    frequency: frequency.value
  }
  storage.set({ [storageKey]: obj })
}

function saveApiKey() {
  storage.set({ [storageApiKey]: apiKey.value })
  testResult.value = ''
}

function clearApiKey() {
  apiKey.value = ''
  storage.remove(storageApiKey)
  testResult.value = ''
}

async function onTestConnection() {
  testResult.value = ''
  if (!apiKey.value) { testResult.value = 'No API key'; return }
  testing.value = true
  try {
    const settings = getSettingsForPrompt()
    const ok = await aiProviders.testConnection(apiKey.value, settings)
    testResult.value = ok ? 'Connection OK' : 'Connection failed or invalid response'
  } catch (e: any) {
    testResult.value = 'Error: ' + (e?.message || String(e))
  } finally {
    testing.value = false
  }
}

function getSettingsForPrompt() {
  const lengthRange = lengthPreset.value === 'short' ? [3,7] : [8,16]
  return {
    count: 1,
    level: level.value,
    grammarFocus: grammarFocus.value,
    topics: topics.value,
    lengthRange,
    targetLang: targetLang.value
  }
}

async function onGenerateNow() {
  genResult.value = ''
  previewPack.value = null
  previewRaw.value = null
  previewWarning.value = ''
  if (!apiKey.value) { genResult.value = 'No API key'; return }
  generating.value = true
  try {
    const st = {
      count: 3,
      level: level.value,
      grammarFocus: grammarFocus.value,
      topics: topics.value,
      lengthRange: lengthPreset.value === 'short' ? [3,7] : [8,16],
      targetLang: targetLang.value
    }
    const res = await aiProviders.generatePack(apiKey.value, st)
    previewRaw.value = res.raw
    previewPack.value = res.pack
    if (previewPack.value.sentences.length < st.count) {
      previewWarning.value = `Generated ${previewPack.value.sentences.length} of ${st.count} requested sentences. You may retry.`
    }
    genResult.value = `Preview ready: ${res.pack.sentences.length} sentences. Review and Accept to save.`
  } catch (e: any) {
    genResult.value = 'Error: ' + (e?.message || String(e))
  } finally {
    generating.value = false
  }
}

const prettyPreview = computed(() => previewPack.value ? JSON.stringify(previewPack.value, null, 2) : '')

async function acceptPreview() {
  if (!previewPack.value) return
  await storage.set({ [storagePackKey]: previewPack.value, lastSmartPackGeneratedAt: Date.now() })
  previewPack.value = null
  previewRaw.value = null
  previewWarning.value = ''
  genResult.value = 'Pack saved.'
}

function discardPreview() {
  previewPack.value = null
  previewRaw.value = null
  previewWarning.value = ''
  genResult.value = 'Preview discarded.'
}
</script>

<style scoped>
/* layout only — visual rules moved to global options.css where possible */
.content { display:flex; flex-direction:column; gap:12px; padding-top:6px; }
.input-with-actions { display:flex; gap:8px; align-items:center; width:100%; }
.actions { display:flex; gap:8px; }
.row { display:flex; flex-direction:column; gap:8px; }
.row.small-gap { gap:6px; }
.inline { display:flex; gap:12px; align-items:center; }
.json-preview { max-height: 320px; overflow:auto; padding:8px; border-radius:6px; white-space:pre-wrap; word-break:break-word; }
.preview-title { margin:6px 0; font-weight:600; }

/* --- checkbox visuals copied from existing option sections (Translation/VocabularyLists) --- */
.vocab-list__item {
  display: flex;
  align-items: center;
  flex-basis: 100%;
  padding: 5px 0;
}

.vocab-list__item__name {
  margin-right: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--color);
}

.vocab-list__item__count {
  color: hsla(var(--color-raw), 0.75);
  font-size: 0.8rem;
}

/* checkbox visual (same as in VocabularyLists.vue / Translation.vue) */
.checkbox {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  font-size: 0.9rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: -3px;
  left: 0;
  height: 18px;
  width: 18px;
  background-color: hsla(var(--color-raw), 0.2);
  border-radius: 5px;
}

.checkbox:hover input ~ .checkmark {
  background-color: hsla(var(--color-raw), 0.3);
}

.checkbox input:checked ~ .checkmark {
  background-color: var(--color);
}

/* tick mark */
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

.checkbox input:checked ~ .checkmark:after {
  display: block;
}

.checkbox .checkmark:after {
  left: 7px;
  top: 4px;
  width: 5px;
  height: 10px;
  border: solid var(--bg-color);
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}

.checkbox input:focus ~ .checkmark {
  box-shadow: 0 0 3px var(--color);
}

/* --- dropdown / select visuals (copied from Select.vue for consistency) --- */
.select {
  padding: 5px;
  border-radius: 4px;
  border: 1px solid hsla(var(--color-raw), 0.4);
  background: var(--bg-color);
  color: var(--color);
  font-size: 0.9rem;
  cursor: pointer;
}

/* --- button visuals copied from ImportFile.vue (keeps consistent look) --- */
.import-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 8px 10px;
  border-radius: 4px;
  font-size: 0.9rem;
  border: none;
  color: var(--color);
  background-color: hsla(var(--color-raw), 0.1);
  transition: background-color ease-in-out 0.13s;
}
.import-btn:hover {
  background-color: hsla(var(--color-raw), 0.2);
}

/* generic .btn adapted to match ImportFile look while staying consistent with other option controls */
.btn {
  padding: 8px 10px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 0.9rem;
  border: none;
  color: var(--color);
  background-color: hsla(var(--color-raw), 0.08);
  transition: background-color .12s ease;
}
.btn:hover {
  background-color: hsla(var(--color-raw), 0.14);
}
.btn.ghost {
  background: transparent;
  border: 1px solid hsla(var(--color-raw), 0.08);
}
.btn--primary {
  background: var(--accent, #1f6feb);
  color: #fff;
  border: none;
}

</style>