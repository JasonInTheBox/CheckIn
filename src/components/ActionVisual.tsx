import type { ActionVisualKind } from '../types'

interface ActionVisualProps {
  kind: ActionVisualKind
}

// Small, slow, ambient visuals that echo each suggested action. All motion
// is gentle and looping; prefers-reduced-motion (see index.css) flattens it
// to a still frame automatically.
export default function ActionVisual({ kind }: ActionVisualProps) {
  return (
    <div className="flex h-14 w-14 shrink-0 items-center justify-center" aria-hidden="true">
      {kind === 'breathe' && (
        <div className="relative flex h-14 w-14 items-center justify-center">
          <div className="absolute h-14 w-14 rounded-full border border-sage/30" />
          <div className="animate-breathe h-9 w-9 rounded-full bg-sage-dim" />
        </div>
      )}

      {kind === 'water' && (
        <div className="relative flex h-14 w-14 items-center justify-center">
          <span className="animate-ripple absolute h-6 w-6 rounded-full border border-sage/50" />
          <span
            className="animate-ripple absolute h-6 w-6 rounded-full border border-sage/50"
            style={{ animationDelay: '1.5s' }}
          />
          <span className="animate-bob relative h-4 w-4 rounded-full rounded-tl-none bg-sage/70" />
        </div>
      )}

      {kind === 'outside' && (
        <div className="relative flex h-14 w-14 items-center justify-center">
          <div className="animate-pulse-soft h-8 w-8 rounded-full bg-clay-dim" />
          <div className="animate-sway absolute bottom-2 h-3 w-8 rounded-full border-t border-clay/40" />
        </div>
      )}

      {kind === 'stretch' && (
        <div className="flex h-14 w-14 items-center justify-center">
          <div className="animate-grow h-1 w-10 rounded-full bg-sage/70" />
        </div>
      )}

      {kind === 'phone-down' && (
        <div className="flex h-14 w-14 items-center justify-center">
          <div className="animate-dim h-9 w-6 rounded-lg border border-ink-faint/50 bg-cream-dim" />
        </div>
      )}

      {kind === 'write' && (
        <div className="flex h-14 w-14 flex-col items-start justify-center gap-1.5 pl-3">
          <div className="animate-grow h-0.5 w-8 origin-left rounded-full bg-sage/70" />
          <div
            className="animate-grow h-0.5 w-6 origin-left rounded-full bg-sage/40"
            style={{ animationDelay: '0.4s' }}
          />
        </div>
      )}

      {kind === 'message' && (
        <div className="flex h-14 w-14 items-center justify-center gap-2">
          <span className="animate-pulse-soft h-2.5 w-2.5 rounded-full bg-sage" />
          <span
            className="animate-pulse-soft h-2.5 w-2.5 rounded-full bg-sage"
            style={{ animationDelay: '0.9s' }}
          />
        </div>
      )}

      {kind === 'rest' && (
        <div className="flex h-14 w-14 items-center justify-center">
          <div className="animate-breathe h-9 w-9 rounded-full bg-clay-dim" style={{ animationDuration: '10s' }} />
        </div>
      )}

      {kind === 'choose-one' && (
        <div className="flex h-14 w-14 items-center justify-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-ink-faint/30" />
          <span className="animate-pulse-soft h-1.5 w-1.5 rounded-full bg-sage" />
          <span className="h-1.5 w-1.5 rounded-full bg-ink-faint/30" />
          <span className="h-1.5 w-1.5 rounded-full bg-ink-faint/30" />
        </div>
      )}
    </div>
  )
}
