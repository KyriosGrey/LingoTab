// Type definitions for tense cards

export type TextBlock = {
  text: string
  /**
   * Translate this RU text into current Google Translate target language (gttl)
   * when gttl != 'ru'. If false/undefined, show as-is.
   */
  trRu?: boolean
}

export type TextLike = string | TextBlock

export function asTextBlock(v: TextLike): TextBlock {
  return typeof v === 'string' ? { text: v } : v
}

export interface Example {
  en: string
  ru?: TextLike
}

export interface ExplainCard {
  type: 'explain'
  title: TextLike
  description: TextLike
  focusNote: TextLike
  formula: string
  examples: Example[]
}

export interface Mistake {
  title: TextLike
  wrong: string
  right: string
  note: TextLike
}

export interface MistakesCard {
  type: 'mistakes'
  mistakes: Mistake[]
}

export interface Trigger {
  text: TextLike
}

export interface ComparisonBlock {
  title: string
  examples: Example[]
  note?: TextLike
}

export interface WhenToUseCard {
  type: 'whenToUse'
  title: TextLike
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