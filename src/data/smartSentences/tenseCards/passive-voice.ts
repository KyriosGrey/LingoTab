import type { TenseCardSet } from './types'

export const passiveVoice: TenseCardSet = {
  explain: {
    type: 'explain',
    title: {
      text: 'Passive Voice — когда действие совершается НАД объектом',
      trRu: true,
    },
    description: {
      text: 'Мы используем пассив, когда нам неважно, кто совершил действие, или когда сам объект важнее исполнителя.',
      trRu: true,
    },
    focusNote: {
      text: 'Фокус на том, ЧТО произошло, а не КТО это сделал.',
      trRu: true,
    },
    formula: 'Subject + be (в нужном времени) + V3 (Past Participle)',
    examples: [
      {
        en: 'The house was built in 1990.',
        ru: { text: 'Дом был построен в 1990. (Кем — неважно, важен сам дом).', trRu: true },
      },
      {
        en: 'The emails are sent every morning.',
        ru: { text: 'Письма отправляются каждое утро.', trRu: true },
      },
      {
        en: 'New project will be finished soon.',
        ru: { text: 'Новый проект будет скоро закончен.', trRu: true },
      },
    ],
  },

  mistakes: {
    type: 'mistakes',
    mistakes: [
      {
        title: { text: 'Ошибка 1 — Пропуск глагола "be"', trRu: true },
        wrong: '❌ This book written by Orwell.',
        right: '✅ This book was written by Orwell.',
        note: {
          text: 'Без глагола-связки "be" это просто набор слов. Глагол "be" показывает время (is/was/will be).',
          trRu: true,
        },
      },
      {
        title: { text: 'Ошибка 2 — Неправильная форма глагола', trRu: true },
        wrong: '❌ The window was broke.',
        right: '✅ The window was broken.',
        note: {
          text: 'В пассивном залоге всегда используется только 3-я форма глагола (V3).',
          trRu: true,
        },
      },
      {
        title: { text: 'Ошибка 3 — Лишний passive (с непереходными глаголами)', trRu: true },
        wrong: '❌ The accident was happened yesterday.',
        right: '✅ The accident happened yesterday.',
        note: {
          text: 'Глаголы типа happen (случаться), arrive (прибывать), sleep (спать) не имеют пассивной формы.',
          trRu: true,
        },
      },
    ],
  },

  whenToUse: {
    type: 'whenToUse',
    title: { text: 'Как менять времена в пассиве', trRu: true },
    triggers: [
      { text: 'Present Simple → am/is/are + V3 → The cake is eaten.' },
      { text: 'Past Simple → was/were + V3 → The cake was eaten.' },
      { text: 'Future Simple → will be + V3 → The cake will be eaten.' },
      { text: 'Present Continuous → am/is/are + being + V3 → The cake is being eaten now.' },
      { text: 'Past Continuous → was/were + being + V3 → The room was being cleaned when I arrived.' },
      { text: 'Present Perfect → have/has been + V3 → The cake has been eaten.' },
      { text: 'Past Perfect Passive → had been + V3 → The room had been cleaned before they came.' },
      { text: 'Future Perfect Passive → will have been + V3 → The work will have been done.' },
    ],

    // ✅ comparison оставляем валидным по типу, но без примеров
    comparison: {
      left: {
        title: '—',
        examples: [],
      },
      right: {
        title: '—',
        examples: [],
        note: {
          text: 'Если пытаешься поставить в пассив Future Continuous или любой Perfect Continuous, получится слишком громоздко. В таких случаях обычно выбирают Simple/Perfect или меняют формулировку.',
          trRu: true,
        },
      },
    },
  },
}