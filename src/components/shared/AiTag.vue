<script setup lang="ts">
// Figma "tag" component — small badge marking AI-powered settings groups.
</script>

<template>
  <span class="ai-tag text-body-sm">AI</span>
</template>

<style scoped>
.ai-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* Figma instance is 36x24 — 4px top/bottom padding + the 16px line-height from
     .text-body-sm adds up to 24px; 8px top/bottom (matching the base component
     definition) would overshoot to 32px. */
  padding: 4px 12px;
  border-radius: 4px;
  background: var(--accent-color-tint);
  border: 1px solid var(--accent-color-hover);
  color: var(--accent-color-hover);
}
</style>
