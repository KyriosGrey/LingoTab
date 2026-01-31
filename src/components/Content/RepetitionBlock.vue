<script setup lang="ts">
import { computed, ref } from 'vue'
import useIgnoredWords from '@/composables/words/useIgnoredWords'
import useLearnedWords from '@/composables/words/useLearnedWords'
import useLearningWords from '@/composables/words/useLearningWords'
import Translation from './Translation.vue'

const { learnedWords, removeLearnedWords } = useLearnedWords()
const { setAsIgnored } = useIgnoredWords()
const { setAsLearning } = useLearningWords()

// Get a random learned word
const randomWord = computed(() => {
  if (learnedWords.value.length === 0)
    return null
  const randomIndex = Math.floor(Math.random() * learnedWords.value.length)
  return learnedWords.value[randomIndex]
})

// 50/50 chance to show word or translation first
const showWordFirst = ref(Math.random() < 0.5)
const isSpoilerRevealed = ref(false)

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

function handleRemoveFromList() {
  if (!randomWord.value)
    return
  removeLearnedWords(randomWord.value)
}
</script>

<template>
  <div v-if="randomWord" class="repetition-block">
    <div class="repetition-header">
      <h3 class="repetition-title">
        Learned Word Practice
      </h3>
    </div>

    <div class="repetition-content">
      <div class="word-section">
        <template v-if="showWordFirst">
          <h2 class="practice-word">
            {{ randomWord }}
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
            :text="randomWord"
            class="practice-translation"
          />
        </template>

        <template v-else>
          <Translation
            :text="randomWord"
            class="practice-translation-first"
          />

          <button
            v-if="!isSpoilerRevealed"
            class="spoiler-btn"
            @click="isSpoilerRevealed = true"
          >
            Показать слово
          </button>
          <h2 v-if="isSpoilerRevealed" class="practice-word">
            {{ randomWord }}
          </h2>
        </template>
      </div>

      <div class="action-buttons">
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
  margin: 30px 0;
  padding: 20px;
  border-radius: 10px;
  background-color: hsla(var(--bg-color-raw), 0.9);
  backdrop-filter: blur(5px);
  border: 2px solid hsla(var(--color-raw), 0.3);
}

.repetition-header {
  margin-bottom: 15px;
}

.repetition-title {
  margin: 0;
  font-size: 1.2rem;
  color: var(--color);
  text-align: center;
}

.repetition-content {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.word-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  min-height: 120px;
  justify-content: center;
}

.practice-word {
  margin: 0;
  font-size: 2.5rem;
  text-transform: capitalize;
  color: var(--color);
}

.practice-translation,
.practice-translation-first {
  font-size: 1.2rem;
  text-align: center;
}

.practice-translation-first {
  font-size: 1.5rem;
  font-weight: 500;
}

.spoiler-btn {
  display: inline-block;
  font-style: italic;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #404040;
  color: #e6e6e6;
  font-size: 0.9rem;
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

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
  padding-top: 10px;
  border-top: 1px solid hsla(var(--color-raw), 0.2);
}

.action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: hsla(var(--color-raw), 0.1);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: var(--color);
  font-size: 1.3rem;
}

.action-btn:hover {
  background-color: hsla(var(--color-raw), 0.2);
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.action-btn:active {
  transform: translateY(0);
  box-shadow: none;
}

@media all and (max-width: 450px) {
  .practice-word {
    font-size: 2rem;
  }

  .repetition-block {
    padding: 15px;
  }
}
</style>
