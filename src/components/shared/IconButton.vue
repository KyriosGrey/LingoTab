<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <component :is="href ? 'a' : 'button'" :href="href" class="icon-btn">
    <slot />
  </component>
</template>

<style scoped>
.icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border: none;
  border-radius: 4px;
  background-color: var(--overlay-weak);
  color: var(--color);
}
.icon-btn:hover {
  transition: background-color ease-in-out 0.13s;
  background-color: var(--overlay-strong);
}
/* explicit px, not font-size: unplugin-icons renders these SVGs at a 1.2em
   scale, so a font-size rule would come out 20% bigger than the number named */
.icon-btn :deep(svg) {
  width: 24px;
  height: 24px;
}
</style>
