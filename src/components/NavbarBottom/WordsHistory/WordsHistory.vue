<script setup lang="ts">
import IconButton from '@/components/shared/IconButton.vue'

import Modal from '@/components/shared/Modal.vue'
import WordsList from '@/components/shared/WordList'

import useWord from '@/composables/words/useWord'
import useWordsHistory from '@/composables/words/useWordsHistory'
import { t } from '@/i18n'
import { ref } from 'vue'

const { wordsHistory } = useWordsHistory()
const { searchWord } = useWord()

const isModalOpen = ref(false)

function handleShowDefinition(word: string) {
  searchWord(word)
  isModalOpen.value = false
}
</script>

<template>
  <IconButton class="open-btn" :title="t('nav.history')" @click="isModalOpen = true">
    <i-ic-round-history />
  </IconButton>

  <Modal
    v-model="isModalOpen"
    :title="t('nav.history')"
    :subtitle="t('nav.historySubtitle')"
    max-width="400px"
  >
    <WordsList
      :list="wordsHistory"
      no-filters
      pointer
      dense
      @row-click="handleShowDefinition"
    />
  </Modal>
</template>
