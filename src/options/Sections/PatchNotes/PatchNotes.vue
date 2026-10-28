<script setup lang="ts">
import SettingsGroup from '@/options/components/SettingsGroup.vue'
import Header3 from './Header3.vue'
</script>

<template>
  <section class="patchnotes-root">
    <Header3 />
    <div class="patchnotes-root__divider" />

    <SettingsGroup title="Version 2.9.2">
      <div class="entry text-body-sm">
        <p class="intro">
          Usage examples: see how a word is actually used.
        </p>
        <ul>
          <li>New: an "Examples" tab, first on the word card, with real sentences and translations made by people, from Tatoeba. It's hidden when a word has no examples and can be turned off in "Usage examples" (General settings).</li>
          <li>New: add your own examples, with an optional translation, using the pencil. They replace Tatoeba's for that word.</li>
          <li>JSON import and export now include your examples, and the AI prompt asks for 3 examples per word without overwriting translations you already have.</li>
          <li>Fixed: searching for a word while another one was still loading could show one word with the other's definitions.</li>
        </ul>
      </div>
    </SettingsGroup>

    <SettingsGroup title="Version 2.9.1">
      <div class="entry text-body-sm">
        <ul>
          <li>Minor UI improvements.</li>
        </ul>
      </div>
    </SettingsGroup>

    <SettingsGroup title="Version 2.9.0">
      <div class="entry text-body-sm">
        <p class="intro">
          Your own translations: LingoTab now keeps working even when translation services are down.
        </p>
        <ul>
          <li>New: edit a word's translation with the pencil next to it — on the word card or in your Learning list. Your translation always wins over the automatic one.</li>
          <li>New: "Add word" button at the bottom of the Marked Words panel, with an optional one-click automatic translation.</li>
          <li>Learning list now shows each word's translation, plus a sort mode that puts words with your own translation first.</li>
          <li>Offline, or when the dictionary is unavailable, words with your own translation still show on a simplified card.</li>
          <li>New: import and export your Learning words with translations as JSON, and a ready-made prompt to translate them in any AI chat.</li>
        </ul>
      </div>
    </SettingsGroup>

    <SettingsGroup title="Version 2.8.1">
      <div class="entry text-body-sm">
        <ul>
          <li>Fixed: with "Learning words only" turned on, the extension could wrongly show "Hooray! You've learned every word in your lists" while your saved words were still right there in the list. Reloading or restarting the browser didn't help — the only workaround was emptying your ignored words list.</li>
          <li>Your ignored words no longer apply while "Learning words only" is on: your saved list is now shown exactly as you built it.</li>
        </ul>
      </div>
    </SettingsGroup>

    <SettingsGroup title="Version 2.8.0">
      <div class="entry text-body-sm">
        <p class="intro">
          Smart Sentences settings got much simpler, and LingoTab can now speak your language.
        </p>
        <ul>
          <li>Removed built-in AI generation. Making your own sentence pack no longer needs an API key — copy the "Create your own pack" prompt into any AI chat instead.</li>
          <li>New setting: "Interface language". Leave it on Auto to follow your translation language, or pick one yourself. Available in de, es, fr, hi, ja, ko, pl, pt, ru, uk and zh-CN; any other language stays in English.</li>
          <li>Reworded most settings and empty screens so they say what they actually do.</li>
          <li>Fixed: the "off" state of toggle switches showed the wrong color in light theme (almost white instead of the intended muted gray).</li>
        </ul>
      </div>
    </SettingsGroup>

    <SettingsGroup title="Version 2.7.6">
      <div class="entry text-body-sm">
        <p class="intro">
          More reliability work on word lookups and translations, plus a simpler Smart Sentences setup.
        </p>
        <ul>
          <li>Fixed: word lookups and translations could sit on a loading spinner indefinitely. They now give up after a few seconds and retry or fall back, instead of waiting forever.</li>
          <li>In Automatic mode, Wiktionary is now tried first, with Free Dictionary API as the backup — it's proven more reliable. You can still force either one in "Dictionary source".</li>
          <li>Translations now have a backup source: when Google Translate can't be reached, another service steps in instead of leaving a blank space. This matters most in Firefox, where Google refuses these requests far more often than in Chrome.</li>
          <li>The notice at the top of the page now appears only when no translation could be fetched at all — not when the backup worked — and tells you which of the two happened.</li>
          <li>Fixed: the "?" icon opened an empty tooltip when a translation couldn't be fetched. It now explains why.</li>
          <li>Removed the "Target language" dropdown from Smart Sentences settings — there were two language settings that were easy to mix up. Everything now follows "Google Translate" in Main Settings.</li>
        </ul>
      </div>
    </SettingsGroup>

    <SettingsGroup title="Version 2.7.5">
      <div class="entry text-body-sm">
        <ul>
          <li>Fixed: with all "Vocabulary lists" checkboxes unchecked but "Learning words only" turned on, the extension incorrectly showed "nothing to show" instead of your saved words.</li>
          <li>Fixed: on the sentence practice screen, searching for a word did nothing. Searching now opens the word right away, as does picking one from your word history, marked words, or vocabulary lists.</li>
          <li>Added a dismissible notice at the top of the page for when a translation can't be fetched, so it's clear what happened instead of leaving a blank space.</li>
        </ul>
      </div>
    </SettingsGroup>

    <SettingsGroup title="Version 2.7.4">
      <div class="entry text-body-sm">
        <p class="intro">
          Fixes for missing translations. Google Translate limits how many translations can be requested at once, and the extension used to ask for dozens at a time — so some of them silently came back empty.
        </p>
        <ul>
          <li>Fixed: translations occasionally showed up as blank space — on the word screen, in the review block, and in Grammar Reference.</li>
          <li>Definition and example translations are now fetched when you click the "?" icon, instead of all of them being fetched up front. Previously a word with many meanings could request 30-40 translations at once, most of which nobody ever looked at.</li>
          <li>Grammar Reference now fetches all of its translations in a single request instead of roughly fifteen separate ones, so cards load without hitting the limit.</li>
          <li>If a translation can't be fetched at all, Grammar Reference now shows the original text instead of leaving an empty space.</li>
          <li>Translations you've already seen are still remembered, so revisiting the same word or grammar card needs no new requests.</li>
          <li>If Google Translate can't be reached at all, the word title now falls back to a translation from Wiktionary instead of staying blank. It's not always the most common translation, but it beats an empty space — and it's never remembered, so Google gets a fresh try the next time you open that word.</li>
        </ul>
      </div>
    </SettingsGroup>

    <SettingsGroup title="Version 2.7.3">
      <div class="entry text-body-sm">
        <ul>
          <li>Word lookups are now more reliable — if the main dictionary service is temporarily unavailable, the extension automatically and silently tries Wiktionary instead, so a brief outage no longer looks like "word not found".</li>
          <li>New setting: "Dictionary source" (General settings) lets you choose between Automatic (recommended), Free Dictionary API, or Wiktionary.</li>
        </ul>
      </div>
    </SettingsGroup>

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
