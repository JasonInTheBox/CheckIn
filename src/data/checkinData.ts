import type { ActionItem, CheckInAnswers, DayRating, Feeling, Need, Option } from '../types'

// Canonical action list, each tagged with the small ambient visual it pairs
// with. Referenced by key below so the same action can appear in several
// need lists without repeating its visual assignment.
export const ACTIONS = {
  breathe: { label: 'Take five slow breaths', visual: 'breathe' },
  water: { label: 'Drink some water', visual: 'water' },
  outside: { label: 'Step outside for five minutes', visual: 'outside' },
  stretch: { label: 'Stretch', visual: 'stretch' },
  phoneDown: { label: 'Put your phone down for a few minutes', visual: 'phone-down' },
  write: { label: 'Write down the one thing currently occupying your mind', visual: 'write' },
  message: { label: 'Message someone you trust', visual: 'message' },
  rest: { label: 'Give yourself permission to rest', visual: 'rest' },
  chooseOne: {
    label: 'Choose one small task instead of thinking about everything at once',
    visual: 'choose-one',
  },
} as const satisfies Record<string, ActionItem>

export const feelingOptions: Option<Feeling>[] = [
  { value: 'great', label: 'Great' },
  { value: 'good', label: 'Good' },
  { value: 'okay', label: 'Okay' },
  { value: 'tired', label: 'Tired' },
  { value: 'stressed', label: 'Stressed' },
  { value: 'sad', label: 'Sad' },
  { value: 'overwhelmed', label: 'Overwhelmed' },
  { value: 'unsure', label: 'Not sure' },
]

export const dayOptions: Option<DayRating>[] = [
  { value: 'really-good', label: 'Really good' },
  { value: 'mostly-good', label: 'Mostly good' },
  { value: 'mixed', label: 'Mixed' },
  { value: 'difficult', label: 'Difficult' },
  { value: 'really-difficult', label: 'Really difficult' },
]

export const needOptions: Option<Need>[] = [
  { value: 'motivation', label: 'I need some motivation' },
  { value: 'slow-down', label: 'I need to slow down' },
  { value: 'stressed', label: 'I feel stressed' },
  { value: 'lonely', label: 'I feel lonely' },
  { value: 'worried', label: 'I am worried about something' },
  { value: 'tired', label: 'I am tired' },
  { value: 'just-checking-in', label: 'I just wanted to check in' },
]

// A short acknowledgment of the chosen feeling, used to open the reflection.
export const feelingAcknowledgments: Record<Feeling, string> = {
  great: "It's good to hear you're feeling great.",
  good: "Good to hear you're doing alright.",
  okay: 'Okay is a perfectly fine place to be.',
  tired: 'Tired can sit in the body and the mind both.',
  stressed: 'Stress has a way of taking up more room than it should.',
  sad: "Sadness doesn't need an explanation to be valid.",
  overwhelmed: 'When everything feels like too much, even small things can feel heavy.',
  unsure: 'Not being sure how you feel is its own kind of answer.',
}

// A short reflection on how the day has gone.
export const dayContext: Record<DayRating, string> = {
  'really-good': "Sounds like today has genuinely treated you well.",
  'mostly-good': 'Sounds like today has been mostly on your side.',
  mixed: "Mixed days are common — some parts work, some don't.",
  difficult: 'It sounds like today has taken some energy out of you.',
  'really-difficult': "It sounds like today has been genuinely hard.",
}

export interface NeedContent {
  body: string
  perspectives: string[]
  actions: ActionItem[]
}

export const needContent: Record<Need, NeedContent> = {
  motivation: {
    body: "You don't have to solve everything today. If your mind feels crowded, choosing one small thing to focus on can be enough for now.",
    perspectives: [
      'A small step still changes where you are.',
      "Not every problem needs to be solved immediately.",
      "Momentum tends to come after you start, not before.",
      'Starting small still counts as starting.',
    ],
    actions: [ACTIONS.chooseOne, ACTIONS.stretch, ACTIONS.outside],
  },
  'slow-down': {
    body: "Slowing down isn't the same as falling behind. Giving yourself a few quiet minutes can be enough to reset.",
    perspectives: [
      'Some days are for progress. Some days are simply for getting through the day.',
      'Rest is not something you have to earn first.',
      "Stillness isn't wasted time.",
      "You're allowed to take up time without justifying it.",
    ],
    actions: [ACTIONS.breathe, ACTIONS.phoneDown, ACTIONS.rest],
  },
  stressed: {
    body: "Stress has a way of narrowing your focus until everything feels urgent. It usually isn't all urgent at once.",
    perspectives: [
      'You can have a difficult day without having a difficult life.',
      "Not every problem needs to be solved immediately.",
      'Your body tends to believe what you tell it — a few slow breaths can help it believe things are safer than they feel.',
      "You've gotten through hard moments before, even ones that felt impossible at the time.",
    ],
    actions: [ACTIONS.breathe, ACTIONS.water, ACTIONS.write],
  },
  lonely: {
    body: "Feeling lonely doesn't mean something is wrong with you — it's often a sign that connection matters to you.",
    perspectives: [
      'Reaching out is not a weakness, it is a way of taking care of yourself.',
      'One honest conversation can shift a whole day.',
      "You don't have to carry things alone to prove you can.",
      'Wanting connection is a sign of strength, not a flaw.',
    ],
    actions: [ACTIONS.message, ACTIONS.outside, ACTIONS.rest],
  },
  worried: {
    body: "Worry tends to rehearse the same outcome over and over. Naming the one thing you're worried about can take some of its weight away.",
    perspectives: [
      "Not every problem needs to be solved immediately.",
      'A worry named tends to feel smaller than a worry carried silently.',
      'You can prepare for something without replaying it all day.',
      'You can care about an outcome without carrying it every second.',
    ],
    actions: [ACTIONS.write, ACTIONS.message, ACTIONS.breathe],
  },
  tired: {
    body: "Rest doesn't always have to mean doing nothing — even stepping away for a few minutes can give your mind some room.",
    perspectives: [
      'Some days are simply for getting through the day.',
      'Tired is information, not a failure.',
      'A small step still changes where you are.',
      'Showing up tired is still showing up.',
    ],
    actions: [ACTIONS.stretch, ACTIONS.water, ACTIONS.rest],
  },
  'just-checking-in': {
    body: 'Taking a minute to check in, even when nothing in particular is wrong, is still worth something.',
    perspectives: [
      'A small step still changes where you are.',
      'Noticing how you feel is its own quiet kind of care.',
      "Not every check-in needs a reason.",
      "Taking care of yourself doesn't need a bigger reason than this.",
    ],
    actions: [ACTIONS.breathe, ACTIONS.outside, ACTIONS.stretch],
  },
}

// General action pool, used when cycling for variety beyond a need's own list.
export const allActions: ActionItem[] = Object.values(ACTIONS)

// General perspective pool, used when cycling for variety beyond a need's own list.
export const allPerspectives: string[] = [
  'You can have a difficult day without having a difficult life.',
  'Not every problem needs to be solved immediately.',
  'Some days are for progress. Some days are simply for getting through the day.',
  'A small step still changes where you are.',
  "You've gotten through hard days before, even when you couldn't see how at the time.",
  'Noticing how you feel is already a kind of progress.',
  "You don't need to have it all figured out to be doing okay.",
  'Small, steady effort counts for more than it feels like right now.',
  "You're allowed to be proud of getting through today.",
]

/**
 * A deliberately modest, non-diagnostic heuristic: certain combinations of
 * selections are treated as a signal to surface crisis resources more
 * prominently and swap the usual reflection for a more direct, compassionate
 * message. This never claims to detect a crisis with certainty.
 */
export function isElevatedConcern(answers: CheckInAnswers): boolean {
  const { feeling, day, need } = answers
  if (!feeling || !day || !need) return false

  const heavyFeeling = feeling === 'overwhelmed' || feeling === 'sad'
  const hardDay = day === 'really-difficult'
  const pressingNeed = need === 'worried' || need === 'lonely' || need === 'stressed'

  return heavyFeeling && hardDay && pressingNeed
}

export const crisisMessage =
  "What you're describing sounds heavy, and it's alright to not carry it alone right now. If things ever feel like more than you can manage on your own, reaching out to someone — a person you trust, or a crisis line — can make a real difference. This space isn't a substitute for that kind of support, but it's alright to need more than a quiet minute today."

export interface CrisisResource {
  label: string
  detail: string
}

export const crisisResources: CrisisResource[] = [
  { label: '988 Suicide & Crisis Lifeline (US)', detail: 'Call or text 988, available any time' },
  { label: 'Crisis Text Line', detail: 'Text HOME to 741741' },
  { label: 'International helplines', detail: 'findahelpline.com lists lines by country' },
  { label: 'Immediate danger', detail: 'Call your local emergency number' },
]
