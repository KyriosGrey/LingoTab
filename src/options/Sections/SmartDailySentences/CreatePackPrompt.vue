<script setup lang="ts">
import ActionButton from '@/components/shared/ActionButton.vue'
import { createPackPrompt } from '@/data/smartSentences/createPackPrompt'
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
    title="Create your own pack"
    description="Copy a ready-made prompt for an AI chat (ChatGPT, Claude, etc.) — it will ask you a few questions, then generate a sentence pack JSON you can import below with 'Choose file'."
  >
    <template #bar>
      <div class="bar-actions">
        <ActionButton @click="copyPrompt">
          <i-ic-round-content-copy /> Copy prompt
        </ActionButton>
        <span v-if="copied" class="copied-badge text-body-sm">Copied!</span>
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
