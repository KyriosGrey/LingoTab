import type { MessageKey } from './en'

// Polskie tłumaczenie interfejsu. Klucze i zasady — patrz en.ts: jedna pełna fraza,
// bez znaczników wewnątrz wartości i bez liczonych rzeczowników obok liczby.
//
// Typ `Partial` jest celowy: brakujący klucz po cichu wraca do angielskiego, więc
// niepełne tłumaczenie jest bezpieczne, a język można uzupełniać stopniowo.
//
// Formy osobowe rodzajowe („nauczyłeś się”) są tu świadomie omijane — z interfejsu
// korzystają wszyscy, więc zdania są bezosobowe.
export const pl: Partial<Record<MessageKey, string>> = {
  // Ustawienia — szkielet strony
  'settings.menu': 'Menu ustawień',
  'settings.brand': 'Ustawienia',
  'settings.tab.main': 'Ustawienia główne',
  'settings.tab.smart': 'Inteligentne zdania',
  'settings.tab.patchNotes': 'Co nowego',

  // Ustawienia główne — Ogólne
  'group.general': 'Ogólne',

  'lang.title': 'Język tłumaczenia',
  'lang.description': 'Język, na który tłumaczone są słowa i zdania.',
  'lang.select': 'Wybierz język tłumaczenia',

  'shortcuts.title': 'Skróty do stron',
  'shortcuts.description': 'Pokazuj zakładki na pasku po lewej stronie nowej karty.',

  'background.title': 'Tło',
  'background.description': 'Obraz tła nowej karty.',
  'background.none': 'Brak',
  'background.custom': 'Własny obraz',
  'background.urlPlaceholder': 'Adres obrazu',
  'background.or': 'lub',
  'background.chooseFile': 'Wybierz plik z komputera',

  'interface.title': 'Język interfejsu',
  'interface.description': 'Język przycisków i opisów samego LingoTab. „Auto” podąża za językiem tłumaczenia.',
  'interface.select': 'Wybierz język interfejsu',
  'interface.auto': 'Auto',

  'theme.title': 'Motyw',
  'theme.description': 'Jasny lub ciemny wygląd.',
  'theme.switch': 'Zmień motyw',
  'theme.dark': 'Ciemny',
  'theme.light': 'Jasny',

  'dictionary.title': 'Źródło słownika',
  'dictionary.description': 'Skąd pochodzą znaczenia słów i wymowa. „Automatycznie” próbuje głównego źródła i po cichu przełącza się na zapasowe, jeśli tamto nie działa.',
  'dictionary.select': 'Wybierz źródło słownika',
  'dictionary.auto': 'Automatycznie',

  // Ustawienia główne — Słownictwo
  'group.vocabulary': 'Słownictwo',
  'vocab.title': 'Listy słownictwa',
  'vocab.description': 'Z których list brać nowe słowa.',
  'vocab.learningOnly': 'Tylko słowa do nauki',
  'vocab.learningOnlyHint': '(pokazuj tylko zapisane słowa)',

  // Ustawienia główne — Tłumaczenie i powtórki
  'group.translationReview': 'Tłumaczenie i powtórki',

  'translation.title': 'Ukrywaj tłumaczenie',
  'translation.description': 'Tłumaczenie chowa się za przyciskiem „Pokaż” — można najpierw sprawdzić siebie.',

  'repetition.title': 'Powtórki nauczonych słów',
  'repetition.description': 'Co jakiś czas pokazuje już nauczone słowo, żeby nie zostało zapomniane.',
  'repetition.select': 'Wybierz częstotliwość powtórek',
  'repetition.off': 'Wyłączone',
  // Znów ten sam powód, dla którego każda częstotliwość ma własny klucz:
  // „2 słowa”, ale „5 słów”.
  'repetition.every1': 'Co słowo',
  'repetition.every2': 'Co 2 słowa',
  'repetition.every3': 'Co 3 słowa',
  'repetition.every4': 'Co 4 słowa',
  'repetition.every5': 'Co 5 słów',
  'repetition.every10': 'Co 10 słów',
  'repetition.every20': 'Co 20 słów',

  // Ustawienia główne — Twoje listy
  'group.yourWordLists': 'Twoje listy',
  'wordLists.title': 'Import i eksport',
  'wordLists.description': 'Zapisz listy słów do pliku lub wczytaj je z powrotem.',
  'wordLists.learning': 'Uczę się',
  'wordLists.learned': 'Nauczone',
  'wordLists.export': 'Eksport',
  'wordLists.import': 'Import',

  // Ustawienia główne — Ukryte słowa
  'group.ignoredWords': 'Ukryte słowa',
  'group.supportMe': 'Wesprzyj mnie',
  'supportMe.description': 'Jeśli rozszerzenie okazało się przydatne, być może zechcesz mnie wesprzeć. Planuję dalej je rozwijać, a Twoje wsparcie bardzo w tym pomoże. Dziękuję.',
  'supportMe.button': 'Wesprzyj mnie na Ko-fi',
  'ignored.description': 'Ukryte słowa nie pojawiają się już na nowej karcie. Usuń słowo z listy, aby je przywrócić.',
  'ignored.empty': 'Kliknij tę ikonę przy słowie, aby ukryć je na nowych kartach.',

  // Wspólna lista słów
  'list.search': 'Szukaj',
  'list.empty': 'Na razie pusto',
  'list.noMatch': 'Nic nie znaleziono',
  'list.remove': 'Usuń z listy',
  'list.sort.oldest': 'Sortowanie: najpierw starsze',
  'list.sort.newest': 'Sortowanie: najpierw nowsze',
  // Słowa są angielskie, więc i litery w opisie są łacińskie.
  'list.sort.aToZ': 'Sortowanie: od A do Z',
  'list.sort.zToA': 'Sortowanie: od Z do A',

  // Okna importu
  'import.ignored.title': 'Import ukrytych słów',
  'import.ignored.subtitle': 'Dodaj słowa do listy ukrytych z pliku tekstowego.',
  'import.learning.title': 'Import słów do nauki',
  'import.learning.subtitle': 'Dodaj słowa do listy „Uczę się” z pliku tekstowego.',
  'import.learned.title': 'Import nauczonych słów',
  'import.learned.subtitle': 'Dodaj słowa do listy „Nauczone” z pliku tekstowego.',
  'import.requirements': 'Wymagania pliku',
  'import.req.matching': 'Dopasowanie: tylko słowa z list słownictwa LingoTab',
  'import.req.separators': 'Separatory: spacja, tabulator, przecinek lub nowy wiersz',
  'import.req.length': 'Długość słowa: do 30 znaków',
  'import.req.lowercase': 'Wszystkie słowa są zamieniane na małe litery',
  'import.req.format': 'Format pliku: zwykły tekst (.txt)',
  'import.found': 'Znalezione słowa:',
  'import.none': 'W tym pliku nie znaleziono słów. Spróbuj innego.',
  'import.readError': 'Nie udało się odczytać pliku. Upewnij się, że to zwykły plik tekstowy, i spróbuj ponownie.',
  'import.cancel': 'Anuluj',
  'import.confirm': 'Importuj',
  'wordLists.importJson': 'Import z tłumaczeniem (JSON)',
  'wordLists.exportJson': 'Eksport z tłumaczeniem (JSON)',
  'import.json.title': 'Import słów z tłumaczeniem',
  'import.json.subtitle': 'Dodaj do „Uczę się” słowa z własnymi tłumaczeniami i przykładami z pliku .json. Tłumaczenia i przykłady z pliku zastąpią istniejące.',
  'import.json.invalid': 'To nie jest plik słów LingoTab. Sprawdź, czy to JSON w oczekiwanym formacie.',
  'import.json.newWords': 'Nowe słowa:',
  'import.json.translations': 'Tłumaczenia:',
  'import.json.replaced': 'Zastąpią Twoje:',
  'import.json.examples': 'Słowa z przykładami:',
  'import.json.replacedExamples': 'Zastąpią Twoje przykłady:',
  'import.json.skipped': 'Pominięte (nie jedno słowo):',
  'aiPrompt.title': 'Tłumaczenia i przykłady z pomocą AI',
  'aiPrompt.description': 'Skopiuj gotowy prompt — zawiera już Twoje słowa z „Uczę się” bez własnego tłumaczenia lub przykładów. Wklej go do ChatGPT, Claude lub innego czatu AI, zapisz odpowiedź jako plik .json i zaimportuj przyciskiem „Import z tłumaczeniem (JSON)” powyżej.',
  'aiPrompt.wordsCount': 'Słowa bez Twojego tłumaczenia lub przykładów:',
  'aiPrompt.copy': 'Kopiuj prompt',
  'aiPrompt.copied': 'Skopiowano!',
  'file.select': 'Wybierz plik',

  // Inteligentne zdania — Ogólne
  'smart.enable.title': 'Inteligentne zdania',
  'smart.enable.description': 'Ćwicz układanie zdań na nowej karcie zamiast nauki pojedynczych słów.',
  'smart.hints.title': 'Podpowiedzi',
  'smart.hints.description': 'Dodawaj do każdego zdania pytanie gramatyczne z wariantami odpowiedzi.',
  'smart.mix.title': 'Mieszaj słowa i zdania',
  'smart.mix.description': 'Pokazuj na przemian pojedyncze słowa i ćwiczenia ze zdaniami.',
  'smart.wordsPer.title': 'Słów na zdanie',
  'smart.wordsPer.description': 'Ile słów pokazać przed kolejnym zdaniem.',

  // Inteligentne zdania — Zestaw zdań
  'group.sentencePack': 'Zestaw zdań',
  'smart.builtIn.title': 'Zestaw wbudowany',
  'smart.builtIn.description': 'Zestaw zdań dołączony do LingoTab — już przetłumaczony na Twój język.',
  'smart.create.title': 'Stwórz własny',
  'smart.create.description': 'Skopiuj gotowy prompt do dowolnego czatu AI. Zada kilka pytań i zwróci plik, który możesz zaimportować poniżej.',
  'smart.create.copy': 'Kopiuj prompt',
  'smart.create.copied': 'Skopiowano!',
  'smart.import.title': 'Import zestawu',
  'smart.import.description': 'Wczytaj zestaw zdań z pliku.',
  'smart.import.choose': 'Wybierz plik',
  'smart.import.change': 'Zmień plik',
  'smart.preview.title': 'Podgląd',
  'smart.preview.description': 'Sprawdź zdania poniżej. Zatwierdź, aby zacząć z tego zestawu korzystać, albo go odrzuć.',
  'smart.preview.accept': 'Zatwierdź',
  'smart.preview.discard': 'Odrzuć',

  // Nowa karta — przyciski odsłaniania
  'word.showWord': 'Pokaż słowo',
  'word.showTranslation': 'Pokaż tłumaczenie',
  'word.examples': 'Przykłady',
  'word.examplesSource': 'Przykładowe zdania:',
  'wordExamples.title': 'Przykłady użycia',
  'wordExamples.description': 'Pokazuje prawdziwe zdania ze słowem i ich tłumaczenie w pierwszej karcie słowa.',
  'editWord.examples': 'Przykłady',
  'editWord.addExample': 'Dodaj przykład',
  'editWord.examplePlaceholder': 'Zdanie ze słowem',
  'editWord.exampleTranslationPlaceholder': 'Tłumaczenie (opcjonalnie)',
  'editWord.removeExample': 'Usuń przykład',
  'word.ownExamples': 'Twoje przykłady',
  'action.editExamples': 'Edytuj przykłady',

  // Nowa karta — ekrany puste i błędy
  'common.settings': 'Ustawienia',
  'empty.noLists.title': 'Nie wybrano żadnej listy',
  'empty.noLists.description': 'Wybierz co najmniej jedną listę słownictwa, aby zacząć.',
  'empty.wordError.message': 'Nie znaleziono znaczeń tego słowa.',
  'empty.wordError.ignore': 'Ukryj słowo',
  'empty.wordError.newWord': 'Inne słowo',
  'empty.offline.title': 'Brak połączenia',
  'empty.offline.description': 'Połącz się z internetem, aby wczytać znaczenia słów.',
  'empty.learnedAll.title': 'Hurra!',
  'empty.learnedAll.description': 'Wszystkie słowa z Twoich list są już nauczone. Świetna robota!',
  'empty.noPack': 'Nie ma jeszcze zestawu zdań. Włącz wbudowany w ustawieniach albo zaimportuj własny.',
  'empty.learningTitle': 'Tutaj pojawią się Twoje słowa',
  'empty.learning': 'Dodawaj je ikoną zakładki na karcie słowa lub przyciskiem „Dodaj słowo” poniżej.',
  'learningOnlyTip.text': 'Aby uczyć się tylko tych słów, włącz „Tylko słowa do nauki” w Ustawienia → Listy słownictwa.',
  'learningOnlyTip.openSettings': 'Otwórz ustawienia',
  'empty.learned': 'Kliknij tę ikonę przy słowie z listy „Uczę się”, aby przenieść je tutaj.',

  // Nowa karta — górny pasek
  'nav.search': 'Szukaj słowa',
  'nav.options': 'Ustawienia',
  'nav.inventory': 'Wszystkie słowa',
  'nav.inventorySubtitle': 'Przejrzyj wszystkie słowa z list',
  'nav.history': 'Historia',
  'nav.historySubtitle': 'Ostatnio pokazane słowa',
  'nav.markedWords': 'Oznaczone słowa',
  'nav.close': 'Zamknij',

  // Nowa karta — działania na słowie
  'action.ignore': 'Ukryj słowo',
  'action.markLearning': 'Do listy „Uczę się”',
  'action.markLearned': 'Do listy „Nauczone”',
  'action.listen': 'Odsłuchaj',
  'action.next': 'Dalej',
  'repetitionBlock.title': 'Powtórka nauczonego słowa',

  // Nowa karta — skróty do stron
  'shortcut.add': 'Dodaj skrót',
  'shortcut.edit': 'Edytuj skrót',
  'shortcut.remove': 'Usuń',
  'shortcut.name': 'Nazwa',
  'shortcut.url': 'Adres',
  'shortcut.nameDuplicated': 'Taka nazwa już istnieje.',
  'shortcut.cancel': 'Anuluj',
  'shortcut.done': 'Gotowe',
  'action.editTranslation': 'Edytuj tłumaczenie',
  'editWord.title': 'Edytuj słowo',
  'editWord.word': 'Słowo',
  'editWord.translation': 'Tłumaczenie',
  'editWord.translationPlaceholder': 'Zostaw puste, aby użyć automatycznego tłumaczenia',
  'editWord.invalidWord': 'Jedno słowo, bez spacji i przecinków.',
  'editWord.duplicateWord': 'To słowo jest już na liście.',
  'editWord.addTitle': 'Dodaj słowo',
  'editWord.translate': 'Przetłumacz automatycznie',
  'editWord.translateFailed': 'Automatyczne tłumaczenie niedostępne — wpisz ręcznie.',
  'editWord.movedFromLearned': 'Słowo zostanie przeniesione z „Nauczone” do „Uczę się”.',
  'editWord.movedFromIgnored': 'Słowo zostanie przeniesione z ignorowanych do „Uczę się”.',
  'list.sort.ownFirst': 'Sortuj: najpierw z moim tłumaczeniem',
  'word.ownTranslation': 'Twoje tłumaczenie',

  // Nowa karta — awarie tłumaczenia
  'translateFailure.quota.label': 'Dzienny limit wyczerpany',
  'translateFailure.quota.message': 'Darmowy serwis tłumaczeń wyczerpał dzienny limit. Już otwarte słowa nadal pokazują zapisane tłumaczenia, nowe pojawią się jutro.',
  'translateFailure.unavailable.label': 'Tłumaczenie niedostępne',
  'translateFailure.unavailable.message': 'Nie można teraz połączyć się z żadnym serwisem tłumaczeń. Już otwarte słowa nadal pokazują zapisane tłumaczenia.',
  'translateFailure.dismiss': 'Zamknij',
  'translateFailure.translating': 'tłumaczenie…',
  'translateFailure.tooltipQuota': 'Dzienny limit tłumaczeń wyczerpany',
  'translateFailure.tooltipUnavailable': 'Tłumaczenie niedostępne',

  // Nowa karta — ćwiczenia ze zdaniami
  'practice.translatePrompt': 'Przetłumacz na angielski:',
  'practice.inputPlaceholder': 'Wpisz zdanie po angielsku',
  'practice.inputLabel': 'Wpisz zdanie po angielsku',
  'practice.check': 'Sprawdź',
  'practice.grammarReference': 'Poradnik gramatyczny',
}
