import { useEffect, useRef } from "react";
import {
  personalInfo,
  stats,
  heroBadges,
  heroFloatCards,
  typedPhrases,
} from "../data/portfolioData";

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
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

    timer = setTimeout(type, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-28 pb-20 relative overflow-hidden"
    >
      <div className="container mx-auto relative z-10 px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            {/* Status */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent)] animate-pulse"></div>
              <span className="text-xs text-[var(--muted)] tracking-wider font-mono">
                {personalInfo.tagline}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-extrabold leading-tight text-[clamp(48px,6vw,82px)] mb-6">
              <span>Full-Stack</span> <br />
              <span ref={typedRef} className="text-[var(--accent)]">
                Laravel
              </span>{" "}
              <br />
              <span className="text-transparent stroke-text">Developer</span>
            </h1>

            {/* Description */}
            <p className="text-[var(--muted)] text-lg leading-relaxed max-w-md mb-10">
              {personalInfo.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-secondary">
                Get In Touch
              </a>
            </div>

            {/* Stats */}
            {/* <div className="flex gap-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-extrabold tracking-tight">
                    {s.num}
                    <span className="text-[var(--accent)]">{s.suffix}</span>
                  </div>
                  <div className="text-xs text-[var(--muted)]">{s.label}</div>
                </div>
              ))}
            </div> */}
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">
            <div className="relative w-[360px] h-[440px]">
              {/* MAIN CARD */}
              <div className="absolute inset-0 bg-[var(--bg3)] border border-[var(--border)] rounded-2xl flex flex-col items-center justify-center gap-5">
                {/* Avatar */}
                <div className="relative w-[140px] h-[140px] rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent2)] flex items-center justify-center text-5xl font-extrabold text-[var(--bg)]">
                  {personalInfo.initials}

                  <div className="absolute inset-[-4px] rounded-full border-2 border-[rgba(0,217,163,0.3)] animate-spin-slow"></div>
                </div>

                <div className="text-xl font-bold">{personalInfo.name}</div>

                <div className="text-xs uppercase tracking-wider text-[var(--accent)] font-mono">
                  {personalInfo.role}
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 justify-center px-4">
                  {heroBadges.map((b) => (
                    <span
                      key={b}
                      className="text-[10px] px-3 py-1 rounded-full border border-[var(--border)] bg-white/5 text-[var(--muted)] font-mono"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* FLOAT CARDS */}
              {/* {heroFloatCards.map((fc) => (
                <div
                  key={fc.label}
                  className={`absolute bg-[var(--bg2)] border border-[var(--border)] rounded-lg px-4 py-3 backdrop-blur-md animate-float ${
                    fc.className === "card1"
                      ? "-top-5 -left-12"
                      : "bottom-10 -right-12"
                  }`}
                >
                  <div className="text-[10px] text-[var(--muted)] font-mono mb-1">
                    {fc.label}
                  </div>
                  <div className="text-xl font-bold text-[var(--accent)]">
                    {fc.value}
                  </div>
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </div>

      {/* BG GRID */}
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:80px_80px] mask-radial"></div>
    </section>
  );
}
