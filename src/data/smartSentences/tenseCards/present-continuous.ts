import type { TenseCardSet } from './types'

export const presentContinuous: TenseCardSet = {
  explain: {
    type: 'explain',
    title: {
      text: 'Present Continuous — действие, происходящее сейчас или в текущий период',
      trRu: true,
    },
    description: {
      text: 'Используется, когда мы говорим о действии прямо сейчас, временной ситуации, изменении или тренде, запланированном действии в ближайшем будущем',
      trRu: true,
    },
    focusNote: {
      text: 'Фокус на процессе, а не на факте или результате.',
      trRu: true,
    },
    formula: 'Subject + am / is / are + verb-ing',
    examples: [
      {
        en: 'I am working from home today.',
        ru: { text: 'Я сегодня работаю из дома.', trRu: true },
      },
      {
        en: 'I am not working right now.',
        ru: { text: 'Я сейчас не работаю.', trRu: true },
      },
      {
        en: 'Are you working right now?',
        ru: { text: 'Ты сейчас работаешь?', trRu: true },
      },
    ],
  },

  mistakes: {
    type: 'mistakes',
    mistakes: [
      {
        title: { text: 'Ошибка 1 — Present Continuous вместо факта', trRu: true },
        wrong: '❌ I am working here for five years',
        right: '✅ I have been working here for five years',
        note: {
          text: 'Continuous не используется для длительности до настоящего момента.',
          trRu: true,
        },
      },
      {
        title: { text: 'Ошибка 2 — Continuous с глаголами состояния', trRu: true },
        wrong: '❌ She is liking the game',
        right: '✅ She likes the game',
        note: {
          text: 'Stative verbs обычно не используются в Continuous.',
          trRu: true,
        },
      },
      {
        title: { text: 'Ошибка 3 — Continuous без временного смысла', trRu: true },
        wrong: '❌ I am working in marketing',
        right: '✅ I work in marketing',
        note: {
          text: 'Если это постоянная информация → Present Simple',
          trRu: true,
        },
      },
    ],
  },

  whenToUse: {
    type: 'whenToUse',
    title: { text: 'Когда нужен Present Continuous', trRu: true },

    // ✅ triggers не переводим (как договорились)
    triggers: [
      { text: 'now' },
      { text: 'right now' },
      { text: 'at the moment' },
      { text: 'today (в значении “сейчас, временно”)' },
      { text: 'currently' },
      { text: 'these days' },
    ],

    comparison: {
      left: {
        title: 'Present Simple',
        examples: [
          {
            en: 'I work from home.',
            ru: { text: 'Я работаю из дома. (обычно)', trRu: true },
          },
        ],
      },
      right: {
        title: 'Present Continuous',
        examples: [
          {
            en: 'I am working from home this week.',
            ru: { text: 'Я на этой неделе работаю из дома. (временно)', trRu: true },
          },
        ],
      },
    },
  },
}