<script setup lang="ts">
import { onMounted, ref } from 'vue'
import useOnline from '@/composables/useOnline'
import { decideShowRepetitionNow } from '@/composables/useRepetition'
import { decideNextIsSentence } from '@/composables/useSmartMix'

import useWord from '@/composables/words/useWord'
import * as storage from '@/utils/storage'
import useGoogleTranslate from '@/composables/useGoogleTranslate'
import { getBuiltInPackForLanguage } from '@/data/smartSentences/builtInPacks'

import LearnedAllWords from './LearnedAllWords.vue'
import Loading from './Loading.vue'
import NoWordList from './NoWordList.vue'
import OfflineState from './OfflineState.vue'

import SmartSentencePractice from './SmartSentencePractice.vue'
import Word from './Word.vue'
import WordFetchError from './WordFetchError.vue'

const PACK_KEY = 'lastSmartPack'
const MIX_SETTINGS_KEY = 'smartDailySettings'

const loading = ref(true)
const showSentence = ref(false)
const showRepetitionNow = ref(false)

const { isOnline } = useOnline()
const {
  hasLearnedAllWords,
  isSearchedWord,
  definitions,
  isLoading,
  wordsPoll,
  getWord,
  error,
  word,
  hasUserTranslation,
} = useWord()

async function onWordMarked() {
  // reuse existing flow: when a word is marked, fetch next word
  try {
    await getWord()
  }
  catch {
    /* ignore */
  }
}

async function decideAndPrepare() {
  loading.value = true
  try {
    // The target language is already known synchronously (read from localStorage), so
    // this starts loading its built-in pack chunk right away, in parallel with the
    // storage.get() below, instead of only starting once the storage round-trip finishes
    // and confirms the pack source really is "builtin". By the time it's actually needed
    // a few lines down, it has often already resolved - wasted only if the source turns
    // out not to be "builtin", in which case the (small, unused) chunk is simply ignored.
    const { targetLanguage } = useGoogleTranslate()
    const builtInPackPromise = getBuiltInPackForLanguage(targetLanguage.code)

    // read settings and pack together
    const s = await storage.get([MIX_SETTINGS_KEY, PACK_KEY, 'smartPackSource', 'smartUploadedPack'])
    const settings = s?.[MIX_SETTINGS_KEY] ?? {}

    let pack = null
    // Nothing saved yet = new user -> the built-in pack is on by default.
    // Turning it off stores an explicit null, which must stay off.
    const savedSource = s?.['smartPackSource']
    const source = savedSource === undefined ? 'builtin' : savedSource
    if (source === 'builtin') {
      pack = await builtInPackPromise
    } else if (source === 'uploaded') {
      pack = s?.['smartUploadedPack'] ?? null
    } else {
      pack = s?.[PACK_KEY] ?? null
    }

    const smartEnabledGlobally = !!settings.enabled
    const mixEnabled = settings.mixMode?.enabled ?? true
    const hasSentences = !!(pack && Array.isArray(pack.sentences) && pack.sentences.length > 0)

    // If mix is disabled -> preserve previous behavior:
    // when smart mode is enabled and there is a pack -> show sentences,
    // otherwise fallback to words.
    if (!mixEnabled) {
      if (smartEnabledGlobally && hasSentences) {
        showSentence.value = true
        showRepetitionNow.value = false
      }
      else {
        showSentence.value = false
        showRepetitionNow.value = decideShowRepetitionNow()
        try {
          await getWord()
        }
        catch {
          /* ignore */
        }
      }
      return
    }

    // If mix is enabled -> decide by cycle
    const wantSentence = await decideNextIsSentence()

    // only show sentence when smart mode and pack are available
    if (wantSentence && smartEnabledGlobally && hasSentences) {
      showSentence.value = true
      showRepetitionNow.value = false
    }
    else {
      showSentence.value = false
      // Only decide repetition on word flow
      showRepetitionNow.value = decideShowRepetitionNow()
      try {
        await getWord()
      }
      catch {
        /* ignore */
      }
    }
  }
  catch (err) {
    console.warn('[MixedPractice] decideAndPrepare error', err)
    showSentence.value = false
    showRepetitionNow.value = false
    try {
      await getWord()
    }
    catch {
      /* ignore */
    }
  }
  finally {
    loading.value = false
  }
}

onMounted(() => {
  decideAndPrepare()
})
</script>

<template>
  <div>
    <Loading v-if="loading" />

    <!-- If decided to show a sentence and pack is available — mount full SmartSentencePractice -->
    <!-- A word requested by the user (search, history, marked, inventory)
         always wins over the sentence screen -->
    <SmartSentencePractice v-else-if="showSentence && !isSearchedWord" />

    <!-- Otherwise show word flow (re-uses Word.vue and word composable) -->
    <template v-else>
      <NoWordList v-if="!wordsPoll.length && !isSearchedWord" />
      <!-- Same light-card rules as Content.vue -->
      <OfflineState v-else-if="!isOnline && !hasUserTranslation(word)" />
      <Loading v-else-if="isLoading" />
      <WordFetchError v-else-if="error && !hasUserTranslation(word)" :word="word" @retry="getWord" />
      <LearnedAllWords v-else-if="hasLearnedAllWords && !isSearchedWord" />
      <Word
        v-else
        :word="word"
        :definitions="error ? [] : (definitions || [])"
        :show-repetition="showRepetitionNow"
        @marked="onWordMarked"
      />
    </template>
  </div>
</template>
