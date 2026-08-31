<script setup lang="ts">
import useBackground from '@/composables/useBackground'

import { computed } from 'vue'
import Options from './Options.vue'
import Search from './Search.vue'
import ThemeSwitch from './ThemeSwitch.vue'

const { shouldModifyUI } = useBackground()

const backgroundClass = computed(() => ({
  'navbar--boxed': shouldModifyUI.value,
}))
</script>

<template>
  <div class="navbar" :class="backgroundClass">
    <Search />
    <ThemeSwitch class="btn-gap" />
    <Options class="btn-gap" />
  </div>
</template>

<style scoped>
.navbar {
  position: fixed;
  right: 1rem;
  /* --google-translate-banner-height is 0px unless GoogleTranslateErrorBanner.vue is
     showing, in which case it's that banner's actual rendered height - so this icon row
     shifts down to clear it instead of sitting on top of it. */
  top: calc(1rem + var(--google-translate-banner-height, 0px));
  z-index: 2;
  display: flex;
  align-items: center;
}

.navbar--boxed {
  background-color: hsla(var(--bg-color-raw), 0.9);
  backdrop-filter: blur(5px);
  border-radius: 30px;
  padding: 5px 10px;
}

.btn-gap {
  margin-left: 0.5rem;
}
</style>
