<script setup lang="ts">
import { ActionButton } from '@/components/shared/WordList'
import useRepetition from '@/composables/useRepetition'
import useIgnoredWords from '@/composables/words/useIgnoredWords'
import useLearnedWords from '@/composables/words/useLearnedWords'
import useLearningWords from '@/composables/words/useLearningWords'
import { computed, onMounted, ref } from 'vue'
import Translation from './Translation.vue'

const { shouldShowRepetition, getRandomLearnedWord, shouldShowWordFirst, resetCounter } = useRepetition()
const { removeLearnedWords } = useLearnedWords()
const { setAsLearning } = useLearningWords()
const { setAsIgnored } = useIgnoredWords()

const isVisible = ref(false)
const learnedWord = ref<string | null>(null)
const showWordFirst = ref(false)
const isSpoilerRevealed = ref(false)

function initialize() {
  if (!shouldShowRepetition.value) {
    isVisible.value = false
    return
  }

  learnedWord.value = getRandomLearnedWord()
  if (!learnedWord.value) {
    isVisible.value = false
    return
  }

  showWordFirst.value = shouldShowWordFirst()
  isSpoilerRevealed.value = false
  isVisible.value = true

  // Reset counter after showing the repetition block
  resetCounter()
}

onMounted(initialize)

function handleMarkAsLearning() {
  if (!learnedWord.value)
    return

  setAsLearning(learnedWord.value)
  removeLearnedWords(learnedWord.value)
  isVisible.value = false
}

function handleMarkAsIgnored() {
  if (!learnedWord.value)
    return

  setAsIgnored(learnedWord.value)
  removeLearnedWords(learnedWord.value)
  isVisible.value = false
}

function handleRemove() {
  if (!learnedWord.value)
    return

  removeLearnedWords(learnedWord.value)
  isVisible.value = false
}

const currentDisplayMode = computed(() => {
  if (showWordFirst.value) {
    return isSpoilerRevealed.value ? 'word' : 'translation'
  }
  else {
    return isSpoilerRevealed.value ? 'translation' : 'word'
  }
})

const spoilerButtonText = computed(() => {
  if (showWordFirst.value) {
    return isSpoilerRevealed.value ? 'Скрыть слово' : 'Показать слово'
  }
  else {
    return isSpoilerRevealed.value ? 'Скрыть перевод' : 'Показать перевод'
  }
})
</script>

<template>
  <div v-if="isVisible && learnedWord" class="repetition-block">
    <div class="repetition-header">
      <span class="repetition-label">Повторение</span>
    </div>

    <div class="repetition-content">
      <div class="repetition-word-section">
        <template v-if="showWordFirst">
          <!-- Show translation first, reveal word on click -->
          <Translation
            v-if="currentDisplayMode === 'translation'"
            :text="learnedWord"
            class="repetition-translation"
          />
          <button
            v-if="!isSpoilerRevealed"
            class="spoiler-btn"
            @click="isSpoilerRevealed = true"
          >
            {{ spoilerButtonText }}
          </button>
          <p v-else class="repetition-word">
            {{ learnedWord }}
          </p>
        </template>

        <template v-else>
          <!-- Show word first, reveal translation on click -->
          <p class="repetition-word">
            {{ learnedWord }}
          </p>
          <button
            v-if="!isSpoilerRevealed"
            class="spoiler-btn"
            @click="isSpoilerRevealed = true"
          >
            {{ spoilerButtonText }}
          </button>
          <Translation
            v-else
            :text="learnedWord"
            class="repetition-translation"
          />
        </template>
      </div>

      <div class="repetition-actions">
        <ActionButton
          title="Mark as Learning"
          @click="handleMarkAsLearning"
        >
          <i-ic-outline-school />
        </ActionButton>

        <ActionButton
          title="Ignore word"
          @click="handleMarkAsIgnored"
        >
          <i-ic-outline-visibility-off />
        </ActionButton>

        <ActionButton
          title="Remove from list"
          @click="handleRemove"
        >
          <i-ic-round-remove-circle-outline />
        </ActionButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.repetition-block {
  margin: 15px 0;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: hsla(var(--bg-color-raw), 0.7);
  backdrop-filter: blur(5px);
  border: 1px solid hsla(var(--color-raw), 0.15);
}

.repetition-header {
  margin-bottom: 8px;
}

.repetition-label {
  display: inline-block;
  padding: 3px 8px;
  border-radius: 4px;
  background-color: hsla(var(--color-raw), 0.2);
  color: var(--color);
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.repetition-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}

.repetition-word-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.repetition-word {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: capitalize;
  color: var(--color);
}

.repetition-translation {
  font-size: 1.1rem;
}

.spoiler-btn {
  display: inline-block;
  font-style: italic;
  padding: 5px 12px;
  border-radius: 4px;
  background-color: #404040;
  color: #e6e6e6;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: capitalize;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease-in-out;
  align-self: flex-start;
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
  gap: 10px;
  font-size: 1.3rem;
}

@media all and (max-width: 600px) {
  .repetition-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .repetition-actions {
    align-self: flex-end;
  }
}
</style>
