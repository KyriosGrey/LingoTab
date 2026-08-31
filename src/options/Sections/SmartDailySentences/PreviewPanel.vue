<script setup lang="ts">
import ActionButton from '@/components/shared/ActionButton.vue'
import { t } from '@/i18n'
import { computed } from 'vue'

const props = defineProps<{ pack: any | null, warning?: string }>()

// expose reactive/computed vars to template
const pack = computed(() => props.pack ?? null)
const pretty = computed(() => pack.value ? JSON.stringify(pack.value, null, 2) : '')
const warning = computed(() => props.warning ?? '')
</script>

<template>
  <div v-if="pack" class="preview">
    <div class="preview-header">
      <h3 class="preview-title text-heading-18">
        {{ t('smart.preview.title') }}
      </h3>
      <p class="preview-subtitle text-body-sm">
        {{ t('smart.preview.description') }}
      </p>
    </div>

    <pre class="json-preview">{{ pretty }}</pre>

    <div class="row small-gap">
      <ActionButton @click="$emit('accept')">
        {{ t('smart.preview.accept') }}
      </ActionButton>
      <ActionButton @click="$emit('discard')">
        {{ t('smart.preview.discard') }}
      </ActionButton>
    </div>

    <!-- warning styled as status-badge (warning tone) -->
    <div v-if="warning" class="status-badge text-body-sm warning">
      {{ warning }}
    </div>
  </div>
</template>

<style scoped>
.preview { margin-top: 8px; }

/* Header — styled to match other section headings/subtitles */
.preview-header {
  margin-bottom: 8px;
}

.preview-title {
  margin: 0 0 5px;
  color: var(--color);
}

.preview-subtitle {
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.3;
}

/* JSON preview area */
.json-preview { max-height:320px; overflow:auto; padding:8px; border-radius:6px; background: var(--overlay-weak); color: var(--color); white-space:pre-wrap; }

/* layout for action buttons */
.row.small-gap { display:flex; gap:8px; margin-top:8px; }

/* status-badge (reused pattern): button-like static element */
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

/* warning state — amber translucent */
.status-badge.warning {
  background: hsla(38, 92%, 50%, 0.15);
  border-color: hsla(38, 92%, 50%, 0.3);
}
</style>
