// Lightweight scene loader shown while the WebGL canvas spins up.
export default function Loader({ done = false }) {
  return (
    <div
      className={`absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-500 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="relative h-10 w-10">
          <div className="absolute inset-0 rounded-full border-2 border-[rgba(0,217,163,0.12)]" />
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-[var(--accent)]" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
          Loading scene
        </span>
      </div>
    </div>
  );
}