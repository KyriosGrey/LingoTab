import type { TenseCardSet } from './types'

export const presentSimple: TenseCardSet = {
  explain: {
    type: 'explain',
    title: {
      text: 'Present Simple — то, что верно всегда или регулярно',
      trRu: true,
    },
    description: {
      text: 'Используется, когда мы говорим о фактах, привычках и рутине, постоянных состояниях, вещах, которые не привязаны к конкретному моменту',
      trRu: true,
    },
    focusNote: {
      text: 'Фокус не на “сейчас”, а на общей истине / повторяемости.',
      trRu: true,
    },
    formula: 'Subject + base verb (+ s / es)',
    examples: [
      {
        en: 'I work remotely.',
        ru: { text: 'Я работаю удалённо.', trRu: true },
      },
      {
        en: 'I do not work on weekends.',
        ru: { text: 'Я не работаю по выходным.', trRu: true },
      },
      {
        en: 'Do you work remotely?',
        ru: { text: 'Ты работаешь удалённо?', trRu: true },
      },
    ],
  },

  mistakes: {
    type: 'mistakes',
    mistakes: [
      {
        title: { text: 'Ошибка 1 — отсутствие -s в 3 лице', trRu: true },
        wrong: '❌ She play every day',
        right: '✅ She plays every day',
        note: {
          text: 'В утверждениях для he / she / it глагол всегда с -s / -es.',
          trRu: true,
        },
      },
      {
        title: { text: 'Ошибка 2 — am / is / are с обычным глаголом', trRu: true },
        wrong: '❌ I am work here',
        right: '✅ I work here',
        note: {
          text: 'Present Simple не использует to be, если нет Continuous или пассива.',
          trRu: true,
        },
      },
      {
        title: { text: 'Ошибка 3 — использование с “now”', trRu: true },
        wrong: '❌ I work now',
        right: '✅ I am working now',
        note: {
          text: 'Если есть now / at the moment / right now → это почти всегда Continuous, не Simple.',
          trRu: true,
        },
      },
    ],
  },

  whenToUse: {
    type: 'whenToUse',
    title: { text: 'Trigger & Contrast — когда нужен Present Simple', trRu: true },

    // ✅ triggers не переводим (как договорились)
    triggers: [
      { text: 'Present Simple — это время по умолчанию.' },
      { text: 'Если нет причины включать Continuous или Perfect — ты в Simple.' },
      { text: '❌ Сейчас / временно → Present Continuous' },
      { text: '❌ Есть дедлайн в будущем → Future Perfect / Simple' },
      { text: '❌ Есть опыт / результат к моменту → Present Perfect' },
    ],

    comparison: {
      left: {
        title: 'Present Simple',
        examples: [
          {
            en: 'I work from home.',
            ru: { text: 'Я работаю из дома. (это моя обычная ситуация)', trRu: true },
          },
        ],
      },
      right: {
        title: 'Present Continuous',
        examples: [
          {
            en: 'I am working from home today.',
            ru: { text: 'Я сегодня работаю из дома. (временно, сейчас)', trRu: true },
          },
        ],
      },
    },
  },
}