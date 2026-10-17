<script setup lang="ts">
import type { TranslateFailureReason } from '@/composables/useTranslateFailureNotice'
import { isQuotaExhausted } from '@/composables/myMemoryTranslation'
import useGoogleTranslate from '@/composables/useGoogleTranslate'
import useTranslateFailureNotice from '@/composables/useTranslateFailureNotice'
import useTranslateText from '@/composables/useTranslateText'
import { fetchWordTranslationFallback } from '@/composables/wiktionaryWordTranslation'
import useUserTranslations from '@/composables/words/useUserTranslations'
import { t } from '@/i18n'
import { computed, onBeforeUnmount, onMounted, ref, useAttrs, watch } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<{
  text: string | undefined
  small?: boolean
  /**
   * block  - render translation as a separate line (<p> by default)
   * tooltip - render inline "?" icon; translation is fetched on first click
   *   and shown in a popover, closed by clicking the icon again or elsewhere
   */
  display?: 'block' | 'tooltip'
  /**
   * default - normal translation line (small italic caption style)
   * word - translation shown under the main word (bigger)
   * plain - no built-in styling at all; the translated text inherits
   *   whatever typography the surrounding markup provides. Use when the
   *   original (untranslated) text plays a heading/body role rather than
   *   a caption.
   *
   * Only affects display="block". Tooltip mode has its own styling.
   */
  variant?: 'default' | 'word' | 'plain'
  /**
   * Source language for translation.
   * Default is 'en' to preserve existing behavior (words/examples come in EN).
   * Use 'ru' for Russian lines in tense cards.
   */
  from?: string
  /**
   * Which tag to render in block mode.
   * Default 'p' keeps existing DOM/layout. Use 'span' for inline usage (e.g., inside headings).
   */
  as?: 'p' | 'span'
}>(), {
  display: 'block',
  small: false,
  variant: 'default',
  from: 'en',
  as: 'p',
})

const attrs = useAttrs()

const { translate } = useTranslateText()
const { targetLanguage } = useGoogleTranslate()
const { reportFailure } = useTranslateFailureNotice()
const { getUserTranslation } = useUserTranslations()
const loading = ref(false)

// The user's own translation of a headword wins over any API - no request is made at all.
const userTranslation = computed(() =>
  props.variant === 'word' && props.text ? getUserTranslation(props.text) : undefined,
)
const result = ref<string>('')

// Kept separate from the banner's own state so a dismissed banner doesn't take the
// tooltip's explanation down with it - the tooltip is where the user is actually looking.
const failureReason = ref<TranslateFailureReason | null>(null)

// variant="word" marks the two places that translate a bare headword (the word's own
// title, and the word shown on the repetition card) rather than a sentence - only those
// can fall back to Wiktionary's word-translation data when Google is unreachable. The
// fallback result is deliberately never written to translate()'s own cache (see
// useTranslateText.ts) - it only lives in this component instance, so the next time this
// word is opened, Google gets a fresh attempt instead of being stuck behind a
// possibly-not-the-most-common cached translation forever.
async function doTranslate() {
  if (!props.text) {
    result.value = ''
    return
  }

  if (userTranslation.value) {
    result.value = userTranslation.value
    failureReason.value = null
    return
  }

  loading.value = true
  failureReason.value = null
  try {
    result.value = await translate(props.text, props.from)
  }
  catch {
    if (props.variant === 'word' && props.from === 'en') {
      const tl = (targetLanguage?.code || 'ru').toLowerCase()
      result.value = (await fetchWordTranslationFallback(props.text, tl)) || ''
    }
    else {
      result.value = ''
    }

    // Only worth telling the user about once every source has come up empty - Google,
    // MyMemory inside translate(), and Wiktionary above. When one of them did answer
    // there is nothing to report: the translation is on screen.
    //
    // Translation.vue covers the word title, definition tooltips, and example tooltips -
    // Grammar Reference calls translateBatch directly and never lands here - so a notice
    // raised from this component is always about a word or a tooltip.
    if (!result.value) {
      failureReason.value = isQuotaExhausted() ? 'quota' : 'unavailable'
      reportFailure(failureReason.value)
    }
  }
  finally {
    loading.value = false
  }
}

if (props.display === 'block') {
  onMounted(doTranslate)
  watch(() => [props.text, props.from, userTranslation.value], doTranslate)
}

const blockClass = computed(() => {
  if (props.variant === 'plain')
    return []
  return ['tr', props.small ? 'tr--small' : '', props.variant === 'word' ? 'tr--word' : '']
})
const loadingBlockClass = computed(() => {
  if (props.variant === 'plain')
    return []
  return ['tr', 'tr--muted', props.variant === 'word' ? 'tr--word' : '']
})

// Tooltip mode only translates on demand, when the user clicks the "?" icon -
// otherwise every definition/example on screen would fire its own translate
// request on mount, even ones nobody ever looks at.
const isOpen = ref(false)
const rootEl = ref<HTMLElement | null>(null)

function handleOutsideClick(event: MouseEvent) {
  if (rootEl.value && !rootEl.value.contains(event.target as Node))
    isOpen.value = false
}

watch(isOpen, (open) => {
  if (open)
    document.addEventListener('click', handleOutsideClick)
  else
    document.removeEventListener('click', handleOutsideClick)
})

onBeforeUnmount(() => document.removeEventListener('click', handleOutsideClick))

function toggleTooltip() {
  if (!props.text)
    return

  isOpen.value = !isOpen.value

  if (isOpen.value && !result.value && !loading.value)
    doTranslate()
}

const tooltipText = computed(() => {
  if (result.value)
    return result.value
  if (loading.value)
    return t('translateFailure.translating')
  if (failureReason.value === 'quota')
    return t('translateFailure.tooltipQuota')
  if (failureReason.value === 'unavailable')
    return t('translateFailure.tooltipUnavailable')
  return ''
})
</script>

<template>
  <!-- block mode -->
  <template v-if="display === 'block'">
    <component
      :is="as"
      v-if="result"
      v-bind="attrs"
      :class="blockClass"
    >
      {{ result }}
    </component>

    <component
      :is="as"
      v-else-if="loading"
      v-bind="attrs"
      :class="loadingBlockClass"
    >
      translating…
    </component>
  </template>

  <!-- tooltip mode -->
  <template v-else>
    <span
      v-if="text"
      ref="rootEl"
      class="trt"
      :class="[small ? 'trt--small' : '']"
    >
      <button
        type="button"
        class="trt__icon"
        :aria-label="t('word.showTranslation')"
        @click="toggleTooltip"
      >
        ?
      </button>

      <Transition name="trt-fade">
        <span v-if="isOpen" class="trt__tooltip" role="tooltip">
          {{ tooltipText }}
        </span>
      </Transition>
    </span>
  </template>
</template>

<style scoped>
/* Regular translation line (block mode) */
.tr {
  margin: 4px 0 6px;
  font-size: 0.95rem;
  line-height: 1.35;
  font-style: italic;
  color: var(--text-secondary);
  transition: color .3s ease;
}

/* Make "small" relative to current context */
.tr--small {
  font-size: 0.9em;
}

.tr--muted {
  opacity: .7;
}

/* Main word translation (block mode only) — Figma "translation" text under the
   main word/review card word (18/24 SemiBold, not italic, secondary color) */
.tr--word {
  margin-top: 0;
  font-family: var(--font-family-base);
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05em;
  color: var(--text-secondary);
}

/* Tooltip mode */
.trt {
  position: relative;
  display: inline-flex;
  align-items: center;
  margin-left: 6px;
  vertical-align: baseline;
}

/* Figma "tooltip" component (16x16 pill next to definitions/examples) */
.trt__icon {
  width: 16px;
  height: 16px;
  border-radius: 50%;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-family: var(--font-family-base);
  font-size: 11px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.12em;

  padding: 0;
  user-select: none;
  cursor: pointer;

  color: var(--text-secondary);
  border: none;
  background: var(--overlay-strong);

  transition: background-color .15s ease, color .15s ease;
  outline: none;
}

.trt__icon:hover {
  background: var(--accent-color-tint);
  color: var(--accent-color-hover);
}

.trt__icon:focus {
  box-shadow: 0 0 0 2px var(--accent-color-tint);
}

.trt__tooltip {
  position: absolute;
  left: 50%;
  bottom: calc(100% + 8px);
  transform: translateX(-50%);

  min-width: 250px;
  max-width: min(460px, 70vw);

  padding: 10px 12px;
  border-radius: 10px;

  background: hsla(var(--bg-color-raw), 0.95);
  color: var(--color);
  border: none;
  box-shadow: 0 10px 30px rgba(0,0,0,0.35);

  font-size: 0.95rem;
  line-height: 1.35;
  font-style: italic;

  white-space: normal;
  word-break: break-word;

  z-index: 50;
}

.trt-fade-enter-active,
.trt-fade-leave-active {
  transition: opacity .12s ease;
}
.trt-fade-enter-from,
.trt-fade-leave-to {
  opacity: 0;
}

.trt__tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);

  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 7px solid hsla(var(--bg-color-raw), 0.95);
}

.trt--small .trt__icon {
  width: 16px;
  height: 16px;
  font-size: 11px;
}

.trt--small .trt__tooltip {
  font-size: 0.9rem;
}
</style>
