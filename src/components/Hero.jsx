import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView, animate, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import {
  personalInfo,
  stats,
  heroBadges,
  heroFloatCards,
  typedPhrases,
  heroCodeSnippets,
} from "../data/portfolioData";
import useMouseParallax from "../hooks/useMouseParallax";
import useDeviceLevel from "../hooks/useDeviceLevel";
import AnimatedButton from "./ui/AnimatedButton";

const EASE = [0.22, 1, 0.36, 1];

// Visual layer wrapper that translates based on damped mouse movement.
function ParallaxLayer({ mouseRef, strength = 12, enabled = true, className, children, style }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !enabled) return;
    let raf;
    let cx = 0;
    let cy = 0;
    const lerp = (a, b, k) => a + (b - a) * k;
    const tick = () => {
      const tx = (mouseRef.current?.x ?? 0) * strength;
      const ty = (mouseRef.current?.y ?? 0) * strength;
      cx = lerp(cx, tx, 0.08);
      cy = lerp(cy, ty, 0.08);
      if (ref.current)
        ref.current.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [mouseRef, strength, enabled, reduced]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

// Animated stat counter.
function Counter({ to, suffix, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduced = useReducedMotion();
  const [val, setVal] = useState(reduced ? to : 0);

  useEffect(() => {
    if (!inView || reduced) return;
    const controls = animate(0, to, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, reduced]);

  return (
    <div ref={ref}>
      <div className="text-3xl font-extrabold tracking-tight">
        {val}
        <span className="text-[var(--accent)]">{suffix}</span>
      </div>
      <div className="text-xs text-[var(--muted)]">{label}</div>
    </div>
  );
}

// Syntax highlighting tokens for the code editor card.
const TOKEN_STYLES = {
  c: "italic text-[var(--muted)]/60",
  kw: "text-[#c678dd]",
  fn: "text-[#61aeee]",
  s: "text-[#f5c842]",
  p: "text-[#e06c75]",
  b: "text-[var(--accent)]",
  t: "text-[var(--muted)]",
};

// Auto-cycling code editor card — cycles through different snippet types.
function CodeCard() {
  const [idx, setIdx] = useState(0);
  const reduced = useReducedMotion();
  const count = heroCodeSnippets.length;
  const snippet = heroCodeSnippets[idx % count];

  useEffect(() => {
    if (reduced || count <= 1) return;
    const timer = setInterval(() => {
      setIdx((i) => (i + 1) % count);
    }, 4200);
    return () => clearInterval(timer);
  }, [reduced, count]);

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[#0b1116] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
      {/* window header */}
      <div className="flex items-center gap-3 border-b border-[var(--border)] bg-[#111820] px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="ml-2 font-mono text-xs text-[var(--muted)]">
          {snippet.file}
        </span>
        {/* progress dots */}
        <div className="ml-auto flex items-center gap-1" aria-hidden="true">
          {heroCodeSnippets.map((_, i) => (
            <span
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === idx % count ? "w-4 bg-[var(--accent)]" : "w-1 bg-[var(--muted)]/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* code body — fixed height, scrolls to the active snippet */}
      <div className="h-[264px] overflow-auto px-5 py-4 font-mono text-[12.5px] leading-6 md:text-[13px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={snippet.file}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            {snippet.lines.map((tokens, li) => (
              <div key={li} className="flex">
                <span className="mr-4 inline-block w-4 shrink-0 select-none text-right text-[var(--muted)]/40">
                  {li + 1}
                </span>
                <span className="whitespace-pre">
                  {tokens.map((tk, ti) => (
                    <span key={ti} className={TOKEN_STYLES[tk.t] || TOKEN_STYLES.t}>
                      {tk.v}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* terminal footer */}
      <div className="flex items-center gap-3 border-t border-[var(--border)] bg-[#111820] px-5 py-3">
        <span className="text-[var(--accent)]">$</span>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={snippet.cmd}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="font-mono text-xs text-[var(--text)]"
          >
            {snippet.cmd}
          </motion.span>
        </AnimatePresence>
        <span className="animate-pulse inline-block h-3.5 w-2 bg-[var(--accent)]" aria-hidden="true" />
      </div>
    </div>
  );
}

export default function Hero() {
  const typedRef = useRef(null);
  const mouseRef = useMouseParallax();
  const { isTouch } = useDeviceLevel();
  const reduced = useReducedMotion();
  const interactive = !isTouch && !reduced;

  // Typewriter effect (preserved from original implementation).
  useEffect(() => {
    if (reduced) {
      if (typedRef.current) typedRef.current.textContent = typedPhrases[0];
      return;
    }
    const phrases = typedPhrases;
    let pi = 0,
      ci = 0,
      deleting = false;
    let timer;

    function type() {
      const phrase = phrases[pi];
      if (!deleting) {
        if (typedRef.current)
          typedRef.current.textContent = phrase.slice(0, ++ci);
        if (ci === phrase.length) {
          deleting = true;
          timer = setTimeout(type, 1800);
          return;
        }
      } else {
        if (typedRef.current)
          typedRef.current.textContent = phrase.slice(0, --ci);
        if (ci === 0) {
          deleting = false;
          pi = (pi + 1) % phrases.length;
        }
      }
      timer = setTimeout(type, deleting ? 60 : 90);
    }

    timer = setTimeout(type, 1400);
    return () => clearTimeout(timer);
  }, [reduced]);

  const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
  };

  const lineReveal = {
    hidden: { y: "115%" },
    show: { y: "0%", transition: { duration: 0.8, ease: EASE } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-28 pb-20"
    >
      {/* LAYER 1: background grid */}
      <ParallaxLayer
        mouseRef={mouseRef}
        strength={10}
        enabled={interactive}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.2, ease: EASE }}
          className="hero-grid mask-radial absolute inset-0"
        />
      </ParallaxLayer>

      {/* LAYER 2: decorative shapes */}
      <ParallaxLayer
        mouseRef={mouseRef}
        strength={26}
        enabled={interactive}
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="animate-float absolute right-[8%] top-[18%] h-40 w-40 rounded-full bg-[var(--accent)] opacity-[0.07] blur-[90px]" />
        <div className="animate-float absolute left-[6%] bottom-[14%] h-32 w-32 rounded-full bg-[var(--accent2)] opacity-[0.06] blur-[80px]" style={{ animationDelay: "1.5s" }} />
        <div className="absolute left-[12%] top-[24%] hidden h-14 w-14 rounded-full border border-[rgba(0,217,163,0.18)] md:block" />
        <div className="absolute right-[22%] bottom-[20%] hidden h-3 w-3 rounded-full bg-[var(--accent)] opacity-40 md:block animate-pulse" />
      </ParallaxLayer>

      {/* LAYER 3: content */}
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* LEFT */}
          <ParallaxLayer
            mouseRef={mouseRef}
            strength={7}
            enabled={interactive}
            className="min-w-0"
          >
            <motion.div
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.3 } } }}
            >
              <motion.div variants={fadeUp}>
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent)] animate-pulse"></div>
                  <span className="font-mono text-xs tracking-wider text-[var(--muted)]">
                    {personalInfo.tagline}
                  </span>
                </div>
              </motion.div>

              {/* Title */}
              <motion.div variants={lineReveal} className="mb-2 overflow-hidden">
                <h1 className="font-bold leading-tight text-[clamp(42px,6vw,82px)]">
                  <motion.span
                    className="block overflow-hidden"
                    initial="hidden"
                    animate="show"
                    variants={lineReveal}
                    transition={{ delay: 0.4 }}
                  >
                    <span className="block">Hi I'm Ranjit Rajbanshi</span>
                  </motion.span>
                  <motion.span
                    className="block"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65, duration: 0.7, ease: EASE }}
                  >
                    <span ref={typedRef} className="text-[var(--accent)]">
                      Laravel
                    </span>{" "}
                    <br />
                  </motion.span>
                  <motion.span
                    className="block overflow-hidden"
                    initial="hidden"
                    animate="show"
                    variants={lineReveal}
                    transition={{ delay: 0.55 }}
                  >
                    <span className="block text-transparent stroke-text">
                      Developer
                    </span>
                  </motion.span>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.7, ease: EASE }}
                className="mb-10 max-w-md text-lg leading-relaxed text-[var(--muted)]"
              >
                {personalInfo.description}
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6, ease: EASE }}
                className="mb-12 flex flex-wrap gap-4"
              >
                <AnimatedButton
                  href="#projects"
                  variant="primary"
                  icon={<ArrowUpRight size={16} />}
                >
                  View My Work
                </AnimatedButton>
                <AnimatedButton href="#contact" variant="secondary" icon={<ArrowRight size={15} />}>
                  Get In Touch
                </AnimatedButton>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.15, duration: 0.6, ease: EASE }}
                className="flex gap-10"
              >
                {stats.map((s) => (
                  <Counter
                    key={s.label}
                    to={parseInt(s.num, 10)}
                    suffix={s.suffix}
                    label={s.label}
                  />
                ))}
              </motion.div>

              {/* Badge chips */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.7, ease: EASE }}
                className="mt-8 flex flex-wrap gap-2"
              >
                {heroBadges.map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-[var(--border)] bg-white/5 px-3 py-1 font-mono text-[11px] text-[var(--muted)]"
                  >
                    {b}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </ParallaxLayer>

          {/* RIGHT: code editor card */}
          <ParallaxLayer
            mouseRef={mouseRef}
            strength={16}
            enabled={interactive}
            className="relative flex justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 1 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: 0.7, duration: 0.9, ease: EASE }}
              className="relative w-full max-w-[460px]"
            >
              {/* glow behind card */}
              <div className="absolute -inset-8 rounded-3xl bg-[var(--accent)] opacity-[0.08] blur-[70px]" aria-hidden="true" />

              <div className="animate-float">
                <CodeCard />
              </div>

              {/* FLOAT CARDS */}
              {heroFloatCards.map((fc, i) => (
                <motion.div
                  key={fc.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 + i * 0.12, duration: 0.6, ease: EASE }}
                  className={`absolute animate-float rounded-lg border border-[var(--border)] bg-[var(--bg2)] px-4 py-3 shadow-lg backdrop-blur-md ${
                    fc.className === "card1"
                      ? "-top-6 -left-6 md:-left-10"
                      : "-bottom-6 -right-6 md:-right-10"
                  }`}
                  style={{ animationDelay: `${i * 1.3}s` }}
                >
                  <div className="mb-1 font-mono text-[10px] text-[var(--muted)]">
                    {fc.label}
                  </div>
                  <div className="text-xl font-bold text-[var(--accent)]">
                    {fc.value}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </ParallaxLayer>
        </div>
      </div>
    </section>
  );
}