import { crisisResources } from '../data/checkinData'

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-xl px-6 pb-10 pt-6 text-center">
      <p className="text-xs text-ink-faint">
        Your check-in stays with you. We don't save your answers.
      </p>
      <details className="group mt-3 inline-block text-left">
        <summary className="cursor-pointer list-none text-xs text-ink-faint underline decoration-line underline-offset-4 transition-colors hover:text-ink-soft">
          Need support right now?
        </summary>
        <div className="mt-3 rounded-2xl border border-line bg-cream-dim px-5 py-4 text-sm text-ink-soft">
          <p className="mb-3">
            This isn't a crisis service. If you're in immediate danger, please contact
            emergency services. Otherwise, these are here any time:
          </p>
          <ul className="space-y-2">
            {crisisResources.map((r) => (
              <li key={r.label}>
                <span className="font-medium text-ink">{r.label}</span>
                <span className="block text-ink-faint">{r.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </details>
    </footer>
  )
}
