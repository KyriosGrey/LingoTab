<script setup lang="ts">
// Figma "translate-button" component, reused as the app's solid accent
// call-to-action button (e.g. Word.vue's reveal button, "Generate now").
defineProps<{
  disabled?: boolean
}>()
</script>

<template>
  <button class="primary-btn text-body-sm" :disabled="disabled">
    <slot />
  </button>
</template>

<style scoped>
.primary-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid var(--primary-btn-border);
  background: var(--primary-btn-bg);
  color: #fff; /* stays white on the accent fill in both themes, per Figma */
  transition: filter 0.15s ease-in-out;
}
.primary-btn:hover:not(:disabled) {
  filter: brightness(1.1);
}
.primary-btn:disabled {
  opacity: 0.4;
  cursor: default;
}
</style>
