import type { TenseCardSet } from './types'

export const pastPerfectContinuous: TenseCardSet = {
  explain: {
    type: 'explain',
    title: {
      text: 'Past Perfect Continuous — длительное действие, которое началось и продолжалось до определенного момента в прошлом',
      trRu: true,
    },
    description: {
      text: 'Используется, когда нам важно показать, как долго длилось действие до другого события. Часто это действие либо все еще продолжалось, либо только-что закончилось с видимым результатом.',
      trRu: true,
    },
    focusNote: {
      text: 'Мысленная формула: к моменту X в прошлом я уже какое-то время делал Y. Фокус не на факте, а на процессе и его длительности.',
      trRu: true,
    },
    formula: 'Subject + had + been + V-ing',
    examples: [
      {
        en: 'I had been working for three hours before the meeting started.',
        ru: {
          text: 'Я работал уже три часа к тому моменту, как началась встреча. (Подчеркиваем длительность процесса работы).',
          trRu: true,
        },
      },
      {
        en: 'I had not been working long when the meeting started.',
        ru: {
          text: 'Я работал недолго, когда началась встреча.',
          trRu: true,
        },
      },
      {
        en: 'Had you been working long before the meeting started?',
        ru: {
          text: 'Ты долго работал до начала встречи?',
          trRu: true,
        },
      },
    ],
  },

  mistakes: {
    type: 'mistakes',
    mistakes: [
      {
        title: {
          text: 'Ошибка 1 — Забытый "been" или "-ing"',
          trRu: true,
        },
        wrong: '❌ I had working there for years.',
        right: '✅ I had been working there for years.',
        note: {
          text: 'Для Continuous нам нужны оба элемента: и been, и окончание -ing.',
          trRu: true,
        },
      },
      {
        title: {
          text: 'Ошибка 2 — Использование со Stative Verbs (глаголы состояния)',
          trRu: true,
        },
        wrong: '❌ I had been knowing him for a long time.',
        right: '✅ I had known him for a long time.',
        note: {
          text: 'Глаголы типа know, love, want, believe не используются в Continuous. Даже если есть длительность, используем простой Past Perfect.',
          trRu: true,
        },
      },
      {
        title: {
          text: 'Ошибка 3 — Отсутствие связи с прошлым',
          trRu: true,
        },
        wrong: '❌ I have been waiting for an hour before he came.',
        right: '✅ I had been waiting for an hour before he came.',
        note: {
          text: 'Если точка отсчета в прошлом (came), то и "хвост" ожидания должен быть в Past Perfect Continuous, а не в Present.',
          trRu: true,
        },
      },
    ],
  },

  whenToUse: {
    type: 'whenToUse',
    title: { text: 'Когда нужен Past Perfect Continuous', trRu: true },

    // ✅ triggers не переводим (как договорились)
    triggers: [
      { text: 'есть два события в прошлом;' },
      { text: 'одно из них длилось какое-то время до наступления второго;' },
      { text: 'часто есть указание периода: for (в течение), since (с тех пор), all day.' },
    ],

    comparison: {
      left: {
        title: 'Past Perfect',
        examples: [
          {
            en: 'He was tired because he had cleaned the house.',
            ru: {
              text: 'Он был уставшим, потому что убрал дом. (Важен результат: дом чист, работа закончена).',
              trRu: true,
            },
          },
        ],
      },
      right: {
        title: 'Past Perfect Continuous',
        examples: [
          {
            en: 'He was tired because he had been cleaning the house all morning.',
            ru: {
              text: 'Он был уставшим, потому что убирал дом все утро. (Акцент на изнурительном процессе, который длился долго).',
              trRu: true,
            },
          },
        ],
      },
    },
  },
}