import { motion } from "framer-motion";
import { workHistory, education } from "../data/portfolioData";
import Reveal from "./animations/Reveal";
import { Stagger, StaggerItem } from "./animations/Stagger";
import AnimatedCard from "./ui/AnimatedCard";

function TimelineItem({ item }) {
  return (
    <StaggerItem className="relative mb-12">
      {/* DOT */}
      <motion.div
        className="absolute -left-[34px] top-2 h-3 w-3 rounded-full border-2 border-[var(--bg2)] bg-[var(--accent)] shadow-[0_0_16px_rgba(0,217,163,0.5)]"
        animate={{ scale: [1, 1.25, 1], opacity: [1, 0.6, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />

      <AnimatedCard tilt={3}>
        <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 transition-colors duration-300 hover:border-[rgba(0,217,163,0.25)] hover:bg-[var(--card-h)]">
          <div className="mb-2 font-mono text-xs tracking-wide text-[var(--accent)]">
            {item.date}
          </div>

          <h3 className="mb-1 text-xl font-bold">{item.title}</h3>

          <div className="mb-4 text-sm text-[var(--muted)]">{item.company}</div>

          <p className="max-w-xl text-sm leading-relaxed text-[var(--muted)]">
            {item.desc}
          </p>

          {item.techs && item.techs.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {item.techs.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[var(--border)] bg-white/5 px-3 py-1 font-mono text-[10px] text-[var(--muted)]"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </AnimatedCard>
    </StaggerItem>
  );
}

function Timeline({ items }) {
  return (
    <div className="relative border-l border-[var(--border)] pl-8">
      {/* animated line fill */}
      <motion.div
        aria-hidden="true"
        className="absolute -left-px top-0 w-px origin-top bg-gradient-to-b from-[var(--accent)] to-transparent"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ height: "100%" }}
      />
      <Stagger className="flex flex-col" staggerChildren={0.1} amount={0.2}>
        {items.map((item) => (
          <TimelineItem key={item.title} item={item} />
        ))}
      </Stagger>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-[var(--bg2)]">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
              Career
            </span>
          </Reveal>
          <Reveal variant="blur" delay={0.05}>
            <h2 className="mt-3 text-4xl font-extrabold">
              Work <span className="text-gradient">Experience</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid items-start gap-16 md:grid-cols-2">
          <div>
            <Reveal>
              <h3 className="mb-8 text-xl font-semibold text-[var(--muted)]">
                Work History
              </h3>
            </Reveal>
            <Timeline items={workHistory} />
          </div>

          <div>
            <Reveal>
              <h3 className="mb-8 text-xl font-semibold text-[var(--muted)]">
                Education
              </h3>
            </Reveal>
            <Timeline items={education} />
          </div>
        </div>
      </div>
    </section>
  );
}