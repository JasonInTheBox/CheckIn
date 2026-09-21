export type Feeling =
  | 'great'
  | 'good'
  | 'okay'
  | 'tired'
  | 'stressed'
  | 'sad'
  | 'overwhelmed'
  | 'unsure'

export type DayRating =
  | 'really-good'
  | 'mostly-good'
  | 'mixed'
  | 'difficult'
  | 'really-difficult'

export type Need =
  | 'motivation'
  | 'slow-down'
  | 'stressed'
  | 'lonely'
  | 'worried'
  | 'tired'
  | 'just-checking-in'

export interface CheckInAnswers {
  feeling: Feeling | null
  day: DayRating | null
  need: Need | null
}

export interface CompletedCheckIn {
  feeling: Feeling
  day: DayRating
  need: Need
}

export interface Option<T extends string> {
  value: T
  label: string
}

export type ActionVisualKind =
  | 'breathe'
  | 'water'
  | 'outside'
  | 'stretch'
  | 'phone-down'
  | 'write'
  | 'message'
  | 'rest'
  | 'choose-one'

export interface ActionItem {
  label: string
  visual: ActionVisualKind
}
