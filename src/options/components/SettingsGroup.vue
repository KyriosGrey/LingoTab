<script setup lang="ts">
import AiTag from '@/components/shared/AiTag.vue'

defineProps<{
  title: string
  description?: string
  ai?: boolean
}>()
</script>

<template>
  <div class="settings-group">
    <div class="settings-group__header">
      <div class="settings-group__heading">
        <h2 class="settings-group__title text-heading-18">
          {{ title }}
        </h2>
        <AiTag v-if="ai" />
      </div>
      <p v-if="description" class="settings-group__description text-body-sm">
        {{ description }}
      </p>
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

.settings-group__header {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.settings-group__heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.settings-group__description {
  margin: 0;
  color: var(--text-secondary);
  max-width: 440px;
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
