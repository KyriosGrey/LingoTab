<script setup lang="ts">
import useTheme from '@/composables/useTheme'
import { t } from '@/i18n'

import Section from '../components/Section.vue'

const { theme, toggleTheme } = useTheme()
</script>

<template>
  <Section :title="t('theme.title')" :description="t('theme.description')">
    <template #bar>
      <button :title="t('theme.switch')" class="toggle-btn text-body-sm" @click="toggleTheme">
        <template v-if="theme === 'dark'">
          <i-ic-round-dark-mode />
          {{ t('theme.dark') }}
        </template>
        <template v-else>
          <i-ic-round-light-mode />
          {{ t('theme.light') }}
        </template>
      </button>
    </template>
  </Section>
</template>

<style scoped>
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
}
.toggle-btn:hover {
  border-color: var(--accent-color-hover);
}
</style>
