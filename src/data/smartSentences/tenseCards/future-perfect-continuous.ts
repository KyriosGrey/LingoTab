import type { TenseCardSet } from './types'

export const futurePerfectContinuous: TenseCardSet = {
  explain: {
    type: 'explain',
    title: 'Future Perfect Continuous',
    description: 'Used to describe an action that will continue up until a point in the future, emphasizing the duration of the activity.',
    focusNote: 'Focus on the duration of an action that will be ongoing up to a specific future moment.',
    formula: 'will have been + verb-ing',
    examples: [
      {
        en: 'By next year, I will have been working here for 10 years.',
        ru: 'К следующему году я буду работать здесь уже 10 лет.'
      },
      {
        en: 'They will have been studying English for 5 years by the time they graduate.',
        ru: 'Они будут изучать английский уже 5 лет к моменту выпуска.'
      },
      {
        en: 'She will have been waiting for 3 hours when the train finally arrives.',
        ru: 'Она будет ждать уже 3 часа, когда поезд наконец прибудет.'
      }
    ]
  },
  mistakes: {
    type: 'mistakes',
    mistakes: [
      {
        title: 'Wrong tense form',
        wrong: '❌ I will been working here for 5 years.',
        right: '✅ I will have been working here for 5 years.',
        note: 'Не забывайте использовать "have been" после "will"'
      },
      {
        title: 'Missing -ing form',
        wrong: '❌ They will have been study for 2 hours.',
        right: '✅ They will have been studying for 2 hours.',
        note: 'Глагол должен быть в форме -ing'
      },
      {
        title: 'Incorrect time marker',
        wrong: '❌ She will have been working here since 5 years.',
        right: '✅ She will have been working here for 5 years.',
        note: 'Используйте "for" с периодом времени, а "since" с точкой начала'
      }
    ]
  },
  whenToUse: {
    type: 'whenToUse',
    title: 'When to Use',
    triggers: [
      { text: 'by next week/month/year' },
      { text: 'by the time' },
      { text: 'for + period of time' },
      { text: 'when/before/after' }
    ],
    comparison: {
      left: {
        title: 'Future Continuous',
        examples: [
          {
            en: 'At 9 PM, I will be watching TV.',
            ru: 'В 9 вечера я буду смотреть ТВ.'
          },
          {
            en: 'This time tomorrow, they will be flying to Paris.',
            ru: 'В это время завтра они будут лететь в Париж.'
          }
        ],
        note: 'Describes an action in progress at a specific future moment'
      },
      right: {
        title: 'Future Perfect Continuous',
        examples: [
          {
            en: 'By 9 PM, I will have been watching TV for 2 hours.',
            ru: 'К 9 вечера я буду смотреть ТВ уже 2 часа.'
          },
          {
            en: 'By tomorrow, they will have been flying for 10 hours.',
            ru: 'К завтрашнему дню они будут в полете уже 10 часов.'
          }
        ],
        note: 'Emphasizes duration up to a future point'
      }
    }
  }
}
