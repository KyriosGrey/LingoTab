<script setup lang="ts">
import type { IWordDefinition } from '@/composables/words/useWordDefinitions'

import PrimaryButton from '@/components/shared/PrimaryButton.vue'
import Skeleton from '@/components/shared/Skeleton.vue'
import useBackground from '@/composables/useBackground'
// ✅ добавляем импорт для хранения
import storage from '@/modules/localStorage'

import { computed, ref, watch } from 'vue'

import Actions from './Actions.vue'
import Phonetic from './Phonetic.vue'
import RepetitionBlock from './RepetitionBlock.vue'
import Translation from './Translation.vue'

const props = defineProps<{
  word: string
  definitions: IWordDefinition[]
  showRepetition?: boolean
}>()

defineEmits(['marked'])

const { shouldModifyUI } = useBackground()

const definition = computed(() => props.definitions?.[0])

const backgroundClass = computed(() => ({ boxed: shouldModifyUI.value }))

const activeMeaningIndex = ref(0)
const activeMeaning = computed(() => definition.value?.meanings?.[activeMeaningIndex.value])

watch(() => props.word, () => {
  activeMeaningIndex.value = 0
})

// ✅ флаг из настроек и локальное состояние
const hideTranslationUnderSpoiler = ref(storage.get('hideTranslationUnderSpoiler') === 'true')
const isSpoilerRevealed = ref(false)
const spoilerMode = ref<'translation' | 'word'>('translation')

function resetSpoilerState() {
  isSpoilerRevealed.value = false
  spoilerMode.value = Math.random() < 0.5 ? 'translation' : 'word'
}

const isWordHidden = computed(() =>
  hideTranslationUnderSpoiler.value && spoilerMode.value === 'word' && !isSpoilerRevealed.value,
)
const isTranslationHidden = computed(() =>
  hideTranslationUnderSpoiler.value && spoilerMode.value === 'translation' && !isSpoilerRevealed.value,
)

if (hideTranslationUnderSpoiler.value) {
  resetSpoilerState()
}

// ✅ сбрасываем спойлер при смене слова
watch(() => props.word, () => {
  if (!hideTranslationUnderSpoiler.value) {
    return
  }

  resetSpoilerState()
})

// ✅ обновляем, если настройки изменятся
watch(
  () => storage.get('hideTranslationUnderSpoiler'),
  (val) => {
    hideTranslationUnderSpoiler.value = val === 'true'

    if (hideTranslationUnderSpoiler.value) {
      resetSpoilerState()
    }
  },
)
</script>

<template>
  <div class="content">
    <div class="title" :class="backgroundClass">
      <div class="header-row">
        <div class="word-phonetic-col">
          <template v-if="isWordHidden">
            <div class="spoiler-slot spoiler-slot--word">
              <div class="skeleton-stack">
                <Skeleton width="295px" height="60px" />
                <Skeleton width="165px" height="24px" />
              </div>
              <PrimaryButton class="spoiler-overlay-btn" @click="isSpoilerRevealed = true">
                <i-ic-round-remove-red-eye /> Show word
              </PrimaryButton>
            </div>
          </template>
          <template v-else>
            <h1 class="word text-display">
              {{ word }}
            </h1>
            <Phonetic :definition="definition" />
          </template>
        </div>

        <Actions
          v-if="definition"
          :definition="definition"
          @marked="$emit('marked')"
        />
      </div>

      <div class="divider" />

      <div class="subtitle-row">
        <div v-if="isTranslationHidden" class="spoiler-slot spoiler-slot--line">
          <Skeleton width="230px" height="24px" />
          <PrimaryButton class="spoiler-overlay-btn" @click="isSpoilerRevealed = true">
            <i-ic-round-remove-red-eye /> Show translation
          </PrimaryButton>
        </div>
        <Translation
          v-else-if="word"
          :text="word"
          variant="word"
        />
      </div>
    </div>

    <RepetitionBlock v-if="showRepetition" />

    <div v-if="definition" class="meanings">
      <div class="pos-tabs">
        <button
          v-for="(meaning, index) of definition.meanings"
          :key="index"
          class="pos-tab"
          :class="{ active: index === activeMeaningIndex }"
          @click="activeMeaningIndex = index"
        >
          {{ meaning.partOfSpeech }}
        </button>
      </div>

      <div
        v-if="activeMeaning"
        :class="backgroundClass"
        class="meaning"
      >
        <div v-for="(def, defIndex) of activeMeaning.definitions" :key="defIndex" class="definition">
          <p class="meaning__def">
            {{ def.definition }}
            <Translation
              v-if="def.definition"
              :text="def.definition"
              small
              display="tooltip"
            />
          </p>

          <p v-if="def.example" class="meaning__example">
            {{ def.example }}
            <Translation
              v-if="def.example"
              :text="def.example"
              small
              display="tooltip"
            />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  margin: 100px auto 50px;
  padding: 0 15px;
  max-width: 800px;
}

.title {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 20px;
}

.header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.word-phonetic-col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  min-width: 0;
}

.word {
  margin: 0;
  text-transform: capitalize;
}

.divider {
  height: 1px;
  background: var(--overlay-weak);
}

.subtitle-row {
  display: flex;
  align-items: center;
  min-height: 32px;
}

/* Figma "hidden word/translation" states (frame node-id=18-835): a blurred
   placeholder sits where the text would be, sized to its footprint, so the card
   doesn't change height when the reveal button is clicked. */
.spoiler-slot {
  position: relative;
  display: flex;
  align-items: center;
}

.skeleton-stack {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.spoiler-overlay-btn {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

@media all and (max-width: 450px) {
  .word {
    font-size: 2.5rem;
  }
}

.meanings {
  margin-top: 120px;
}

/* Figma "tab" component (part-of-speech filter, frame node-id=18-835) */
.pos-tabs {
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid var(--overlay-strong);
}

.pos-tab {
  padding: 4px 0 8px;
  border: none;
  border-bottom: 1px solid transparent;
  background: none;
  cursor: pointer;
  color: var(--text-tertiary);
  font-family: var(--font-family-base);
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05em;
  text-transform: capitalize;
}

.pos-tab.active {
  border-bottom-color: var(--color);
  color: var(--color);
}

.meaning {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.definition {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.meaning__def {
  margin: 0;
  font-family: var(--font-family-base);
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.05em;
  color: var(--text-secondary);
}

.meaning__example {
  margin: 0;
  font-family: var(--font-family-base);
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.05em;
  color: var(--text-tertiary);
}

.meaning__def::first-letter,
.meaning__example::first-letter {
  text-transform: uppercase;
}

.boxed {
  padding: 15px 20px;
  border-radius: 10px;
  background-color: hsla(var(--bg-color-raw), 0.9);
  backdrop-filter: blur(5px);
}
</style>
