<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { normalizeTense, useTenseCards } from '@/composables/smartSentences/useTenseCards'
import { tenseCardsMap, tenseOptions } from '@/data/smartSentences/tenseCards'

const props = defineProps<{
  currentTense?: string
}>()

const { defaultTenseKey } = useTenseCards()

// Selected tense key (internal state)
const selectedTense = ref<string>(defaultTenseKey)

// Auto-sync from currentTense prop
watch(
  () => props.currentTense,
  (newTense) => {
    if (newTense) {
      const normalized = normalizeTense(newTense)
      if (normalized !== selectedTense.value) {
        selectedTense.value = normalized
      }
    }
  },
  { immediate: true },
)

// Get current card set based on selected tense
const currentCards = computed(() => {
  return tenseCardsMap[selectedTense.value] || tenseCardsMap[defaultTenseKey]
})
</script>

<template>
  <div class="tense-cards-panel">
    <!-- Header with dropdown -->
    <div class="panel-header">
      <h3 class="panel-title">
        Grammar Reference
      </h3>
      <select v-model="selectedTense" class="tense-select tiny-scrollbar">
        <option v-for="option in tenseOptions" :key="option.value" :value="option.value">
          {{ option.text }}
        </option>
      </select>
    </div>

    <!-- Cards grid -->
    <div v-if="currentCards" class="cards-grid">
      <!-- Row 1: ExplainCard and MistakesCard side-by-side -->
      <div class="card explain-card">
        <h4 class="card-title">
          {{ currentCards.explain.title }}
        </h4>
        <p class="card-description">
          {{ currentCards.explain.description }}
        </p>
        <div class="focus-note">
          <strong>Focus:</strong> {{ currentCards.explain.focusNote }}
        </div>
        <div class="formula">
          <strong>Formula:</strong> <code>{{ currentCards.explain.formula }}</code>
        </div>
        <div class="examples">
          <div v-for="(example, idx) in currentCards.explain.examples" :key="idx" class="example">
            <div class="example-en">
              {{ example.en }}
            </div>
            <div class="example-ru">
              {{ example.ru }}
            </div>
          </div>
        </div>
      </div>

      <div class="card mistakes-card">
        <h4 class="card-title">
          Common Mistakes
        </h4>
        <div class="mistakes-list">
          <div v-for="(mistake, idx) in currentCards.mistakes.mistakes" :key="idx" class="mistake">
            <div class="mistake-title">
              {{ mistake.title }}
            </div>
            <div class="mistake-wrong">
              {{ mistake.wrong }}
            </div>
            <div class="mistake-right">
              {{ mistake.right }}
            </div>
            <div class="mistake-note">
              {{ mistake.note }}
            </div>
          </div>
        </div>
      </div>

      <!-- Row 2: WhenToUseCard full width -->
      <div class="card when-to-use-card">
        <h4 class="card-title">
          {{ currentCards.whenToUse.title }}
        </h4>
        <div class="when-content">
          <div class="triggers-section">
            <strong>Time markers:</strong>
            <ul class="triggers-list">
              <li v-for="(trigger, idx) in currentCards.whenToUse.triggers" :key="idx">
                {{ trigger.text }}
              </li>
            </ul>
          </div>
          <div class="comparison-section">
            <div class="comparison-block">
              <h5 class="comparison-title">
                {{ currentCards.whenToUse.comparison.left.title }}
              </h5>
              <div v-for="(example, idx) in currentCards.whenToUse.comparison.left.examples" :key="idx" class="comparison-example">
                <div class="example-en">
                  {{ example.en }}
                </div>
                <div class="example-ru">
                  {{ example.ru }}
                </div>
              </div>
              <div v-if="currentCards.whenToUse.comparison.left.note" class="comparison-note">
                {{ currentCards.whenToUse.comparison.left.note }}
              </div>
            </div>
            <div class="comparison-block">
              <h5 class="comparison-title">
                {{ currentCards.whenToUse.comparison.right.title }}
              </h5>
              <div v-for="(example, idx) in currentCards.whenToUse.comparison.right.examples" :key="idx" class="comparison-example">
                <div class="example-en">
                  {{ example.en }}
                </div>
                <div class="example-ru">
                  {{ example.ru }}
                </div>
              </div>
              <div v-if="currentCards.whenToUse.comparison.right.note" class="comparison-note">
                {{ currentCards.whenToUse.comparison.right.note }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tense-cards-panel {
  margin: 20px auto 50px;
  padding: 0 15px;
  max-width: 800px;
}

/* Header with title and dropdown */
.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  gap: 16px;
}

.panel-title {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color);
}

/* Dropdown styling matching Options */
.tense-select {
  padding: 6px 10px;
  border-radius: 4px;
  border: 1px solid hsla(var(--color-raw), 0.4);
  background: var(--bg-color);
  color: var(--color);
  font-size: 0.9rem;
  cursor: pointer;
  min-width: 200px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.tense-select:hover {
  border-color: hsla(var(--color-raw), 0.6);
}

.tense-select:focus {
  outline: none;
  border-color: hsla(var(--color-raw), 0.8);
  box-shadow: 0 0 0 3px hsla(var(--color-raw), 0.1);
}

/* Cards grid layout */
.cards-grid {
  display: grid;
  grid-template-columns: 1.35fr 1fr;
  gap: 12px;
}

/* Card base styling */
.card {
  padding: 16px 18px;
  border-radius: 10px;
  background-color: hsla(var(--bg-color-raw), 0.9);
  backdrop-filter: blur(5px);
  border: 1px solid hsla(var(--color-raw), 0.08);
}

.card-title {
  margin: 0 0 10px 0;
  font-size: 1rem;
  font-weight: 700;
  color: var(--color);
}

.card-description {
  margin: 0 0 12px 0;
  font-size: 0.9rem;
  color: hsla(var(--color-raw), 0.85);
  line-height: 1.5;
}

/* ExplainCard specific */
.explain-card {
  grid-column: 1;
}

.focus-note {
  margin-bottom: 10px;
  padding: 8px 10px;
  background: hsla(var(--color-raw), 0.04);
  border-radius: 6px;
  font-size: 0.85rem;
  color: hsla(var(--color-raw), 0.8);
}

.formula {
  margin-bottom: 12px;
  font-size: 0.9rem;
  color: var(--color);
}

.formula code {
  padding: 3px 6px;
  background: hsla(var(--color-raw), 0.08);
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
  color: var(--color);
}

.examples {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.example {
  padding: 8px 10px;
  background: hsla(var(--color-raw), 0.03);
  border-radius: 6px;
  border-left: 3px solid hsla(var(--color-raw), 0.2);
}

.example-en {
  font-size: 0.9rem;
  color: var(--color);
  margin-bottom: 4px;
}

.example-ru {
  font-size: 0.85rem;
  color: hsla(var(--color-raw), 0.6);
  font-style: italic;
}

/* MistakesCard specific */
.mistakes-card {
  grid-column: 2;
}

.mistakes-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.mistake {
  padding: 10px;
  background: hsla(var(--color-raw), 0.03);
  border-radius: 6px;
  font-size: 0.85rem;
}

.mistake-title {
  font-weight: 600;
  margin-bottom: 6px;
  color: var(--color);
}

.mistake-wrong {
  color: #c62828;
  margin-bottom: 4px;
  font-size: 0.85rem;
}

.mistake-right {
  color: #2e7d32;
  margin-bottom: 6px;
  font-size: 0.85rem;
}

.mistake-note {
  color: hsla(var(--color-raw), 0.65);
  font-size: 0.8rem;
  font-style: italic;
}

/* WhenToUseCard specific */
.when-to-use-card {
  grid-column: 1 / -1;
}

.when-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.triggers-section {
  font-size: 0.9rem;
  color: var(--color);
}

.triggers-list {
  margin: 8px 0 0 0;
  padding-left: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
}

.triggers-list li {
  padding: 4px 10px;
  background: hsla(var(--color-raw), 0.06);
  border-radius: 4px;
  font-size: 0.85rem;
  color: hsla(var(--color-raw), 0.8);
}

.comparison-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.comparison-block {
  padding: 12px;
  background: hsla(var(--color-raw), 0.04);
  border-radius: 8px;
}

.comparison-title {
  margin: 0 0 10px 0;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color);
}

.comparison-example {
  margin-bottom: 10px;
  padding: 8px;
  background: hsla(var(--bg-color-raw), 0.5);
  border-radius: 6px;
}

.comparison-example:last-of-type {
  margin-bottom: 8px;
}

.comparison-note {
  font-size: 0.8rem;
  color: hsla(var(--color-raw), 0.65);
  font-style: italic;
  margin-top: 8px;
}

/* Responsive adjustments */
@media (max-width: 700px) {
  .cards-grid {
    grid-template-columns: 1fr;
  }

  .explain-card,
  .mistakes-card,
  .when-to-use-card {
    grid-column: 1;
  }

  .comparison-section {
    grid-template-columns: 1fr;
  }

  .panel-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .tense-select {
    width: 100%;
  }
}

@media (max-width: 450px) {
  .tense-cards-panel {
    margin: 15px 12px 30px;
  }
}
</style>
