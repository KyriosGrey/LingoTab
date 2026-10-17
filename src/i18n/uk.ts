import type { MessageKey } from './en'

// Український переклад інтерфейсу. Ключі та правила — див. en.ts: одна фраза цілком,
// без розмітки всередині значення й без злічуваних іменників поряд із числом.
//
// Тип `Partial` навмисний: будь-який пропущений ключ мовчки береться з англійської,
// тож неповний переклад безпечний і мову можна доповнювати поступово.
export const uk: Partial<Record<MessageKey, string>> = {
  // Налаштування — каркас сторінки
  'settings.menu': 'Меню налаштувань',
  'settings.brand': 'Налаштування',
  'settings.tab.main': 'Основні налаштування',
  'settings.tab.smart': 'Розумні речення',
  'settings.tab.patchNotes': 'Що нового',

  // Основні налаштування — Основне
  'group.general': 'Основне',

  'lang.title': 'Мова перекладу',
  'lang.description': 'Мова, якою перекладаються слова та речення.',
  'lang.select': 'Оберіть мову перекладу',

  'shortcuts.title': 'Ярлики сайтів',
  'shortcuts.description': 'Показувати закладки смугою ліворуч на новій вкладці.',

  'background.title': 'Фон',
  'background.description': 'Фонове зображення нової вкладки.',
  'background.none': 'Без фону',
  'background.custom': 'Власне зображення',
  'background.urlPlaceholder': 'Посилання на зображення',
  'background.or': 'або',
  'background.chooseFile': 'Вибрати файл на комп’ютері',

  'interface.title': 'Мова інтерфейсу',
  'interface.description': 'Мова кнопок і підписів самого LingoTab. «Авто» — як мова перекладу.',
  'interface.select': 'Оберіть мову інтерфейсу',
  'interface.auto': 'Авто',

  'theme.title': 'Тема',
  'theme.description': 'Світле або темне оформлення.',
  'theme.switch': 'Змінити тему',
  'theme.dark': 'Темна',
  'theme.light': 'Світла',

  'dictionary.title': 'Джерело словника',
  'dictionary.description': 'Звідки беруться значення слів і вимова. «Автоматично» пробує основне джерело й непомітно перемикається на запасне, якщо те недоступне.',
  'dictionary.select': 'Оберіть джерело словника',
  'dictionary.auto': 'Автоматично',

  // Основні налаштування — Словник
  'group.vocabulary': 'Словник',
  'vocab.title': 'Словникові списки',
  'vocab.description': 'З яких списків брати нові слова.',
  'vocab.learningOnly': 'Лише слова, які вивчаю',
  'vocab.learningOnlyHint': '(показувати лише збережені слова)',

  // Основні налаштування — Переклад і повторення
  'group.translationReview': 'Переклад і повторення',

  'translation.title': 'Приховувати переклад',
  'translation.description': 'Переклад ховається за кнопкою «Показати» — так можна спершу перевірити себе.',

  'repetition.title': 'Повторення вивченого',
  'repetition.description': 'Час від часу показує слово, яке ви вже вивчили, щоб воно не забулося.',
  'repetition.select': 'Оберіть частоту повторення',
  'repetition.off': 'Вимкнено',
  // Той самий випадок, що й у російській: «2 слова», але «5 слів».
  'repetition.every1': 'Кожне слово',
  'repetition.every2': 'Кожні 2 слова',
  'repetition.every3': 'Кожні 3 слова',
  'repetition.every4': 'Кожні 4 слова',
  'repetition.every5': 'Кожні 5 слів',
  'repetition.every10': 'Кожні 10 слів',
  'repetition.every20': 'Кожні 20 слів',

  // Основні налаштування — Ваші списки
  'group.yourWordLists': 'Ваші списки',
  'wordLists.title': 'Імпорт та експорт',
  'wordLists.description': 'Зберегти списки слів у файл або завантажити їх назад.',
  'wordLists.learning': 'Вивчаю',
  'wordLists.learned': 'Вивчено',
  'wordLists.export': 'Експорт',
  'wordLists.import': 'Імпорт',

  // Основні налаштування — Приховані слова
  'group.ignoredWords': 'Приховані слова',
  'ignored.description': 'Приховані слова більше не з’являються на новій вкладці. Видаліть слово зі списку, щоб повернути його.',
  'ignored.empty': 'Натисніть цю іконку на слові, щоб приховати його з нових вкладок.',

  // Спільний список слів
  'list.search': 'Пошук',
  'list.empty': 'Поки порожньо',
  'list.noMatch': 'Нічого не знайдено',
  'list.remove': 'Видалити зі списку',
  'list.sort.oldest': 'Сортування: спочатку старі',
  'list.sort.newest': 'Сортування: спочатку нові',
  // Слова англійські, тому й літери в підписі латинські.
  'list.sort.aToZ': 'Сортування: від A до Z',
  'list.sort.zToA': 'Сортування: від Z до A',

  // Вікна імпорту
  'import.ignored.title': 'Імпорт прихованих слів',
  'import.ignored.subtitle': 'Додати слова до списку прихованих із текстового файлу.',
  'import.learning.title': 'Імпорт слів, які вивчаєте',
  'import.learning.subtitle': 'Додати слова до списку «Вивчаю» з текстового файлу.',
  'import.learned.title': 'Імпорт вивчених слів',
  'import.learned.subtitle': 'Додати слова до списку «Вивчено» з текстового файлу.',
  'import.requirements': 'Вимоги до файлу',
  'import.req.matching': 'Збіги: лише слова зі словникових списків LingoTab',
  'import.req.separators': 'Роздільники: пробіл, табуляція, кома або перенесення рядка',
  'import.req.length': 'Довжина слова: до 30 символів',
  'import.req.lowercase': 'Усі слова переводяться в нижній регістр',
  'import.req.format': 'Формат файлу: звичайний текст (.txt)',
  'import.found': 'Знайдено слів:',
  'import.none': 'У цьому файлі слів не знайшлося. Спробуйте інший.',
  'import.readError': 'Не вдалося прочитати файл. Переконайтеся, що це звичайний текстовий файл, і спробуйте ще раз.',
  'import.cancel': 'Скасувати',
  'import.confirm': 'Імпортувати',
  'wordLists.importJson': 'Імпорт з перекладом (JSON)',
  'wordLists.exportJson': 'Експорт з перекладом (JSON)',
  'import.json.title': 'Імпорт слів з перекладом',
  'import.json.subtitle': 'Додайте до «Вивчаю» слова з власними перекладами з файлу .json. Переклад із файлу замінить наявний.',
  'import.json.invalid': 'Це не файл слів LingoTab. Перевірте, що це JSON у потрібному форматі.',
  'import.json.newWords': 'Нових слів:',
  'import.json.translations': 'Перекладів:',
  'import.json.replaced': 'Замінять ваші:',
  'import.json.skipped': 'Пропущено (не одне слово):',
  'aiPrompt.title': 'Переклад слів за допомогою ШІ',
  'aiPrompt.description': 'Скопіюйте готовий промпт — у ньому вже є ваші слова з «Вивчаю» без власного перекладу. Вставте його в ChatGPT, Claude чи інший ШІ-чат, збережіть відповідь як файл .json та завантажте кнопкою «Імпорт з перекладом (JSON)» вище.',
  'aiPrompt.wordsCount': 'Слів без вашого перекладу:',
  'aiPrompt.copy': 'Скопіювати промпт',
  'aiPrompt.copied': 'Скопійовано!',
  'file.select': 'Вибрати файл',

  // Розумні речення — Основне
  'smart.enable.title': 'Розумні речення',
  'smart.enable.description': 'Тренувати складання речень на новій вкладці замість вивчення окремих слів.',
  'smart.hints.title': 'Підказки',
  'smart.hints.description': 'Додавати до кожного речення граматичне запитання з варіантами відповіді.',
  'smart.mix.title': 'Чергувати слова й речення',
  'smart.mix.description': 'Показувати то окремі слова, то тренування речень.',
  'smart.wordsPer.title': 'Слів на речення',
  'smart.wordsPer.description': 'Скільки слів показати до наступного речення.',

  // Розумні речення — Набір речень
  'group.sentencePack': 'Набір речень',
  'smart.builtIn.title': 'Вбудований набір',
  'smart.builtIn.description': 'Набір речень, який іде разом із LingoTab, — уже перекладений вашою мовою.',
  'smart.create.title': 'Створити свій',
  'smart.create.description': 'Скопіюйте готовий промпт у будь-який ШІ-чат. Він поставить кілька запитань і поверне файл, який можна імпортувати нижче.',
  'smart.create.copy': 'Копіювати промпт',
  'smart.create.copied': 'Скопійовано!',
  'smart.import.title': 'Імпорт набору',
  'smart.import.description': 'Завантажити набір речень із файлу.',
  'smart.import.choose': 'Вибрати файл',
  'smart.import.change': 'Замінити файл',
  'smart.preview.title': 'Попередній перегляд',
  'smart.preview.description': 'Перевірте речення нижче. Прийміть, щоб займатися за цим набором, або відхиліть його.',
  'smart.preview.accept': 'Прийняти',
  'smart.preview.discard': 'Відхилити',

  // Нова вкладка — кнопки показу
  'word.showWord': 'Показати слово',
  'word.showTranslation': 'Показати переклад',

  // Нова вкладка — заглушки та помилки
  'common.settings': 'Налаштування',
  'empty.noLists.title': 'Не вибрано жодного списку',
  'empty.noLists.description': 'Оберіть хоча б один словниковий список, щоб почати.',
  'empty.wordError.message': 'Для цього слова не знайшлося значень.',
  'empty.wordError.ignore': 'Приховати слово',
  'empty.wordError.newWord': 'Інше слово',
  'empty.offline.title': 'Немає підключення',
  'empty.offline.description': 'Підключіться до інтернету, щоб завантажити значення слів.',
  'empty.learnedAll.title': 'Ура!',
  'empty.learnedAll.description': 'Ви вивчили всі слова зі своїх списків. Чудова робота!',
  'empty.noPack': 'Набору речень поки немає. Увімкніть вбудований у налаштуваннях або імпортуйте свій.',
  'empty.learning': 'Натисніть цю іконку на слові, щоб додати його сюди.',
  'empty.learned': 'Натисніть цю іконку на слові, яке вивчаєте, щоб перенести його сюди.',

  // Нова вкладка — верхня панель
  'nav.search': 'Пошук слова',
  'nav.options': 'Налаштування',
  'nav.inventory': 'Усі слова',
  'nav.inventorySubtitle': 'Переглянути всі слова зі списків',
  'nav.history': 'Історія',
  'nav.historySubtitle': 'Останні показані слова',
  'nav.markedWords': 'Позначені слова',
  'nav.close': 'Закрити',

  // Нова вкладка — дії зі словом
  'action.ignore': 'Приховати слово',
  'action.markLearning': 'До списку «Вивчаю»',
  'action.markLearned': 'До списку «Вивчено»',
  'action.listen': 'Прослухати',
  'action.next': 'Далі',
  'repetitionBlock.title': 'Повторення вивченого слова',

  // Нова вкладка — ярлики сайтів
  'shortcut.add': 'Додати ярлик',
  'shortcut.edit': 'Змінити ярлик',
  'shortcut.remove': 'Видалити',
  'shortcut.name': 'Назва',
  'shortcut.url': 'Посилання',
  'shortcut.nameDuplicated': 'Така назва вже є.',
  'shortcut.cancel': 'Скасувати',
  'shortcut.done': 'Готово',
  'action.editTranslation': 'Змінити переклад',
  'editWord.title': 'Змінити слово',
  'editWord.word': 'Слово',
  'editWord.translation': 'Переклад',
  'editWord.translationPlaceholder': 'Залиште порожнім — буде автоматичний переклад',
  'editWord.invalidWord': 'Одне слово, без пробілів і ком.',
  'editWord.duplicateWord': 'Це слово вже є в списку.',
  'editWord.addTitle': 'Додати слово',
  'editWord.translate': 'Перекласти автоматично',
  'editWord.translateFailed': 'Автопереклад недоступний — введіть вручну.',
  'editWord.movedFromLearned': 'Слово буде перенесено з «Вивчено» до «Вивчаю».',
  'editWord.movedFromIgnored': 'Слово буде перенесено з ігнорованих до «Вивчаю».',
  'list.sort.ownFirst': 'Сортування: спершу з моїм перекладом',
  'word.ownTranslation': 'Ваш переклад',

  // Нова вкладка — збої перекладу
  'translateFailure.quota.label': 'Денний ліміт вичерпано',
  'translateFailure.quota.message': 'Безкоштовний сервіс перекладу вичерпав денний ліміт. Уже відкриті слова й далі показують збережені переклади, нові з’являться завтра.',
  'translateFailure.unavailable.label': 'Переклад недоступний',
  'translateFailure.unavailable.message': 'Зараз не вдається зв’язатися з жодним сервісом перекладу. Уже відкриті слова й далі показують збережені переклади.',
  'translateFailure.dismiss': 'Закрити',
  'translateFailure.translating': 'переклад…',
  'translateFailure.tooltipQuota': 'Денний ліміт перекладів вичерпано',
  'translateFailure.tooltipUnavailable': 'Переклад недоступний',

  // Нова вкладка — тренування речень
  'practice.translatePrompt': 'Перекладіть англійською:',
  'practice.inputPlaceholder': 'Введіть англійське речення',
  'practice.inputLabel': 'Введіть англійське речення',
  'practice.check': 'Перевірити',
  'practice.grammarReference': 'Граматичний довідник',
}
