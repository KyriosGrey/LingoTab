import type { TenseCardSet } from './types'

export const futureSimple: TenseCardSet = {
  explain: {
    type: 'explain',
    title: {
      text: 'Future Simple — решение, прогноз или факт о будущем',
      trRu: true,
    },
    description: {
      text: 'Используется, ко��да мы говорим о решении, принятом в момент речи, обещании, прогнозе (мнение, ожидание), факте о будущем без плана.',
      trRu: true,
    },
    focusNote: {
      text: 'Фокус на факте действия, а не на процессе и не на результате к моменту.',
      trRu: true,
    },
    formula: 'Subject + will + base verb',
    examples: [
      {
        en: 'I will finish the task tomorrow.',
        ru: { text: 'Я закончу задачу завтра.', trRu: true },
      },
      {
        en: 'I will not finish the task today.',
        ru: { text: 'Я не закончу задачу сегодня', trRu: true },
      },
      {
        en: 'Will you finish the task tomorrow?',
        ru: { text: 'Ты закончишь задачу завтра?', trRu: true },
      },
    ],
  },

  mistakes: {
    type: 'mistakes',
    mistakes: [
      {
        title: { text: 'Ошибка 1 — Future Simple вместо плана', trRu: true },
        wrong: '❌ I will meet him at 6 p.m.',
        right: '✅ I am meeting him at 6 p.m.',
        note: { text: 'Future Simple не про расписание и планы.', trRu: true },
      },
      {
        title: { text: 'Ошибка 2 — will в if / when (future)', trRu: true },
        wrong: '❌ If you will finish the task, call me',
        right: '✅ If you finish the task, call me',
        note: {
          text: 'В time / condition clauses будущее выражается Present Simple, не will.',
          trRu: true,
        },
      },
      {
        title: { text: 'Ошибка 3 — will вместо результата к моменту', trRu: true },
        wrong: '❌ I will finish the task by tomorrow',
        right: '✅ I will have finished the task by tomorrow',
        note: { text: 'Если есть дедлайн — подумай о Future Perfect.', trRu: true },
      },
    ],
  },

  whenToUse: {
    type: 'whenToUse',
    title: { text: 'How to choose — когда Future Simple правильный', trRu: true },

    // ✅ triggers не переводим (как договорились)
    triggers: [
      { text: 'решение принято прямо сейчас' },
      { text: 'ты даёшь обещание или реакцию' },
      { text: 'это прогноз, а не план' },
      { text: 'нет акцента на процессе или результате' },
    ],

    comparison: {
      left: {
        title: 'Future Simple',
        examples: [
          {
            en: 'I will call you later.',
            ru: { text: 'Я перезвоню позже. (спонтанное решение)', trRu: true },
          },
        ],
      },
      right: {
        title: 'Present Continuous',
        examples: [
          {
            en: 'I am calling you at 6 p.m.',
            ru: { text: 'Я звоню тебе в 6 вечера. (запланировано)', trRu: true },
          },
        ],
      },
    },
  },
}