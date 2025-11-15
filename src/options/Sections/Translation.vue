<script setup lang="ts">
import Section from '../components/Section.vue'
import storage from '@/modules/localStorage'
import { ref, watch } from 'vue'

// Загружаем текущее значение настройки
const hideTranslationUnderSpoiler = ref(storage.get('hideTranslationUnderSpoiler') === 'true')

// Следим за изменением и сохраняем
watch(hideTranslationUnderSpoiler, (val) => {
  storage.set('hideTranslationUnderSpoiler', String(val))
})
</script>

<template>
  <Section
    title="Translation"
    description="Control how word translations are displayed on the New Tab page."
  >
    <div class="vocab-list__item" style="margin-top: 10px;">
      <label class="checkbox">
        <b class="vocab-list__item__name">Hide translation under spoiler</b>
        <small class="vocab-list__item__count">(translation will be hidden until you click “Show”)</small>

        <input type="checkbox" v-model="hideTranslationUnderSpoiler">
        <span class="checkmark" />
      </label>
    </div>
  </Section>
</template>

<style scoped>
.vocab-list__item {
  display: flex;
  align-items: center;
  flex-basis: 100%;
  padding: 5px 0;
}

.vocab-list__item__name {
  margin-right: 5px;
}

.vocab-list__item__count {
  color: hsla(var(--color-raw), 0.75);
  font-size: 0.8rem;
}

.checkbox {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  font-size: 0.8rem;
  user-select: none;
}

.checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: -3px;
  left: 0;
  height: 18px;
  width: 18px;
  background-color: hsla(var(--color-raw), 0.2);
  border-radius: 5px;
}

.checkbox:hover input ~ .checkmark {
  background-color: hsla(var(--color-raw), 0.3);
}

.checkbox input:checked ~ .checkmark {
  background-color: var(--color);
}

.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

.checkbox input:checked ~ .checkmark:after {
  display: block;
}

.checkbox .checkmark:after {
  left: 7px;
  top: 4px;
  width: 5px;
  height: 10px;
  border: solid var(--bg-color);
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}

.checkbox input:focus ~ .checkmark {
  box-shadow: 0 0 3px var(--color);
}
</style>
