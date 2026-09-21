import { useState } from 'react'
import {
  ACTIONS,
  allActions,
  allPerspectives,
  crisisMessage,
  crisisResources,
  dayContext,
  feelingAcknowledgments,
  isElevatedConcern,
  needContent,
} from '../data/checkinData'
import type { CompletedCheckIn } from '../types'
import ActionVisual from './ActionVisual'

interface ReflectionScreenProps {
  answers: CompletedCheckIn
  onRestart: () => void
  onDone: () => void
}

export default function ReflectionScreen({ answers, onRestart, onDone }: ReflectionScreenProps) {
  const content = needContent[answers.need]
  const elevated = isElevatedConcern(answers)

  // Start action suggestions on "Message someone you trust" when the
  // heuristic is triggered, without hiding the rest of the reflection.
  const initialActionIndex = elevated
    ? content.actions.findIndex((a) => a.label === ACTIONS.message.label)
    : 0

  const [perspectiveIndex, setPerspectiveIndex] = useState(0)
  const [actionIndex, setActionIndex] = useState(Math.max(initialActionIndex, 0))

  const perspectivePool = [...content.perspectives, ...allPerspectives]
  const actionPool = [...content.actions, ...allActions]

  function nextPerspective() {
    setPerspectiveIndex((i) => (i + 1) % perspectivePool.length)
  }

  function nextAction() {
    setActionIndex((i) => (i + 1) % actionPool.length)
  }

  return (
    <div className="animate-fade-in w-full max-w-xl px-6">
      <div className="rounded-3xl border border-line bg-white/50 px-7 py-9 sm:px-10 sm:py-11">
        <p className="mb-1 font-serif text-xl leading-relaxed text-ink">
          {feelingAcknowledgments[answers.feeling]}
        </p>
        <p className="mb-6 font-serif text-xl leading-relaxed text-ink">
          {dayContext[answers.day]}
        </p>

        <p className="mb-8 text-base leading-relaxed text-ink-soft">
          {elevated ? crisisMessage : content.body}
        </p>

        {elevated && (
          <div className="mb-8 rounded-2xl border border-clay-dim bg-clay-dim/60 px-5 py-4 text-sm text-ink-soft">
            <p className="mb-3 font-medium text-ink">A few places to reach out to:</p>
            <ul className="space-y-2">
              {crisisResources.map((r) => (
                <li key={r.label}>
                  <span className="font-medium text-ink">{r.label}</span>
                  <span className="block text-ink-faint">{r.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="mb-6 border-l-2 border-sage py-1 pl-4 text-base italic leading-relaxed text-ink">
          {perspectivePool[perspectiveIndex]}
        </p>

        <div className="flex items-center gap-4">
          <ActionVisual kind={actionPool[actionIndex].visual} />
          <p className="text-base leading-relaxed text-ink">
            Maybe: <span className="font-medium">{actionPool[actionIndex].label}</span>
          </p>
        </div>
      </div>

      <p className="mb-6 mt-8 text-center text-sm text-ink-faint">That's your check-in for now.</p>

      <div className="flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={nextPerspective}
          className="rounded-full border border-line bg-white/60 px-5 py-2.5 text-sm text-ink transition-colors hover:border-sage hover:bg-sage-dim"
        >
          Give me another thought
        </button>
        <button
          type="button"
          onClick={nextAction}
          className="rounded-full border border-line bg-white/60 px-5 py-2.5 text-sm text-ink transition-colors hover:border-sage hover:bg-sage-dim"
        >
          Give me a small thing I can do
        </button>
        <button
          type="button"
          onClick={onRestart}
          className="rounded-full border border-line bg-white/60 px-5 py-2.5 text-sm text-ink transition-colors hover:border-sage hover:bg-sage-dim"
        >
          Start another check-in
        </button>
        <button
          type="button"
          onClick={onDone}
          className="rounded-full px-5 py-2.5 text-sm text-ink-soft underline decoration-line underline-offset-4 transition-colors hover:text-ink"
        >
          I'm done for now
        </button>
      </div>
    </div>
  )
}
