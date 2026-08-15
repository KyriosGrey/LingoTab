<script lang="ts">
import { selectedShortcut } from '@/composables/shortcuts/useShortcutContextMenu'

import useShortcuts from '@/composables/shortcuts/useShortcuts'
import { computed, defineComponent, onMounted, ref } from 'vue'

const SHORTCUT_SCHEMA = {
  name: '',
  url: '',
}

export default defineComponent({
  name: 'AddShortcutForm',

  props: {
    shortcut: {
      type: Object,
      default: null,
    },
  },

  emits: ['cancel', 'submit'],

  setup(props, { emit }) {
    const { addShortcut, editShortcut, shortcuts } = useShortcuts()

    const urlInputRef = ref<HTMLInputElement | null>(null)
    onMounted(() => urlInputRef.value?.focus())

    const formModel = ref<typeof SHORTCUT_SCHEMA>(
      selectedShortcut.value
        ? {
            name: selectedShortcut.value.name,
            url: selectedShortcut.value.url,
          }
        : { ...SHORTCUT_SCHEMA },
    )

    const isNameDuplicated = computed(() => {
      const shortcut = shortcuts.value.find(
        ({ name }) => name === formModel.value.name,
      )

      if (!shortcut) {
        return false
      }

      if (selectedShortcut.value) {
        return !(selectedShortcut.value.name === shortcut.name)
      }

      return true
    })

    const isFormValid = computed(() =>
      Boolean(
        formModel.value.name && formModel.value.url && !isNameDuplicated.value,
      ),
    )

    function handleCancel() {
      emit('cancel')
      clearForm()
    }

    function handleSubmit() {
      if (isFormValid.value) {
        const { name, url } = formModel.value

        if (selectedShortcut.value) {
          editShortcut(selectedShortcut.value.name, name, url)
        }
        else {
          addShortcut(name, url)
        }

        emit('submit')
        clearForm()
      }
    }

    function clearForm() {
      formModel.value = { ...SHORTCUT_SCHEMA }
      selectedShortcut.value = null
    }

    return {
      formModel,
      isNameDuplicated,
      urlInputRef,
      isFormValid,
      handleSubmit,
      handleCancel,
    }
  },
})
</script>

<template>
  <form class="form" @submit.prevent="handleSubmit">
    <label class="form__label text-body-sm">
      Name
      <input
        ref="urlInputRef"
        v-model="formModel.name"
        class="form__input text-body"
        :class="{ 'form__input--error': isNameDuplicated }"
      >
      <small v-if="isNameDuplicated" class="form__error text-body-sm-italic">
        Name is duplicated.
      </small>
    </label>

    <label class="form__label text-body-sm">
      URL
      <input v-model="formModel.url" class="form__input text-body">
    </label>

    <div class="form__footer">
      <button type="button" class="form__cancel-btn text-body-sm" @click="handleCancel">
        Cancel
      </button>
      <button type="submit" class="form__submit-btn text-body-sm" :disabled="!isFormValid">
        Done
      </button>
    </div>
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.form__label {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
  color: var(--text-secondary);
}
.form__input {
  background-color: var(--bg-color);
  color: var(--color);
  border: 1px solid var(--overlay-weak);
  outline: none;
  height: 34px;
  border-radius: 6px;
  padding: 8px 10px;
  transition: border-color 0.15s ease-in-out;
}
.form__input:focus {
  border-color: var(--accent-color-hover);
}
.form__input--error,
.form__input--error:focus {
  border-color: var(--error-color);
}

.form__error {
  position: absolute;
  bottom: -18px;
  color: var(--error-color);
}

.form__footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
.form__footer button {
  border-radius: 4px;
  font-family: inherit;
}

.form__cancel-btn {
  padding: 8px 12px;
  border: 1px solid var(--overlay-strong);
  background-color: var(--overlay-weak);
  color: var(--color);
}
.form__cancel-btn:hover {
  background-color: var(--overlay-strong);
}

.form__submit-btn {
  padding: 8px 16px;
  height: 34px;
  border: 1px solid var(--overlay-strong);
  background-color: var(--accent-color-hover);
  color: #fff;
  transition: filter 0.15s ease-in-out;
}
.form__submit-btn:hover:not(:disabled) {
  filter: brightness(1.1);
}
.form__submit-btn:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
