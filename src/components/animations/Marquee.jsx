import { motion, useReducedMotion } from "framer-motion";

/**
 * Seamless infinite marquee. The track holds two identical copies of the
 * content and translates by exactly -50%, which makes the loop invisible.
 * Renders static, wrapped content under reduced motion.
 */
export default function Marquee({
  items = [],
  speed = 30,
  reverse = false,
  className = "",
  itemClassName = "",
  separator = "◆",
  fadeFrom = "var(--bg)",
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div className={`flex flex-wrap items-center justify-center gap-x-3 gap-y-1 ${className}`}>
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={`font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--muted)] ${itemClassName}`}
          >
            {item}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* edge fades */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-28"
        style={{ background: `linear-gradient(to right, ${fadeFrom}, transparent)` }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-28"
        style={{ background: `linear-gradient(to left, ${fadeFrom}, transparent)` }}
      />

      <motion.div
        className="flex w-max"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex shrink-0 items-center"
            aria-hidden={copy === 1 ? "true" : undefined}
          >
            {items.map((item, i) => (
              <div key={`${item}-${i}`} className="flex items-center">
                <span
                  className={`whitespace-nowrap px-6 font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--accent)] md:text-[15px] ${itemClassName}`}
                >
                  {item}
                </span>
                <span className="text-[8px] text-[var(--accent)] opacity-40" aria-hidden="true">
                  {separator}
                </span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
