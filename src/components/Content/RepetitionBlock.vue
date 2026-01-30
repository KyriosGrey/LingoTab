<script setup lang="ts">
import { ref, watch } from 'vue'

import useIgnoredWords from '@/composables/words/useIgnoredWords'
import useLearnedWords from '@/composables/words/useLearnedWords'
import useLearningWords from '@/composables/words/useLearningWords'
import useRepetition from '@/composables/useRepetition'

import Translation from './Translation.vue'

const { shouldShowRepetition, currentRepetitionWord, hideRepetition } = useRepetition()
const { setAsIgnored } = useIgnoredWords()
const { setAsLearning } = useLearningWords()
const { removeLearnedWords } = useLearnedWords()

// Spoiler state
const isSpoilerRevealed = ref(false)

// Reset spoiler when word changes
watch(currentRepetitionWord, () => {
  isSpoilerRevealed.value = false
})

function handleMarkAsLearning() {
  if (!currentRepetitionWord.value)
    return
  setAsLearning(currentRepetitionWord.value.word)
  removeLearnedWords(currentRepetitionWord.value.word)
  hideRepetition()
}

function handleMarkAsIgnored() {
  if (!currentRepetitionWord.value)
    return
  setAsIgnored(currentRepetitionWord.value.word)
  removeLearnedWords(currentRepetitionWord.value.word)
  hideRepetition()
}

function handleRemoveFromList() {
  if (!currentRepetitionWord.value)
    return
  removeLearnedWords(currentRepetitionWord.value.word)
  hideRepetition()
}
</script>

<template>
  <div v-if="shouldShowRepetition && currentRepetitionWord" class="repetition-block">
    <div class="repetition-header">
      <span class="repetition-label">📚 Повторение</span>
    </div>

    <div class="repetition-content">
      <div class="word-display">
        <!-- Mode: show word first, translation hidden -->
        <template v-if="currentRepetitionWord.mode === 'word'">
          <h2 class="repetition-word">
            {{ currentRepetitionWord.word }}
          </h2>

          <button
            v-if="!isSpoilerRevealed"
            class="spoiler-btn"
            @click="isSpoilerRevealed = true"
          >
            Показать перевод
          </button>
          <Translation
            v-if="isSpoilerRevealed"
            :text="currentRepetitionWord.word"
            class="repetition-translation"
          />
        </template>

        <!-- Mode: show translation first, word hidden -->
        <template v-else>
          <button
            v-if="!isSpoilerRevealed"
            class="spoiler-btn"
            @click="isSpoilerRevealed = true"
          >
            Показать слово
          </button>
          <h2 v-else class="repetition-word">
            {{ currentRepetitionWord.word }}
          </h2>

          <Translation
            :text="currentRepetitionWord.word"
            class="repetition-translation"
          />
        </template>
      </div>

      <div class="actions">
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
          @click="handleRemoveFromList"
        >
          <i-ic-round-remove-circle-outline />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.repetition-block {
  margin: 20px auto 30px;
  padding: 15px 20px;
  max-width: 800px;
  border-radius: 10px;
  background-color: hsla(var(--bg-color-raw), 0.9);
  backdrop-filter: blur(5px);
  border: 1px solid hsla(var(--color-raw), 0.2);
}

.repetition-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.repetition-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: hsla(var(--color-raw), 0.7);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.repetition-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.word-display {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.repetition-word {
  margin: 0;
  font-size: 2rem;
  text-transform: capitalize;
  color: var(--color);
}

.repetition-translation {
  margin-top: 4px;
  font-size: 1rem;
}

.spoiler-btn {
  display: inline-block;
  font-style: italic;
  margin-top: 10px;
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

.actions {
  display: flex;
  gap: 8px;
  flex-shrink: 0;
}

.action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 6px;
  border: none;
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

@media all and (max-width: 600px) {
  .repetition-content {
    flex-direction: column;
    align-items: stretch;
  }

  .actions {
    justify-content: center;
    margin-top: 10px;
  }

  .repetition-word {
    font-size: 1.5rem;
  }
}
</style>
