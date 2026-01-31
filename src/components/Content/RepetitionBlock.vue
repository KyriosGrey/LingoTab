<script setup lang="ts">
import { computed, ref, watch } from 'vue'

import useBackground from '@/composables/useBackground'
import useIgnoredWords from '@/composables/words/useIgnoredWords'
import useLearnedWords from '@/composables/words/useLearnedWords'
import useLearningWords from '@/composables/words/useLearningWords'

import Translation from './Translation.vue'

const { learnedWords, removeLearnedWords, reloadLearnedWords } = useLearnedWords()
const { setAsLearning } = useLearningWords()
const { setAsIgnored } = useIgnoredWords()
const { shouldModifyUI } = useBackground()

const backgroundClass = computed(() => ({ boxed: shouldModifyUI.value }))

// Get a random learned word
reloadLearnedWords()
const randomWord = computed(() => {
  if (learnedWords.value.length === 0)
    return ''
  const randomIndex = Math.floor(Math.random() * learnedWords.value.length)
  return learnedWords.value[randomIndex]
})

// Mixed mode: 50/50 show word or translation
const showMode = ref<'word' | 'translation'>(Math.random() < 0.5 ? 'word' : 'translation')
const isSpoilerRevealed = ref(false)

// Reset spoiler state when random word changes
watch(randomWord, () => {
  showMode.value = Math.random() < 0.5 ? 'word' : 'translation'
  isSpoilerRevealed.value = false
})

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
  <div v-if="randomWord" class="repetition-block" :class="backgroundClass">
    <div class="repetition-header">
      <span class="repetition-label">Review</span>
    </div>

    <div class="repetition-content">
      <div class="repetition-word-block">
        <template v-if="showMode === 'word'">
          <h2 class="repetition-word">
            {{ randomWord }}
          </h2>

          <button
            v-if="!isSpoilerRevealed"
            class="spoiler-btn"
            @click="isSpoilerRevealed = true"
          >
            Show translation
          </button>
          <Translation
            v-if="isSpoilerRevealed"
            :text="randomWord"
            class="repetition-translation"
          />
        </template>

        <template v-else>
          <Translation
            :text="randomWord"
            class="repetition-translation"
          />

          <button
            v-if="!isSpoilerRevealed"
            class="spoiler-btn"
            @click="isSpoilerRevealed = true"
          >
            Show word
          </button>
          <h2 v-if="isSpoilerRevealed" class="repetition-word">
            {{ randomWord }}
          </h2>
        </template>
      </div>

      <div class="repetition-actions">
        <button
          class="action-btn"
          title="Mark as Learning"
          @click="handleMarkAsLearning"
        >
          <i-ic-outline-school />
        </button>

        <button
          class="action-btn"
          title="Ignore word"
          @click="handleMarkAsIgnored"
        >
          <i-ic-outline-visibility-off />
        </button>

        <button
          class="action-btn"
          title="Remove from list"
          @click="handleRemove"
        >
          <i-ic-round-remove-circle-outline />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.repetition-block {
  margin: 0 auto 30px;
  padding: 0 15px;
  max-width: 800px;
}

.repetition-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.repetition-label {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 4px;
  background-color: hsl(210, 80%, 50%);
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.repetition-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.repetition-word-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
}

.repetition-word {
  margin: 0 0 8px 0;
  font-size: 2rem;
  text-transform: capitalize;
  font-weight: 600;
}

.repetition-translation {
  font-size: 1.1rem;
  margin: 8px 0;
}

.spoiler-btn {
  display: inline-block;
  font-style: italic;
  margin: 8px 0;
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

.repetition-actions {
  display: flex;
  gap: 8px;
  flex-shrink: 0;
}

.action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 6px;
  background-color: hsla(var(--color-raw), 0.1);
  color: var(--color);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 1.2rem;
}

.action-btn:hover {
  background-color: hsla(var(--color-raw), 0.2);
  transform: translateY(-2px);
}

.action-btn:active {
  transform: translateY(0);
}

.boxed {
  padding: 15px 20px;
  border-radius: 10px;
  background-color: hsla(var(--bg-color-raw), 0.9);
  backdrop-filter: blur(5px);
}

@media all and (max-width: 600px) {
  .repetition-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .repetition-actions {
    width: 100%;
    justify-content: flex-start;
  }

  .repetition-word {
    font-size: 1.5rem;
  }
}
</style>
