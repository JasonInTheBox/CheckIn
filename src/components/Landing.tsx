interface LandingProps {
  onStart: () => void
}

export default function Landing({ onStart }: LandingProps) {
  return (
    <div className="animate-fade-in flex w-full max-w-lg flex-col items-center px-6 text-center">
      <p className="mb-4 text-sm tracking-wide text-ink-faint">You have a minute.</p>
      <h1 className="mb-6 font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
        How are you doing?
      </h1>
      <p className="mb-12 max-w-sm text-balance text-base leading-relaxed text-ink-soft">
        A quiet place to pause, notice how you're feeling, and leave with one small
        thing to carry into the rest of your day.
      </p>
      <button
        type="button"
        onClick={onStart}
        className="rounded-full bg-ink px-8 py-4 text-base text-cream transition-transform duration-200 hover:bg-ink/90 active:scale-[0.98]"
      >
        Check in with yourself
      </button>
      <p className="mt-6 text-xs text-ink-faint">Takes about a minute. No account needed.</p>
    </div>
  )
}
