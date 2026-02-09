import type { TenseCardSet } from './types'

export const conditionals: TenseCardSet = {
  explain: {
    type: 'explain',
    title: {
      text: 'Conditionals — условия, которые строят разные реальности',
      trRu: true,
    },
    description: {
      text: 'Условные п��едложения — это конструктор из двух частей: Условие (If...) и Результат. Тип условия зависит от того, насколько ситуация реальна.',
      trRu: true,
    },
    focusNote: {
      text: '0 и 1 тип: Реальный мир (факты и планы). 2 и 3 тип: Воображаемый мир (мечты и сожаления).',
      trRu: true,
    },
    formula:
      'If + Present Simple, will + V\nIf + Past Simple, would + V\nIf + Past Perfect, would have + V3',
    examples: [
      {
        en: 'If I have time, I will help you.',
        ru: {
          text: 'Если у меня будет время — а оно, скорее всего, будет — я помогу',
          trRu: true,
        },
      },
      {
        en: 'If I had time, I would help you.',
        ru: {
          text: 'Если бы у меня сейчас было время — но его нет, и я ужасно занят',
          trRu: true,
        },
      },
      {
        en: 'If I had had time, I would have helped you.',
        ru: {
          text: 'Если бы у меня тогда, в прошлом, было время — но его не было, и я не помог',
          trRu: true,
        },
      },
    ],
  },

  mistakes: {
    type: 'mistakes',
    mistakes: [
      {
        title: { text: 'Ошибка 1 — "Will" в части с IF (Самая частая!)', trRu: true },
        wrong: "❌ If it will rain, we won't go.",
        right: "✅ If it rains, we won't go.",
        note: {
          text: 'В английском языке условие само по себе уже указывает на будущее. Использовать will сразу после If — грамматическая избыточность. Используем Present Simple.',
          trRu: true,
        },
      },
      {
        title: { text: 'Ошибка 2 — Путаница 2-го и 3-го типа', trRu: true },
        wrong: '❌ If I would be rich, I would buy a car.',
        right: '✅ If I were rich, I would buy a car.',
        note: {
          text: 'Would никогда не ставится в части с If. Оно живет только в части с результатом. Для условия используем прошедшее время (Past Simple для настоящего или Past Perfect для прошлого).',
          trRu: true,
        },
      },
      {
        title: { text: 'Ошибка 3 — Забытый "have" в 3-м типе', trRu: true },
        wrong: '❌ If I had known, I would bought it.',
        right: '✅ If I had known, I would have bought it.',
        note: {
          text: '3-й тип — это «тяжелая артиллерия». Формула результата длинная: would + have + V3. Без have конструкция разваливается.',
          trRu: true,
        },
      },
    ],
  },

  whenToUse: {
    type: 'whenToUse',
    title: { text: 'Таблица сдвигов и сравнение', trRu: true },

    // ✅ triggers не переводим (как договорились)
    // На скрине тут скорее "одна ситуация — две реальности", поэтому вынесем в triggers как тезисы/формулы.
    triggers: [
      { text: 'If + Present Simple → will + V (реально/вероятно в будущем)' },
      { text: 'If + Past Simple → would + V (нереально сейчас / мечта)' },
      { text: 'If + Past Perfect → would have + V3 (сожаление о прошлом)' },
    ],

    comparison: {
      left: {
        title: '2nd Conditional (unreal now)',
        examples: [
          {
            en: 'If I spoke French, I would live in Paris.',
            ru: {
              text: 'Я не говорю по-французски сейчас и живу здесь. (Мечтаем о том, чего нет сейчас)',
              trRu: true,
            },
          },
        ],
      },
      right: {
        title: '3rd Conditional (unreal past)',
        examples: [
          {
            en: 'If I had spoken French, I would have moved to Paris.',
            ru: {
              text: 'Я не знал французский тогда, поэтому не переехал. (Жалеем о том, что уже случилось)',
              trRu: true,
            },
          },
        ],
      },
    },
  },
}