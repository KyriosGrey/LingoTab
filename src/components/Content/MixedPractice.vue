<template>
  <div>
    <template v-if="loading">
      <!-- while deciding, reuse the existing Loading behavior (simple placeholder) -->
      <div class="content">
        <div class="meaning boxed">Loading…</div>
      </div>
    </template>

    <!-- If decided to show a sentence and pack is available — mount full SmartSentencePractice -->
    <SmartSentencePractice v-else-if="showSentence" />

    <!-- Otherwise show word flow (re-uses Word.vue and word composable) -->
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
        @marked="onWordMarked"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as storage from '@/utils/storage'
import { decideNextIsSentence } from '@/composables/useSmartMix'

import useOnline from '@/composables/useOnline'
import useWord from '@/composables/words/useWord'

import LearnedAllWords from './LearnedAllWords.vue'
import Loading from './Loading.vue'
import NoWordList from './NoWordList.vue'
import OfflineState from './OfflineState.vue'

import Word from './Word.vue'
import WordFetchError from './WordFetchError.vue'
import SmartSentencePractice from './SmartSentencePractice.vue'

const PACK_KEY = 'lastSmartPack'
const MIX_SETTINGS_KEY = 'smartDailySettings'

const loading = ref(true)
const showSentence = ref(false)

const { isOnline } = useOnline()
const {
  hasLearnedAllWords,
  definitions,
  isLoading,
  wordsPoll,
  getWord,
  error,
  word,
} = useWord()

async function onWordMarked() {
  // reuse existing flow: when a word is marked, fetch next word
  try { await getWord() } catch (e) { /* ignore */ }
}

async function decideAndPrepare() {
  loading.value = true
  try {
    // read settings and pack together
    const s = await storage.get([MIX_SETTINGS_KEY, PACK_KEY])
    const settings = s?.[MIX_SETTINGS_KEY] ?? {}
    const pack = s?.[PACK_KEY] ?? null

    const smartEnabledGlobally = !!settings.enabled
    const mixEnabled = !!settings.mixMode?.enabled
    const hasSentences = !!(pack && Array.isArray(pack.sentences) && pack.sentences.length > 0)

    // If mix is disabled -> preserve previous behavior:
    // when smart mode is enabled and there is a pack -> show sentences,
    // otherwise fallback to words.
    if (!mixEnabled) {
      if (smartEnabledGlobally && hasSentences) {
        showSentence.value = true
      } else {
        showSentence.value = false
        try { await getWord() } catch (e) { /* ignore */ }
      }
      return
    }

    // If mix is enabled -> decide by cycle
    const wantSentence = await decideNextIsSentence()

    // only show sentence when smart mode and pack are available
    if (wantSentence && smartEnabledGlobally && hasSentences) {
      showSentence.value = true
    } else {
      showSentence.value = false
      try { await getWord() } catch (e) { /* ignore */ }
    }
  } catch (err) {
    console.warn('[MixedPractice] decideAndPrepare error', err)
    showSentence.value = false
    try { await getWord() } catch (e) { /* ignore */ }
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  decideAndPrepare()
})
</script>

<style scoped>
/* Reuse existing component spacing to match Word/SmartSentencePractice layout.
   No new visual styles here — child components supply full UI/visuals. */

.content { margin: 100px auto 50px; padding: 0 15px; max-width: 800px; }

.boxed {
  padding: 15px 20px;
  border-radius: 10px;
  background-color: hsla(var(--bg-color-raw), 0.9);
  backdrop-filter: blur(5px);
}
</style>