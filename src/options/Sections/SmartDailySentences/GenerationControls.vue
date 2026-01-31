<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ apiKey?: string, generating?: boolean }>()
const emit = defineEmits(['generate'])

const generating = computed(() => !!props.generating)
const apiKeyPresent = computed(() => !!props.apiKey && String(props.apiKey).trim().length > 0)

function onGenerateClick() {
  console.debug('[GenerationControls] generate clicked, apiKeyPresent=', apiKeyPresent.value, 'generating=', generating.value)
  emit('generate')
}
</script>

<template>
  <div class="row small-gap">
    <button
      class="btn btn--primary"
      :disabled="!apiKeyPresent || generating"
      type="button"
      @click="onGenerateClick"
    >
      {{ generating ? 'Generating…' : 'Generate now (preview)' }}
    </button>

    <span v-if="generating" class="muted">Status: Generating…</span>
  </div>
</template>

<style scoped>
.row.small-gap { display:flex; gap:10px; align-items:center; }

/* Button styles aligned with ApiKeyRow.vue (inline-flex + min-height for adaptivity) */
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

  /*min-height: 38px;*/ /* keep visual rhythm but allow growth if needed */
  transition: background-color 0.13s ease-in-out, box-shadow 0.13s;
  line-height: 1;
}

.btn:hover:not([disabled]) {
  background-color: hsla(var(--color-raw), 0.12);
}

.btn[disabled] {
  opacity: 0.5;
  pointer-events: none;
}

/* Primary variant */
.btn--primary {
  background: var(--accent, #1f6feb);
  color: var(--bg-color, #fff);
  border: none;
}

/* Primary hover (subtle) */
.btn--primary:hover:not([disabled]) {
  filter: brightness(1.05);
}

/* Ghost variant kept for parity */
.btn.ghost {
  background: transparent;
  border: 1px solid hsla(var(--color-raw), 0.08);
}

/* muted text */
.muted { color: hsla(var(--color-raw), 0.6); font-size:0.9rem; }
</style>
