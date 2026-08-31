<script setup lang="ts">
import IconButton from '@/components/shared/IconButton.vue'
import useTheme from '@/composables/useTheme'
import { t } from '@/i18n'

const { theme, toggleTheme } = useTheme()
</script>

<template>
  <IconButton :title="t('theme.switch')" @click="toggleTheme">
    <i-ic-round-dark-mode v-if="theme === 'dark'" />
    <i-ic-round-light-mode v-else />
  </IconButton>
</template>
