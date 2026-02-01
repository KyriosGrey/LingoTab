<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import ActionButton from '@/components/shared/WordList/ActionButton.vue'
import useIgnoredWords from '@/composables/words/useIgnoredWords'
import useLearnedWords from '@/composables/words/useLearnedWords'
import useLearningWords from '@/composables/words/useLearningWords'
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
      <h3 class="repetition-title">
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
      <template v-if="spoilerMode === 'word'">
        <button
          v-if="!isSpoilerRevealed"
          class="spoiler-btn"
          @click="isSpoilerRevealed = true"
        >
          Show Word
        </button>
        <div v-else class="word">
          {{ randomWord }}
        </div>

        <Translation
          v-if="randomWord"
          :text="randomWord"
          class="word-translation"
        />
      </template>

      <template v-else>
        <div class="word">
          {{ randomWord }}
        </div>

        <button
          v-if="!isSpoilerRevealed"
          class="spoiler-btn"
          @click="isSpoilerRevealed = true"
        >
          Show Translation
        </button>
        <Translation
          v-if="isSpoilerRevealed && randomWord"
          :text="randomWord"
          class="word-translation"
        />
      </template>
    </div>
  </div>
</template>

<style scoped>
.repetition-block {
  margin-bottom: 20px;
  padding: 15px 20px;
  border-radius: 10px;
  background-color: hsla(var(--bg-color-raw), 0.9);
  backdrop-filter: blur(5px);
  border: 1px solid hsla(var(--color-raw), 0.2);
}

.repetition-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 10px;
  border-bottom: 1px solid hsla(var(--color-raw), 0.15);
}

.repetition-title {
  margin: 0;
  font-size: 0.9rem;
  font-weight: 600;
  color: hsla(var(--color-raw), 0.8);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.repetition-actions {
  display: flex;
  gap: 12px;
  font-size: 1.2rem;
}

.repetition-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.word {
  font-size: 2rem;
  font-weight: 600;
  text-transform: capitalize;
  margin-bottom: 5px;
}

.word-translation {
  font-size: 1.1rem;
  font-style: italic;
  margin-top: 0.25rem;
}

.spoiler-btn {
  display: inline-block;
  font-style: italic;
  margin: 10px 0;
  padding: 5px 12px;
  border-radius: 4px;
  background-color: #404040;
  color: #e6e6e6;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: capitalize;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease-in-out;
}

.spoiler-btn:hover {
  background-color: #505050;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.spoiler-btn:active {
  background-color: #333333;
  transform: translateY(0);
  box-shadow: none;
}

@media all and (max-width: 450px) {
  .word {
    font-size: 1.5rem;
  }

  .repetition-actions {
    font-size: 1rem;
    gap: 8px;
  }
}
</style>
