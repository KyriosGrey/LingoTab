import type { TenseCardSet } from './types'

export const gerundAndInfinitive: TenseCardSet = {
  explain: {
    type: 'explain',
    title: {
      text: 'Gerund & Infinitive — две формы глагола в роли «существительного»',
      trRu: true,
    },
    description: {
      text: 'И Герундий (-ing), и Инфинитив (to + V) отвечают на вопрос «Что делать?». Выбор зависит от того, какое слово стоит перед ними.',
      trRu: true,
    },
    focusNote: {
      text: 'Герундий часто воспринимается как процесс или привычное действие. Инфинитив часто воспринимается как цель, конкретное намерение или будущее действие.',
      trRu: true,
    },
    formula: 'Gerund: V + -ing\nInfinitive: to + V',
    examples: [
      {
        en: 'I enjoy reading books.',
        ru: { text: 'Я наслаждаюсь чтением книг. (Процесс приносит удовольствие).', trRu: true },
      },
      {
        en: 'I decided to read this book.',
        ru: { text: 'Я решил прочитать эту книг��. (Намерение, цель на будущее).', trRu: true },
      },
      {
        en: 'Smoking is bad for health.',
        ru: { text: 'Курение вредно для здоровья. (Действие в роли подлежащего — чаще герундий).', trRu: true },
      },
    ],
  },

  mistakes: {
    type: 'mistakes',
    mistakes: [
      {
        title: { text: 'Ошибка 1 — "To" после глаголов, требующих герундий', trRu: true },
        wrong: '❌ I finished to do my homework.',
        right: '✅ I finished doing my homework.',
        note: {
          text: 'После глагола finish (а также avoid, suggest, enjoy) всегда идет герундий. Это нужно просто запомнить как список-исключение.',
          trRu: true,
        },
      },
      {
        title: { text: 'Ошибка 2 — Использование инфинитива после предлогов', trRu: true },
        wrong: '❌ Thank you for to help me.',
        right: '✅ Thank you for helping me.',
        note: {
          text: 'Запомни золотое правило: после любого предлога (of, in, at, for, about, without) всегда идет только герундий. Инфинитив с предлогами не дружит.',
          trRu: true,
        },
      },
      {
        title: { text: 'Ошибка 3 — Путаница с выражением "look forward to"', trRu: true },
        wrong: '❌ I look forward to see you.',
        right: '✅ I look forward to seeing you.',
        note: {
          text: 'Здесь to — это не часть инфинитива, а предлог. А мы уже знаем: после предлога нужен герундий.',
          trRu: true,
        },
      },
    ],
  },

  whenToUse: {
    type: 'whenToUse',
    title: { text: 'Таблица сдвигов и сравнение', trRu: true },

    // ✅ triggers не переводим (как договорились)
    triggers: [
      { text: 'Gerund: avoid, imagine, keep, mind, suggest, finish, fancy, give up.' },
      { text: 'Infinitive: agree, decide, hope, learn, plan, promise, want, would like.' },
    ],

    comparison: {
      left: {
        title: 'Gerund (-ing)',
        examples: [
          {
            en: 'I enjoy reading books.',
            ru: { text: 'Мне нравится процесс: чтение как деятельность.', trRu: true },
          },
          {
            en: 'Thank you for helping me.',
            ru: { text: 'После предлога for нужен герундий.', trRu: true },
          },
        ],
      },
      right: {
        title: 'Infinitive (to + V)',
        examples: [
          {
            en: 'I decided to read this book.',
            ru: { text: 'Решение/цель: инфинитив часто про намерение.', trRu: true },
          },
          {
            en: 'I want to learn English.',
            ru: { text: 'После want обычно используется to + V.', trRu: true },
          },
        ],
      },
    },
  },
}