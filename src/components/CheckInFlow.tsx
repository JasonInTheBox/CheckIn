import { useState } from 'react'
import { dayOptions, feelingOptions, needOptions } from '../data/checkinData'
import type { CheckInAnswers, DayRating, Feeling, Need } from '../types'
import ClosingScreen from './ClosingScreen'
import QuestionStep from './QuestionStep'
import ReflectionScreen from './ReflectionScreen'

type Stage = 'feeling' | 'day' | 'need' | 'reflection' | 'closing'

const emptyAnswers: CheckInAnswers = { feeling: null, day: null, need: null }

interface CheckInFlowProps {
  onExit: () => void
}

export default function CheckInFlow({ onExit }: CheckInFlowProps) {
  const [stage, setStage] = useState<Stage>('feeling')
  const [answers, setAnswers] = useState<CheckInAnswers>(emptyAnswers)

  function chooseFeeling(feeling: Feeling) {
    setAnswers((a) => ({ ...a, feeling }))
    setStage('day')
  }

  function chooseDay(day: DayRating) {
    setAnswers((a) => ({ ...a, day }))
    setStage('need')
  }

  function chooseNeed(need: Need) {
    setAnswers((a) => ({ ...a, need }))
    setStage('reflection')
  }

  function restart() {
    setAnswers(emptyAnswers)
    setStage('feeling')
  }

  if (stage === 'feeling') {
    return (
      <QuestionStep
        prompt="How are you feeling right now?"
        options={feelingOptions}
        onSelect={chooseFeeling}
        step={0}
        totalSteps={3}
      />
    )
  }

  if (stage === 'day') {
    return (
      <QuestionStep
        prompt="How has your day been so far?"
        options={dayOptions}
        onSelect={chooseDay}
        step={1}
        totalSteps={3}
      />
    )
  }

  if (stage === 'need') {
    return (
      <QuestionStep
        prompt="What feels most important right now?"
        options={needOptions}
        onSelect={chooseNeed}
        step={2}
        totalSteps={3}
      />
    )
  }

  if (stage === 'reflection' && answers.feeling && answers.day && answers.need) {
    return (
      <ReflectionScreen
        answers={{ feeling: answers.feeling, day: answers.day, need: answers.need }}
        onRestart={restart}
        onDone={() => setStage('closing')}
      />
    )
  }

  return <ClosingScreen onReturnHome={onExit} />
}
