<script setup lang="ts">
import ActionButton from '@/components/shared/ActionButton.vue'
import { createPackPrompt } from '@/data/smartSentences/createPackPrompt'
import { t } from '@/i18n'
import Section from '@/options/components/Section.vue'
import { ref } from 'vue'

const copied = ref(false)
let resetTimer: ReturnType<typeof setTimeout> | undefined

async function copyPrompt() {
  let succeeded = false

  try {
    await navigator.clipboard.writeText(createPackPrompt)
    succeeded = true
  }
  catch {
    // Fallback for contexts without the async Clipboard API
    try {
      const textarea = document.createElement('textarea')
      textarea.value = createPackPrompt
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      succeeded = document.execCommand('copy')
      document.body.removeChild(textarea)
    }
    catch {
      succeeded = false
    }
  }

  if (succeeded) {
    copied.value = true
    clearTimeout(resetTimer)
    resetTimer = setTimeout(() => (copied.value = false), 2000)
  }
}
</script>

<template>
  <Section
    :title="t('smart.create.title')"
    :description="t('smart.create.description')"
  >
    <template #bar>
      <div class="bar-actions">
        <ActionButton @click="copyPrompt">
          <i-ic-round-content-copy /> {{ t('smart.create.copy') }}
        </ActionButton>
        <span v-if="copied" class="copied-badge text-body-sm">{{ t('smart.create.copied') }}</span>
      </div>
    </template>
  </Section>
</template>

<style scoped>
.bar-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 0 0 auto;
}

.copied-badge {
  display: inline-flex;
  align-items: center;
  padding: 8px 10px;
  border-radius: 4px;
  color: var(--success-color);
  background: hsla(150, 42.6%, 50.8%, 0.12);
  border: 1px solid hsla(150, 42.6%, 50.8%, 0.3);
  line-height: 1;
}
</style>
