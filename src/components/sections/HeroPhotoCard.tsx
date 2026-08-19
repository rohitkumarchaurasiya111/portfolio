// Replaces the old architecture-diagram hero visual with a "window" card that frames
// the profile photo — mac-style traffic-light dots, a filename bar, an availability
// badge, and a status footer. Pure presentational component, no props needed.
export function HeroPhotoCard() {
  return (
    <div className="card-surface relative overflow-hidden rounded-xl">
      {/* window title bar */}
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-signal-red/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-signal-amber/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-signal-green/80" />
        </div>
        <p className="font-mono text-caption text-ink-muted">profile.jpg</p>
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-green opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal-green" />
          </span>
          <span className="font-mono text-caption text-ink-muted">available</span>
        </div>
      </div>

      {/* photo */}
      <div className="flex items-center justify-center px-10 py-12 sm:px-14 sm:py-16">
        <div className="relative">
          <div
            className="absolute inset-0 rounded-full bg-accent-cyan/25 blur-2xl"
            aria-hidden="true"
          />
          <img
            src="/profile.jpg"
            alt="Rohit Kumar Chaurasiya"
            className="relative h-56 w-56 rounded-full border border-border object-cover shadow-glow sm:h-64 sm:w-64"
          />
        </div>
      </div>

      {/* status footer */}
      <div className="flex items-center justify-between border-t border-border px-5 py-4">
        <p className="font-mono text-caption text-ink-secondary">
          <span className="text-accent-cyan">role:</span> Software Engineer
        </p>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-signal-green/30 bg-signal-green/10 px-3 py-1 font-mono text-caption text-signal-green">
          <span className="h-1.5 w-1.5 rounded-full bg-signal-green" />
          open to work
        </span>
      </div>
    </div>
  )
}