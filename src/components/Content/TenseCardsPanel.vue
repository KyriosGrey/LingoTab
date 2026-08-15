<script setup lang="ts">
import type { TextBlock } from '@/data/smartSentences/tenseCards/types'
import Translation from '@/components/Content/Translation.vue'
import { normalizeTense, useTenseCards } from '@/composables/smartSentences/useTenseCards'
import useGoogleTranslate from '@/composables/useGoogleTranslate'
import { tenseCardsMap, tenseOptions } from '@/data/smartSentences/tenseCards'
import Select from '@/options/components/Select.vue'
import { computed, ref, watch } from 'vue'

const props = defineProps<{
  currentTense?: string
}>()

const { defaultTenseKey } = useTenseCards()
const selectedTense = ref<string>(defaultTenseKey)

const { targetLanguage } = useGoogleTranslate()
const gttlCode = computed(() => (targetLanguage?.code || 'ru').toLowerCase())
const shouldTranslateRu = computed(() => gttlCode.value !== 'ru')

watch(
  () => props.currentTense,
  (newTense) => {
    if (newTense) {
      const normalized = normalizeTense(newTense)
      if (normalized !== selectedTense.value)
        selectedTense.value = normalized
    }
  },
  { immediate: true },
)

const currentCards = computed(() => {
  return tenseCardsMap[selectedTense.value] || tenseCardsMap[defaultTenseKey]
})

function shouldTranslateBlock(block?: TextBlock) {
  return Boolean(block?.text && block.trRu && shouldTranslateRu.value)
}
</script>

<template>
  <div class="tense-cards-panel">
    <div class="panel-header">
      <h3 class="panel-title text-heading-18">
        Grammar Reference
      </h3>

      <Select v-model="selectedTense" :options="tenseOptions" class="tense-select" />
    </div>

    <div v-if="currentCards" class="reference-card">
      <div class="left-column">
        <h4 class="card-title text-heading-18">
          <Translation
            v-if="shouldTranslateBlock(currentCards.explain.title)"
            :text="currentCards.explain.title.text"
            from="ru"
            display="block"
            variant="plain"
            as="span"
          />
          <template v-else>
            {{ currentCards.explain.title.text }}
          </template>
        </h4>

        <p class="card-description text-body">
          <Translation
            v-if="shouldTranslateBlock(currentCards.explain.description)"
            :text="currentCards.explain.description.text"
            from="ru"
            variant="plain"
            as="span"
          />
          <template v-else>
            {{ currentCards.explain.description.text }}
          </template>
        </p>

        <div class="focus-tip text-body-sm-italic">
          <Translation
            v-if="shouldTranslateBlock(currentCards.explain.focusNote)"
            :text="currentCards.explain.focusNote.text"
            from="ru"
            variant="plain"
            as="span"
          />
          <template v-else>
            {{ currentCards.explain.focusNote.text }}
          </template>
        </div>

        <p class="formula text-heading-18">
          <span class="formula-label">Formula: </span>
          <span class="formula-value">{{ currentCards.explain.formula }}</span>
        </p>

        <div class="examples-list">
          <div v-for="(example, idx) in currentCards.explain.examples" :key="idx" class="example-item">
            <div class="example-en text-body">
              {{ example.en }}
            </div>

            <div v-if="example.ru" class="example-ru text-body-sm-italic">
              <Translation
                v-if="shouldTranslateBlock(example.ru)"
                :text="example.ru.text"
                from="ru"
                variant="plain"
                as="span"
              />
              <template v-else>
                {{ example.ru.text }}
              </template>
            </div>
          </div>
        </div>
      </div>

      <div class="right-column">
        <template v-for="(mistake, idx) in currentCards.mistakes.mistakes" :key="idx">
          <div class="mistake">
            <div class="mistake-head">
              <div class="mistake-title text-body">
                <Translation
                  v-if="shouldTranslateBlock(mistake.title)"
                  :text="mistake.title.text"
                  from="ru"
                  variant="plain"
                  as="span"
                />
                <template v-else>
                  {{ mistake.title.text }}
                </template>
              </div>
              <div class="mistake-note text-body-sm-italic">
                <Translation
                  v-if="shouldTranslateBlock(mistake.note)"
                  :text="mistake.note.text"
                  from="ru"
                  variant="plain"
                  as="span"
                />
                <template v-else>
                  {{ mistake.note.text }}
                </template>
              </div>
            </div>

            <div class="mistake-examples">
              <div class="mistake-wrong text-body">
                {{ mistake.wrong }}
              </div>
              <div class="mistake-right text-body">
                {{ mistake.right }}
              </div>
            </div>
          </div>

          <div v-if="idx < currentCards.mistakes.mistakes.length - 1" class="mistake-divider" />
        </template>
      </div>
    </div>

    <div v-if="currentCards" class="trigger-contrast-section">
      <h4 class="text-heading-18">
        <Translation
          v-if="shouldTranslateBlock(currentCards.whenToUse.title)"
          :text="currentCards.whenToUse.title.text"
          from="ru"
          variant="plain"
          as="span"
        />
        <template v-else>
          {{ currentCards.whenToUse.title.text }}
        </template>
      </h4>

      <div class="time-badges">
        <div v-for="(trigger, idx) in currentCards.whenToUse.triggers" :key="idx" class="trigger text-body-sm">
          <Translation
            v-if="shouldTranslateBlock(trigger)"
            :text="trigger.text"
            from="ru"
            variant="plain"
            as="span"
          />
          <template v-else>
            {{ trigger.text }}
          </template>
        </div>
      </div>

      <div class="contrast-cards">
        <div class="contrast-card">
          <h5 class="contrast-title text-heading-18">
            {{ currentCards.whenToUse.comparison.left.title }}
          </h5>

          <div v-for="(example, idx) in currentCards.whenToUse.comparison.left.examples" :key="idx" class="example-item">
            <div class="example-en text-body">
              {{ example.en }}
            </div>
            <div v-if="example.ru" class="example-ru text-body-sm-italic">
              <Translation
                v-if="shouldTranslateBlock(example.ru)"
                :text="example.ru.text"
                from="ru"
                variant="plain"
                as="span"
              />
              <template v-else>
                {{ example.ru.text }}
              </template>
            </div>
          </div>

          <div v-if="currentCards.whenToUse.comparison.left.note" class="comparison-note text-body-sm-italic">
            <Translation
              v-if="shouldTranslateBlock(currentCards.whenToUse.comparison.left.note)"
              :text="currentCards.whenToUse.comparison.left.note.text"
              from="ru"
              variant="plain"
              as="span"
            />
            <template v-else>
              {{ currentCards.whenToUse.comparison.left.note.text }}
            </template>
          </div>
        </div>

        <div class="contrast-card">
          <h5 class="contrast-title text-heading-18">
            {{ currentCards.whenToUse.comparison.right.title }}
          </h5>

          <div v-for="(example, idx) in currentCards.whenToUse.comparison.right.examples" :key="idx" class="example-item">
            <div class="example-en text-body">
              {{ example.en }}
            </div>
            <div v-if="example.ru" class="example-ru text-body-sm-italic">
              <Translation
                v-if="shouldTranslateBlock(example.ru)"
                :text="example.ru.text"
                from="ru"
                variant="plain"
                as="span"
              />
              <template v-else>
                {{ example.ru.text }}
              </template>
            </div>
          </div>

          <div v-if="currentCards.whenToUse.comparison.right.note" class="comparison-note text-body-sm-italic">
            <Translation
              v-if="shouldTranslateBlock(currentCards.whenToUse.comparison.right.note)"
              :text="currentCards.whenToUse.comparison.right.note.text"
              from="ru"
              variant="plain"
              as="span"
            />
            <template v-else>
              {{ currentCards.whenToUse.comparison.right.note.text }}
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tense-cards-panel {
  margin: 48px auto 50px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* Header with title and dropdown */
.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.panel-title {
  margin: 0;
  color: var(--color);
}

.tense-select {
  width: 232px;
  flex-shrink: 0;
}

/* Grammar Reference card */
.reference-card {
  display: flex;
  gap: 24px;
  padding: 24px;
  border-radius: 8px;
  background: var(--surface-color);
  border: 1px solid var(--border-color);
}

.left-column {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 400px;
  flex-shrink: 0;
  padding-right: 24px;
  border-right: 1px solid var(--border-color);
}

.card-title {
  margin: 0;
  color: var(--color);
}

.card-description {
  margin: 0;
  color: var(--text-secondary);
}

.focus-tip {
  padding: 12px;
  border-radius: 8px;
  background: var(--overlay-weak);
  border: 1px solid var(--overlay-strong);
  color: var(--color);
}

.formula {
  margin: 0;
}
.formula-label {
  color: var(--color);
}
.formula-value {
  color: var(--text-secondary);
}

.examples-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.example-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  border-left-width: 4px;
}

.example-en {
  color: var(--color);
}

.example-ru {
  color: var(--text-secondary);
}

/* Mistakes column */
.right-column {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.mistake {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.mistake-head {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.mistake-title {
  color: var(--color);
}

.mistake-note {
  color: var(--text-secondary);
}

.mistake-divider {
  height: 1px;
  background: var(--border-color);
}

.mistake-examples {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.mistake-wrong {
  color: var(--error-color);
}

.mistake-right {
  color: var(--success-color);
}

/* Trigger & Contrast section */
.trigger-contrast-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 16px;
  border-radius: 8px;
  background: var(--surface-color);
  border: 1px solid var(--border-color);
}

.trigger-contrast-section > h4 {
  margin: 0;
  color: var(--color);
}

.time-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.trigger {
  padding: 6px 12px;
  border-radius: 4px;
  background: var(--trigger-bg);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
}

.contrast-cards {
  display: flex;
  gap: 16px;
  padding-top: 16px;
}

.contrast-card {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.contrast-title {
  margin: 0;
  color: var(--color);
}

.comparison-note {
  color: var(--text-secondary);
}

/* Responsive adjustments */
@media (max-width: 700px) {
  .reference-card {
    flex-direction: column;
  }
  .left-column {
    width: 100%;
    padding-right: 0;
    padding-bottom: 16px;
    border-right: none;
    border-bottom: 1px solid var(--border-color);
  }
  .contrast-cards {
    flex-direction: column;
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
    margin: 20px 0 30px;
  }
}
</style>

<!-- Trigger badge background: recessed black-30% fill in dark theme, flat white
     surface in light theme — matches every other bordered element on this
     screen (see --border-color in src/styles/index.css) but this one fill is
     genuinely inverted rather than just weak/strong, so it's kept local. -->
<style>
.tense-cards-panel {
  --trigger-bg: rgba(0, 0, 0, 0.3);
}
html.light .tense-cards-panel,
body.light .tense-cards-panel,
.light .tense-cards-panel {
  --trigger-bg: var(--surface-color);
}
</style>
