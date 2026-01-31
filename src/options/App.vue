<script setup lang="ts">
import Background from './Sections/Background.vue'

import GoogleTranslate from './Sections/GoogleTranslate.vue'
import Header from './Sections/Header.vue'
import IgnoredWords from './Sections/IgnoredWords'
import LearningLearnedWords from './Sections/LearningLearnedWords'
import RepetitionFrequency from './Sections/RepetitionFrequency.vue'
import SiteShortcuts from './Sections/SiteShortcuts.vue'
/* Новая секция SmartDailySentences */
import SmartDailySentences from './Sections/SmartDailySentences/SmartDailySentences.vue'
import Theme from './Sections/Theme.vue'
import Translation from './Sections/Translation.vue'
import VocabularyLists from './Sections/VocabularyLists.vue'

import SettingsTabs from './SettingsTabs.vue'
</script>

<template>
  <div class="options-root">
    <SettingsTabs>
      <!-- Старые настройки New Word Tab -->
      <template #newword>
        <div class="options">
          <Header />
          <GoogleTranslate />
          <SiteShortcuts />
          <Background />
          <Theme />
          <VocabularyLists />
          <Translation />
          <RepetitionFrequency />
          <LearningLearnedWords />
          <IgnoredWords />
        </div>
      </template>

      <!-- Smart Daily Sentences -->
      <template #smart>
        <div class="options">
          <SmartDailySentences />
        </div>
      </template>
    </SettingsTabs>
  </div>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Root wrapper to avoid interfering with SettingsTabs layout */
.options-root {
  min-height: 100vh;
  background-color: hsla(var(--bg-color-raw, 210 20% 10%), 0.9);
  backdrop-filter: blur(5px);
  padding: 20px;
}

/* Reuse previous .options container styling for inner content panels */
.options {
  max-width: 725px;
  margin: 0 auto;
  padding: 0 25px;
  min-height: 100%;
}

/* Ensure forms and sections inside the slots keep consistent spacing */
.section {
  margin: 12px 0;
}

/* Buttons, selects and inputs generally rely on components' own styles,
   but add a little global normalization for consistency */
input[type="text"],
input[type="password"],
select,
textarea {
  font-family: inherit;
  font-size: 14px;
  color: inherit;
}

/* Keep responsive behavior */
@media (max-width: 900px) {
  .options-root { padding: 12px; }
  .options { padding: 0 12px; }
}
</style>
