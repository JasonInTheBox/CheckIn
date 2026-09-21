interface ClosingScreenProps {
  onReturnHome: () => void
}

export default function ClosingScreen({ onReturnHome }: ClosingScreenProps) {
  return (
    <div className="animate-fade-in flex w-full max-w-md flex-col items-center px-6 text-center">
      <p className="mb-4 font-serif text-3xl font-medium leading-snug text-ink">
        That's enough for now.
      </p>
      <p className="mb-10 text-base leading-relaxed text-ink-soft">
        Whatever the rest of today holds, you've already taken a minute for yourself. That
        counts.
      </p>
      <button
        type="button"
        onClick={onReturnHome}
        className="rounded-full border border-line bg-white/60 px-6 py-3 text-sm text-ink transition-colors hover:border-sage hover:bg-sage-dim"
      >
        Return home
      </button>
    </div>
  )
}
