<script setup lang="ts">
import SettingsGroup from '@/options/components/SettingsGroup.vue'
import Header3 from './Header3.vue'
</script>

<template>
  <section class="patchnotes-root">
    <Header3 />
    <div class="patchnotes-root__divider" />

    <SettingsGroup title="Version 2.7.2">
      <div class="entry text-body-sm">
        <ul>
          <li>Built-in sentence pack now automatically matches your Google Translate target language — supports Russian, Ukrainian, Japanese, Chinese, Hindi, Arabic, French, German, Polish and Spanish, falling back to Russian for any other language.</li>
          <li>Fixed: generating a new custom sentence pack while the built-in pack was enabled used to silently keep showing the built-in pack instead of generating. It now switches off the built-in pack automatically and generates as expected.</li>          
        </ul>
      </div>
    </SettingsGroup>

    <SettingsGroup title="Version 2.7.1">
      <div class="entry text-body-sm">
        <ul>
          <li>Word search reliability — fixed an issue where searching for a word in the new-tab search bar would occasionally say "not found" for words that do exist. The app now automatically retries before giving up.</li>
          <li>Small visual polish — the search bar in the top bar now matches the same refreshed look as the rest of the redesigned interface.</li>
        </ul>
      </div>
    </SettingsGroup>

    <SettingsGroup title="Version 2.7 — Visual Redesign">
      <div class="entry text-body-sm">
        <p class="intro">
          A complete visual refresh across the whole extension.
        </p>
        <ul>
          <li>New typeface and a refined color palette for both dark and light themes, applied consistently everywhere.</li>
          <li>Settings pages reorganized into clear, labeled sections for easier navigation.</li>
          <li>Word screen: smoother "Show word" / "Show translation" reveal — the card no longer jumps in height — plus refreshed icons and a clearer "Next" button.</li>
          <li>Grammar practice screen: refreshed colors and spacing, a cleaner tense selector, and better organized example cards.</li>
          <li>"Marked Words" panel (learning / learned word lists): more breathing room, larger icons, and an easier-to-use sort button.</li>
          <li>All pop-up windows (word history, dictionary, shortcuts, import dialogs) now share one consistent look.</li>
          <li>Custom background image option got a matching visual style.</li>
          <li>Numerous small color and sizing inconsistencies between light and dark mode fixed throughout the extension.</li>
          <li>New: "Create your own pack" — a new option in Smart Sentences settings. Copy a ready-made prompt into any AI chat (ChatGPT, Claude, etc.), answer a few quick questions, and get a personalized sentence pack you can import right away.</li>
        </ul>
      </div>
    </SettingsGroup>

    <SettingsGroup title="Version 2.6 — Interactive Grammar Hints">
      <div class="entry text-body-sm">
        <p class="intro">
          Grammar practice hints got smarter and more interactive.
        </p>
        <ul>
          <li>Some grammar exercises now offer 4 multiple-choice answers instead of asking you to type the answer.</li>
          <li>Picking an answer instantly highlights it green (correct) or red (incorrect) and shows a short explanation of the grammar rule.</li>
          <li>If you miss twice — or get it right on the first try — the correct answer is revealed along with the full original sentence.</li>
          <li>A "Next" button appears so you can continue smoothly to the next sentence.</li>
          <li>Exercises without multiple-choice options keep working exactly as before, with the regular text input.</li>
        </ul>
      </div>
    </SettingsGroup>
  </section>
</template>

<style scoped>
.patchnotes-root {
  max-width: 640px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.patchnotes-root__divider {
  height: 1px;
  background: var(--overlay-weak);
}

.entry {
  color: var(--color);
}

.intro {
  margin: 0 0 12px;
  color: var(--text-secondary);
}

ul {
  margin: 0;
  padding-left: 25px;
}
ul li {
  margin: 0 0 8px;
}
ul li:last-child {
  margin-bottom: 0;
}
</style>
