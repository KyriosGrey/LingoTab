import type { TenseCardSet } from './types'

export const pastContinuous: TenseCardSet = {
  explain: {
    type: 'explain',
    title: {
      text: 'Past Continuous — процесс в конкретный момент в прошлом',
      trRu: true,
    },
    description: {
      text: 'Используется, когда мы говорим о действии, которое было в процессе в определённый момент в прошлом.',
      trRu: true,
    },
    focusNote: {
      text: 'Фокус не на результате, а на том, что происходило в этот момент. Часто используется как фон для другого действия или описание ситуации, а не события.',
      trRu: true,
    },
    formula: 'Subject + was / were + verb-ing',
    examples: [
      {
        en: 'She was playing the game when I called her.',
        ru: { text: 'Она играла в игру, когда я ей позвонил.', trRu: true },
      },
      {
        en: 'I was not working when you called.',
        ru: { text: 'Я не работал, когда ты позвонил.', trRu: true },
      },
      {
        en: 'Were you working when I texted you?',
        ru: { text: 'Ты работал, когда я тебе написал?', trRu: true },
      },
    ],
  },

  mistakes: {
    type: 'mistakes',
    mistakes: [
      {
        title: { text: 'Ошибка 1 — путаница с Past Simple', trRu: true },
        wrong: '❌ I worked when he arrived',
        right: '✅ I was working when he arrived',
        note: {
          text: 'Past Simple — событие. Past Continuous — фон / процесс',
          trRu: true,
        },
      },
      {
        title: { text: 'Ошибка 2 — использование без конкретного момента', trRu: true },
        wrong: '❌ I was working yesterday',
        right: '✅ I worked yesterday',
        note: {
          text: 'Past Continuous лучше работает с моментом или контекстом, а не просто датой.',
          trRu: true,
        },
      },
      {
        title: { text: 'Ошибка 3 — неправильный глагол состояния', trRu: true },
        wrong: '❌ I was knowing the answer',
        right: '✅ I knew the answer',
        note: {
          text: 'Stative verbs (know, like, believe, want) → почти никогда не используются в Continuous.',
          trRu: true,
        },
      },
    ],
  },

  whenToUse: {
    type: 'whenToUse',
    title: { text: 'Когда нужен Past Continuous', trRu: true },

    // ✅ triggers не переводим (как договорились)
    triggers: [
      { text: 'when / while' },
      { text: 'at that moment' },
      { text: 'at 7 p.m. yesterday' },
      { text: 'as' },
      { text: 'описание фона (music was playing, people were talking)' },
    ],

    comparison: {
      left: {
        title: 'Past Simple',
        examples: [
          {
            en: 'I answered the phone.',
            ru: { text: 'Я ответил на телефон. (событие)', trRu: true },
          },
        ],
      },
      right: {
        title: 'Past Continuous',
        examples: [
          {
            en: 'I was working when you called.',
            ru: { text: 'Я работал, когда ты позвонил. (процесс в момент звонка)', trRu: true },
          },
        ],
      },
    },
  },
}