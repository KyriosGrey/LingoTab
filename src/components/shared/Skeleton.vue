<script setup lang="ts">
withDefaults(defineProps<{
  width: string
  height: string
}>(), {})
</script>

<template>
  <div class="skeleton" :style="{ width, height }" />
</template>

<style scoped>
.skeleton {
  /* Figma uses this exact fill (#62666D) as the skeleton color in BOTH themes —
     it's not a theme-aware token there, so we match it literally rather than
     swapping in --text-tertiary (which would differ in the light theme). */
  background: #62666d;
  opacity: 0.1;
  filter: blur(4px);
  flex-shrink: 0;
}
</style>
