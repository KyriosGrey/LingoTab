<template>
  <div v-if="pack" class="preview">
    <div class="preview-header">
      <h3 class="preview-title">Preview generated pack</h3>
      <p class="preview-subtitle">
        Review the sentences generated from your settings. Accept to save the pack locally, or discard to retry generation.
      </p>
    </div>

    <pre class="json-preview">{{ pretty }}</pre>

    <div class="row small-gap">
      <button class="btn" @click="$emit('accept')">Accept (save pack)</button>
      <button class="btn ghost" @click="$emit('discard')">Discard</button>
    </div>

    <!-- warning styled as status-badge (warning tone) -->
    <div v-if="warning" class="status-badge warning">{{ warning }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ pack: any | null, warning?: string }>()

// expose reactive/computed vars to template
const pack = computed(() => props.pack ?? null)
const pretty = computed(() => pack.value ? JSON.stringify(pack.value, null, 2) : '')
const warning = computed(() => props.warning ?? '')
</script>

<style scoped>
.preview { margin-top: 8px; }

/* Header — styled to match other section headings/subtitles */
.preview-header {
  margin-bottom: 8px;
}

.preview-title {
  margin: 0 0 5px;
  font-weight: 600;
  font-size: 1rem; /* consistent with other section titles */
}

.preview-subtitle {
  margin: 0;
  color: hsla(var(--color-raw), 0.7);
  font-size: 0.75rem;
  line-height: 1.3;
}

/* JSON preview area */
.json-preview { max-height:320px; overflow:auto; padding:8px; border-radius:6px; background: rgba(0,0,0,0.03); white-space:pre-wrap; }

/* layout for action buttons */
.row.small-gap { display:flex; gap:8px; margin-top:8px; }

/* Buttons: same baseline as ApiKeyRow.vue for consistent look & states */
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

.btn:hover:not([disabled]) {
  background-color: hsla(var(--color-raw), 0.12);
}

.btn[disabled] { opacity: 0.5; pointer-events: none; }

.btn.ghost {
  background: transparent;
  border: 1px solid hsla(var(--color-raw), 0.08);
}

/* status-badge (reused pattern): button-like static element */
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

/* warning state — amber translucent */
.status-badge.warning {
  background: rgba(255, 193, 7, 0.11);  /* soft amber */
  border-color: rgba(255, 193, 7, 0.18);
  color: var(--color);
}

/* small muted / fallback */
.muted { color: hsla(var(--color-raw), 0.6); }
.muted.warn { color:#b04; }
</style>