<script setup lang="ts">
import Checkbox from '@/components/shared/Checkbox.vue'
import storage from '@/modules/localStorage'
import { ref, watch } from 'vue'
import Section from '../components/Section.vue'

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
      <Checkbox v-model="hideTranslationUnderSpoiler">
        <span class="vocab-list__item__name text-body-sm">Hide translation under spoiler</span>
        <span class="vocab-list__item__count text-body-sm-italic">(translation will be hidden until you click “Show”)</span>
      </Checkbox>
    </div>
  </Section>
</template>

<style scoped>
.vocab-list__item {
  display: flex;
  align-items: center;
  flex-basis: 100%;
  padding: 8px 0;
}

.vocab-list__item__name {
  margin-right: 4px;
  color: var(--color);
}

.vocab-list__item__count {
  color: var(--text-secondary);
}
</style>
