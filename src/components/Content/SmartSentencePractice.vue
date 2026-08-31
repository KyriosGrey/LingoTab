<script setup lang="ts">
import type { HintData, HintOption } from '@/utils/packValidator'
import PrimaryButton from '@/components/shared/PrimaryButton.vue'
import useGoogleTranslate from '@/composables/useGoogleTranslate'
import { getBuiltInPackForLanguage } from '@/data/smartSentences/builtInPacks'
import { t } from '@/i18n'
import { validateAndNormalizePack } from '@/utils/packValidator'
import * as storage from '@/utils/storage'
import { computed, onMounted, ref } from 'vue'
import TenseCardsPanel from './TenseCardsPanel.vue'

const PACK_KEY = 'lastSmartPack'
const STATE_KEY = 'smartDailyPracticeState'
const SETTINGS_KEY = 'smartDailySettings' // <-- load showHints from here

const loading = ref(true)
const pack = ref<any | null>(null)
const index = ref<number>(-1)
const input = ref('')

// New flag: controls whether the top header shows the ORIGINAL English sentence
const headerShowsOriginal = ref(false)

const showHints = ref(true) // controls whether hint is shown

const answerInput = ref<HTMLTextAreaElement | null>(null)
const interactiveNextBtn = ref<HTMLButtonElement | null>(null)

// Interactive hints state
const hintAttempts = ref(0)
const clickedOptions = ref<Set<string>>(new Set())

const current = computed(() => {
  if (!pack.value || !Array.isArray(pack.value.sentences) || index.value < 0)
    return null
  return pack.value.sentences[index.value] ?? null
})

const indexDisplay = computed(() => (index.value >= 0 ? index.value + 1 : 0))

const hintData = computed<HintData | null>(() => {
  if (showHints.value && current.value?.hint && typeof current.value.hint === 'object') {
    return current.value.hint as HintData
  }
  return null
})

const hintResolved = computed(() => {
  if (!hintData.value)
    return false
  const options = hintData.value.options || []
  const hasClickedCorrect = options.some(o => o.isCorrect && clickedOptions.value.has(o.text))
  return hasClickedCorrect || hintAttempts.value >= 2
})

function onOptionClick(option: HintOption) {
  if (hintResolved.value)
    return
  if (clickedOptions.value.has(option.text))
    return

  clickedOptions.value = new Set([...clickedOptions.value, option.text])

  if (option.isCorrect) {
    headerShowsOriginal.value = true
    setTimeout(() => interactiveNextBtn.value?.focus(), 50)
  }
  else {
    hintAttempts.value++
    if (hintAttempts.value >= 2) {
      headerShowsOriginal.value = true
      setTimeout(() => interactiveNextBtn.value?.focus(), 50)
    }
  }
}

async function loadPackAndState() {
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

    // include settings so we can read showHints
    const s = await storage.get([PACK_KEY, STATE_KEY, SETTINGS_KEY, 'smartPackSource', 'smartUploadedPack'])

    // Nothing saved yet = new user -> the built-in pack is on by default.
    // Turning it off stores an explicit null, which must stay off.
    const savedSource = s?.smartPackSource
    const source = savedSource === undefined ? 'builtin' : savedSource
    if (source === 'builtin') {
      // Re-shuffle hint options on every load: the built-in data always lists
      // the correct option first, so it must pass through the same
      // normalizer used for AI/uploaded packs to randomize option order.
      pack.value = validateAndNormalizePack(await builtInPackPromise)
    }
    else if (source === 'uploaded') {
      pack.value = s?.smartUploadedPack ?? null
    }
    else {
      pack.value = s?.[PACK_KEY] ?? null
    }

    const st = s?.[STATE_KEY] ?? { lastIndex: -1 }
    const last = typeof st.lastIndex === 'number' ? st.lastIndex : -1

    // load showHints from saved settings (nothing saved yet = on by default)
    const settings = s?.[SETTINGS_KEY] ?? {}
    showHints.value = settings.showHints ?? true

    if (pack.value && Array.isArray(pack.value.sentences) && pack.value.sentences.length > 0) {
      const n = pack.value.sentences.length
      const next = (last + 1) % n
      index.value = next
      // persist new lastIndex
      await storage.set({ [STATE_KEY]: { lastIndex: next } })
    }
    else {
      index.value = -1
    }
  }
  catch (err) {
    console.warn('Failed to load smart pack/state', err)
    pack.value = null
    index.value = -1
  }
  finally {
    loading.value = false
    input.value = ''
    headerShowsOriginal.value = false
    hintAttempts.value = 0
    clickedOptions.value = new Set()
    // focus input when ready
    setTimeout(() => answerInput.value?.focus(), 0)
  }
}

onMounted(() => {
  loadPackAndState()
})

/**
 * Handle Enter key in textarea:
 * - If Shift+Enter -> allow newline (do nothing)
 * - Otherwise:
 *   If original is not shown in header -> reveal original in header
 *   If original already shown -> proceed to next sentence
 */
function onEnterKey(e: KeyboardEvent) {
  if ((e as any).shiftKey) {
    // allow newline
    return
  }
  e.preventDefault()

  if (!headerShowsOriginal.value) {
    // First action: reveal original in header
    headerShowsOriginal.value = true
  }
  else {
    // Second action: next sentence
    next().then(() => {
      setTimeout(() => answerInput.value?.focus(), 0)
    })
  }
}

/** Handler for the dual-state right button (Check / Next) */
function onNextClick() {
  if (!headerShowsOriginal.value) {
    headerShowsOriginal.value = true
    setTimeout(() => answerInput.value?.focus(), 0)
  }
  else {
    next().then(() => {
      setTimeout(() => answerInput.value?.focus(), 0)
    })
  }
}

/** Skip/Next: move to next sentence and reset states */
async function next() {
  // FIXED: use pack.value.sentences
  if (!pack.value || !Array.isArray(pack.value.sentences) || pack.value.sentences.length === 0) {
    return
  }
  const n = pack.value.sentences.length
  const nextIndex = (index.value + 1) % n
  index.value = nextIndex
  input.value = ''
  headerShowsOriginal.value = false
  hintAttempts.value = 0
  clickedOptions.value = new Set()
  // persist lastIndex
  await storage.set({ [STATE_KEY]: { lastIndex: nextIndex } })
}

/**
 * Open options page of the extension.
 * Try chrome.runtime.openOptionsPage() first, fallback to window.open if not available.
 */
function openSettings() {
  try {
    const runtime = (globalThis as any).chrome?.runtime
    if (runtime && typeof runtime.openOptionsPage === 'function') {
      runtime.openOptionsPage()
      return
    }
  }
  catch {
    // ignore
  }
  // Fallback: open options page url relative to extension (best-effort)
  try {
    window.open('/options/index.html', '_blank')
  }
  catch (err) {
    console.warn('Could not open options page', err)
  }
}
</script>

<template>
  <div class="content">
    <!-- Если нет пака — единый блок с CTA -->
    <div v-if="!pack || !pack.sentences || pack.sentences.length === 0" class="empty-card">
      <p class="text-body">
        {{ t('empty.noPack') }}
      </p>
      <PrimaryButton @click="openSettings">
        ⚙️ {{ t('common.settings') }}
      </PrimaryButton>
    </div>

    <!-- Если пак есть — две визуальные секции -->
    <div v-else class="smart-practice">
      <div class="exercise-section">
        <!-- Верхний блок: перевод или оригинал в зависимости от состояния -->
        <div class="translated-sentence">
          <div class="eyebrow text-heading-label">
            {{ t('practice.translatePrompt') }}
          </div>
          <div class="sentence text-sentence" aria-live="polite">
            {{ headerShowsOriginal ? current?.text : current?.translation }}
          </div>
        </div>

        <!-- hint: показываем только если включено в настройках и hint является строкой -->
        <div v-if="showHints && current?.hint && typeof current.hint === 'string'" class="hint text-body">
          {{ current.hint }}
        </div>

        <!-- Если интерактивный хинт: показываем варианты (полностью заменяет нижний блок ввода) -->
        <div v-if="hintData" class="interactive-hint-block">
          <div class="hint-sentence text-body">
            {{ hintData.sentenceWithBlank }}
          </div>
          <div class="hint-options">
            <div
              v-for="(opt, idx) in hintData.options"
              :key="idx"
              class="hint-option"
              :class="{
                correct: clickedOptions.has(opt.text) && opt.isCorrect || (hintResolved && opt.isCorrect),
                incorrect: clickedOptions.has(opt.text) && !opt.isCorrect,
                disabled: hintResolved,
              }"
              @click="onOptionClick(opt)"
            >
              <div class="opt-text text-body">
                <span class="opt-label">{{ ['1', '2', '3', '4'][idx] || '•' }}.</span>
                <span>{{ opt.text }}</span>
                <span v-if="clickedOptions.has(opt.text) || (hintResolved && opt.isCorrect)" class="opt-icon">
                  {{ (clickedOptions.has(opt.text) && opt.isCorrect) || (hintResolved && opt.isCorrect) ? '✓' : '✕' }}
                </span>
              </div>
              <div v-if="clickedOptions.has(opt.text) || (hintResolved && opt.isCorrect)" class="opt-explanation text-body-sm">
                {{ opt.explanation }}
              </div>
            </div>
          </div>

          <!-- Counter and the "Next" button always share one row, so the counter's
               position doesn't shift when the button appears once the hint resolves. -->
          <div class="interactive-footer">
            <div class="counter text-body-sm">
              {{ indexDisplay }} / {{ pack.sentences.length }}
            </div>
            <button v-if="hintResolved" ref="interactiveNextBtn" class="check-btn" @click="onNextClick">
              {{ t('action.next') }} →
            </button>
          </div>
        </div>

        <!-- Нижний блок: ввод/кнопки (классический режим) -->
        <template v-else>
          <div class="input-container">
            <textarea
              ref="answerInput"
              v-model="input"
              class="answer-input text-body"
              :placeholder="t('practice.inputPlaceholder')"
              :aria-label="t('practice.inputLabel')"
              @keydown.enter="onEnterKey"
            />
            <div class="input-footer">
              <div v-if="current?.tense" class="tag text-body-sm">
                {{ current.tense }}
              </div>
              <button class="check-btn text-body-sm" @click="onNextClick">
                {{ headerShowsOriginal ? `${t('action.next')} →` : t('practice.check') }}
              </button>
            </div>
          </div>

          <div class="counter text-body-sm">
            {{ indexDisplay }} / {{ pack.sentences.length }}
          </div>
        </template>
      </div>

      <div class="section-divider" />

      <!-- Tense Cards Panel: always shown when pack exists -->
      <TenseCardsPanel :current-tense="current?.tense" />
    </div>
  </div>
</template>

<style scoped>
.content {
  margin: 100px auto 50px;
  padding: 0 15px;
  max-width: 800px;
}

.empty-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding: 20px;
  border-radius: 10px;
  background-color: var(--surface-color);
  border: 1px solid var(--overlay-strong);
}
.empty-card .text-body {
  color: var(--text-secondary);
}

.exercise-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.translated-sentence {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.eyebrow {
  color: var(--text-tertiary);
  text-transform: uppercase;
}

.sentence {
  color: var(--color);
  word-break: break-word;
}

.hint {
  color: var(--text-secondary);
}

/* Interactive hint styles — token pass only, layout/mechanics unchanged
   (this variant isn't covered by the Figma redesign) */
.interactive-hint-block {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.hint-sentence {
  color: var(--color);
}

.hint-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.hint-option {
  padding: 12px 16px;
  border-radius: 8px;
  background: var(--surface-color);
  border: 1px solid var(--border-color);
  cursor: pointer;
  transition: border-color 0.2s ease;
}

.hint-option:hover:not(.disabled) {
  border-color: var(--overlay-strong);
}

.hint-option.disabled {
  cursor: default;
}

.hint-option .opt-text {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--color);
}

.hint-option .opt-label {
  color: var(--text-tertiary);
}

.hint-option .opt-icon {
  margin-left: auto;
  font-size: 1.1rem;
}

/* Correct / incorrect states */
.hint-option.correct {
  background: hsla(150, 42.6%, 50.8%, 0.1);
  border-color: var(--success-color);
}
.hint-option.correct .opt-text,
.hint-option.correct .opt-explanation {
  color: var(--success-color);
}

.hint-option.incorrect {
  background: hsla(0, 78.7%, 63.1%, 0.1);
  border-color: var(--error-color);
}
.hint-option.incorrect .opt-text,
.hint-option.incorrect .opt-explanation {
  color: var(--error-color);
}

.opt-explanation {
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid var(--border-color);
  color: var(--text-secondary);
}
.interactive-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Input container (Figma "input-container"). The textarea fills the
   container edge-to-edge (padding lives on the textarea itself, not the
   container) so its border box — and therefore its native resize handle —
   sits flush in the container's true bottom-right corner, the same way a
   plain <textarea> would. Padding on the CONTAINER would inset the
   textarea's whole box, pushing the handle away from the real corner. The
   footer is absolutely positioned over the bottom of the textarea (not
   stacked below it in a flex column) so the textarea keeps driving the
   box's height — that's what lets the resize handle keep working at all. */
.input-container {
  position: relative;
  border-radius: 8px;
  background: var(--surface-color);
  border: 1px solid var(--border-color);
}

.answer-input {
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-height: 148px;
  resize: vertical;
  border: none;
  outline: none;
  background: transparent;
  color: var(--color);
  font-family: inherit;
  padding: 16px;
  padding-bottom: 60px; /* keeps typed text clear of the footer row */
}
.answer-input::placeholder {
  color: var(--text-tertiary);
  opacity: 0.8;
}

/* right stops just short of the textarea's own corner so the browser's
   native resize handle (drawn 1-2px inset from the true corner) stays
   exposed and grabbable instead of being covered by the Check button */
.input-footer {
  position: absolute;
  left: 16px;
  right: 30px;
  bottom: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.tag {
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid var(--border-color);
  color: var(--text-tertiary);
  white-space: nowrap;
}

/* Figma "check-button": flat 80%-opacity accent fill in BOTH themes — unlike
   PrimaryButton, which is asymmetric (solid accent in light theme). Border is
   a solid (100%) accent, confirmed against the updated Figma reference (node
   104:546) — not the 80%-opacity var(--accent-color-hover) used elsewhere. */
.check-btn {
  margin-left: auto;
  padding: 8px 16px;
  border: 1px solid var(--accent-color);
  border-radius: 4px;
  background: var(--accent-color-hover);
  color: #fff;
  white-space: nowrap;
  transition: filter 0.15s ease-in-out;
}
.check-btn:hover {
  filter: brightness(1.1);
}

.counter {
  color: var(--text-tertiary);
}

.section-divider {
  border: none;
  border-top: 1px solid var(--border-color);
  margin: 20px 0 0;
}

@media all and (max-width: 450px) {
  .content { margin: 60px 12px 30px; }
  .sentence { font-size: 1.8rem; line-height: 1.2; }
}
</style>
