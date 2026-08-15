<script setup lang="ts">
import ActionButton from '@/components/shared/ActionButton.vue'
import SearchInput from '@/components/shared/SearchInput.vue'
import Section from '@/options/components/Section.vue'
import * as storage from '@/utils/storage'
import { computed, ref, watch } from 'vue'

const props = defineProps<{ modelValue?: string, testing?: boolean }>()
const emit = defineEmits(['update:modelValue', 'save', 'test'])

const localKey = ref(props.modelValue ?? '')
const status = ref('')

watch(() => props.modelValue, (v) => { localKey.value = v ?? '' })

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
  if (!s)
    return ''

  // Exact mappings for known messages (add new messages here)
  const exactMap: Record<string, 'success' | 'error'> = {
    'saved': 'success',
    'connection ok': 'success',
    'connection successful': 'success',
    'no api key': 'error',
    'connection failed or invalid response': 'error',
  }

  if (exactMap[s])
    return exactMap[s]

  // Fallback keyword checks
  if (s.includes('ok') || s.includes('success') || s.includes('saved') || s.includes('done'))
    return 'success'
  if (s.includes('error') || s.includes('fail') || s.includes('invalid'))
    return 'error'

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
      <SearchInput
        v-model="localKey"
        class="input"
        placeholder="Paste your Groq API key"
        @update:model-value="onInput"
      />
      <div class="actions">
        <ActionButton :disabled="!localKey" @click="save">
          Save
        </ActionButton>
        <ActionButton :disabled="!localKey" @click="clearKey">
          Clear
        </ActionButton>
        <ActionButton :disabled="!localKey || testing" @click="test">
          {{ testing ? 'Testing…' : 'Test connection' }}
        </ActionButton>
      </div>
    </div>

    <!-- small instructional note under the field/buttons — same visual tone as Section description -->
    <div class="hint text-body-sm">
      Where to get a key:
      <ol>
        <li>Visit the Groq account page: <a href="https://console.groq.com" target="_blank" rel="noopener">console.groq.com</a></li>
        <li>Create or select a project, then generate an API key: <a href="https://console.groq.com/keys" target="_blank" rel="noopener">console.groq.com/keys</a></li>
        <li>Copy the key and paste it above, then click <strong>Save</strong> and <strong>Test connection</strong>.</li>
        <li><strong>Note:</strong> the Groq API key is shown only once when you create it. If you forget to copy it immediately, you will need to delete the key in the Groq console and create a new one.</li>
      </ol>
    </div>

    <!-- status badge (button-like look, single-state color depending on message) -->
    <div v-if="status" class="status-badge text-body-sm" :class="[statusType]">
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

.input {
  flex: 1 1 auto;
}

/* small instructional hint under the field/buttons — same visual tone as description */
.hint {
  color: var(--text-secondary);
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

/* status badge: button-like static element, no hover states */
.status-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  border-radius: 4px;
  color: var(--color);
  line-height: 1;
  user-select: none;
  pointer-events: none;  /* non-interactive */
  margin-top: 8px;
  background: var(--overlay-weak);
  border: 1px solid transparent;
}

/* success state — green translucent */
.status-badge.success {
  background: hsla(150, 42.6%, 50.8%, 0.12);
  border-color: hsla(150, 42.6%, 50.8%, 0.3);
}

/* error/other state — red translucent */
.status-badge.error {
  background: hsla(0, 78.7%, 63.1%, 0.1);
  border-color: hsla(0, 78.7%, 63.1%, 0.25);
}
</style>
