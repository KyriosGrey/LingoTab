<script setup lang="ts">
import useLearnedWords from '@/composables/words/useLearnedWords'
import { computed } from 'vue'

defineProps<{
  visible: boolean
}>()

const { learnedWords } = useLearnedWords()

// Select random words from learned list for review
const reviewWords = computed(() => {
  if (!learnedWords.value.length) {
    return []
  }

  // Show up to 5 random learned words for review
  const shuffled = [...learnedWords.value].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(5, shuffled.length))
})

const hasLearnedWords = computed(() => learnedWords.value.length > 0)

// Continue to next word by reloading (same as Next word button)
function handleContinue() {
  window.location.reload()
}
</script>

<template>
  <div v-if="visible && hasLearnedWords" class="repetition-block">
    <div class="repetition-content">
      <h2 class="repetition-title">
        📚 Time for Review!
      </h2>
      <p class="repetition-subtitle">
        Let's review some words you've learned:
      </p>
      <div class="review-words">
        <div v-for="word in reviewWords" :key="word" class="review-word">
          {{ word }}
        </div>
      </div>
      <p class="repetition-hint">
        Try to recall the meaning of each word before continuing.
      </p>
      <button class="continue-btn" @click="handleContinue">
        Continue to Next Word →
      </button>
    </div>
  </div>
</template>

<style scoped>
.repetition-block {
  margin: 100px auto 50px;
  padding: 0 15px;
  max-width: 800px;
}

.repetition-content {
  padding: 30px;
  border-radius: 15px;
  background-color: hsla(var(--bg-color-raw), 0.9);
  backdrop-filter: blur(5px);
  text-align: center;
  border: 2px solid hsl(210, 60%, 50%);
}

.repetition-title {
  margin: 0 0 15px 0;
  font-size: 2rem;
  color: hsl(210, 60%, 60%);
}

.repetition-subtitle {
  margin: 0 0 20px 0;
  font-size: 1.1rem;
  color: hsl(0, 0%, 70%);
}

.review-words {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  margin: 20px 0;
}

.review-word {
  padding: 12px 24px;
  border-radius: 8px;
  background-color: hsl(210, 60%, 40%);
  color: hsl(0, 0%, 95%);
  font-size: 1.3rem;
  font-weight: 500;
  text-transform: capitalize;
  transition: all 0.2s ease-in-out;
}

.review-word:hover {
  background-color: hsl(210, 60%, 50%);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.repetition-hint {
  margin: 20px 0 0 0;
  font-size: 0.9rem;
  color: hsl(0, 0%, 60%);
  font-style: italic;
}

.continue-btn {
  margin-top: 25px;
  padding: 12px 30px;
  border-radius: 8px;
  background-color: hsl(210, 60%, 50%);
  color: hsl(0, 0%, 100%);
  font-size: 1rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.continue-btn:hover {
  background-color: hsl(210, 60%, 60%);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.continue-btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 6px rgba(59, 130, 246, 0.3);
}

@media all and (max-width: 450px) {
  .repetition-title {
    font-size: 1.5rem;
  }

  .review-word {
    font-size: 1.1rem;
    padding: 10px 18px;
  }
}
</style>
