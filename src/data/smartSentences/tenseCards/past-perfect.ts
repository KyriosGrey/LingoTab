import type { TenseCardSet } from './types'

export const pastPerfect: TenseCardSet = {
  explain: {
    type: 'explain',
    title: {
      text: 'Past Perfect — действие, которое произошло и завершилось до другого момента в прошлом',
      trRu: true,
    },
    description: {
      text: 'Используется, когда мы смотрим из прошлого назад, показываем, что одно событие произошло раньше другого, объясняем причину ситуации в прошлом',
      trRu: true,
    },
    focusNote: {
      text: 'Фокус не на процессе, а на предшествующем результате.',
      trRu: true,
    },
    formula: 'Subject + had + past participle (V3)',
    examples: [
      {
        en: 'I had finished the task before the meeting started.',
        ru: {
          text: 'Я закончил задачу до начала встречи. (Завершение произошло раньше другого события.)',
          trRu: true,
        },
      },
      {
        en: 'I had not finished the task when the meeting started.',
        ru: { text: 'Я не закончил задачу к началу встречи.', trRu: true },
      },
      {
        en: 'Had you finished the task before the meeting started?',
        ru: { text: 'Ты закончил задачу до начала встречи?', trRu: true },
      },
    ],
  },

  mistakes: {
    type: 'mistakes',
    mistakes: [
      {
        title: { text: 'Ошибка 1 — Past Perfect без второй точки', trRu: true },
        wrong: '❌ I had finished the task yesterday',
        right: '✅ I finished the task yesterday',
        note: {
          text: 'Past Perfect почти всегда требует двух моментов в прошлом.',
          trRu: true,
        },
      },
      {
        title: { text: 'Ошибка 2 — Past Simple вместо причины', trRu: true },
        wrong: '❌ I was late because I missed the bus',
        right: '✅ I was late because I had missed the bus',
        note: {
          text: 'Если важно показать что было причиной, Past Perfect точнее.',
          trRu: true,
        },
      },
      {
        title: { text: 'Ошибка 3 — двойное прошедшее', trRu: true },
        wrong: '❌ I had did the task',
        right: '✅ I had done the task',
        note: {
          text: 'После had — всегда V3.',
          trRu: true,
        },
      },
    ],
  },

  whenToUse: {
    type: 'whenToUse',
    title: { text: 'Когда нужен Past Perfect', trRu: true },

    // ✅ triggers не переводим (как договорились)
    triggers: [
      { text: 'в прошлом есть два события' },
      { text: 'нужно показать, какое произошло раньше' },
      { text: 'важен результат к моменту в прошлом' },
    ],

    comparison: {
      left: {
        title: 'Past Simple',
        examples: [
          {
            en: 'I was late because I missed the bus.',
            ru: { text: 'Я опоздал, потому что пропустил автобус. (просто факт)', trRu: true },
          },
        ],
      },
      right: {
        title: 'Past Perfect',
        examples: [
          {
            en: 'I was late because I had missed the bus.',
            ru: { text: 'Я опоздал, потому что уже пропустил автобус. (причина подчёркнута)', trRu: true },
          },
        ],
      },
    },
  },
}