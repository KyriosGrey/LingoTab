<script setup lang="ts">
import { t } from '@/i18n'
import SettingsGroup from './components/SettingsGroup.vue'

import Background from './Sections/Background.vue'
import DictionarySource from './Sections/DictionarySource.vue'
import GoogleTranslate from './Sections/GoogleTranslate.vue'
import Header from './Sections/Header.vue'
import IgnoredWords from './Sections/IgnoredWords'
import InterfaceLanguage from './Sections/InterfaceLanguage.vue'
import LearningLearnedWords from './Sections/LearningLearnedWords'
import PatchNotes from './Sections/PatchNotes/PatchNotes.vue'
import Repetition from './Sections/Repetition.vue'
import SiteShortcuts from './Sections/SiteShortcuts.vue'
/* Новая секция SmartDailySentences */
import SmartDailySentences from './Sections/SmartDailySentences/SmartDailySentences.vue'
import SupportMe from './Sections/SupportMe.vue'
import Theme from './Sections/Theme.vue'
import Translation from './Sections/Translation.vue'

import VocabularyLists from './Sections/VocabularyLists.vue'
import WordExamples from './Sections/WordExamples.vue'
import SettingsTabs from './SettingsTabs.vue'
</script>

<template>
  <div class="options-root">
    <SettingsTabs>
      <!-- Старые настройки New Word Tab -->
      <template #newword>
        <div class="options">
          <Header />
          <div class="options__divider" />

          <SettingsGroup :title="t('group.general')">
            <GoogleTranslate />
            <SiteShortcuts />
            <Background />
            <Theme />
            <InterfaceLanguage />
            <DictionarySource />
            <WordExamples />
          </SettingsGroup>

          <SettingsGroup :title="t('group.vocabulary')">
            <VocabularyLists />
          </SettingsGroup>

          <SettingsGroup :title="t('group.translationReview')">
            <Translation />
            <Repetition />
          </SettingsGroup>

          <SettingsGroup :title="t('group.yourWordLists')">
            <LearningLearnedWords />
          </SettingsGroup>

          <SettingsGroup :title="t('group.ignoredWords')">
            <IgnoredWords />
          </SettingsGroup>

          <SupportMe />
        </div>
      </template>

      <!-- Smart Daily Sentences -->
      <template #smart>
        <div class="options">
          <SmartDailySentences />
          <SupportMe />
        </div>
      </template>

      <!-- Patch Notes (read-only, no interaction) -->
      <template #patchnotes>
        <div class="options">
          <PatchNotes />
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

/* Root wrapper to avoid interfering with SettingsTabs layout */
.options-root {
  min-height: 100vh;
  padding: 20px;
}

/* Reuse previous .options container styling for inner content panels */
.options {
  max-width: 640px;
  margin: 0 auto;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.options__divider {
  height: 1px;
  background: var(--overlay-weak);
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
}
</style>
