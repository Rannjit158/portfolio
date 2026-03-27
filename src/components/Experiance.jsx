// components/Experience.jsx
import { workHistory, education } from "../data/portfolioData";

function TimelineItem({ item }) {
  return (
    <div className="relative mb-12">
      {/* DOT */}
      <div className="absolute -left-[34px] top-2 w-3 h-3 rounded-full bg-[var(--accent)] shadow-[0_0_16px_rgba(0,217,163,0.5)] border-2 border-[var(--bg2)]"></div>

      {/* DATE */}
      <div className="text-xs font-mono text-[var(--accent)] tracking-wide mb-2">
        {item.date}
      </div>

      {/* TITLE */}
      <h3 className="text-xl font-bold mb-1">{item.title}</h3>

      {/* COMPANY */}
      <div className="text-sm text-[var(--muted)] mb-4">{item.company}</div>

      {/* DESC */}
      <p className="text-sm text-[var(--muted)] leading-relaxed max-w-xl">
        {item.desc}
      </p>

      {/* TECH STACK */}
      {item.techs && item.techs.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {item.techs.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-[10px] rounded-full border border-[var(--border)] bg-white/5 text-[var(--muted)] font-mono"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function Timeline({ items }) {
  return (
    <div className="relative pl-8 border-l border-[var(--border)]">
      {items.map((item) => (
        <TimelineItem key={item.title} item={item} />
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-[var(--bg2)]">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-widest text-[var(--muted)] font-mono">
            Career
          </span>

          <h2 className="text-4xl font-extrabold mt-3">Work Experience</h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* WORK */}
          <div>
            <h3 className="text-xl text-[var(--muted)] mb-8 font-semibold">
              Work History
            </h3>
            <Timeline items={workHistory} />
          </div>

          {/* EDUCATION */}
          <div>
            <h3 className="text-xl text-[var(--muted)] mb-8 font-semibold">
              Education
            </h3>
            <Timeline items={education} />
          </div>
        </div>
      </div>
    </section>
  );
}
