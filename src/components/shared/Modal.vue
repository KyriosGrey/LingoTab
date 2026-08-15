<script setup lang="ts">
import { watch } from 'vue'

interface Props {
  modelValue: boolean
  title?: string
  subtitle?: string
  showClose?: boolean
  closeOnOverlay?: boolean
  maxWidth?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  subtitle: '',
  showClose: true,
  closeOnOverlay: true,
  maxWidth: '500px',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'close'): void
}>()

watch(
  () => props.modelValue,
  (value) => {
    if (!value) {
      emit('close')
    }
  },
)

function handleCloseOnOverlay() {
  if (props.closeOnOverlay) {
    handleClose()
  }
}

function handleClose() {
  emit('update:modelValue', false)
}
</script>

<template>
  <Teleport to="body">
    <transition name="fade">
      <div v-if="modelValue" class="overlay" @click.self="handleCloseOnOverlay">
        <div class="modal" :style="{ maxWidth }">
          <div class="modal__header">
            <div class="title-stack">
              <h3 v-if="title" class="title text-heading-18">
                {{ title }}
              </h3>
              <small v-if="subtitle" class="subtitle text-body-sm">{{ subtitle }}</small>
            </div>

            <button v-if="showClose" class="close-btn" @click="handleClose">
              <i-ic-round-close />
            </button>
          </div>

          <slot />
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(6px);
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px;
  border: 1px solid var(--overlay-strong);
  border-radius: 8px;
  background: var(--surface-color);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.1);
}
.modal__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}

.title-stack {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.title {
  margin: 0;
  color: var(--color);
}
.subtitle {
  display: inline-block;
  color: var(--text-secondary);
}

.close-btn {
  display: inline-flex;
  flex-shrink: 0;
  padding: 6px;
  border: none;
  font-size: 24px;
  border-radius: 4px;
  background-color: var(--overlay-weak);
  color: var(--color);
  transition: background-color 0.13s ease-in-out;
}
.close-btn:hover {
  background-color: var(--overlay-strong);
}
</style>
