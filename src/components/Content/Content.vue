<script setup lang="ts">
import { onMounted, ref } from 'vue'

import useOnline from '@/composables/useOnline'
import useWord from '@/composables/words/useWord'
import * as storage from '@/utils/storage'

import LearnedAllWords from './LearnedAllWords.vue'
import Loading from './Loading.vue'
import MixedPractice from './MixedPractice.vue'
import NoWordList from './NoWordList.vue'
import OfflineState from './OfflineState.vue'
import Word from './Word.vue'
import WordFetchError from './WordFetchError.vue'

const {
  hasLearnedAllWords,
  definitions,
  isLoading,
  wordsPoll,
  getWord,
  error,
  word,
  searchWord,
} = useWord()

const { isOnline } = useOnline()

// smart mode flag (loaded from settings). Default false.
const smartEnabled = ref(false)

onMounted(async () => {
  try {
    // read smartDailySettings.enabled; do not block UI
    const s = await storage.get(['smartDailySettings'])
    smartEnabled.value = !!(s && s.smartDailySettings && s.smartDailySettings.enabled)
  }
  catch (err) {
    console.warn('Failed to read smartDailySettings', err)
    smartEnabled.value = false
  }

  // Check for deep-link word parameter
  const urlParams = new URLSearchParams(window.location.search)
  const wordParam = urlParams.get('word')

  // only fetch word when smart mode is disabled
  if (!smartEnabled.value) {
    if (wordParam) {
      // Deep-link: search for the specific word
      searchWord(wordParam)
    }
    else {
      // Normal flow: get random word
      getWord()
    }
  }
})
</script>

<template>
  <!-- If smart mode enabled show MixedPractice -->
  <MixedPractice v-if="smartEnabled" />

  <!-- Otherwise keep existing word flow -->
  <template v-else>
    <NoWordList v-if="!wordsPoll.length" />
    <OfflineState v-else-if="!isOnline" />
    <Loading v-else-if="isLoading" />
    <WordFetchError v-else-if="error" :word="word" @retry="getWord" />
    <LearnedAllWords v-else-if="hasLearnedAllWords" />
    <Word
      v-else
      :word="word"
      :definitions="definitions || []"
      @marked="getWord"
    />
  </template>
</template>
