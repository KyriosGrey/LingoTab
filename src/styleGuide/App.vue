<script setup lang="ts">
import ActionButton from '@/components/shared/ActionButton.vue'
import AiTag from '@/components/shared/AiTag.vue'
import Checkbox from '@/components/shared/Checkbox.vue'
import PrimaryButton from '@/components/shared/PrimaryButton.vue'
import SearchInput from '@/components/shared/SearchInput.vue'
import Toggle from '@/components/shared/Toggle.vue'
import WordList from '@/components/shared/WordList/WordList.vue'
import useTheme from '@/composables/useTheme'
import Select from '@/options/components/Select.vue'
import { ref } from 'vue'

const { theme, toggleTheme } = useTheme()

const toggleOn = ref(true)
const toggleOff = ref(false)
const checkboxChecked = ref(true)
const checkboxUnchecked = ref(false)
const searchEmpty = ref('')
const searchFilled = ref('Present Simple')
const selectValue = ref('present-simple')
const selectOptions = [
  { value: 'present-simple', text: 'Present Simple' },
  { value: 'present-continuous', text: 'Present Continuous' },
  { value: 'past-simple', text: 'Past Simple' },
]
const sampleWords = ['Concluded', 'Consensual', 'Ambiguous', 'Resilient']

const colorTokens = [
  { name: '--bg-color', label: 'Page background' },
  { name: '--surface-color', label: 'Card / panel background' },
  { name: '--color', label: 'Text — primary' },
  { name: '--text-secondary', label: 'Text — secondary' },
  { name: '--text-tertiary', label: 'Text — tertiary' },
  { name: '--overlay-weak', label: 'Overlay — weak (fills, borders)' },
  { name: '--overlay-strong', label: 'Overlay — strong (fills, borders)' },
  { name: '--accent-color', label: 'Accent' },
  { name: '--accent-color-hover', label: 'Accent — hover' },
  { name: '--accent-color-tint', label: 'Accent — tint' },
  { name: '--success-color', label: 'Success' },
  { name: '--error-color', label: 'Error' },
]

const typeScale = [
  { class: 'text-display', label: 'Display', figma: 'Headings/main word 56-60' },
  { class: 'text-heading-32', label: 'Heading 32', figma: 'Headings/32-32' },
  { class: 'text-heading-18', label: 'Heading 18', figma: 'Headings/18-24' },
  { class: 'text-heading-label', label: 'Heading label', figma: 'Headings/13-16' },
  { class: 'text-sentence', label: 'Smart sentence', figma: 'Headings/Текст предложений Smart Sentances' },
  { class: 'text-body', label: 'Body', figma: 'Default text/16-24' },
  { class: 'text-body-sm', label: 'Body small', figma: 'Default text/13-16' },
  { class: 'text-body-sm-italic', label: 'Body small italic', figma: 'Default text/13-16 Italic' },
]
</script>

<template>
  <div class="page">
    <header class="header">
      <div>
        <h1 class="text-heading-32">
          LingoTab — Style Guide
        </h1>
        <p class="text-body-sm subtitle">
          Живая справка по дизайн-токенам. Использует те же переменные и стили, что и само расширение — при обновлении токенов эта страница обновится сама.
        </p>
      </div>
      <button title="Switch theme" class="toggle-btn text-body-sm" @click="toggleTheme">
        <template v-if="theme === 'dark'">
          <i-ic-round-dark-mode />
          Dark
        </template>
        <template v-else>
          <i-ic-round-light-mode />
          Light
        </template>
      </button>
    </header>

    <section class="section">
      <h2 class="text-heading-18">
        Цвета
      </h2>
      <div class="swatch-grid">
        <div v-for="token in colorTokens" :key="token.name" class="swatch-card">
          <div class="swatch" :style="{ background: `var(${token.name})` }" />
          <div class="text-body-sm swatch-label">
            {{ token.label }}
          </div>
          <div class="text-body-sm-italic swatch-var">
            {{ token.name }}
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="text-heading-18">
        Типографика
      </h2>
      <div class="type-list">
        <div v-for="style in typeScale" :key="style.class" class="type-row">
          <div class="type-meta">
            <div class="text-body-sm type-label">
              {{ style.label }}
            </div>
            <div class="text-body-sm-italic type-figma">
              {{ style.figma }}
            </div>
          </div>
          <div :class="style.class">
            Aa Тест 123
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="text-heading-18">
        Компоненты интерфейса
      </h2>

      <div class="component-row">
        <div class="component-label text-body-sm">
          Toggle
        </div>
        <Toggle v-model="toggleOn" />
        <Toggle v-model="toggleOff" />
        <Toggle v-model="toggleOn" disabled />
        <Toggle v-model="toggleOff" disabled />
      </div>

      <div class="component-row">
        <div class="component-label text-body-sm">
          Checkbox
        </div>
        <Checkbox v-model="checkboxChecked" />
        <Checkbox v-model="checkboxUnchecked" />
        <Checkbox v-model="checkboxChecked" disabled />
        <Checkbox v-model="checkboxUnchecked" disabled />
      </div>

      <div class="component-row">
        <div class="component-label text-body-sm">
          Action button
        </div>
        <ActionButton>
          <i-ic-round-upload-file /> Import file
        </ActionButton>
        <ActionButton disabled>
          <i-ic-round-upload-file /> Import file
        </ActionButton>
      </div>

      <div class="component-row">
        <div class="component-label text-body-sm">
          Primary button
        </div>
        <PrimaryButton>
          Generate now (preview)
        </PrimaryButton>
        <PrimaryButton disabled>
          Generate now (preview)
        </PrimaryButton>
      </div>

      <div class="component-row">
        <div class="component-label text-body-sm">
          AI tag
        </div>
        <AiTag />
      </div>

      <div class="component-row">
        <div class="component-label text-body-sm">
          Search input
        </div>
        <SearchInput v-model="searchEmpty" placeholder="Filter" />
        <SearchInput v-model="searchFilled" placeholder="Filter" />
        <SearchInput v-model="searchEmpty" placeholder="Filter" disabled />
      </div>

      <div class="component-row">
        <div class="component-label text-body-sm">
          Dropdown
        </div>
        <Select v-model="selectValue" :options="selectOptions" />
      </div>

      <div class="component-row component-row--top">
        <div class="component-label text-body-sm">
          Word list
        </div>
        <div class="word-list-demo">
          <WordList :list="sampleWords" border pointer>
            <template #actions="{ word }">
              <i-ic-round-remove-circle-outline :title="`Remove ${word}`" />
            </template>
          </WordList>
        </div>
      </div>

      <p class="text-body-sm-italic subtitle">
        Nav Item (пункты левого меню настроек) стилизован прямо в src/options/SettingsTabs.vue — посмотри его на реальной странице настроек, отдельный компонент для него не заводили, так как у него один единственный вызов.
      </p>
    </section>
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  padding: 40px;
  max-width: 960px;
  margin: 0 auto;
}

.header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 40px;
}

.subtitle {
  color: var(--text-secondary);
  margin-top: 8px;
  max-width: 560px;
}

.toggle-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 12px;
  border: 1px solid var(--overlay-weak);
  border-radius: 6px;
  color: var(--color);
  background: var(--overlay-strong);
  transition: border-color ease-in-out 0.13s;
  flex-shrink: 0;
}
.toggle-btn:hover {
  border-color: var(--accent-color-hover);
}

.section {
  margin-bottom: 48px;
}

.section > h2 {
  margin-bottom: 16px;
}

.swatch-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;
}

.swatch-card {
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--overlay-strong);
}

.swatch {
  height: 64px;
}

.swatch-label {
  padding: 8px 10px 0;
}

.swatch-var {
  padding: 2px 10px 10px;
  color: var(--text-tertiary);
}

.type-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.type-row {
  display: flex;
  align-items: baseline;
  gap: 24px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--overlay-strong);
}

.type-meta {
  width: 220px;
  flex-shrink: 0;
}

.type-figma {
  color: var(--text-tertiary);
}

.component-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid var(--overlay-strong);
}

.component-row--top {
  align-items: flex-start;
}

.component-label {
  width: 140px;
  flex-shrink: 0;
  color: var(--text-secondary);
}

.word-list-demo {
  width: 100%;
  max-width: 420px;
}
</style>
