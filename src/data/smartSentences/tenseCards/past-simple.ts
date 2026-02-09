import type { TenseCardSet } from './types'

export const pastSimple: TenseCardSet = {
  explain: {
    type: 'explain',
    title: {
      text: 'Past Simple — факт или событие, которое произошло и закончилось в прошлом',
      trRu: true,
    },
    description: {
      text: 'Используется, когда мы говорим о завершённом действии, конкретном событии, цепочке событий в прошлом',
      trRu: true,
    },
    focusNote: {
      text: 'Фокус на факте действия, а не на процессе и не на результате к моменту.',
      trRu: true,
    },
    formula: 'Subject + V2 / V-ed',
    examples: [
      {
        en: 'I finished the task yesterday.',
        ru: { text: 'Я закончил задачу вчера.', trRu: true },
      },
      {
        en: 'I did not finish the task yesterday.',
        ru: { text: 'Я не закончил задачу вчера.', trRu: true },
      },
      {
        en: 'Did you finish the task yesterday?',
        ru: { text: 'Ты закончил задачу вчера?', trRu: true },
      },
    ],
  },

  mistakes: {
    type: 'mistakes',
    mistakes: [
      {
        title: { text: 'Ошибка 1 — двойное прошедшее', trRu: true },
        wrong: '❌ I did finished the task',
        right: '✅ I did finish the task',
        note: {
          text: 'После did глагол всегда в базовой форме.',
          trRu: true,
        },
      },
      {
        title: { text: 'Ошибка 2 — Past Simple вместо процесса', trRu: true },
        wrong: '❌ I worked when you called',
        right: '✅ I was working when you called',
        note: {
          text: 'Если важно, что происходило в моменте, нужен Past Continuous.',
          trRu: true,
        },
      },
      {
        title: { text: 'Ошибка 3 — Past Simple вместо результата к моменту', trRu: true },
        wrong: '❌ I finished the task before you arrived',
        right: '✅ I had finished the task before you arrived',
        note: {
          text: 'Если важно, что действие уже было завершено к другому моменту в прошлом → Past Perfect.',
          trRu: true,
        },
      },
    ],
  },

  whenToUse: {
    type: 'whenToUse',
    title: { text: 'How to choose — когда Past Simple правильный', trRu: true },

    // ✅ triggers не переводим (как договорились)
    triggers: [
      { text: 'действие полностью в прошлом' },
      { text: 'важен сам факт события' },
      { text: 'ты рассказываешь историю шаг за шагом' },
    ],

    comparison: {
      left: {
        title: 'Past Simple',
        examples: [
          {
            en: 'I watched a movie yesterday.',
            ru: { text: 'Я посмотрел фильм вчера. (факт)', trRu: true },
          },
        ],
      },
      right: {
        title: 'Past Continuous',
        examples: [
          {
            en: 'I was watching a movie when you called.',
            ru: { text: 'Я смотрел фильм, когда ты позвонил. (процесс)', trRu: true },
          },
        ],
      },
    },
  },
}