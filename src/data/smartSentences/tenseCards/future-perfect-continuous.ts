import type { TenseCardSet } from './types'

export const futurePerfectContinuous: TenseCardSet = {
  explain: {
    type: 'explain',
    title: 'Future Perfect Continuous — действие, которое будет длиться до определенного момента в будущем',
    description: 'Мы как бы перемещаемся в будущее, оглядываемся назад и считаем, как долго (стаж, длительность) уже идет процесс к этой дате.',
    focusNote: 'Фокус на «стаже» действия к конкретному моменту.',
    formula: 'will have been + verb-ing',
    examples: [
      {
        en: 'By next year, I will have been living in Moscow for 10 years.',
        ru: 'К следующему году будет (исполнится) 10 лет, как я живу в Москве.',
      },
      {
        en: 'I will not have been working here long enough to get a bonus by July.',
        ru: 'К июлю я еще не проработаю здесь достаточно долго, чтобы получить бонус.',
      },
      {
        en: 'How long will you have been studying by the time you graduate?',
        ru: 'Как долго ты уже будешь учиться к тому моменту, как получишь диплом?',
      },
    ],
  },
  mistakes: {
    type: 'mistakes',
    mistakes: [
      {
        title: 'Ошибка 1 — Использование Future после "when/before/by the time"',
        wrong: '❌ By the time I will arrive, she will have been waiting for an hour.',
        right: '✅ By the time I arrive, she will have been waiting for an hour',
        note: 'В частях предложения с "when", "before", "by the time" будущее время (will) не ставится. Используем Present Simple.',
      },
      {
        title: 'Ошибка 2 — Глаголы состояния (Stative Verbs)',
        wrong: '❌ I will have been being a teacher for 20 years.',
        right: '✅ I will have been a teacher for 20 years.',
        note: 'Глаголы состояния (be, know, have, etc.) никогда не используются в Continuous. Вместо этого берем Future Perfect.',
      },
      {
        title: 'Ошибка 3 — Пропуск "been"',
        wrong: '❌ Next month they will have working together for a year.',
        right: '✅ Next month they will have been working together for a year.',
        note: 'Формула длинная, и "been" — обязательный «клей» для этой конструкции.',
      },
    ],
  },
  whenToUse: {
    type: 'whenToUse',
    title: 'Когда нужен Future Perfect Continuous',
    triggers: [
      { text: 'обязательная связка: By... (к такому-то времени) + for... (в течение такого-то срока);' },
      { text: 'By the time... (к тому моменту как...);' },
      { text: 'Next year / Next month...' },
      { text: 'when/before/after' },
    ],
    comparison: {
      left: {
        title: 'Future Continuous',
        examples: [
          {
            en: 'At 5 PM tomorrow, I will be working.',
            ru: 'Завтра в 5 я буду работать. (Просто процесс в конкретный момент завтра).',
          },
        ],
      },
      right: {
        title: 'Future Perfect Continuous',
        examples: [
          {
            en: 'By 5 PM tomorrow, I will have been working for 8 hours.',
            ru: 'К 5 часам вечера завтра я буду работать (уже) 8 часов.(Нам важна длительность процесса к этой точке).',
          },
        ],
      },
    },
  },
}
