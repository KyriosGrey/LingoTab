<script setup lang="ts">
import Drawer from '@/components/shared/Drawer.vue'

import IconButton from '@/components/shared/IconButton.vue'
import useWord from '@/composables/words/useWord'
import { t } from '@/i18n'

import { ref } from 'vue'
import Tabs from './Tabs.vue'

const { searchWord } = useWord()

const isDrawerOpen = ref(false)

const closeDrawer = () => (isDrawerOpen.value = false)

function handleShowDefinition(word: string) {
  searchWord(word)
  closeDrawer()
}
</script>

<template>
  <IconButton
    class="marked-words-btn"
    :title="t('nav.markedWords')"
    @click="isDrawerOpen = true"
  >
    <i-ic-round-bookmarks />
  </IconButton>

  <Drawer :title="t('nav.markedWords')" :is-open="isDrawerOpen" @close="closeDrawer">
    <Tabs @show-definition="handleShowDefinition" />
  </Drawer>
</template>
