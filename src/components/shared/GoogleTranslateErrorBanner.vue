<script setup lang="ts">
import { isActive as isShortcutsSidebarActive } from '@/composables/shortcuts/useShortcuts'
import useTranslateFailureNotice from '@/composables/useTranslateFailureNotice'
import { t } from '@/i18n'
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'

const { hasFailure: isVisible, failureReason, dismiss } = useTranslateFailureNotice()

// English throughout, like the rest of the interface: the target language differs per
// user across roughly a hundred options, so the UI language is the only one everyone
// reading this shares.
//
// Both messages point at the cache on purpose - "nothing works" is the wrong impression
// to leave when every word opened so far still reads fine.
const label = computed(() => failureReason.value === 'quota'
  ? t('translateFailure.quota.label')
  : t('translateFailure.unavailable.label'))

const message = computed(() => failureReason.value === 'quota'
  ? t('translateFailure.quota.message')
  : t('translateFailure.unavailable.message'))

// Navbar's icons are position:fixed with a hardcoded top offset, so they don't shift
// down on their own when this banner pushes the page content down - this exposes the
// banner's actual rendered height (it can wrap to 2 lines on narrow viewports) as a CSS
// variable Navbar.vue reads, instead of hardcoding a guessed pixel value.
const HEIGHT_VAR = '--google-translate-banner-height'
const bannerEl = ref<HTMLElement | null>(null)
let resizeObserver: ResizeObserver | null = null

function setHeightVar(px: number) {
  document.documentElement.style.setProperty(HEIGHT_VAR, `${px}px`)
}

watch(isVisible, async (visible) => {
  if (visible) {
    await nextTick()
    if (!bannerEl.value)
      return
    setHeightVar(bannerEl.value.offsetHeight)
    resizeObserver = new ResizeObserver(([entry]) => setHeightVar(entry.contentRect.height))
    resizeObserver.observe(bannerEl.value)
  }
  else {
    resizeObserver?.disconnect()
    resizeObserver = null
    setHeightVar(0)
  }
}, { immediate: true })

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
  setHeightVar(0)
})
</script>

<template>
  <div
    v-if="isVisible"
    ref="bannerEl"
    class="banner"
    :class="{ 'banner--sidebar-offset': isShortcutsSidebarActive }"
  >
    <div class="banner__inner">
      <span class="banner__label">{{ label }}</span>
      <span class="banner__divider" />
      <p class="banner__text">
        {{ message }}
      </p>
      <button type="button" class="banner__close" :aria-label="t('translateFailure.dismiss')" @click="dismiss">
        <i-ic-round-close />
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Fixed alert color regardless of light/dark theme, same reasoning as --error-color
   itself (Figma: "same in both themes") - this is meant to stand out, not blend in. */
.banner {
  background: hsl(0, 45%, 14%);
  border-bottom: 1px solid hsla(0, 78.7%, 63.1%, 0.3);
}

/* App.vue's .sidebar (SiteShortcuts, when the shortcuts bar is on) reserves 55px on the
   left, shifting .main - and the word content centered inside it - right by that much.
   This banner sits outside that layout (so its background stays edge to edge), so its
   own centered content needs the same 55px pushed in to line up with the word screen. */
.banner--sidebar-offset {
  padding-left: 55px;
}

/* Same content column width as the word screen (Word.vue .content), so the banner text
   lines up with the page content instead of stretching edge to edge. */
.banner__inner {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  max-width: 800px;
  margin: 0 auto;
  padding: 10px 15px;
}

.banner__label {
  flex-shrink: 0;
  padding-top: 1px;
  font-weight: 600;
  font-size: 0.85rem;
  color: var(--error-color);
  white-space: nowrap;
}

.banner__divider {
  flex-shrink: 0;
  align-self: stretch;
  width: 1px;
  background: hsla(0, 78.7%, 63.1%, 0.3);
}

.banner__text {
  flex: 1;
  margin: 0;
  font-size: 0.85rem;
  line-height: 1.4;
  color: hsl(0, 60%, 80%);
}

.banner__close {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: var(--error-color);
  cursor: pointer;
  transition: background-color .15s ease;
}

.banner__close:hover {
  background: hsla(0, 78.7%, 63.1%, 0.15);
}
</style>
