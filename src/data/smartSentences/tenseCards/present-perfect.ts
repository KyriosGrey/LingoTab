import type { TenseCardSet } from './types'

export const presentPerfect: TenseCardSet = {
  explain: {
    type: 'explain',
    title: {
      text: 'Present Perfect — действие в прошлом, связанное с настоящим',
      trRu: true,
    },
    description: {
      text: 'Используется, когда важен результат сейчас, когда мы говорим об опыте, когда действие произошло в неопределённый момент в прошлом, когда период времени ещё не закончился',
      trRu: true,
    },
    focusNote: {
      text: 'Фокус не на когда, а на что это значит сейчас.',
      trRu: true,
    },
    formula: 'Subject + have / has + past participle (V3)',
    examples: [
      {
        en: 'I have finished the task.',
        ru: { text: 'Я закончил задачу. (Результат важен сейчас: задача готова.)', trRu: true },
      },
      {
        en: 'I have not finished the task yet',
        ru: { text: 'Я ещё не закончил задачу. (Yet подчёркивает ожидание результата.)', trRu: true },
      },
      {
        en: 'Have you finished the task?',
        ru: { text: 'Ты уже закончил задачу? (Вопрос о результате на текущий момент.)', trRu: true },
      },
    ],
  },

  mistakes: {
    type: 'mistakes',
    mistakes: [
      {
        title: { text: 'Ошибка 1 — Present Perfect с точным временем', trRu: true },
        wrong: '❌ I have finished the task yesterday',
        right: '✅ I finished the task yesterday',
        note: {
          text: 'Если есть конкретный момент в прошлом → Past Simple.',
          trRu: true,
        },
      },
      {
        title: { text: 'Ошибка 2 — Past Simple вместо результата', trRu: true },
        wrong: '❌ Did you finish the task?',
        right: '✅ Have you finished the task?',
        note: {
          text: 'Past Simple — про событие. Present Perfect — про состояние сейчас.',
          trRu: true,
        },
      },
      {
        title: { text: 'Ошибка 3 — неправильная форма глагола', trRu: true },
        wrong: '❌ I have finish / I have finisheded',
        right: '✅ I have finished',
        note: {
          text: 'После have / has — только V3.',
          trRu: true,
        },
      },
    ],
  },

  whenToUse: {
    type: 'whenToUse',
    title: { text: 'Когда нужен Present Perfect', trRu: true },

    // ✅ triggers не переводим (как договорились)
    triggers: [
      { text: 'ты не называешь точное время' },
      { text: 'результат важен прямо сейчас' },
      { text: 'речь идёт об опыте (ever / never)' },
      { text: 'период ещё продолжается (today, this week)' },
    ],

    comparison: {
      left: {
        title: 'Past Simple',
        examples: [
          {
            en: 'I finished the task yesterday.',
            ru: { text: 'Я закончил задачу вчера. (когда — важно)', trRu: true },
          },
        ],
      },
      right: {
        title: 'Present Perfect',
        examples: [
          {
            en: 'I have finished the task.',
            ru: { text: 'Я закончил задачу. (результат важен сейчас)', trRu: true },
          },
        ],
      },
    },
  },
}