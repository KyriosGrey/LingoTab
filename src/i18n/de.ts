import type { MessageKey } from './en'

// Deutsche Übersetzung der Oberfläche. Schlüssel und Regeln — siehe en.ts: ein
// vollständiger Satz pro Schlüssel, kein Markup im Wert, keine gezählten Substantive
// neben einer Zahl.
//
// `Partial` ist Absicht: ein fehlender Schlüssel fällt still auf Englisch zurück,
// eine unvollständige Übersetzung ist also unbedenklich.
//
// Angesprochen wird durchgehend mit „du“ — LingoTab ist eine Lern-App, kein
// Verwaltungsformular. Wo es ohne Anrede geht, bleiben die Sätze unpersönlich.
export const de: Partial<Record<MessageKey, string>> = {
  // Einstellungen — Seitengerüst
  'settings.menu': 'Einstellungsmenü',
  'settings.brand': 'Einstellungen',
  'settings.tab.main': 'Haupteinstellungen',
  'settings.tab.smart': 'Intelligente Sätze',
  'settings.tab.patchNotes': 'Neuigkeiten',

  // Haupteinstellungen — Allgemein
  'group.general': 'Allgemein',

  'lang.title': 'Übersetzungssprache',
  'lang.description': 'Die Sprache, in die Wörter und Sätze übersetzt werden.',
  'lang.select': 'Übersetzungssprache auswählen',

  'shortcuts.title': 'Website-Verknüpfungen',
  'shortcuts.description': 'Lesezeichen als Leiste links im neuen Tab anzeigen.',

  'background.title': 'Hintergrund',
  'background.description': 'Hintergrundbild für den neuen Tab.',
  'background.none': 'Keiner',
  'background.custom': 'Eigenes Bild',
  'background.urlPlaceholder': 'Bild-URL eingeben',
  'background.or': 'oder',
  'background.chooseFile': 'Datei vom Computer wählen',

  'interface.title': 'Oberflächensprache',
  'interface.description': 'Die Sprache der Schaltflächen und Beschriftungen von LingoTab selbst. „Auto“ folgt deiner Übersetzungssprache.',
  'interface.select': 'Oberflächensprache auswählen',
  'interface.auto': 'Auto',

  'theme.title': 'Design',
  'theme.description': 'Helles oder dunkles Erscheinungsbild.',
  'theme.switch': 'Design wechseln',
  'theme.dark': 'Dunkel',
  'theme.light': 'Hell',

  'dictionary.title': 'Wörterbuchquelle',
  'dictionary.description': 'Woher Wortbedeutungen und Aussprache kommen. „Automatisch“ versucht es mit der Hauptquelle und wechselt unauffällig zur Ersatzquelle, wenn sie nicht erreichbar ist.',
  'dictionary.select': 'Wörterbuchquelle auswählen',
  'dictionary.auto': 'Automatisch',

  // Haupteinstellungen — Wortschatz
  'group.vocabulary': 'Wortschatz',
  'vocab.title': 'Wortschatzlisten',
  'vocab.description': 'Aus welchen Listen neue Wörter kommen.',
  'vocab.learningOnly': 'Nur Wörter, die ich lerne',
  'vocab.learningOnlyHint': '(nur gespeicherte Wörter anzeigen)',

  // Haupteinstellungen — Übersetzung und Wiederholung
  'group.translationReview': 'Übersetzung und Wiederholung',

  'translation.title': 'Übersetzung verbergen',
  'translation.description': 'Die Übersetzung bleibt hinter einer Schaltfläche, damit du dich erst selbst prüfen kannst.',

  'repetition.title': 'Wiederholung gelernter Wörter',
  'repetition.description': 'Zeigt ab und zu ein bereits gelerntes Wort, damit es nicht in Vergessenheit gerät.',
  'repetition.select': 'Häufigkeit der Wiederholung wählen',
  'repetition.off': 'Aus',
  // Im Deutschen wäre eine Zahl im Satz unproblematisch — die getrennten Schlüssel
  // bleiben trotzdem, weil sie für die slawischen Sprachen gebraucht werden.
  'repetition.every1': 'Jedes Wort',
  'repetition.every2': 'Alle 2 Wörter',
  'repetition.every3': 'Alle 3 Wörter',
  'repetition.every4': 'Alle 4 Wörter',
  'repetition.every5': 'Alle 5 Wörter',
  'repetition.every10': 'Alle 10 Wörter',
  'repetition.every20': 'Alle 20 Wörter',

  // Haupteinstellungen — Deine Listen
  'group.yourWordLists': 'Deine Listen',
  'wordLists.title': 'Import und Export',
  'wordLists.description': 'Wortlisten in einer Datei speichern oder wieder daraus laden.',
  'wordLists.learning': 'Lernen',
  'wordLists.learned': 'Gelernt',
  'wordLists.export': 'Export',
  'wordLists.import': 'Import',

  // Haupteinstellungen — Ausgeblendete Wörter
  'group.ignoredWords': 'Ausgeblendete Wörter',
  'group.supportMe': 'Unterstütze mich',
  'supportMe.description': 'Wenn dir die Erweiterung nützlich ist, möchtest du mich vielleicht unterstützen. Ich plane, sie weiter zu verbessern, und deine Unterstützung trägt wesentlich dazu bei. Danke.',
  'supportMe.button': 'Unterstütze mich auf Ko-fi',
  'ignored.description': 'Ausgeblendete Wörter erscheinen nicht mehr im neuen Tab. Entferne ein Wort aus der Liste, um es zurückzuholen.',
  'ignored.empty': 'Klicke dieses Symbol bei einem Wort an, um es aus neuen Tabs auszublenden.',

  // Gemeinsame Wortliste
  'list.search': 'Suchen',
  'list.empty': 'Noch nichts da',
  'list.noMatch': 'Nichts gefunden',
  'list.remove': 'Aus der Liste entfernen',
  'list.sort.oldest': 'Sortierung: älteste zuerst',
  'list.sort.newest': 'Sortierung: neueste zuerst',
  // Die Wörter sind englisch, also bleiben die Buchstaben lateinisch.
  'list.sort.aToZ': 'Sortierung: A bis Z',
  'list.sort.zToA': 'Sortierung: Z bis A',

  // Import-Fenster
  'import.ignored.title': 'Ausgeblendete Wörter importieren',
  'import.ignored.subtitle': 'Wörter aus einer Textdatei zur Liste der ausgeblendeten hinzufügen.',
  'import.learning.title': 'Wörter zum Lernen importieren',
  'import.learning.subtitle': 'Wörter aus einer Textdatei zur Liste „Lernen“ hinzufügen.',
  'import.learned.title': 'Gelernte Wörter importieren',
  'import.learned.subtitle': 'Wörter aus einer Textdatei zur Liste „Gelernt“ hinzufügen.',
  'import.requirements': 'Anforderungen an die Datei',
  'import.req.matching': 'Abgleich: nur Wörter aus den Wortschatzlisten von LingoTab',
  'import.req.separators': 'Trennzeichen: Leerzeichen, Tabulator, Komma oder Zeilenumbruch',
  'import.req.length': 'Wortlänge: bis zu 30 Zeichen',
  'import.req.lowercase': 'Alle Wörter werden in Kleinbuchstaben umgewandelt',
  'import.req.format': 'Dateiformat: reiner Text (.txt)',
  'import.found': 'Gefundene Wörter:',
  'import.none': 'In dieser Datei wurden keine Wörter gefunden. Probiere eine andere.',
  'import.readError': 'Die Datei konnte nicht gelesen werden. Stelle sicher, dass es eine reine Textdatei ist, und versuche es erneut.',
  'import.cancel': 'Abbrechen',
  'import.confirm': 'Importieren',
  'wordLists.importJson': 'Import mit Übersetzung (JSON)',
  'wordLists.exportJson': 'Export mit Übersetzung (JSON)',
  'import.json.title': 'Wörter mit Übersetzung importieren',
  'import.json.subtitle': 'Füge „Lernen“ Wörter mit eigenen Übersetzungen aus einer .json-Datei hinzu. Eine Übersetzung aus der Datei ersetzt die vorhandene.',
  'import.json.invalid': 'Das ist keine gültige LingoTab-Wortdatei. Prüfe, ob es JSON im erwarteten Format ist.',
  'import.json.newWords': 'Neue Wörter:',
  'import.json.translations': 'Übersetzungen:',
  'import.json.replaced': 'Ersetzen deine:',
  'import.json.skipped': 'Übersprungen (kein einzelnes Wort):',
  'aiPrompt.title': 'Wörter mit KI übersetzen',
  'aiPrompt.description': 'Kopiere einen fertigen Prompt, der bereits deine „Lernen“-Wörter ohne eigene Übersetzung enthält. Füge ihn in ChatGPT, Claude oder einen anderen KI-Chat ein, speichere die Antwort als .json-Datei und importiere sie oben über „Import mit Übersetzung (JSON)“.',
  'aiPrompt.wordsCount': 'Wörter ohne deine Übersetzung:',
  'aiPrompt.copy': 'Prompt kopieren',
  'aiPrompt.copied': 'Kopiert!',
  'file.select': 'Datei wählen',

  // Intelligente Sätze — Allgemein
  'smart.enable.title': 'Intelligente Sätze',
  'smart.enable.description': 'Im neuen Tab Sätze bilden üben, statt einzelne Wörter zu lernen.',
  'smart.hints.title': 'Hinweise',
  'smart.hints.description': 'Zu jedem Satz eine Grammatikfrage mit Antwortmöglichkeiten hinzufügen.',
  'smart.mix.title': 'Wörter und Sätze mischen',
  'smart.mix.description': 'Abwechselnd einzelne Wörter und Satzübungen zeigen.',
  'smart.wordsPer.title': 'Wörter pro Satz',
  'smart.wordsPer.description': 'Wie viele Wörter bis zum nächsten Satz gezeigt werden.',

  // Intelligente Sätze — Satzpaket
  'group.sentencePack': 'Satzpaket',
  'smart.builtIn.title': 'Mitgeliefertes Paket',
  'smart.builtIn.description': 'Das Satzpaket, das LingoTab mitbringt — bereits in deine Sprache übersetzt.',
  'smart.create.title': 'Eigenes erstellen',
  'smart.create.description': 'Kopiere einen fertigen Prompt in einen beliebigen KI-Chat. Er stellt ein paar Fragen und gibt eine Datei zurück, die du unten importieren kannst.',
  'smart.create.copy': 'Prompt kopieren',
  'smart.create.copied': 'Kopiert!',
  'smart.import.title': 'Paket importieren',
  'smart.import.description': 'Ein Satzpaket aus einer Datei laden.',
  'smart.import.choose': 'Datei wählen',
  'smart.import.change': 'Datei ändern',
  'smart.preview.title': 'Vorschau',
  'smart.preview.description': 'Prüfe die Sätze unten. Übernimm sie, um mit diesem Paket zu üben, oder verwirf es.',
  'smart.preview.accept': 'Übernehmen',
  'smart.preview.discard': 'Verwerfen',

  // Neuer Tab — Aufdeck-Schaltflächen
  'word.showWord': 'Wort anzeigen',
  'word.showTranslation': 'Übersetzung anzeigen',

  // Neuer Tab — leere Zustände und Fehler
  'common.settings': 'Einstellungen',
  'empty.noLists.title': 'Keine Liste ausgewählt',
  'empty.noLists.description': 'Wähle mindestens eine Wortschatzliste aus, um loszulegen.',
  'empty.wordError.message': 'Für dieses Wort wurden keine Bedeutungen gefunden.',
  'empty.wordError.ignore': 'Wort ausblenden',
  'empty.wordError.newWord': 'Anderes Wort',
  'empty.offline.title': 'Keine Verbindung',
  'empty.offline.description': 'Verbinde dich mit dem Internet, um Wortbedeutungen zu laden.',
  'empty.learnedAll.title': 'Hurra!',
  'empty.learnedAll.description': 'Du hast alle Wörter aus deinen Listen gelernt. Gut gemacht!',
  'empty.noPack': 'Noch kein Satzpaket vorhanden. Aktiviere das mitgelieferte in den Einstellungen oder importiere ein eigenes.',
  'empty.learningTitle': 'Hier erscheinen deine Wörter',
  'empty.learning': 'Füge sie mit dem Lesezeichen-Symbol auf einer Wortkarte oder mit der Schaltfläche „Wort hinzufügen“ unten hinzu.',
  'learningOnlyTip.text': 'Um nur diese Wörter zu lernen, aktiviere „Nur Wörter, die ich lerne“ unter Einstellungen → Wortschatzlisten.',
  'learningOnlyTip.openSettings': 'Einstellungen öffnen',
  'empty.learned': 'Klicke dieses Symbol bei einem Wort aus „Lernen“ an, um es hierher zu verschieben.',

  // Neuer Tab — obere Leiste
  'nav.search': 'Wort suchen',
  'nav.options': 'Einstellungen',
  'nav.inventory': 'Alle Wörter',
  'nav.inventorySubtitle': 'Alle Wörter aus den Listen durchsehen',
  'nav.history': 'Verlauf',
  'nav.historySubtitle': 'Zuletzt angezeigte Wörter',
  'nav.markedWords': 'Markierte Wörter',
  'nav.close': 'Schließen',

  // Neuer Tab — Aktionen am Wort
  'action.ignore': 'Wort ausblenden',
  'action.markLearning': 'Zur Liste „Lernen“',
  'action.markLearned': 'Zur Liste „Gelernt“',
  'action.listen': 'Anhören',
  'action.next': 'Weiter',
  'repetitionBlock.title': 'Wiederholung eines gelernten Wortes',

  // Neuer Tab — Website-Verknüpfungen
  'shortcut.add': 'Verknüpfung hinzufügen',
  'shortcut.edit': 'Verknüpfung bearbeiten',
  'shortcut.remove': 'Entfernen',
  'shortcut.name': 'Name',
  'shortcut.url': 'Adresse',
  'shortcut.nameDuplicated': 'Diesen Namen gibt es bereits.',
  'shortcut.cancel': 'Abbrechen',
  'shortcut.done': 'Fertig',
  'action.editTranslation': 'Übersetzung bearbeiten',
  'editWord.title': 'Wort bearbeiten',
  'editWord.word': 'Wort',
  'editWord.translation': 'Übersetzung',
  'editWord.translationPlaceholder': 'Leer lassen, um die automatische Übersetzung zu verwenden',
  'editWord.invalidWord': 'Ein Wort, ohne Leerzeichen oder Kommas.',
  'editWord.duplicateWord': 'Dieses Wort ist bereits in der Liste.',
  'editWord.addTitle': 'Wort hinzufügen',
  'editWord.translate': 'Automatisch übersetzen',
  'editWord.translateFailed': 'Automatische Übersetzung nicht verfügbar – bitte manuell eingeben.',
  'editWord.movedFromLearned': 'Das Wort wird von „Gelernt“ nach „Lernen“ verschoben.',
  'editWord.movedFromIgnored': 'Das Wort wird von den ignorierten Wörtern nach „Lernen“ verschoben.',
  'list.sort.ownFirst': 'Sortieren: Meine Übersetzungen zuerst',
  'word.ownTranslation': 'Deine Übersetzung',

  // Neuer Tab — Übersetzungsprobleme
  'translateFailure.quota.label': 'Tageslimit erreicht',
  'translateFailure.quota.message': 'Der kostenlose Übersetzungsdienst hat sein Tageslimit aufgebraucht. Bereits geöffnete Wörter zeigen weiterhin ihre gespeicherten Übersetzungen, neue folgen morgen.',
  'translateFailure.unavailable.label': 'Übersetzung nicht verfügbar',
  'translateFailure.unavailable.message': 'Derzeit ist kein Übersetzungsdienst erreichbar. Bereits geöffnete Wörter zeigen weiterhin ihre gespeicherten Übersetzungen.',
  'translateFailure.dismiss': 'Schließen',
  'translateFailure.translating': 'Übersetzung…',
  'translateFailure.tooltipQuota': 'Tageslimit für Übersetzungen erreicht',
  'translateFailure.tooltipUnavailable': 'Übersetzung nicht verfügbar',

  // Neuer Tab — Satzübungen
  'practice.translatePrompt': 'Ins Englische übersetzen:',
  'practice.inputPlaceholder': 'Englischen Satz hier eingeben',
  'practice.inputLabel': 'Englischen Satz eingeben',
  'practice.check': 'Prüfen',
  'practice.grammarReference': 'Grammatik-Referenz',
}
