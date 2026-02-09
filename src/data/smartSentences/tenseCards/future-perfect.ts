import type { TenseCardSet } from './types'

export const futurePerfect: TenseCardSet = {
  explain: {
    type: 'explain',
    title: {
      text: 'Future Perfect — завершённость к моменту в будущем',
      trRu: true,
    },
    description: {
      text: 'Используется, когда действие будет полностью завершено к определенному моменту в будущем.',
      trRu: true,
    },
    focusNote: {
      text: 'Мысленно смотри из будущего назад на уже готовый результат. Важно не когда я буду делать, а что к понедельнику результат уже есть. Есть точка в будущем — к ней действие завершено.',
      trRu: true,
    },
    formula: 'Subject + will have + past participle (V3)',
    examples: [
      {
        en: 'She will have completed the level by tonight',
        ru: { text: 'Она пройдёт уровень к сегодняшнему вечеру.', trRu: true },
      },
      {
        en: 'We will not have finished the migration by Friday.',
        ru: { text: 'Мы не успеем завершить миграцию к пятнице.', trRu: true },
      },
      {
        en: 'Will you have prepared everything by 6 p.m.?',
        ru: { text: 'Ты всё подготовишь к 6 вечера?', trRu: true },
      },
    ],
  },

  mistakes: {
    type: 'mistakes',
    mistakes: [
      {
        title: { text: 'Ошибка 1 — путаница с Future Simple', trRu: true },
        wrong: '❌ I will finish the task by tomorrow',
        right: '✅ I will have finished the task by tomorrow',
        note: { text: 'by tomorrow = дедлайн → нужен результат к моменту.', trRu: true },
      },
      {
        title: { text: 'Ошибка 2 — неправильная форма глагола', trRu: true },
        wrong: '❌ will have finish',
        right: '✅ will have finished',
        note: { text: 'После have — третья форма, не базовая и не Past Simple.', trRu: true },
      },
      {
        title: { text: 'Ошибка 3 — использование без будущей точки', trRu: true },
        wrong: '❌ I will have finished the task',
        right: '✅ I will finish the task',
        note: {
          text: 'Без by / before / when / time Future Perfect чаще всего не нужен.',
          trRu: true,
        },
      },
    ],
  },

  whenToUse: {
    type: 'whenToUse',
    title: { text: 'Когда нужен Future Perfect', trRu: true },

    // ✅ triggers не переводим (как договорились)
    triggers: [
      { text: 'by (by Monday, by 2030)' },
      { text: 'before' },
      { text: 'by the time' },
      { text: 'when (в значении будущего момента)' },
      { text: 'in two hours (если речь о дедлайне, а не процессе)' },
    ],

    comparison: {
      left: {
        title: 'Future Simple',
        examples: [
          {
            en: 'I will finish the design tomorrow.',
            ru: { text: 'Я закончу дизайн завтра. (фокус на действии)', trRu: true },
          },
        ],
      },
      right: {
        title: 'Future Perfect',
        examples: [
          {
            en: 'I will have finished the design by tomorrow morning.',
            ru: { text: 'К завтрашнему утру дизайн уже будет готов. (фокус на результате)', trRu: true },
          },
        ],
      },
    },
  },
}