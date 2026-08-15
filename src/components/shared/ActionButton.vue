<script setup lang="ts">
// Icon + label secondary button (Figma "Action Button"). Not the same component as
// src/components/shared/WordList/ActionButton.vue, which is icon-only.
defineProps<{
  disabled?: boolean
}>()
</script>

<template>
  <button class="action-btn text-body-sm" :disabled="disabled">
    <slot />
  </button>
</template>

<style scoped>
.action-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid var(--overlay-strong);
  background: var(--overlay-weak);
  color: var(--color);
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
}
/* explicit width/height, not font-size: unplugin-icons renders these SVGs at a
   1.2em scale (width="1.2em" height="1.2em"), so a font-size rule would come out
   20% bigger than the pixel value it names */
.action-btn :deep(svg) {
  width: 16px;
  height: 16px;
}
.action-btn:hover:not(:disabled) {
  background: var(--overlay-strong);
  border-color: var(--accent-color-hover);
}
.action-btn:disabled {
  opacity: 0.4;
  cursor: default;
}
</style>
