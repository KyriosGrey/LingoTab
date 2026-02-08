// Type definitions for tense cards

export interface Example {
  en: string
  ru: string
}

export interface ExplainCard {
  type: 'explain'
  title: string
  description: string
  focusNote: string
  formula: string
  examples: Example[]
}

export interface Mistake {
  title: string
  wrong: string
  right: string
  note: string
}

export interface MistakesCard {
  type: 'mistakes'
  mistakes: Mistake[]
}

export interface Trigger {
  text: string
}

export interface ComparisonBlock {
  title: string
  examples: Example[]
  note?: string
}

export interface WhenToUseCard {
  type: 'whenToUse'
  title: string
  triggers: Trigger[]
  comparison: {
    left: ComparisonBlock
    right: ComparisonBlock
  }
}

export type TenseCard = ExplainCard | MistakesCard | WhenToUseCard

export interface TenseCardSet {
  explain: ExplainCard
  mistakes: MistakesCard
  whenToUse: WhenToUseCard
}

export interface TenseOption {
  value: string
  text: string
}
