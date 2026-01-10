<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import Section from '@/options/components/Section.vue'
import * as storage from '@/utils/storage'

const props = defineProps<{ modelValue?: string, testing?: boolean }>()
const emit = defineEmits(['update:modelValue', 'save', 'test'])

const localKey = ref(props.modelValue ?? '')
const status = ref('')

watch(() => props.modelValue, v => { localKey.value = v ?? '' })

function onInput() {
  // Immediately propagate the value to parent so parent can use it (Test/Generate)
  emit('update:modelValue', localKey.value)
}

async function save() {
  await storage.set({ smartDailyApiKey: localKey.value })
  emit('update:modelValue', localKey.value)
  emit('save', localKey.value)
  status.value = 'Saved'
  setTimeout(() => status.value = '', 2000)
}

async function clearKey() {
  localKey.value = ''
  await storage.remove('smartDailyApiKey')
  emit('update:modelValue', '')
  emit('save', '')
  status.value = ''
}

// emit test event and pass current key as argument (parent may use it)
function test() {
  status.value = ''
  emit('test', localKey.value)
}

/**
 * Map specific known messages to visual types.
 * We favor exact matches (case-insensitive) for the clear list of messages,
 * e.g. "Saved" => success. Fallback to simple keyword checks.
 */
const statusType = computed(() => {
  const sRaw = status.value ?? ''
  const s = sRaw.trim().toLowerCase()
  if (!s) return ''

  // Exact mappings for known messages (add new messages here)
  const exactMap: Record<string, 'success' | 'error'> = {
    'saved': 'success',
    'connection ok': 'success',
    'connection successful': 'success',
    'no api key': 'error',
    'connection failed or invalid response': 'error',
  }

  if (exactMap[s]) return exactMap[s]

  // Fallback keyword checks
  if (s.includes('ok') || s.includes('success') || s.includes('saved') || s.includes('done')) return 'success'
  if (s.includes('error') || s.includes('fail') || s.includes('invalid')) return 'error'

  return ''
})
</script>

<template>
  <Section
    title="Groq API Key"
    description="Get a Groq API key to enable AI generation (stored locally only)."
  >
    <div class="input-with-actions">
      <!-- show key as plain text so user sees what they paste -->
      <input
        v-model="localKey"
        @input="onInput"
        class="input"
        type="text"
        placeholder="Paste your Groq API key"
        aria-label="Groq API Key"
      />
      <div class="actions">
        <button class="btn" @click="save" :disabled="!localKey">Save</button>
        <button class="btn ghost" @click="clearKey" :disabled="!localKey">Clear</button>
        <button class="btn" @click="test" :disabled="!localKey || testing">
          {{ testing ? 'Testing…' : 'Test connection' }}
        </button>
      </div>
    </div>

    <!-- small instructional note under the field/buttons — same visual tone as Section description -->
    <div class="hint">
      Where to get a key:
      <ol>
        <li>Visit the Groq account page: <a href="https://console.groq.com" target="_blank" rel="noopener">console.groq.com</a></li>
        <li>Create or select a project, then generate an API key: <a href="https://console.groq.com/keys" target="_blank" rel="noopener">console.groq.com/keys</a></li>
        <li>Copy the key and paste it above, then click <strong>Save</strong> and <strong>Test connection</strong>.</li>
        <li><strong>Note:</strong> the Groq API key is shown only once when you create it. If you forget to copy it immediately, you will need to delete the key in the Groq console and create a new one.</li>
      </ol>
    </div>

    <!-- status badge (button-like look, single-state color depending on message) -->
    <div v-if="status" :class="['status-badge', statusType]">
      {{ status }}
    </div>
  </Section>
</template>

<style scoped>
/* keep layout for input and actions */
.input-with-actions {
  display: flex;
  gap: 8px;
  align-items: center;
  width: 100%;
}

/* input styling aligned with WordList filter field */
.input {
  flex: 1 1 auto;
  background-color: hsla(var(--color-raw), 0.15);
  border: none;
  border-radius: 4px;
  padding: 6px 10px;
  color: var(--color);
  font-size: 1rem;
  outline: none;
  transition: background-color ease-in-out 0.13s, box-shadow 0.13s;
}

.input:focus,
.input:hover:not(:disabled) {
  background-color: hsla(var(--color-raw), 0.2);
  box-shadow: 0 0 0 3px hsla(var(--color-raw), 0.06);
}

.input::placeholder {
  color: hsla(var(--color-raw), 0.6);
}

.input[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}

/* small instructional hint under the field/buttons — same visual tone as description */
.hint {
  color: hsla(var(--color-raw), 0.7);
  font-size: 0.75rem;
  margin-top: 8px;
  line-height: 1.3;
}

.hint ol {
  padding-left: 18px;
  margin: 6px 0 0;
}

.hint a {
  color: var(--color);
  text-decoration: underline;
}

/* actions/buttons */
.actions {
  display: flex;
  gap: 8px;
}

/* ensure buttons align with input height */
/* Button baseline */
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
  transition: background-color 0.13s ease-in-out, box-shadow 0.13s;
  line-height: 1;
}
.btn[disabled] { opacity: 0.5; pointer-events: none; }
.btn.ghost { background: transparent; border: 1px solid hsla(var(--color-raw), 0.08); }

/* status badge: button-like static element, no hover states */
.status-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  border-radius: 4px;
  font-weight: 700;     /* same as buttons */
  font-size: 0.8rem;    /* same as buttons */
  color: var(--color);
  line-height: 1;
  user-select: none;
  pointer-events: none;  /* non-interactive */
  margin-top: 8px;
  background: hsla(var(--color-raw), 0.04);
  border: 1px solid transparent;
}

/* success state — green translucent */
.status-badge.success {
  background: rgba(46, 204, 113, 0.12);  /* soft green */
  border-color: rgba(46, 204, 113, 0.22);
  color: var(--color);
}

/* error/other state — red translucent */
.status-badge.error {
  background: rgba(204, 67, 67, 0.10); /* soft red */
  border-color: rgba(204, 67, 67, 0.18);
  color: var(--color);
}

/* muted text */
.muted { color: hsla(var(--color-raw), 0.6); margin-top:6px; }
</style>