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
      <div class="sidebar-footer">
        <small class="muted">New Word Tab • Smart sentences</small>
      </div>
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

/* Sidebar */
.settings-sidebar {
  width: 240px;
  min-width: 200px;
  background: transparent;
  border: 1px solid rgba(0,0,0,0.04);
  border-radius: 8px;
  padding: 12px;
  box-sizing: border-box;
  display:flex;
  flex-direction:column;
  gap:12px;
}

/* Menu buttons — выглядят как в других секциях (используют переменные) */
.menu-item {
  text-align: left;
  padding: 10px 12px;
  border-radius: 6px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: var(--color, #111);
}
.menu-item:hover { background: rgba(0,0,0,0.03); }
.menu-item.active {
  background: var(--accent, #1f6feb);
  color: white;
  font-weight:600;
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

/* Footer */
.sidebar-footer { margin-top: auto; font-size: 12px; color: var(--muted-color, #666); padding-top:6px; }
</style>