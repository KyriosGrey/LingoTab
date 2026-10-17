<script setup lang="ts">
import ActionButton from '@/components/shared/ActionButton.vue'
import PrimaryButton from '@/components/shared/PrimaryButton.vue'
import useBackground from '@/composables/useBackground'

import useGoogleTranslate from '@/composables/useGoogleTranslate'

import useIgnoredWords from '@/composables/words/useIgnoredWords'
import { t } from '@/i18n'
import { randomNumberBetween } from '@/utils/number'
import { guessSourceLanguage } from '@/utils/string'
import { computed } from 'vue'

const props = defineProps<{
  word: string
}>()

const emit = defineEmits(['retry'])

const EMOJIS = ['🥺', '😔', '☹️']

const { shouldModifyUI } = useBackground()

const backgroundClass = computed(() => ({
  'error--boxed': shouldModifyUI.value,
}))

const { setAsIgnored } = useIgnoredWords()
const { targetLanguage } = useGoogleTranslate()

function handleIgnoreWord() {
  setAsIgnored(props.word)
  emit('retry')
}

const randomEmojiIndex = randomNumberBetween(0, EMOJIS.length - 1)
const emoji = EMOJIS[randomEmojiIndex]
</script>

<template>
  <div class="error" :class="backgroundClass">
    <span class="icon">{{ emoji }}</span>

    <h2 class="error__word text-heading-32">
      {{ word }}
    </h2>

    <p class="error__message text-body-sm">
      {{ t('empty.wordError.message') }}
    </p>

    <div class="actions">
      <div class="actions__secondary">
        <ActionButton @click="handleIgnoreWord">
          <i-ic-round-visibility-off /> {{ t('empty.wordError.ignore') }}
        </ActionButton>
        <a
          :href="`https://translate.google.com/?sl=${guessSourceLanguage(word)}&tl=${targetLanguage.code}&text=${encodeURIComponent(word)}&op=translate`"
          target="_blank"
          class="secondary-link text-body-sm"
        >
          <i-ic-round-g-translate /> Google Translate
        </a>
      </div>

      <PrimaryButton @click="$emit('retry')">
        <i-ic-round-autorenew /> {{ t('empty.wordError.newWord') }}
      </PrimaryButton>
    </div>
  </div>
</template>

<style scoped>
.error {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 0 15px;
  text-align: center;
}

.error--boxed {
  background-color: hsla(var(--bg-color-raw), 0.9);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  padding: 40px 5px;
  max-width: 650px;
}

.icon {
  font-size: 3rem;
}

.error__word {
  margin: 20px 0 10px;
  color: var(--color);
  text-transform: capitalize;
}

.error__message {
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.actions__secondary {
  display: flex;
  align-items: center;
  gap: 15px;
}

/* Real <a href target="_blank"> — kept as a link (not ActionButton) so it stays
   a genuine navigable link, styled to match ActionButton's look. */
.secondary-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid var(--overlay-strong);
  background: var(--overlay-weak);
  color: var(--color);
  text-decoration: none;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
}
.secondary-link :deep(svg) {
  width: 16px;
  height: 16px;
}
.secondary-link:hover {
  background: var(--overlay-strong);
  border-color: var(--accent-color-hover);
}
</style>
