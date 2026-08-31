import type { MessageKey } from './en'

// Русский перевод интерфейса. Ключи и правила — см. en.ts: одна фраза целиком,
// без разметки внутри значения и без считаемых существительных рядом с числом.
//
// Тип `Partial` намеренный: любой пропущенный ключ молча берётся из английского,
// поэтому неполный перевод безопасен и язык можно дополнять постепенно.
export const ru: Partial<Record<MessageKey, string>> = {
  // Настройки — каркас страницы
  'settings.menu': 'Меню настроек',
  'settings.brand': 'Настройки',
  'settings.tab.main': 'Основные настройки',
  'settings.tab.smart': 'Умные предложения',
  'settings.tab.patchNotes': 'Что нового',

  // Основные настройки — Основное
  'group.general': 'Основное',

  'lang.title': 'Язык перевода',
  'lang.description': 'Язык, на который переводятся слова и предложения.',
  'lang.select': 'Выберите язык перевода',

  'shortcuts.title': 'Ярлыки сайтов',
  'shortcuts.description': 'Показывать закладки полосой слева на новой вкладке.',

  'background.title': 'Фон',
  'background.description': 'Фоновое изображение новой вкладки.',
  'background.none': 'Без фона',
  'background.custom': 'Своё изображение',
  'background.urlPlaceholder': 'Ссылка на изображение',
  'background.or': 'или',
  'background.chooseFile': 'Выбрать файл на компьютере',

  'interface.title': 'Язык интерфейса',
  'interface.description': 'Язык кнопок и подписей самого LingoTab. «Авто» — как язык перевода.',
  'interface.select': 'Выберите язык интерфейса',
  'interface.auto': 'Авто',

  'theme.title': 'Тема',
  'theme.description': 'Светлое или тёмное оформление.',
  'theme.switch': 'Сменить тему',
  'theme.dark': 'Тёмная',
  'theme.light': 'Светлая',

  'dictionary.title': 'Источник словаря',
  'dictionary.description': 'Откуда берутся значения слов и произношение. «Автоматически» пробует основной источник и незаметно переключается на запасной, если тот недоступен.',
  'dictionary.select': 'Выберите источник словаря',
  'dictionary.auto': 'Автоматически',

  // Основные настройки — Словарь
  'group.vocabulary': 'Словарь',
  'vocab.title': 'Словарные списки',
  'vocab.description': 'Из каких списков брать новые слова.',
  'vocab.learningOnly': 'Только изучаемые слова',
  'vocab.learningOnlyHint': '(показывать только сохранённые слова)',

  // Основные настройки — Перевод и повторение
  'group.translationReview': 'Перевод и повторение',

  'translation.title': 'Скрывать перевод',
  'translation.description': 'Перевод прячется за кнопкой «Показать» — так можно сначала проверить себя.',

  'repetition.title': 'Повторение выученного',
  'repetition.description': 'Время от времени показывает слово, которое вы уже выучили, чтобы оно не забылось.',
  'repetition.select': 'Выберите частоту повторения',
  'repetition.off': 'Выключено',
  // Ровно тот случай, ради которого каждая частота — отдельный ключ: в русском
  // «2 слова», но «5 слов».
  'repetition.every1': 'Каждое слово',
  'repetition.every2': 'Каждые 2 слова',
  'repetition.every3': 'Каждые 3 слова',
  'repetition.every4': 'Каждые 4 слова',
  'repetition.every5': 'Каждые 5 слов',
  'repetition.every10': 'Каждые 10 слов',
  'repetition.every20': 'Каждые 20 слов',

  // Основные настройки — Ваши списки
  'group.yourWordLists': 'Ваши списки',
  'wordLists.title': 'Импорт и экспорт',
  'wordLists.description': 'Сохранить списки слов в файл или загрузить их обратно.',
  'wordLists.learning': 'Изучаю',
  'wordLists.learned': 'Выучено',
  'wordLists.export': 'Экспорт',
  'wordLists.import': 'Импорт',

  // Основные настройки — Скрытые слова
  'group.ignoredWords': 'Скрытые слова',
  'ignored.description': 'Скрытые слова больше не появляются на новой вкладке. Удалите слово из списка, чтобы вернуть его.',
  'ignored.empty': 'Нажмите эту иконку на слове, чтобы скрыть его с новых вкладок.',

  // Общий список слов
  'list.search': 'Поиск',
  'list.empty': 'Пока пусто',
  'list.noMatch': 'Ничего не найдено',
  'list.remove': 'Удалить из списка',
  'list.sort.oldest': 'Сортировка: сначала старые',
  'list.sort.newest': 'Сортировка: сначала новые',
  // Слова английские, поэтому и буквы в подписи латинские.
  'list.sort.aToZ': 'Сортировка: от A до Z',
  'list.sort.zToA': 'Сортировка: от Z до A',

  // Попапы импорта
  'import.ignored.title': 'Импорт скрытых слов',
  'import.ignored.subtitle': 'Добавить слова в список скрытых из текстового файла.',
  'import.learning.title': 'Импорт изучаемых слов',
  'import.learning.subtitle': 'Добавить слова в список «Изучаю» из текстового файла.',
  'import.learned.title': 'Импорт выученных слов',
  'import.learned.subtitle': 'Добавить слова в список «Выучено» из текстового файла.',
  'import.requirements': 'Требования к файлу',
  'import.req.matching': 'Совпадения: только слова из словарных списков LingoTab',
  'import.req.separators': 'Разделители: пробел, табуляция, запятая или перенос строки',
  'import.req.length': 'Длина слова: до 30 символов',
  'import.req.lowercase': 'Все слова приводятся к нижнему регистру',
  'import.req.format': 'Формат файла: обычный текст (.txt)',
  'import.found': 'Найдено слов:',
  'import.none': 'В этом файле слов не нашлось. Попробуйте другой.',
  'import.readError': 'Не удалось прочитать файл. Убедитесь, что это обычный текстовый файл, и попробуйте снова.',
  'import.cancel': 'Отмена',
  'import.confirm': 'Импортировать',
  'file.select': 'Выбрать файл',

  // Умные предложения — Основное
  'smart.enable.title': 'Умные предложения',
  'smart.enable.description': 'Тренировать составление предложений на новой вкладке вместо изучения отдельных слов.',
  'smart.hints.title': 'Подсказки',
  'smart.hints.description': 'Добавлять к каждому предложению грамматический вопрос с вариантами ответа.',
  'smart.mix.title': 'Чередовать слова и предложения',
  'smart.mix.description': 'Показывать то отдельные слова, то тренировку предложений.',
  'smart.wordsPer.title': 'Слов на предложение',
  'smart.wordsPer.description': 'Сколько слов показать до следующего предложения.',

  // Умные предложения — Набор предложений
  'group.sentencePack': 'Набор предложений',
  'smart.builtIn.title': 'Встроенный набор',
  'smart.builtIn.description': 'Набор предложений, который идёт вместе с LingoTab, — уже переведённый на ваш язык.',
  'smart.create.title': 'Создать свой',
  'smart.create.description': 'Скопируйте готовый промпт в любой ИИ-чат. Он задаст несколько вопросов и вернёт файл, который можно импортировать ниже.',
  'smart.create.copy': 'Копировать промпт',
  'smart.create.copied': 'Скопировано!',
  'smart.import.title': 'Импорт набора',
  'smart.import.description': 'Загрузить набор предложений из файла.',
  'smart.import.choose': 'Выбрать файл',
  'smart.import.change': 'Заменить файл',
  'smart.preview.title': 'Предпросмотр',
  'smart.preview.description': 'Проверьте предложения ниже. Примите, чтобы заниматься по этому набору, или отклоните его.',
  'smart.preview.accept': 'Принять',
  'smart.preview.discard': 'Отклонить',

  // Новая вкладка — кнопки показа
  'word.showWord': 'Показать слово',
  'word.showTranslation': 'Показать перевод',

  // Новая вкладка — заглушки и ошибки
  'common.settings': 'Настройки',
  'empty.noLists.title': 'Не выбрано ни одного списка',
  'empty.noLists.description': 'Выберите хотя бы один словарный список, чтобы начать.',
  'empty.wordError.message': 'Для этого слова не нашлось значений.',
  'empty.wordError.ignore': 'Скрыть слово',
  'empty.wordError.newWord': 'Другое слово',
  'empty.offline.title': 'Нет подключения',
  'empty.offline.description': 'Подключитесь к интернету, чтобы загрузить значения слов.',
  'empty.learnedAll.title': 'Ура!',
  'empty.learnedAll.description': 'Вы выучили все слова из своих списков. Отличная работа!',
  'empty.noPack': 'Набора предложений пока нет. Включите встроенный в настройках или импортируйте свой.',
  'empty.learning': 'Нажмите эту иконку на слове, чтобы добавить его сюда.',
  'empty.learned': 'Нажмите эту иконку на изучаемом слове, чтобы перенести его сюда.',

  // Новая вкладка — верхняя панель
  'nav.search': 'Поиск слова',
  'nav.options': 'Настройки',
  'nav.inventory': 'Все слова',
  'nav.inventorySubtitle': 'Посмотреть все слова из списков',
  'nav.history': 'История',
  'nav.historySubtitle': 'Последние показанные слова',
  'nav.markedWords': 'Отмеченные слова',
  'nav.close': 'Закрыть',

  // Новая вкладка — действия со словом
  'action.ignore': 'Скрыть слово',
  'action.markLearning': 'В изучаемые',
  'action.markLearned': 'В выученные',
  'action.listen': 'Прослушать',
  'action.next': 'Дальше',
  'repetitionBlock.title': 'Повторение выученного слова',

  // Новая вкладка — ярлыки сайтов
  'shortcut.add': 'Добавить ярлык',
  'shortcut.edit': 'Изменить ярлык',
  'shortcut.remove': 'Удалить',
  'shortcut.name': 'Название',
  'shortcut.url': 'Ссылка',
  'shortcut.nameDuplicated': 'Такое название уже есть.',
  'shortcut.cancel': 'Отмена',
  'shortcut.done': 'Готово',

  // Новая вкладка — сбои перевода
  'translateFailure.quota.label': 'Дневной лимит исчерпан',
  'translateFailure.quota.message': 'Бесплатный сервис перевода исчерпал дневной лимит. Уже открытые слова по-прежнему показывают сохранённые переводы, новые появятся завтра.',
  'translateFailure.unavailable.label': 'Перевод недоступен',
  'translateFailure.unavailable.message': 'Сейчас не удаётся связаться ни с одним сервисом перевода. Уже открытые слова по-прежнему показывают сохранённые переводы.',
  'translateFailure.dismiss': 'Закрыть',
  'translateFailure.translating': 'перевод…',
  'translateFailure.tooltipQuota': 'Дневной лимит переводов исчерпан',
  'translateFailure.tooltipUnavailable': 'Перевод недоступен',

  // Новая вкладка — тренировка предложений
  'practice.translatePrompt': 'Переведите на английский:',
  'practice.inputPlaceholder': 'Введите английское предложение',
  'practice.inputLabel': 'Введите английское предложение',
  'practice.check': 'Проверить',
  'practice.grammarReference': 'Грамматический справочник',
}
