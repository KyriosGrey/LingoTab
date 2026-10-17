<script setup lang="ts">
import IconButton from '@/components/shared/IconButton.vue'
import useGoogleTranslate from '@/composables/useGoogleTranslate'
import useIgnoredWords from '@/composables/words/useIgnoredWords'

import useLearningWords from '@/composables/words/useLearningWords'
import { t } from '@/i18n'
import { guessSourceLanguage } from '@/utils/string'

// Only the word is needed, so the buttons also work on a card without dictionary data.
const props = defineProps<{
  word: string
}>()

const emit = defineEmits(['marked'])

const { targetLanguage } = useGoogleTranslate()
const { setAsIgnored } = useIgnoredWords()
const { setAsLearning, removeLearningWords } = useLearningWords()

function handleMarkAsLearning() {
  setAsLearning(props.word)
  emit('marked')
}

function handleMarkAsIgnored() {
  removeLearningWords(props.word)
  setAsIgnored(props.word)
  emit('marked')
}

// ✅ Новая функция: переключение слова
function handleNextWord() {
  // Просто перезагружаем вкладку, чтобы показать следующее слово
  window.location.reload()
}
</script>

<template>
  <div class="actions">
    <IconButton
      :title="`Google translate (${targetLanguage.lang})`"
      :href="`https://translate.google.com/?sl=${guessSourceLanguage(word)}&tl=${targetLanguage.code}&text=${encodeURIComponent(word)}&op=translate`"
      target="_blank"
    >
      <i-ic-round-g-translate />
    </IconButton>

    <IconButton :title="t('action.ignore')" @click="handleMarkAsIgnored">
      <i-ic-round-visibility-off />
    </IconButton>

    <IconButton :title="t('action.markLearning')" @click="handleMarkAsLearning">
      <i-ic-round-bookmark-add />
    </IconButton>

    <!-- ✅ Новая кнопка: Next Word -->
    <button class="next-btn text-body-sm" @click="handleNextWord">
      {{ t('action.next') }}
      <i-ic-round-arrow-forward />
    </button>
  </div>
</template>

<style scoped>
.actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.actions :deep(.icon-btn) {
  padding: 6px;
  border-radius: 4px;
  background: var(--overlay-weak);
}
.actions :deep(.icon-btn:hover) {
  background: var(--overlay-strong);
  color: var(--color);
}
/* explicit px, not font-size: unplugin-icons renders these SVGs at a 1.2em
   scale, so a font-size rule would come out 20% bigger than the number named */
.actions :deep(.icon-btn svg) {
  width: 24px;
  height: 24px;
}

/* Figma "Next" button: tinted/outlined accent by default, solid accent on
   hover. The default-state text color is a literal Figma value, not a token
   — dark theme uses the same shade as --color there, but light theme uses a
   near-black (#1c1c1f) that doesn't match --color (#0F172A) in that theme, so
   it's kept as its own local variable rather than reusing --color. */
.next-btn {
  --next-btn-text: #f7f8f8;
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 8px 8px 8px 12px;
  border-radius: 4px;
  border: 1px solid var(--accent-color-hover);
  background: var(--accent-color-tint);
  color: var(--next-btn-text);
  white-space: nowrap;
  transition: background-color 0.15s ease-in-out, color 0.15s ease-in-out;
}
.next-btn :deep(svg) {
  width: 18px;
  height: 18px;
}
.next-btn:hover {
  background: var(--accent-color);
  border-color: var(--accent-color);
  color: #fff;
}
</style>

<style>
.light .next-btn {
  --next-btn-text: #1c1c1f;
}
</style>
