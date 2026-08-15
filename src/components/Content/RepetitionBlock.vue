<script setup lang="ts">
import PrimaryButton from '@/components/shared/PrimaryButton.vue'
import Skeleton from '@/components/shared/Skeleton.vue'
import ActionButton from '@/components/shared/WordList/ActionButton.vue'
import useIgnoredWords from '@/composables/words/useIgnoredWords'
import useLearnedWords from '@/composables/words/useLearnedWords'
import useLearningWords from '@/composables/words/useLearningWords'
import { computed, ref, watch } from 'vue'
import Translation from './Translation.vue'

const { learnedWords, removeLearnedWords } = useLearnedWords()
const { setAsLearning } = useLearningWords()
const { setAsIgnored } = useIgnoredWords()

// Pick a random word from learned list
const randomWord = computed(() => {
  if (!learnedWords.value || learnedWords.value.length === 0) {
    return null
  }
  const idx = Math.floor(Math.random() * learnedWords.value.length)
  return learnedWords.value[idx]
})

// Mixed mode: 50/50 word vs translation first
const spoilerMode = ref<'translation' | 'word'>(Math.random() < 0.5 ? 'translation' : 'word')
const isSpoilerRevealed = ref(false)

function resetSpoilerState() {
  isSpoilerRevealed.value = false
  spoilerMode.value = Math.random() < 0.5 ? 'translation' : 'word'
}

const isWordHidden = computed(() => spoilerMode.value === 'word' && !isSpoilerRevealed.value)
const isTranslationHidden = computed(() => spoilerMode.value === 'translation' && !isSpoilerRevealed.value)

// Reset state when word changes
watch(randomWord, () => {
  resetSpoilerState()
})

// Action handlers
function handleMarkAsLearning() {
  if (!randomWord.value)
    return
  setAsLearning(randomWord.value)
  removeLearnedWords(randomWord.value)
}

function handleMarkAsIgnored() {
  if (!randomWord.value)
    return
  setAsIgnored(randomWord.value)
  removeLearnedWords(randomWord.value)
}

function handleRemove() {
  if (!randomWord.value)
    return
  removeLearnedWords(randomWord.value)
}
</script>

<template>
  <div v-if="randomWord" class="repetition-block">
    <div class="repetition-header">
      <h3 class="repetition-title text-body-sm">
        Review Learned Word
      </h3>
      <div class="repetition-actions">
        <ActionButton
          title="Mark as Learning"
          @click="handleMarkAsLearning"
        >
          <i-ic-outline-school />
        </ActionButton>

        <ActionButton title="Ignore word" @click="handleMarkAsIgnored">
          <i-ic-outline-visibility-off />
        </ActionButton>

        <ActionButton title="Remove from list" @click="handleRemove">
          <i-ic-round-remove-circle-outline />
        </ActionButton>
      </div>
    </div>

    <div class="repetition-content">
      <div v-if="isWordHidden" class="spoiler-slot">
        <Skeleton width="230px" height="32px" />
        <PrimaryButton class="spoiler-overlay-btn" @click="isSpoilerRevealed = true">
          <i-ic-round-remove-red-eye /> Show word
        </PrimaryButton>
      </div>
      <div v-else class="word">
        {{ randomWord }}
      </div>

      <div v-if="isTranslationHidden" class="spoiler-slot">
        <Skeleton width="230px" height="24px" />
        <PrimaryButton class="spoiler-overlay-btn" @click="isSpoilerRevealed = true">
          <i-ic-round-remove-red-eye /> Show translation
        </PrimaryButton>
      </div>
      <Translation
        v-else-if="randomWord"
        :text="randomWord"
        variant="word"
      />
    </div>
  </div>
</template>

<style scoped>
.repetition-block {
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: var(--surface-color);
  border: 1px solid var(--overlay-strong);
}

.repetition-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  border-bottom: 1px solid var(--overlay-weak);
}

.repetition-title {
  margin: 0;
  color: var(--text-secondary);
}

.repetition-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* explicit px, not font-size: unplugin-icons renders these SVGs at a 1.2em
   scale, so a font-size rule would come out 20% bigger than the number named */
.repetition-actions :deep(button svg) {
  width: 16px;
  height: 16px;
}

.repetition-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 20px;
}

.word {
  margin: 0;
  font-family: var(--font-family-base);
  font-weight: 600;
  font-size: 32px;
  line-height: 32px;
  letter-spacing: -0.05em;
  text-transform: capitalize;
  color: var(--color);
}

/* Figma "hidden word/translation" states — same pattern as Word.vue */
.spoiler-slot {
  position: relative;
  display: flex;
  align-items: center;
}

.spoiler-overlay-btn {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

@media all and (max-width: 450px) {
  .word {
    font-size: 24px;
    line-height: 28px;
  }
}
</style>
