<script setup lang="ts">
import useTranslateText from '@/composables/useTranslateText'
import { computed, onMounted, ref, useAttrs, watch } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<{
  text: string | undefined
  small?: boolean
  /**
   * block  - render translation as a separate line (<p> by default)
   * tooltip - render inline "?" icon with custom tooltip on hover/focus
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
const loading = ref(false)
const result = ref<string>('')

async function doTranslate() {
  if (!props.text) {
    result.value = ''
    return
  }

  loading.value = true
  try {
    result.value = await translate(props.text, props.from)
  }
  catch {
    result.value = ''
  }
  finally {
    loading.value = false
  }
}

onMounted(doTranslate)
watch(() => [props.text, props.from], doTranslate)

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

const hasTooltipText = computed(() => Boolean(result.value) || loading.value)
const tooltipText = computed(() => {
  if (result.value)
    return result.value
  if (loading.value)
    return 'перевод…'
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
      перевод…
    </component>
  </template>

  <!-- tooltip mode -->
  <template v-else>
    <span
      v-if="hasTooltipText"
      class="trt"
      :class="[small ? 'trt--small' : '']"
    >
      <span class="trt__icon" tabindex="0" aria-label="Show translation">?</span>

      <span class="trt__tooltip" role="tooltip">
        {{ tooltipText }}
      </span>
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

  user-select: none;
  cursor: help;

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

  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  transition: opacity .12s ease, transform .12s ease, visibility .12s ease;

  z-index: 50;
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

.trt:hover .trt__tooltip,
.trt:focus-within .trt__tooltip {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateX(-50%) translateY(-2px);
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
