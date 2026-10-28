<script setup lang="ts">
import useOnline from '@/composables/useOnline'
import useUserExamples from '@/composables/words/useUserExamples'
import useWord from '@/composables/words/useWord'
import { decideShowRepetitionNow } from '@/composables/useRepetition'

import LearnedAllWords from './LearnedAllWords.vue'
import Loading from './Loading.vue'
import NoWordList from './NoWordList.vue'
import OfflineState from './OfflineState.vue'

import Word from './Word.vue'
import WordFetchError from './WordFetchError.vue'
import MixedPractice from './MixedPractice.vue'

import * as storage from '@/utils/storage'
import { ref, onMounted } from 'vue'

const {
  hasLearnedAllWords,
  definitions,
  isLoading,
  examples,
  wordsPoll,
  getWord,
  error,
  word,
  hasUserTranslation,
} = useWord()
const { hasUserExamples } = useUserExamples()

const { isOnline } = useOnline()

// smart mode flag (loaded from settings). Default false.
const smartEnabled = ref(false)

// repetition flag for the current word view (variant A: in-memory per view)
const showRepetitionNow = ref(false)

async function getWordWithRepetition() {
  // Decide repetition ONLY for word flow
  showRepetitionNow.value = decideShowRepetitionNow()
  await getWord()
}

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

  // only fetch word when smart mode is disabled
  if (!smartEnabled.value) {
    getWordWithRepetition()
  }
})
</script>

<template>
  <!-- If smart mode enabled show MixedPractice -->
  <MixedPractice v-if="smartEnabled" />

  <!-- Otherwise keep existing word flow -->
  <template v-else>
    <NoWordList v-if="!wordsPoll.length" />
    <!-- A word with the user's own translation still shows - as a light card
         without dictionary data - when offline or when the dictionary fails. -->
    <OfflineState v-else-if="!isOnline && !hasUserTranslation(word)" />
    <Loading v-else-if="isLoading" />

    <WordFetchError
      v-else-if="error && !hasUserTranslation(word) && !examples.length && !hasUserExamples(word)"
      :word="word"
      @retry="getWordWithRepetition"
    />

    <LearnedAllWords v-else-if="hasLearnedAllWords" />

    <Word
      v-else
      :word="word"
      :definitions="error ? [] : (definitions || [])"
      :show-repetition="showRepetitionNow"
      @marked="getWordWithRepetition"
    />
  </template>
</template>