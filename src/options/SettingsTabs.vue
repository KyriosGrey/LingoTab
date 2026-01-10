<template>
  <div class="settings-root">
    <aside class="settings-sidebar" role="navigation" aria-label="Settings menu">
      <div class="brand">Settings</div>
      <nav>
        <button
          :class="['menu-item', active === 'newword' ? 'active' : '']"
          @click="active = 'newword'"
          aria-pressed="active === 'newword'"
        >
          New Word Tab
        </button>
        <button
          :class="['menu-item', active === 'smart' ? 'active' : '']"
          @click="active = 'smart'"
          aria-pressed="active === 'smart'"
        >
          Smart Daily Sentences
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
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const active = ref<'newword'|'smart'>('newword')
</script>

<style scoped>
/* Центрируем весь блок настроек и делаем две колонки рядом */
.settings-root {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  max-width: 980px; /* фиксированная максимальная ширина */
  margin: 24px auto; /* центрирование по горизонтали */
  padding: 12px;
  box-sizing: border-box;
  width: calc(100% - 40px);
  font-family: inherit; /* подхватит глобальный шрифт */
}

/* Sidebar - remove rounded corners, keep only right border */
.settings-sidebar {
  width: 240px;
  min-width: 200px;
  background: transparent;
  border: none;
  border-right: 1px solid hsla(var(--color-raw), 0.04);
  border-radius: 0; /* убираем закругления */
  padding: 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Menu buttons — визуально согласованы со стилем .btn (ApiKeyRow.vue) */
.menu-item {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 6px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--color, #111);
  min-height: 36px;
  transition: background-color 0.13s ease-in-out, box-shadow 0.13s, color 0.13s ease-in-out;
  line-height: 1;
  text-align: left;
  width: 100%;
}

/* Hover state like buttons */
.menu-item:hover:not(.active) {
  background-color: hsla(var(--color-raw), 0.08);
}

/* Active state inherits colors from checkbox/checked state:
   background uses --color (same as checked checkmark), text uses --bg-color */
.menu-item.active {
  background: var(--color);
  color: var(--bg-color);
  font-weight: 700;
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
  padding-left: 8px;
  box-sizing: border-box;
}

.panel-section {
  background: transparent;
  padding: 0;
}
</style>