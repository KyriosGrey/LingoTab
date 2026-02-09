import type { TenseCardSet } from './types'

export const modalVerbs: TenseCardSet = {
  explain: {
    type: 'explain',
    title: {
      text: 'Modal Verbs — глаголы, которые меняют «вкус» действия',
      trRu: true,
    },
    description: {
      text: 'Модальные глаголы не меняются по лицам (никаких -s у he/she), им не нужны вспомогательные глаголы do/does для вопроса, и они всегда требуют после себя «голый» инфинитив (глагол без частицы to).',
      trRu: true,
    },
    focusNote: {
      text: 'Фокус на функции: разрешение, приказ, физическая способность или вероятность.',
      trRu: true,
    },
    formula: 'Subject + Modal Verb + V (infinitive without "to")',
    examples: [
      {
        en: 'I can swim.',
        ru: { text: 'Я умею плавать. (Физическая способность).', trRu: true },
      },
      {
        en: 'You should see a doctor.',
        ru: { text: 'Тебе стоит сходить к врачу. (Совет).', trRu: true },
      },
      {
        en: 'It might rain later.',
        ru: { text: 'Возможно, позже пойдёт дождь. (Вероятность).', trRu: true },
      },
    ],
  },

  mistakes: {
    type: 'mistakes',
    mistakes: [
      {
        title: { text: 'Ошибка 1 — Использование "to" после модального глагола', trRu: true },
        wrong: '❌ I must to go now.',
        right: '✅ I must go now.',
        note: {
          text: 'После большинства модальных глаголов (must, can, should, may, will) частица to — табу. Исключение — полумодальные глаголы вроде have to или ought to.',
          trRu: true,
        },
      },
      {
        title: { text: 'Ошибка 2 — Окончание "-s" в 3-м лице', trRu: true },
        wrong: '❌ He cans speak French.',
        right: '✅ He can speak French.',
        note: {
          text: 'Модальные глаголы не имеют форм. Они «застыли» в одном виде для всех местоимений: I can, You can, He can — форма всегда одинаковая.',
          trRu: true,
        },
      },
      {
        title: { text: 'Ошибка 3 — "Must not" vs "Don’t have to"', trRu: true },
        wrong: "❌ You mustn't wear a tie, but you can if you want.",
        right: "✅ You don't have to wear a tie, but you can if you want.",
        note: {
          text: "Mustn't = строгий запрет (нельзя! опасно!). Don't have to = нет необходимости (не обязательно, но если хочешь — можно).",
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
      { text: 'Ability: Can, Could.' },
      { text: 'Obligation: Must, Have to.' },
      { text: 'Advice: Should, Ought to, Had better.' },
      { text: 'Possibility: May, Might, Could.' },
      { text: 'Permission: Can, May, Could.' },
      { text: "Prohibition: Mustn't." },
    ],

    comparison: {
      left: {
        title: 'Internal Obligation',
        examples: [
          {
            en: 'I must call my mom.',
            ru: {
              text: 'Я должен позвонить маме. (Это моё личное желание. Я сам так решил, потому что скучаю или давно не звонил).',
              trRu: true,
            },
          },
        ],
      },
      right: {
        title: 'External Obligation',
        examples: [
          {
            en: 'I have to call my client.',
            ru: {
              text: 'Я должен позвонить клиенту. (Это моя работа. Есть протокол или договорённость. Это не моё личное желание, а обязанность).',
              trRu: true,
            },
          },
        ],
      },
    },
  },
}