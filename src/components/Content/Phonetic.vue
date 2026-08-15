<script setup lang="ts">
import type { IWordDefinition } from '@/composables/words/useWordDefinitions'

import IconButton from '@/components/shared/IconButton.vue'

import audio from '@/modules/audio'
import { computed } from 'vue'

const props = defineProps<{
  definition: IWordDefinition
}>()

const phonetic = computed(() => {
  const { phonetics } = props.definition

  return (
    phonetics.find(p => p.audio && p.text)
    || phonetics.find(p => p.audio)
    || phonetics.find(p => p.text)
  )
})

function handleListen() {
  if (phonetic.value?.audio) {
    audio.setAudio(phonetic.value.audio)
    audio.playAudio()
  }
}
</script>

<template>
  <div v-if="phonetic" class="phonetic">
    <small v-if="phonetic.text" class="phonetic__text">
      {{ phonetic.text }}
    </small>
    <IconButton v-if="phonetic.audio" class="volume-btn" title="Listen" @click="handleListen">
      <i-ic-round-volume-up />
    </IconButton>
  </div>
</template>

<style scoped>
.phonetic {
  display: flex;
  gap: 10px;
  align-items: center;
}

.phonetic__text {
  font-family: var(--font-family-base);
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.05em;
  color: var(--text-tertiary);
}

/* Reverted to the pre-redesign look for this one icon only, per Sergey's
   request — every other IconButton in the app keeps the new chip background,
   but this one goes back to flat/transparent with a dimming hover. */
.phonetic :deep(.volume-btn) {
  padding: 0;
  border-radius: 0;
  background: transparent;
}
.phonetic :deep(.volume-btn:hover) {
  background: transparent;
  color: hsla(var(--color-raw), 0.75);
}
</style>
