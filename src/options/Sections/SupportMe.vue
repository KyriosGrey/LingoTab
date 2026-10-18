<script setup lang="ts">
import kofiButton from '@/assets/support_me_on_kofi_red.png'
import { t } from '@/i18n'
import Section from '@/options/components/Section.vue'
import SettingsGroup from '@/options/components/SettingsGroup.vue'

// Shown at the bottom of both settings tabs (Main Settings and Smart Sentences).
const KOFI_URL = 'https://ko-fi.com/kyriosgrey'
</script>

<template>
  <!-- No outer group label: the title sits inside the card, like the rows of other groups. -->
  <SettingsGroup>
    <Section :title="t('group.supportMe')" :description="t('supportMe.description')">
      <template #bar>
        <!-- Ko-fi's official button, bundled locally: no request to Ko-fi on page load. -->
        <a :href="KOFI_URL" target="_blank" rel="noopener noreferrer" class="kofi-link">
          <img :src="kofiButton" :alt="t('supportMe.button')" class="kofi-link__img">
        </a>
      </template>
    </Section>
  </SettingsGroup>
</template>

<style scoped>
.kofi-link {
  display: inline-flex;
  border-radius: 8px;
  transition: filter 0.15s ease-in-out;
}

.kofi-link:hover {
  filter: brightness(1.08);
}

.kofi-link:focus-visible {
  outline: 2px solid var(--accent-color-hover);
  outline-offset: 2px;
}

/* Same height as the other buttons in settings; width follows the image (980x198). */
.kofi-link__img {
  display: block;
  height: 36px;
  width: auto;
}
</style>
