<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ title: string, isOpen: boolean }>()

const emit = defineEmits(['open', 'close'])

const isShowingDrawer = ref(false)

function handleShowDrawer() {
  isShowingDrawer.value = true
  emit('open')
}

function handleCloseDrawer() {
  isShowingDrawer.value = false
}
</script>

<template>
  <Teleport to="body">
    <transition name="fade" @after-enter="handleShowDrawer">
      <div v-if="isOpen" class="overlay" @click.self="handleCloseDrawer">
        <transition name="slide" @after-leave="$emit('close')">
          <div v-show="isShowingDrawer" class="drawer">
            <div class="drawer__header">
              <h4 class="drawer__title text-heading-18">
                {{ title }}
              </h4>

              <button
                class="btn drawer__close"
                title="Close"
                @click="handleCloseDrawer"
              >
                <i-ic-round-close />
              </button>
            </div>

            <slot />
          </div>
        </transition>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(6px);
  z-index: 2;
}
.drawer {
  position: absolute;
  right: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background-color: var(--drawer-bg);
  max-width: 345px;
  width: 100%;
  box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.3);
}

/* START Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.08s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.1s ease-in-out;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
/* END Animations */

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  color: var(--color);
  background-color: transparent;
}

.drawer__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.drawer__title {
  margin: 0;
  color: var(--color);
}

.drawer__close {
  padding: 6px;
  color: var(--color);
  background-color: var(--overlay-weak);
  border-radius: 4px;
}
/* explicit px, not font-size: unplugin-icons renders these SVGs at a 1.2em
   scale, so a font-size rule would come out 20% bigger than the number named */
.drawer__close :deep(svg) {
  width: 24px;
  height: 24px;
}
.drawer__close:hover {
  transition: background-color ease-in-out 0.13s;
  background-color: var(--overlay-strong);
}
</style>

<!-- Figma's drawer background is a literal solid fill per theme (dark = the
     page bg #101112, light = solid white), not the tinted #F1F5F9 that
     --bg-color resolves to in light theme — so it needs its own variable
     rather than reusing --bg-color directly. -->
<style>
.drawer {
  --drawer-bg: var(--bg-color);
}
.light .drawer {
  --drawer-bg: var(--surface-color);
}
</style>
