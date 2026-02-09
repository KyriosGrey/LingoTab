<template>
  <div class="content">
    <!-- Если нет пака — единый блок с CTA -->
    <div v-if="!pack || !pack.sentences || pack.sentences.length === 0" class="meanings" style="margin-top:8px;">
      <div class="meaning boxed">
        <p>No Smart Sentences pack found. Generate a pack in Settings to start practicing.</p>
        <div style="margin-top:12px;">
          <button class="spoiler-btn" @click="openSettings">⚙️ Settings</button>
        </div>
      </div>
    </div>

    <!-- Если пак есть — две визуальные секции -->
    <div v-else class="smart-practice">
      <!-- Верхний блок: перевод или оригинал в зависимости от состояния -->
      <div class="top-block boxed">
        <div class="muted">Translate to English:</div>
        <div class="translation-box" aria-live="polite">
          {{ headerShowsOriginal ? current?.text : current?.translation }}
        </div>

        <!-- hint: показываем только если включено в настройках и hint присутствует -->
        <div v-if="showHints && current?.hint" class="hint muted" style="margin-top:8px;">
          {{ current.hint }}
        </div>
      </div>

      <!-- Нижний блок: ввод/кнопки/счётчик -->
      <div class="bottom-block meaning boxed" style="margin-top:12px;">
        <div style="display:flex; flex-direction:column; gap:10px;">
          <!-- input-wrap: контейнер с относительным позиционированием,
               внутри textarea (в потоке) и кнопки, позиционированные внизу -->
          <div class="input-wrap">
            <textarea
              v-model="input"
              ref="answerInput"
              @keydown.enter="onEnterKey"
              class="answer-input"
              placeholder="Type the English sentence here"
              aria-label="Enter English sentence"
            />
            <div class="input-buttons">
              <div class="buttons-left">
                <!-- Non-interactive badge showing tense instead of clickable "Show original" -->
                <div class="tense-badge" aria-hidden="true">{{ current?.tense ?? '—' }}</div>
              </div>
              <div class="buttons-right">
                <!-- Dual-state button: "Check" when original is hidden, "Next →" when shown
                     Keep the visual style of the strong NEXT button (class "btn next"). -->
                <button class="btn next" @click="onNextClick">{{ headerShowsOriginal ? 'Next →' : 'Check' }}</button>
              </div>
            </div>
          </div>

          <div class="counter" style="margin-top:12px; color: hsla(var(--color-raw),0.6); font-size:0.9rem;">
            Sentence {{ indexDisplay }} of {{ pack.sentences.length }}
          </div>
        </div>
      </div>

      <!-- Tense Cards Panel: always shown when pack exists -->
      <TenseCardsPanel :currentTense="current?.tense" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import * as storage from '@/utils/storage'
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

const showHints = ref(false) // controls whether hint is shown

const answerInput = ref<HTMLTextAreaElement | null>(null)

const current = computed(() => {
  if (!pack.value || !Array.isArray(pack.value.sentences) || index.value < 0) return null
  return pack.value.sentences[index.value] ?? null
})

const indexDisplay = computed(() => (index.value >= 0 ? index.value + 1 : 0))

async function loadPackAndState() {
  loading.value = true
  try {
    // include settings so we can read showHints
    const s = await storage.get([PACK_KEY, STATE_KEY, SETTINGS_KEY])
    pack.value = s?.[PACK_KEY] ?? null
    const st = s?.[STATE_KEY] ?? { lastIndex: -1 }
    const last = typeof st.lastIndex === 'number' ? st.lastIndex : -1

    // load showHints from saved settings (safe fallback to false)
    const settings = s?.[SETTINGS_KEY] ?? {}
    showHints.value = !!settings.showHints

    if (pack.value && Array.isArray(pack.value.sentences) && pack.value.sentences.length > 0) {
      const n = pack.value.sentences.length
      const next = (last + 1) % n
      index.value = next
      // persist new lastIndex
      await storage.set({ [STATE_KEY]: { lastIndex: next } })
    } else {
      index.value = -1
    }
  } catch (err) {
    console.warn('Failed to load smart pack/state', err)
    pack.value = null
    index.value = -1
  } finally {
    loading.value = false
    input.value = ''
    headerShowsOriginal.value = false
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
 *   * If original is not shown in header -> reveal original in header
 *   * If original already shown -> proceed to next sentence
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
  } else {
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
  } else {
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
  } catch (err) {
    // ignore
  }
  // Fallback: open options page url relative to extension (best-effort)
  try {
    window.open('/options/index.html', '_blank')
  } catch (err) {
    console.warn('Could not open options page', err)
  }
}
</script>

<style scoped>
.content {
  margin: 100px auto 50px;
  padding: 0 15px;
  max-width: 800px;
}

/* reuse boxed style used in Word.vue for visual parity */
.boxed {
  padding: 15px 20px;
  border-radius: 10px;
  background-color: hsla(var(--bg-color-raw), 0.9);
  backdrop-filter: blur(5px);
}

/* Top block (translation) */
.top-block {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* translation styling — 2.5rem as requested */
.translation-box {
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 1;
  background: rgba(0,0,0,0.03);
  padding: 12px;
  border-radius: 6px;
  word-break: break-word;
  text-transform: none;
}

/* Bottom block uses existing 'meaning'/'boxed' visual */
.meaning {}

/* hint style (reused muted class for color) */
.hint { font-size: 0.95rem; }

/* Define local CSS variables defaults for input appearance.
   These are used by .answer-input below. */
.smart-practice {
  --ssp-input-bg: hsla(var(--color-raw), 0.08);
  --ssp-input-bg-focus: hsla(var(--color-raw), 0.12);
  --ssp-input-border: hsla(var(--color-raw), 0.1);
  --ssp-input-color: var(--color);

  /* buttons height used to calculate textarea bottom padding */
  --ssp-buttons-height: 40px;
  --ssp-buttons-gap: 12px;

  /* Button appearance variables (can be overridden per-theme in non-scoped style) */
  --ssp-left-btn-bg: hsla(var(--color-raw), 0.08);
  --ssp-left-btn-hover: hsla(var(--color-raw), 0.12);
  --ssp-left-btn-border: hsla(var(--color-raw), 0.08);
  --ssp-left-btn-color: var(--color);

  --ssp-next-btn-bg: hsla(var(--color-raw), 0.12);
  --ssp-next-btn-color: var(--bg-color);
  --ssp-next-btn-hover: hsla(var(--color-raw), 0.18);
}

/* input-wrap: relative container for textarea + absolutely positioned buttons */
.input-wrap {
  position: relative;
}

/* TEXTAREA input: use local variables so colors can be overridden per-theme below */
.answer-input {
  /* base layout */
  padding: 12px;
  border-radius: 6px;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
  min-height: 160px;
  resize: vertical;
  line-height: 1.4;

  /* ensure text is not hidden under the floating buttons */
  padding-bottom: calc(var(--ssp-buttons-height) + var(--ssp-buttons-gap) + 8px);

  /* theme-aware colors from local CSS variables */
  background-color: var(--ssp-input-bg);
  color: var(--ssp-input-color);
  border: 1px solid var(--ssp-input-border, transparent);

  /* smooth transition like other inputs */
  transition: background-color 0.13s ease-in-out, box-shadow 0.13s;
}

/* hover / focus states mirror ApiKeyRow.input behavior but use local variables */
.answer-input:hover:not([disabled]),
.answer-input:focus {
  background-color: var(--ssp-input-bg-focus);
  box-shadow: 0 0 0 3px hsla(var(--color-raw), 0.06);
  outline: none;
}

/* placeholder color */
.answer-input::placeholder {
  color: hsla(var(--color-raw), 0.6);
}

/* disabled state */
.answer-input[disabled] {
  cursor: not-allowed;
  opacity: 0.6;
}

/* input-buttons: absolutely positioned row inside input-wrap */
.input-buttons {
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 8px;
  height: var(--ssp-buttons-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  pointer-events: auto;
}

/* Buttons layout: left group and right-aligned next button */
.buttons-left {
  display: flex;
  gap: 8px;
  align-items: center;
}

.buttons-right {
  display: flex;
  gap: 8px;
  align-items: center;
}

/* small screen adjustments: fall back to normal flow (buttons under textarea) */
@media all and (max-width: 450px) {
  .answer-input { min-height: 90px; padding-bottom: 12px; }
  .content { margin: 60px 12px 30px; }
  .translation-box { font-size: 1.8rem; padding: 10px; }
  .input-buttons { position: static; height: auto; margin-top: 6px; }
  .buttons-row { flex-direction: column; align-items: stretch; }
  .buttons-right { justify-content: flex-end; }
}

/* BUTTON STYLES COPIED FROM ApiKeyRow.vue (consistent with Settings) */
.btn {
  padding: 8px 10px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 0.8rem;
  border: none;
  color: var(--color);
  background-color: hsla(var(--color-raw), 0.08);
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.13s ease-in-out, box-shadow 0.13s;
  line-height: 1;
}

/* Tense badge: non-interactive element visually matching previous disabled button */
.tense-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 4px;
  background: hsla(var(--color-raw), 0.03);
  color: hsla(var(--color-raw), 0.6);
  border: 1px solid hsla(var(--color-raw), 0.04);
  font-weight: 700;
  font-size: 0.8rem;
  user-select: none;
  cursor: default;
  pointer-events: none;
}

/* NEXT button (right) — stronger, uses dedicated variables */
.btn.next {
  background: var(--ssp-next-btn-bg);
  color: var(--ssp-next-btn-color);
  border: 1px solid transparent;
  padding: 8px 12px;
}

.btn.next:hover:not([disabled]) {
  background: var(--ssp-next-btn-hover);
}

/* fallback generic hover */
.btn:hover:not([disabled]) {
  box-shadow: none;
}

/* disabled (general) */
.btn[disabled] {
  opacity: 0.85;
  pointer-events: none;
}

/* keep ghost class for other contexts (not used for left/next here) */
.btn.ghost {
  background: transparent;
  border: 1px solid hsla(var(--color-raw), 0.08);
}

/* muted and misc */
.spoiler-btn {
  display: inline-block;
  font-style: italic;
  margin-top: 10px;
  padding: 8px 12px;
  border-radius: 6px;
  background-color: #404040;
  color: #e6e6e6;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
}

.muted {
  color: hsla(var(--color-raw), 0.6);
  font-size: 0.95rem;
}

.ok { color: #2e7d32; }
.fail { color: #c62828; }
</style>

<!-- Theme-specific local overrides for the component's CSS variables.
     These rules are intentionally non-scoped so they can match data-theme on <html/body>.
     They only override variables for elements inside .smart-practice to avoid leaking. -->
<style>
/* Light theme: stronger contrast — left buttons white, next button black */
html[data-theme='light'] .smart-practice,
body[data-theme='light'] .smart-practice,
[data-theme='light'] .smart-practice,
body.light .smart-practice,
html.light .smart-practice {
  --ssp-input-bg: rgba(0,0,0,0.07);
  --ssp-input-bg-focus: rgba(0,0,0,0.09);
  --ssp-input-border: rgba(0,0,0,0.06);
  --ssp-input-color: #111;

  --ssp-left-btn-bg: #ffffff;
  --ssp-left-btn-hover: rgba(0,0,0,0.04);
  --ssp-left-btn-border: rgba(0,0,0,0.06);
  --ssp-left-btn-color: #111;

  --ssp-next-btn-bg: #111111;
  --ssp-next-btn-color: #ffffff;
  --ssp-next-btn-hover: #222222;
}

/* Dark theme: keep left buttons neutral, make NEXT button white with black text */
html[data-theme='dark'] .smart-practice,
body[data-theme='dark'] .smart-practice,
[data-theme='dark'] .smart-practice,
body.dark .smart-practice,
html.dark .smart-practice {
  --ssp-input-bg: rgba(255,255,255,.07);
  --ssp-input-bg-focus: rgba(255,255,255,.12);
  --ssp-input-border: rgba(255,255,255,0.03);
  --ssp-input-color: var(--color);

  /* left buttons: keep previous (neutral) look */
  --ssp-left-btn-bg: hsla(var(--color-raw), 0.08);
  --ssp-left-btn-hover: hsla(var(--color-raw), 0.12);
  --ssp-left-btn-border: hsla(var(--color-raw), 0.08);
  --ssp-left-btn-color: var(--color);

  /* NEXT: white background + black text even in dark */
  --ssp-next-btn-bg: #ffffff;
  --ssp-next-btn-color: #111111;
  --ssp-next-btn-hover: #f2f2f2;
}

/* Fallbacks using user's OS preference if the extension/theme flag is not set */
@media (prefers-color-scheme: light) {
  .smart-practice {
    --ssp-input-bg: rgba(0,0,0,0.07);
    --ssp-input-bg-focus: rgba(0,0,0,0.09);
    --ssp-input-border: rgba(0,0,0,0.06);
    --ssp-input-color: #111;

    --ssp-left-btn-bg: #ffffff;
    --ssp-left-btn-hover: rgba(0,0,0,0.04);
    --ssp-left-btn-border: rgba(0,0,0,0.06);
    --ssp-left-btn-color: #111;

    --ssp-next-btn-bg: #111111;
    --ssp-next-btn-color: #ffffff;
    --ssp-next-btn-hover: #222222;
  }
}
@media (prefers-color-scheme: dark) {
  .smart-practice {
    --ssp-input-bg: hsla(var(--color-raw), 0.12);
    --ssp-input-bg-focus: hsla(var(--color-raw), 0.18);
    --ssp-input-border: rgba(255,255,255,0.03);
    --ssp-input-color: var(--color);

    --ssp-left-btn-bg: hsla(var(--color-raw), 0.08);
    --ssp-left-btn-hover: hsla(var(--color-raw), 0.12);
    --ssp-left-btn-border: hsla(var(--color-raw), 0.08);
    --ssp-left-btn-color: var(--color);

    --ssp-next-btn-bg: #ffffff;
    --ssp-next-btn-color: #111111;
    --ssp-next-btn-hover: #f2f2f2;
  }
}
</style>