import type { Option } from '../types'

interface QuestionStepProps<T extends string> {
  prompt: string
  options: Option<T>[]
  onSelect: (value: T) => void
  step: number
  totalSteps: number
}

export default function QuestionStep<T extends string>({
  prompt,
  options,
  onSelect,
  step,
  totalSteps,
}: QuestionStepProps<T>) {
  return (
    <div key={prompt} className="animate-fade-in w-full max-w-xl px-6">
      <div className="mb-10 flex justify-center gap-2">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <span
            key={i}
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              i === step ? 'bg-sage' : 'bg-line'
            }`}
          />
        ))}
      </div>

      <h1 className="mb-10 text-center font-serif text-3xl font-medium leading-snug text-ink sm:text-4xl">
        {prompt}
      </h1>

      <div className="flex flex-wrap justify-center gap-3">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onSelect(option.value)}
            className="rounded-full border border-line bg-white/60 px-5 py-3 text-base text-ink transition-all duration-200 hover:border-sage hover:bg-sage-dim active:scale-[0.98]"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}
