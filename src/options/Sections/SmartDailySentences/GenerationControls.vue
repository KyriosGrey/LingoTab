<script setup lang="ts">
import PrimaryButton from '@/components/shared/PrimaryButton.vue'
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
    <PrimaryButton
      :disabled="!apiKeyPresent || generating"
      @click="onGenerateClick"
    >
      {{ generating ? 'Generating…' : 'Generate now (preview)' }}
    </PrimaryButton>

    <span v-if="generating" class="muted text-body-sm">Status: Generating…</span>
  </div>
</template>

<style scoped>
.row.small-gap {
  display: flex;
  gap: 10px;
  align-items: center;
  /* this row sits after two settings-rows within the same card, so it needs the
     same top divider they get automatically via Section.vue */
  border-top: 1px solid var(--overlay-weak);
  margin-top: 24px;
  padding-top: 24px;
}

.muted { color: var(--text-secondary); }
</style>
