<script setup lang="ts">
import { computed, onMounted, ref, useAttrs, watch } from 'vue'
import useTranslateText from '@/composables/useTranslateText'

defineOptions({
  inheritAttrs: false,
})

const attrs = useAttrs()

const props = withDefaults(defineProps<{
  text: string | undefined
  small?: boolean
  /**
   * block  - render translation as a separate line (<p>)
   * tooltip - render inline "?" icon with custom tooltip on hover/focus
   */
  display?: 'block' | 'tooltip'
  /**
   * default - normal translation line
   * word - translation shown under the main word (bigger)
   *
   * Only affects display="block". Tooltip mode has its own styling.
   */
  variant?: 'default' | 'word'
}>(), {
  display: 'block',
  small: false,
  variant: 'default',
})

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
    result.value = await translate(props.text, 'en') // в проекте слова и примеры приходят на EN
  } catch {
    result.value = ''
  } finally {
    loading.value = false
  }
}

onMounted(doTranslate)
watch(() => props.text, doTranslate)

const hasTooltipText = computed(() => Boolean(result.value) || loading.value)
const tooltipText = computed(() => {
  if (result.value) return result.value
  if (loading.value) return 'перевод…'
  return ''
})
</script>

<template>
  <!-- block mode -->
  <template v-if="display === 'block'">
    <p
      v-if="result"
      v-bind="attrs"
      :class="[
        'tr',
        small ? 'tr--small' : '',
        variant === 'word' ? 'tr--word' : '',
      ]"
    >
      {{ result }}
    </p>

    <p
      v-else-if="loading"
      v-bind="attrs"
      :class="[
        'tr',
        'tr--muted',
        variant === 'word' ? 'tr--word' : '',
      ]"
    >
      перевод…
    </p>
  </template>

  <!-- tooltip mode -->
  <template v-else>
    <span
      v-if="hasTooltipText"
      class="trt"
      :class="[small ? 'trt--small' : '']"
    >
      <span class="trt__icon" tabindex="0" aria-label="Показать перевод">?</span>

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
  transition: color .3s ease;
}

@media (prefers-color-scheme: dark) {
  .tr {
    color: hsl(0, 0%, 75%);
  }
}

@media (prefers-color-scheme: light) {
  .tr {
    color: hsl(0, 0%, 35%);
  }
}

/* Make "small" relative to current context */
.tr--small {
  font-size: 0.9em;
}

.tr--muted {
  opacity: .7;
}

/* ✅ Main word translation (block mode only) */
.tr--word {
  font-size: 1.3rem;
  margin-top: 0.25rem;
}

/* Tooltip mode */
.trt {
  position: relative;
  display: inline-flex;
  align-items: center;
  margin-left: 6px;
  vertical-align: baseline;
}

.trt__icon {
  width: 18px;
  height: 18px;
  border-radius: 999px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-size: 12px;
  line-height: 1;
  font-weight: 700;

  user-select: none;
  cursor: help;

  color: hsla(var(--color-raw), 0.3);
  border: none;
  background: hsla(var(--color-raw), 0.08);

  transition: background-color .15s ease, color .15s ease;
  outline: none;
}

.trt__icon:hover {
  background: hsla(var(--color-raw), 0.12);
  color: hsla(var(--color-raw), 0.9);
}

.trt__icon:focus {
  box-shadow: 0 0 0 2px hsla(var(--color-raw), 0.25);
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