// English is the source of truth for the whole interface: every key that exists
// is listed here, and every other language is allowed to be incomplete — a key a
// translation is missing falls back to the English text for that one key, not for
// the whole language. That is what makes it safe to ship languages one at a time.
//
// Rules for anything added here (they are what stages 1 and 2 of the localization
// work bought us, and they are easy to lose by accident):
//   * one key = one whole sentence or label. Never assemble a phrase from pieces —
//     word order differs between languages and the pieces end up nonsense.
//   * no markup inside a value. An icon, link or bold word belongs in the template
//     around the string, not inside it.
//   * no counted nouns. "Words found: 5" is fine, "Found 5 words" is not: Russian
//     and Polish need three different forms of the noun, Japanese needs none.
//
// Proper names (LingoTab, Wiktionary, Free Dictionary API, Google Translate) stay
// as literals in the templates: there is nothing to translate, and having them here
// would invite a translator to change them.
export const en = {
  // Settings — page chrome
  'settings.menu': 'Settings menu',
  'settings.brand': 'Settings',
  'settings.tab.main': 'Main Settings',
  'settings.tab.smart': 'Smart Sentences',
  'settings.tab.patchNotes': 'Patch Notes',

  // Main Settings — General
  'group.general': 'General',

  'lang.title': 'Translation language',
  'lang.description': 'Choose the language words and sentences are translated into.',
  'lang.select': 'Select target language',

  'shortcuts.title': 'Site shortcuts',
  'shortcuts.description': 'Show your bookmarks in a bar on the left of the New Tab page.',

  'background.title': 'Background',
  'background.description': 'Set a background image for the New Tab page.',
  'background.none': 'None',
  'background.custom': 'Custom image',
  'background.urlPlaceholder': 'Enter an image URL',
  'background.or': 'or',
  'background.chooseFile': 'Select a local file',

  'interface.title': 'Interface language',
  'interface.description': 'The language of LingoTab\'s own buttons and labels. Auto follows your translation language.',
  'interface.select': 'Select interface language',
  'interface.auto': 'Auto',

  'theme.title': 'Theme',
  'theme.description': 'Switch between the light and dark look.',
  'theme.switch': 'Switch theme',
  'theme.dark': 'Dark',
  'theme.light': 'Light',

  'dictionary.title': 'Dictionary source',
  'dictionary.description': 'Where definitions and pronunciation come from. Automatic tries the main source and quietly switches to the other if it\'s down.',
  'dictionary.select': 'Select dictionary source',
  'dictionary.auto': 'Automatic',

  // Main Settings — Vocabulary
  'group.vocabulary': 'Vocabulary',
  'vocab.title': 'Vocabulary lists',
  'vocab.description': 'Choose which lists your new words come from.',
  'vocab.learningOnly': 'Learning words only',
  'vocab.learningOnlyHint': '(show only your saved words)',

  // Main Settings — Translation & Review
  'group.translationReview': 'Translation & Review',

  'translation.title': 'Hide translation',
  'translation.description': 'Keep the translation behind a “Show” button, so you can test yourself before seeing it.',

  'repetition.title': 'Learned words review',
  'repetition.description': 'Every so often, shows a word you\'ve already learned so you don\'t forget it.',
  'repetition.select': 'Choose repetition frequency',
  'repetition.off': 'Off',
  // Each frequency is its own whole phrase rather than a number dropped into one
  // sentence — that is what keeps languages with several plural forms working.
  'repetition.every1': 'Every word',
  'repetition.every2': 'Every 2 words',
  'repetition.every3': 'Every 3 words',
  'repetition.every4': 'Every 4 words',
  'repetition.every5': 'Every 5 words',
  'repetition.every10': 'Every 10 words',
  'repetition.every20': 'Every 20 words',

  // Main Settings — Your word lists
  'group.yourWordLists': 'Your word lists',
  'wordLists.title': 'Import & export',
  'wordLists.description': 'Save your word lists to a file, or load them back from one.',
  'wordLists.learning': 'Learning',
  'wordLists.learned': 'Learned',
  'wordLists.export': 'Export',
  'wordLists.import': 'Import file',

  // Main Settings — Ignored words
  'group.ignoredWords': 'Ignored words',
  'group.supportMe': 'Support me',
  'supportMe.description': 'If you found this extension useful, please consider supporting me. I plan to continue improving it, and your support will help make that possible. Thank you.',
  'supportMe.button': 'Support me on Ko-fi',
  'ignored.description': 'Ignored words never appear on a new tab. Remove one from the list to bring it back.',
  'ignored.empty': 'Use this icon on a word to hide it from your new tabs.',

  // Shared word list (ignored words, and the Learning/Learned panels)
  'list.search': 'Search',
  'list.empty': 'Nothing here yet',
  'list.noMatch': 'No words match your search',
  'list.remove': 'Remove from list',
  'list.sort.oldest': 'Sort: Oldest first',
  'list.sort.newest': 'Sort: Newest first',
  'list.sort.aToZ': 'Sort: A to Z',
  'list.sort.zToA': 'Sort: Z to A',

  // Import modals
  'import.ignored.title': 'Import ignored words',
  'import.ignored.subtitle': 'Add words to your ignored list from a text file.',
  'import.learning.title': 'Import learning words',
  'import.learning.subtitle': 'Add words to your Learning list from a text file.',
  'import.learned.title': 'Import learned words',
  'import.learned.subtitle': 'Add words to your Learned list from a text file.',
  'import.requirements': 'File requirements',
  'import.req.matching': 'Matching: only words found in LingoTab\'s vocabulary lists',
  'import.req.separators': 'Separators: space, tab, comma or line break',
  'import.req.length': 'Word length: up to 30 characters',
  'import.req.lowercase': 'All words are converted to lowercase',
  'import.req.format': 'File format: plain text (.txt)',
  // Deliberately a label with the number beside it, not "Found N words".
  'import.found': 'Words found:',
  'import.none': 'No words found in this file. Try another one.',
  'import.readError': 'Couldn\'t read this file. Make sure it\'s a plain text file and try again.',
  'import.cancel': 'Cancel',
  'import.confirm': 'Import',
  'wordLists.importJson': 'Import with translations (JSON)',
  'wordLists.exportJson': 'Export with translations (JSON)',
  'import.json.title': 'Import words with translations',
  'import.json.subtitle': 'Add words with your own translations and examples to Learning from a .json file. Translations and examples from the file replace the ones you already have.',
  'import.json.invalid': 'This isn\'t a valid LingoTab words file. Check that it\'s JSON in the expected format.',
  'import.json.newWords': 'New words:',
  'import.json.translations': 'Translations:',
  'import.json.replaced': 'Will replace yours:',
  'import.json.examples': 'Words with examples:',
  'import.json.replacedExamples': 'Will replace your examples:',
  'import.json.skipped': 'Skipped (not a single word):',
  'aiPrompt.title': 'Translations and examples with AI',
  'aiPrompt.description': 'Copy a ready-made prompt with your Learning words that still lack your own translation or examples. Paste it into ChatGPT, Claude or another AI chat, save the reply as a .json file and import it with “Import with translations (JSON)” above.',
  'aiPrompt.wordsCount': 'Words without your translation or examples:',
  'aiPrompt.copy': 'Copy prompt',
  'aiPrompt.copied': 'Copied!',
  'file.select': 'Select a file',

  // Smart Sentences — General
  'smart.enable.title': 'Smart Sentences',
  'smart.enable.description': 'Practise building sentences on the New Tab page instead of studying single words.',
  'smart.hints.title': 'Hints',
  'smart.hints.description': 'Add a multiple-choice grammar question to each sentence.',
  'smart.mix.title': 'Mix words & sentences',
  'smart.mix.description': 'Alternate between single words and sentence practice.',
  'smart.wordsPer.title': 'Words per sentence',
  'smart.wordsPer.description': 'How many words to show before the next sentence appears.',

  // Smart Sentences — Sentence pack
  'group.sentencePack': 'Sentence pack',
  'smart.builtIn.title': 'Built-in pack',
  'smart.builtIn.description': 'The sentence set that ships with LingoTab, already translated into your language.',
  'smart.create.title': 'Create your own',
  'smart.create.description': 'Copy a ready-made prompt into any AI chat. It asks you a few questions and gives back a file you can import below.',
  'smart.create.copy': 'Copy prompt',
  'smart.create.copied': 'Copied!',
  'smart.import.title': 'Import a pack',
  'smart.import.description': 'Load a sentence pack you saved as a file.',
  'smart.import.choose': 'Choose file',
  'smart.import.change': 'Change file',
  'smart.preview.title': 'Preview',
  'smart.preview.description': 'Check the sentences below. Accept to start using this pack, or discard it.',
  'smart.preview.accept': 'Accept',
  'smart.preview.discard': 'Discard',

  // New Tab — reveal buttons
  'word.showWord': 'Show word',
  'word.showTranslation': 'Show translation',
  'word.examples': 'Examples',
  'word.examplesSource': 'Example sentences:',
  'wordExamples.title': 'Usage examples',
  'wordExamples.description': 'Shows real sentences with the word and their translation in the first tab of the word card.',
  'editWord.examples': 'Examples',
  'editWord.addExample': 'Add example',
  'editWord.examplePlaceholder': 'Sentence with the word',
  'editWord.exampleTranslationPlaceholder': 'Translation (optional)',
  'editWord.removeExample': 'Remove example',
  'word.ownExamples': 'Your examples',
  'action.editExamples': 'Edit examples',

  // New Tab — empty and error screens
  'common.settings': 'Settings',
  'empty.noLists.title': 'No word lists selected',
  'empty.noLists.description': 'Choose at least one vocabulary list to start learning.',
  'empty.wordError.message': 'No definitions found for this word.',
  'empty.wordError.ignore': 'Ignore word',
  'empty.wordError.newWord': 'Get new word',
  'empty.offline.title': 'You\'re offline',
  'empty.offline.description': 'Connect to the internet to load word definitions.',
  'empty.learnedAll.title': 'Hooray!',
  'empty.learnedAll.description': 'You\'ve learned every word in your lists. Well done!',
  'empty.noPack': 'No sentence pack yet. Turn on the built-in pack in Settings, or import your own.',
  'empty.learningTitle': 'Your words will appear here',
  'empty.learning': 'Add them with the bookmark icon on a word card, or with the “Add word” button below.',
  'learningOnlyTip.text': 'To study only these words, turn on “Learning words only” in Settings → Vocabulary lists.',
  'learningOnlyTip.openSettings': 'Open settings',
  'empty.learned': 'Use this icon on a Learning word to move it here.',

  // New Tab — top bar
  'nav.search': 'Search word',
  'nav.options': 'Options',
  'nav.inventory': 'Word Inventory',
  'nav.inventorySubtitle': 'Browse all included words',
  'nav.history': 'History',
  'nav.historySubtitle': 'Last words that have been displayed',
  'nav.markedWords': 'Marked Words',
  'nav.close': 'Close',

  // New Tab — actions on a word
  'action.ignore': 'Ignore word',
  'action.markLearning': 'Mark as Learning',
  'action.markLearned': 'Mark as Learned',
  'action.listen': 'Listen',
  'action.next': 'Next',
  'repetitionBlock.title': 'Review Learned Word',

  // New Tab — site shortcuts
  'shortcut.add': 'Add shortcut',
  'shortcut.edit': 'Edit shortcut',
  'shortcut.remove': 'Remove',
  'shortcut.name': 'Name',
  'shortcut.url': 'URL',
  'shortcut.nameDuplicated': 'Name is duplicated.',
  'shortcut.cancel': 'Cancel',
  'shortcut.done': 'Done',

  // New Tab — edit word popup
  'action.editTranslation': 'Edit translation',
  'editWord.title': 'Edit word',
  'editWord.word': 'Word',
  'editWord.translation': 'Translation',
  'editWord.translationPlaceholder': 'Leave empty to use the automatic translation',
  'editWord.invalidWord': 'One word, no spaces or commas.',
  'editWord.duplicateWord': 'This word is already in the list.',
  'editWord.addTitle': 'Add word',
  'editWord.translate': 'Translate automatically',
  'editWord.translateFailed': 'Automatic translation unavailable — enter it manually.',
  'editWord.movedFromLearned': 'This word will be moved from Learned to Learning.',
  'editWord.movedFromIgnored': 'This word will be moved from Ignored words to Learning.',
  'list.sort.ownFirst': 'Sort: My translations first',
  'word.ownTranslation': 'Your translation',

  // New Tab — translation failures
  'translateFailure.quota.label': 'Daily limit reached',
  'translateFailure.quota.message': 'The free translation service has used up today\'s quota. Words you\'ve already opened still show their saved translations; new ones resume tomorrow.',
  'translateFailure.unavailable.label': 'Translation unavailable',
  'translateFailure.unavailable.message': 'Translation services can\'t be reached right now. Words you\'ve already opened still show their saved translations.',
  'translateFailure.dismiss': 'Dismiss',
  'translateFailure.translating': 'translating…',
  'translateFailure.tooltipQuota': 'Daily translation limit reached',
  'translateFailure.tooltipUnavailable': 'Translation unavailable',

  // New Tab — sentence practice
  'practice.translatePrompt': 'Translate to English:',
  'practice.inputPlaceholder': 'Type the English sentence here',
  'practice.inputLabel': 'Enter English sentence',
  'practice.check': 'Check',
  'practice.grammarReference': 'Grammar Reference',
} as const

export type MessageKey = keyof typeof en
