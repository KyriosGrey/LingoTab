<script setup lang="ts">
import type { IWordDefinition } from '@/composables/words/useWordDefinitions'

import useBackground from '@/composables/useBackground'
import { computed, ref, watch } from 'vue'

import Actions from './Actions.vue'
import Phonetic from './Phonetic.vue'
import Translation from './Translation.vue'

// ✅ добавляем импорт для хранения
import storage from '@/modules/localStorage'

const props = defineProps<{
  word: string
  definitions: IWordDefinition[]
}>()

defineEmits(['marked'])

const { shouldModifyUI } = useBackground()

const definition = computed(() => props.definitions?.[0])

const backgroundClass = computed(() => ({ boxed: shouldModifyUI.value }))

// ✅ флаг из настроек и локальное состояние
const hideTranslationUnderSpoiler = ref(storage.get('hideTranslationUnderSpoiler') === 'true')
const showTranslation = ref(false)

// ✅ сбрасываем спойлер при смене слова
watch(() => props.word, () => {
  showTranslation.value = false
})

// ✅ обновляем, если настройки изменятся
watch(
  () => storage.get('hideTranslationUnderSpoiler'),
  (val) => (hideTranslationUnderSpoiler.value = val === 'true')
)
</script>

<template>
  <div class="content">
    <div class="title" :class="backgroundClass">
      <div class="title__word-actions">
        <div class="word-block">
          <h1 class="word">
            {{ word }}
          </h1>

          <!-- ✅ Новый блок со спойлером -->
          <div v-if="hideTranslationUnderSpoiler">
            <button
              v-if="!showTranslation"
              class="spoiler-btn"
              @click="showTranslation = true"
            >
              Показать перевод
            </button>
            <Translation
              v-else
              v-if="word"
              :text="word"
              class="word-translation"
            />
          </div>

          <!-- если спойлер выключен — старое поведение -->
          <Translation
            v-else
            v-if="word"
            :text="word"
            class="word-translation"
          />
        </div>

        <Actions
          v-if="definition"
          :definition="definition"
          @marked="$emit('marked')"
        />
      </div>

      <Phonetic :definition="definition" />
    </div>

    <div v-if="definition" class="meanings">
      <div
        v-for="(meaning, index) of definition.meanings"
        :key="index"
        :class="backgroundClass"
        class="meaning"
      >
        <b class="meaning__pts">
          {{ meaning.partOfSpeech }}
        </b>

        <div v-for="(def, defIndex) of meaning.definitions" :key="defIndex">
          <p class="meaning__def">
            {{ def.definition }}
          </p>
          <Translation v-if="def.definition" :text="def.definition" small />

          <p v-if="def.example" class="meaning__example">
            {{ def.example }}
          </p>
          <Translation v-if="def.example" :text="def.example" small />
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
  margin-bottom: 20px;
}

.title__word-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.word {
  margin: 0;
  font-size: 4rem;
  text-transform: capitalize;
}

.word-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

/* Немного увеличим перевод основного слова */
.word-translation {
  font-size: 1.3rem;
  font-style: italic;
  margin-top: 0.25rem;
}

/* ✅ стиль для кнопки спойлера */
/* ✅ Новый стиль кнопки "Показать перевод" */
.spoiler-btn {
  display: inline-block;
  font-style: italic;
  margin-top: 10px;
  padding: 5px 12px;
  border-radius: 4px;
  background-color: #404040;          /* фон как у "Noun" */
  color: #e6e6e6;                     /* текст такой же */
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: capitalize;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease-in-out;
}

/* ✅ Эффект наведения */
.spoiler-btn:hover {
  background-color: #505050;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

/* ✅ Эффект клика */
.spoiler-btn:active {
  background-color: #333333;
  transform: translateY(0);
  box-shadow: none;
}

@media all and (max-width: 450px) {
  .word {
    font-size: 2.5rem;
  }
}

.meaning:not(:last-of-type) {
  margin-bottom: 2rem;
}

.meaning__pts {
  display: inline-block;
  margin-top: 10px;
  padding: 5px 10px;
  border-radius: 4px;
  background-color: hsl(0, 0%, 25%);
  color: hsl(0, 0%, 90%);
  font-size: 0.75rem;
  text-transform: capitalize;
}

.meaning__def {
  margin-bottom: 5px;
  font-size: 1rem;
  color: var(--def-color);
}

.meaning__example {
  margin: 0;
  color: hsl(0, 0%, 55%);
  font-size: 0.75rem;
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
