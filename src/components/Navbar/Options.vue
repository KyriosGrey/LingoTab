<script setup lang="ts">
import IconButton from '@/components/shared/IconButton.vue'
import { t } from '@/i18n'
import { openOptionsPage } from '@/utils/browser'
</script>

<template>
  <IconButton :title="t('nav.options')" @click="openOptionsPage">
    <i-ic-round-settings />
  </IconButton>
</template>
