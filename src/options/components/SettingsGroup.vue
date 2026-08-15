<script setup lang="ts">
import AiTag from '@/components/shared/AiTag.vue'

defineProps<{
  title: string
  ai?: boolean
}>()
</script>

<template>
  <div class="settings-group">
    <div class="settings-group__heading">
      <h2 class="settings-group__title text-heading-18">
        {{ title }}
      </h2>
      <AiTag v-if="ai" />
    </div>
    <div class="settings-group__card">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.settings-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.settings-group__heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.settings-group__title {
  margin: 0;
  color: var(--color);
}

.settings-group__card {
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 8px;
  background: var(--card-bg);
  border: 1px solid var(--overlay-strong);
}
</style>
