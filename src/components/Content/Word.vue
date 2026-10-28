<script setup lang="ts">
import type { IWordDefinition } from '@/composables/words/useWordDefinitions'

import PrimaryButton from '@/components/shared/PrimaryButton.vue'
import Skeleton from '@/components/shared/Skeleton.vue'
import useBackground from '@/composables/useBackground'
import useEditWordModal from '@/composables/words/useEditWordModal'
import useUserExamples from '@/composables/words/useUserExamples'
import useUserTranslations from '@/composables/words/useUserTranslations'
import useWord from '@/composables/words/useWord'
import useWordExamples from '@/composables/words/useWordExamples'
import { t } from '@/i18n'
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
const { hasUserTranslation } = useUserTranslations()
const { openEditWordModal } = useEditWordModal()
const { searchWord } = useWord()
const { examples: tatoebaExamples, isLoading: isTatoebaLoading } = useWordExamples()
const { getUserExamples } = useUserExamples()

// The word itself may have been corrected in the popup - then show the corrected one.
function handleWordEdited(newWord: string) {
  if (newWord !== props.word.toLowerCase())
    searchWord(newWord)
}

const definition = computed(() => props.definitions?.[0])

const backgroundClass = computed(() => ({ boxed: shouldModifyUI.value }))

const activeMeaningIndex = ref(0)
const activeMeaning = computed(() => definition.value?.meanings?.[activeMeaningIndex.value])

// Examples come first and open by default: they show the meaning in use.
// The user's own examples replace Tatoeba's (no request is made for them then).
const ownExamples = computed(() => getUserExamples(props.word))
const hasOwnExamples = computed(() => ownExamples.value.length > 0)
const examples = computed(() => hasOwnExamples.value ? ownExamples.value : tatoebaExamples.value)
const isExamplesLoading = computed(() => !hasOwnExamples.value && isTatoebaLoading.value)
// While Tatoeba's load the tab already shows a skeleton; with none found it disappears.
const hasExamples = computed(() => examples.value.length > 0 || isExamplesLoading.value)
const isExamplesTabActive = ref(true)
const showExamples = computed(() => hasExamples.value && isExamplesTabActive.value)

function selectMeaning(index: number) {
  activeMeaningIndex.value = index
  isExamplesTabActive.value = false
}

watch(() => props.word, () => {
  activeMeaningIndex.value = 0
  isExamplesTabActive.value = true
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
                <i-ic-round-remove-red-eye /> {{ t('word.showWord') }}
              </PrimaryButton>
            </div>
          </template>
          <template v-else>
            <h1 class="word text-display">
              {{ word }}
            </h1>
            <Phonetic v-if="definition" :definition="definition" />
          </template>
        </div>

        <Actions
          v-if="word"
          :word="word"
          @marked="$emit('marked')"
        />
      </div>

      <div class="divider" />

      <div class="subtitle-row">
        <div v-if="isTranslationHidden" class="spoiler-slot spoiler-slot--line">
          <Skeleton width="230px" height="24px" />
          <PrimaryButton class="spoiler-overlay-btn" @click="isSpoilerRevealed = true">
            <i-ic-round-remove-red-eye /> {{ t('word.showTranslation') }}
          </PrimaryButton>
        </div>
        <template v-else-if="word">
          <Translation
            :text="word"
            variant="word"
          />
          <button
            type="button"
            class="edit-translation-btn"
            :class="{ 'edit-translation-btn--own': hasUserTranslation(word) }"
            :title="t('action.editTranslation')"
            :aria-label="t('action.editTranslation')"
            @click="openEditWordModal(word, handleWordEdited)"
          >
            <i-ic-outline-edit />
          </button>
        </template>
      </div>
    </div>

    <RepetitionBlock v-if="showRepetition" />

    <div v-if="definition || hasExamples" class="meanings">
      <div class="pos-tabs">
        <button
          v-if="hasExamples"
          class="pos-tab"
          :class="{ active: showExamples }"
          @click="isExamplesTabActive = true"
        >
          {{ t('word.examples') }}
        </button>
        <button
          v-for="(meaning, index) of definition?.meanings"
          :key="index"
          class="pos-tab"
          :class="{ active: !showExamples && index === activeMeaningIndex }"
          @click="selectMeaning(index)"
        >
          {{ meaning.partOfSpeech }}
        </button>
      </div>

      <div
        v-if="showExamples"
        :class="backgroundClass"
        class="meaning"
      >
        <!-- Under the spoiler the examples would give the word or its translation away. -->
        <template v-if="isExamplesLoading || isWordHidden || isTranslationHidden">
          <div v-for="n of (isExamplesLoading ? 3 : examples.length)" :key="n" class="definition">
            <Skeleton width="70%" height="24px" />
            <Skeleton width="45%" height="16px" />
          </div>
        </template>
        <template v-else>
          <div v-for="example of examples" :key="example.text" class="definition">
            <p class="meaning__def">
              {{ example.text }}
            </p>
            <p v-if="example.translation" class="meaning__example">
              {{ example.translation }}
            </p>
          </div>
        </template>

        <p class="examples-source">
          <template v-if="hasOwnExamples">
            {{ t('word.ownExamples') }}
          </template>
          <template v-else>
            {{ t('word.examplesSource') }}
            <a href="https://tatoeba.org" target="_blank" rel="noopener noreferrer">Tatoeba</a>
          </template>
          <button
            type="button"
            class="edit-translation-btn edit-examples-btn"
            :class="{ 'edit-translation-btn--own': hasOwnExamples }"
            :title="t('action.editExamples')"
            :aria-label="t('action.editExamples')"
            @click="openEditWordModal(word, handleWordEdited)"
          >
            <i-ic-outline-edit />
          </button>
        </p>
      </div>

      <div
        v-else-if="activeMeaning"
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

/* Pencil after the translation: grey = translation from the service,
   accent = the user's own translation. */
.edit-translation-btn {
  display: inline-flex;
  flex-shrink: 0;
  margin-left: 8px;
  padding: 4px;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  transition: background-color 0.13s ease-in-out, color 0.13s ease-in-out;
}
.edit-translation-btn :deep(svg) {
  width: 16px;
  height: 16px;
}
.edit-translation-btn:hover {
  background-color: var(--overlay-weak);
  color: var(--color);
}
.edit-translation-btn--own,
.edit-translation-btn--own:hover {
  color: var(--accent-color-hover);
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

.examples-source {
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 0;
  font-family: var(--font-family-base);
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: var(--text-tertiary);
}

.edit-examples-btn {
  margin-left: 2px;
  padding: 2px;
}
.edit-examples-btn :deep(svg) {
  width: 14px;
  height: 14px;
}

.examples-source a {
  color: inherit;
}

.examples-source a:hover {
  color: var(--color);
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
