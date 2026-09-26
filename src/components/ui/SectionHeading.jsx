import { motion, useReducedMotion } from "framer-motion";
import Reveal from "../animations/Reveal";
import { EASE } from "../animations/constants";

// Word-by-word masked rise used by the section headings.
function AnimatedWords({ text, delay = 0, className = "" }) {
  const reduced = useReducedMotion();
  const words = String(text).trim().split(/\s+/);

  if (reduced) return <span className={className}>{text}</span>;

  return (
    <motion.span
      aria-hidden="true"
      className={`inline ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.05, delayChildren: delay } },
      }}
    >
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          className="inline-block overflow-hidden pb-[0.06em] align-top"
        >
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "115%", opacity: 0 },
              show: { y: "0%", opacity: 1, transition: { duration: 0.7, ease: EASE } },
            }}
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/**
 * Shared section header: eyebrow, masked word-by-word title with a gradient
 * accent, a rule that draws itself in, and an optional description.
 */
export default function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "center",
  className = "",
}) {
  const centered = align === "center";

  return (
    <div
      className={`mb-16 flex flex-col ${centered ? "items-center text-center" : "items-start text-left"} ${className}`}
    >
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
            <span className="h-px w-6 bg-[var(--accent)]" aria-hidden="true" />
            {eyebrow}
          </span>
        </Reveal>
      )}

      <h2 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
        <span className="sr-only">{`${title}${accent ? ` ${accent}` : ""}`}</span>
        <AnimatedWords text={title} delay={0.05} />
        {accent && (
          <span className="text-gradient animate-gradient-pan">
            <AnimatedWords text={accent} delay={0.14} />
          </span>
        )}
      </h2>

      <motion.span
        aria-hidden="true"
        className="mt-5 block h-px w-40 origin-left bg-gradient-to-r from-[var(--accent)] to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
        style={centered ? { left: "50%", x: "-50%" } : undefined}
      />

      {description && (
        <Reveal delay={0.15}>
          <p
            className={`mt-6 text-[var(--muted)] ${
              centered ? "mx-auto max-w-xl" : "max-w-2xl"
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
