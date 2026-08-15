<script lang="ts" setup>
import { ref } from 'vue'

import Learned from './Learned.vue'
import Learning from './Learning.vue'

defineEmits<{
  (e: 'showDefinition', word: string): void
}>()

const activeTab = ref('learning')
</script>

<template>
  <div class="tabs">
    <ul class="navbar">
      <li
        class="text-body"
        :class="{ active: activeTab === 'learning' }"
        @click="activeTab = 'learning'"
      >
        <i-ic-round-school /> Learning
      </li>
      <li
        class="text-body"
        :class="{ active: activeTab === 'learned' }"
        @click="activeTab = 'learned'"
      >
        <i-ic-round-check-circle /> Learned
      </li>
    </ul>

    <Learned
      v-if="activeTab === 'learned'"
      @show-definition="$emit('showDefinition', $event)"
    />
    <Learning
      v-if="activeTab === 'learning'"
      @show-definition="$emit('showDefinition', $event)"
    />
  </div>
</template>

<style scoped>
.tabs {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.navbar {
  display: flex;
  gap: 4px;
  padding: 4px;
  border-radius: 6px;
  list-style: none;
  background-color: var(--surface-color);
}

.navbar li {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 36px;
  flex: 1;
  border-radius: 4px;
  color: var(--text-secondary);
  cursor: pointer;
  transition: background-color ease-in-out 0.13s, color ease-in-out 0.13s;
}
/* explicit px, not font-size: unplugin-icons renders these SVGs at a 1.2em
   scale, so a font-size rule would come out 20% bigger than the number named */
.navbar li :deep(svg) {
  width: 18px;
  height: 18px;
}
.navbar li.active {
  background-color: var(--overlay-strong);
  color: var(--color);
}
.navbar li:hover:not(.active) {
  background-color: var(--overlay-weak);
}
</style>
