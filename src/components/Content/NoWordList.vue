<script setup lang="ts">
import PrimaryButton from '@/components/shared/PrimaryButton.vue'
import useBackground from '@/composables/useBackground'
import { t } from '@/i18n'

import { openOptionsPage } from '@/utils/browser'

import { computed } from 'vue'

const { shouldModifyUI } = useBackground()

const backgroundClass = computed(() => ({
  'no-word-list--boxed': shouldModifyUI.value,
}))
</script>

<template>
  <div class="no-word-list" :class="backgroundClass">
    <span class="no-word-list__emoji">😐</span>
    <h1 class="no-word-list__title text-heading-18">
      {{ t('empty.noLists.title') }}
    </h1>
    <p class="no-word-list__subtitle text-body-sm">
      {{ t('empty.noLists.description') }}
    </p>
    <PrimaryButton class="no-word-list__action" @click="openOptionsPage">
      ⚙️ {{ t('common.settings') }}
    </PrimaryButton>
  </div>
</template>

<style scoped>
.no-word-list {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 0 15px;
  text-align: center;
}

.no-word-list--boxed {
  background-color: hsla(var(--bg-color-raw), 0.9);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  padding: 40px 5px;
  max-width: 650px;
}

.no-word-list__emoji {
  font-size: 3rem;
}

.no-word-list__title {
  margin: 20px 0 10px;
  color: var(--color);
}

.no-word-list__subtitle {
  margin: 0;
  color: var(--text-secondary);
}

.no-word-list__action {
  margin-top: 20px;
}
</style>
