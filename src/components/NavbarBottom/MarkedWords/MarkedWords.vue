<script setup lang="ts">
import Drawer from '@/components/shared/Drawer.vue'

import IconButton from '@/components/shared/IconButton.vue'
import PrimaryButton from '@/components/shared/PrimaryButton.vue'
import useEditWordModal from '@/composables/words/useEditWordModal'
import useWord from '@/composables/words/useWord'
import { t } from '@/i18n'

import { ref } from 'vue'
import Tabs from './Tabs.vue'

const { searchWord } = useWord()
const { openAddWordModal } = useEditWordModal()

const isDrawerOpen = ref(false)

// Bumped after a word is added: re-mounts the tabs so both lists re-read storage
// (the word may also have left Learned).
const listsKey = ref(0)

const closeDrawer = () => (isDrawerOpen.value = false)

function handleShowDefinition(word: string) {
  searchWord(word)
  closeDrawer()
}

function handleAddWord() {
  openAddWordModal(() => listsKey.value++)
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
    <Tabs :key="listsKey" @show-definition="handleShowDefinition" />

    <PrimaryButton class="add-word-btn" @click="handleAddWord">
      <i-ic-round-add /> {{ t('editWord.addTitle') }}
    </PrimaryButton>
  </Drawer>
</template>

<style scoped>
/* Pinned to the bottom of the drawer; the lists above scroll on their own. */
.add-word-btn {
  justify-content: center;
  width: 100%;
  margin-top: auto;
  flex-shrink: 0;
}
.add-word-btn :deep(svg) {
  width: 18px;
  height: 18px;
}
</style>
