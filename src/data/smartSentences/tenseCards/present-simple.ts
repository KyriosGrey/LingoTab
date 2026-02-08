import type { TenseCardSet } from './types'

export const presentSimple: TenseCardSet = {
  explain: {
    type: 'explain',
    title: 'Present Simple',
    description: 'TODO: Add description for Present Simple',
    focusNote: 'TODO: Add focus note',
    formula: 'subject + verb (+ s/es for 3rd person)',
    examples: [
      { en: 'TODO: Example 1', ru: 'TODO: Пример 1' },
      { en: 'TODO: Example 2', ru: 'TODO: Пример 2' },
      { en: 'TODO: Example 3', ru: 'TODO: Пример 3' }
    ]
  },
  mistakes: {
    type: 'mistakes',
    mistakes: [
      {
        title: 'TODO: Mistake 1',
        wrong: '❌ TODO: Wrong example',
        right: '✅ TODO: Right example',
        note: 'TODO: Explanation'
      },
      {
        title: 'TODO: Mistake 2',
        wrong: '❌ TODO: Wrong example',
        right: '✅ TODO: Right example',
        note: 'TODO: Explanation'
      },
      {
        title: 'TODO: Mistake 3',
        wrong: '❌ TODO: Wrong example',
        right: '✅ TODO: Right example',
        note: 'TODO: Explanation'
      }
    ]
  },
  whenToUse: {
    type: 'whenToUse',
    title: 'When to Use',
    triggers: [
      { text: 'TODO: Trigger 1' },
      { text: 'TODO: Trigger 2' },
      { text: 'TODO: Trigger 3' }
    ],
    comparison: {
      left: {
        title: 'TODO: Comparison Title 1',
        examples: [
          { en: 'TODO: Example 1', ru: 'TODO: Пример 1' },
          { en: 'TODO: Example 2', ru: 'TODO: Пример 2' }
        ],
        note: 'TODO: Note'
      },
      right: {
        title: 'TODO: Comparison Title 2',
        examples: [
          { en: 'TODO: Example 1', ru: 'TODO: Пример 1' },
          { en: 'TODO: Example 2', ru: 'TODO: Пример 2' }
        ],
        note: 'TODO: Note'
      }
    }
  }
}
