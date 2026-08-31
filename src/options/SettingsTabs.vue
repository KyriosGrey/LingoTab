<script setup lang="ts">
import { t } from '@/i18n'
import { ref } from 'vue'

const active = ref<'newword' | 'smart' | 'patchnotes'>('newword')
</script>

<template>
  <div class="settings-root">
    <aside class="settings-sidebar" role="navigation" :aria-label="t('settings.menu')">
      <div class="brand text-heading-label">
        {{ t('settings.brand') }}
      </div>
      <nav>
        <button
          class="menu-item" :class="[active === 'newword' ? 'active' : '']"
          aria-pressed="active === 'newword'"
          @click="active = 'newword'"
        >
          {{ t('settings.tab.main') }}
        </button>
        <button
          class="menu-item" :class="[active === 'smart' ? 'active' : '']"
          aria-pressed="active === 'smart'"
          @click="active = 'smart'"
        >
          {{ t('settings.tab.smart') }}
        </button>
        <button
          class="menu-item" :class="[active === 'patchnotes' ? 'active' : '']"
          aria-pressed="active === 'patchnotes'"
          @click="active = 'patchnotes'"
        >
          {{ t('settings.tab.patchNotes') }}
        </button>
      </nav>
    </aside>

    <main class="settings-panel">
      <section v-show="active === 'newword'" class="panel-section">
        <slot name="newword" />
      </section>

      <section v-show="active === 'smart'" class="panel-section">
        <slot name="smart" />
      </section>

      <section v-show="active === 'patchnotes'" class="panel-section">
        <slot name="patchnotes" />
      </section>
    </main>
  </div>
</template>

<style scoped>
/* Центрируем весь блок настроек и делаем две колонки рядом */
.settings-root {
  display: flex;
  gap: 48px;
  align-items: flex-start;
  max-width: 980px; /* фиксированная максимальная ширина */
  margin: 24px auto; /* центрирование по горизонтали */
  padding: 12px;
  box-sizing: border-box;
  width: calc(100% - 40px);
  font-family: inherit; /* подхватит глобальный шрифт */
}

/* Sidebar — Figma "sidebar" frame (node-id=19-260): flush left, no border, no
   internal padding of its own (the shared page margin comes from .settings-root) */
.settings-sidebar {
  width: 260px;
  background: transparent;
  border: none;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.brand {
  margin: 0;
  color: var(--text-tertiary);
  text-transform: uppercase;
}

nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* Menu buttons — Figma "Nav Item" component (frame node-id=24-253) */
.menu-item {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  height: 44px;
  padding: 0 16px;
  border-radius: 8px;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  font-family: var(--font-family-base);
  font-weight: 600;
  font-size: 18px;
  letter-spacing: -0.05em;
  color: var(--text-secondary);
  transition: background-color 0.13s ease-in-out, border-color 0.13s ease-in-out, color 0.13s ease-in-out;
  text-align: left;
  width: 100%;
  box-sizing: border-box;
}

/* Hover state */
.menu-item:hover:not(.active) {
  background-color: var(--overlay-weak);
  color: var(--color);
}

/* Active state */
.menu-item.active {
  background: var(--accent-color-tint);
  border-color: var(--accent-color-hover);
  color: var(--color);
  font-weight: 600;
}

/* Disabled look if needed in future */
.menu-item:disabled,
.menu-item[aria-disabled='true'] {
  opacity: 0.5;
  pointer-events: none;
}

/* Main panel — повторяет поведение других секций (внутри будут .section) */
.settings-panel {
  flex: 1 1 auto;
  min-width: 420px;
  background: transparent;
  box-sizing: border-box;
}

.panel-section {
  background: transparent;
  padding: 0;
}
</style>
