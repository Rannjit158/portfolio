import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { personalInfo } from "../data/portfolioData";
import Reveal from "./animations/Reveal";
import BlockReveal from "./animations/BlockReveal";
import { Stagger, StaggerItem } from "./animations/Stagger";
import AnimatedCard from "./ui/AnimatedCard";
import CvButton from "./ui/CvButton";
import { FaFileDownload } from "react-icons/fa";

export default function About() {
  const imgRef = useRef(null);
  // Try modern format first (png), fall back to webp copy, then initials.
  const imgCandidates = [
    personalInfo.heroImage,
    personalInfo.heroImageFallback,
  ].filter(Boolean);
  const [imgIdx, setImgIdx] = useState(0);
  const imgFailed = imgIdx >= imgCandidates.length;

  // If everything is already cached/broken, React's onError may never fire —
  // check on mount so the initials fallback shows instead of a broken icon.
  useEffect(() => {
    if (!imgRef.current) return;
    if (imgRef.current.complete && imgRef.current.naturalWidth === 0) {
      setImgIdx(imgCandidates.length);
    }
  }, [imgCandidates.length]);

  const facts = [
    { label: "Name", val: personalInfo.name },
    { label: "Location", val: personalInfo.location },
    { label: "Degree", val: personalInfo.degree },
    { label: "Status", val: personalInfo.status, highlight: true },
  ];

  const socials = [
    { label: "GitHub", href: personalInfo.github, Icon: FaGithub },
    { label: "LinkedIn", href: personalInfo.linkedin, Icon: FaLinkedin },
    { label: "WhatsApp", href: personalInfo.whatsapp, Icon: FaWhatsapp },
    { label: "Email", href: `mailto:${personalInfo.email}`, Icon: LuMail },
  ];

  return (
    <section id="about" className="relative py-28">
      {/* subtle decorative glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-64 w-64 rounded-full bg-[var(--accent)] opacity-[0.05] blur-[120px]" />

      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* PROFILE VIEW */}
          <div className="relative mx-auto w-full max-w-[420px]">
            <BlockReveal direction="left">
              <div className="rounded-3xl bg-gradient-to-br from-[var(--accent)] via-[var(--accent2)] to-[var(--accent)] p-[2px] shadow-[0_20px_60px_-20px_rgba(0,217,163,0.35)]">
                <div className="relative aspect-[4/5] min-h-[400px] overflow-hidden rounded-3xl bg-[#0b1116]">
                  {/* placeholder underneath the photo (visible only while it loads) */}
                  <div className="absolute inset-0 z-0 flex items-center justify-center" aria-hidden="true">
                    <div className="shimmer absolute inset-0" />
                    <span className="text-gradient text-[72px] font-extrabold leading-none">
                      {personalInfo.initials || "RR"}
                    </span>
                  </div>

                  {/* portrait — always fully visible once the browser decodes it */}
                  {imgFailed ? (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#0D1117] to-[#111820]">
                      <span className="text-gradient text-[92px] font-extrabold leading-none">
                        {personalInfo.initials || "RR"}
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--muted)]">
                        {personalInfo.role}
                      </span>
                    </div>
                  ) : (
                    <img
                      ref={imgRef}
                      key={imgCandidates[imgIdx]}
                      src={imgCandidates[imgIdx]}
                      alt={`${personalInfo.name} — profile photo`}
                      decoding="async"
                      onError={() => setImgIdx((i) => i + 1)}
                      className="absolute inset-0 z-10 h-full w-full object-cover"
                    />
                  )}

                  {/* bottom info strip */}
                  <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 pt-16">
                    <div className="text-lg font-bold">{personalInfo.name}</div>
                    <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--accent)]">
                      {personalInfo.role}
                    </div>

                    {/* social chips */}
                    <div className="mt-3 flex gap-2">
                      {socials.map(({ label, href, Icon }) => (
                        <a
                          key={label}
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noreferrer" : undefined}
                          aria-label={label}
                          title={label}
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[var(--text)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(0,217,163,0.5)] hover:text-[var(--accent)]"
                        >
                          <Icon className="text-sm" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* status chip */}
                  <div className="absolute right-4 top-4 z-20 flex items-center gap-2 rounded-full border border-[var(--border)] bg-black/40 px-3 py-1.5 backdrop-blur-md">
                    <span className="animate-pulse h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]" />
                    <span className="font-mono text-[10px] text-[var(--text)]">
                      {personalInfo.status}
                    </span>
                  </div>
                </div>
              </div>
            </BlockReveal>

            {/* floating frame accent */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-6 -right-6 h-40 w-40 rounded-2xl border border-[rgba(0,217,163,0.25)]"
              animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* TEXT */}
          <div>
            <Reveal>
              <span className="mb-4 inline-block font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
                About Me
              </span>
            </Reveal>

            <Reveal variant="blur" delay={0.05}>
              <h2 className="mb-6 text-4xl font-extrabold leading-tight">
                Turning ideas into <br />
                <span className="text-gradient">digital reality</span>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mb-4 leading-relaxed text-[var(--muted)]">
                {personalInfo.aboutDesc1}
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <p className="mb-8 leading-relaxed text-[var(--muted)]">
                {personalInfo.aboutDesc2}
              </p>
            </Reveal>

            {/* FACTS */}
            <Stagger className="mb-8 grid grid-cols-2 gap-4" staggerChildren={0.08}>
              {facts.map((f) => (
                <StaggerItem key={f.label}>
                  <AnimatedCard tilt={4}>
                    <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 transition-colors duration-300 hover:border-[rgba(0,217,163,0.25)]">
                      <div className="mb-1 font-mono text-[11px] uppercase tracking-wider text-[var(--muted)]">
                        {f.label}
                      </div>
                      <div
                        className={`text-sm font-medium ${
                          f.highlight ? "text-[var(--accent)]" : ""
                        }`}
                      >
                        {f.val}
                      </div>
                    </div>
                  </AnimatedCard>
                </StaggerItem>
              ))}
            </Stagger>

            {/* CV CTA */}
            <Reveal delay={0.1}>
              <div className="flex flex-wrap items-center gap-4">
                <CvButton
                  variant="primary"
                  icon={<FaFileDownload size={15} />}
                  label="Download CV"
                />
                <span className="font-mono text-[11px] leading-relaxed text-[var(--muted)]">
                  PDF · open to work · replies within 24h
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
