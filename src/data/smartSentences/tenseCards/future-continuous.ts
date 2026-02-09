import type { TenseCardSet } from './types'

export const futureContinuous: TenseCardSet = {
  explain: {
    type: 'explain',
    title: {
      text: 'Future Continuous — действие, которое будет происходить в определённый момент в будущем',
      trRu: true,
    },
    description: {
      text: 'описываем процесс в конкретный момент в будущем, говорим о запланированном фоне, вежливо спрашиваем о чьих-то планах, подчёркиваем занятость, а не результат',
      trRu: true,
    },
    focusNote: {
      text: 'Фокус на процессе, а не на факте или результате.',
      trRu: true,
    },
    formula: 'Subject + will be + verb-ing',
    examples: [
      {
        en: 'I will be working at 7 p.m.',
        ru: { text: 'Я буду работать в 7 вечера.', trRu: true },
      },
      {
        en: 'I will not be working tomorrow evening.',
        ru: { text: 'Я не буду работать завтра вечером.', trRu: true },
      },
      {
        en: 'Will you be working at 7 p.m.?',
        ru: { text: 'Ты будешь работать в 7 вечера?', trRu: true },
      },
    ],
  },

  mistakes: {
    type: 'mistakes',
    mistakes: [
      {
        title: {
          text: 'Ошибка 1 — Future Continuous вместо решения',
          trRu: true,
        },
        wrong: '❌ I will be calling him now',
        right: '✅ I will call him now',
        note: {
          text: 'Спонтанное решение → Future Simple, не Continuous.',
          trRu: true,
        },
      },
      {
        title: {
          text: 'Ошибка 2 — Future Continuous вместо результата',
          trRu: true,
        },
        wrong: '❌ I will be finishing the task by tomorrow',
        right: '✅ I will have finished the task by tomorrow',
        note: {
          text: 'Если есть дедлайн и важен результат → Future Perfect',
          trRu: true,
        },
      },
      {
        title: {
          text: 'Ошибка 3 — Future Continuous без будущего момента',
          trRu: true,
        },
        wrong: '❌ I will be working',
        right: '✅ I will work / I will be working tomorrow evening',
        note: {
          text: 'Future Continuous почти всегда требует временного ориентира.',
          trRu: true,
        },
      },
    ],
  },

  whenToUse: {
    type: 'whenToUse',
    title: { text: 'Когда нужен Future Continuous', trRu: true },
    triggers: [
      { text: 'at 5 p.m. tomorrow' },
      { text: 'this time tomorrow' },
      { text: 'when / while' },
      { text: 'during the meeting' },
    ],
    comparison: {
      left: {
        title: 'Future Simple',
        examples: [
          {
            en: 'I will work tomorrow evening.',
            ru: { text: 'Я буду работать завтра вечером. (факт / решение)', trRu: true },
          },
        ],
      },
      right: {
        title: 'Future Continuous',
        examples: [
          {
            en: 'I will be working tomorrow evening.',
            ru: { text: 'Я буду работать завтра вечером. (процесс, занятость)', trRu: true },
          },
        ],
      },
    },
  },
}