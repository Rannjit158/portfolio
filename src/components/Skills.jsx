import { useEffect, useRef, useState } from "react";
import { skillCategories } from "../data/portfolioData";

function SkillCard({ cat }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  // Intersection Observer (clean way)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group relative bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(0,217,163,0.3)] hover:bg-[var(--card-h)] overflow-hidden"
    >
      {/* Top Gradient Bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] opacity-0 group-hover:opacity-100 transition" />

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-[rgba(0,217,163,0.1)] border border-[rgba(0,217,163,0.2)] flex items-center justify-center text-xl text-[var(--accent)] mb-5">
        <i className={cat.icon}></i>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold mb-5">{cat.title}</h3>

      {/* CONTENT */}
      {cat.type === "bars" ? (
        <div className="flex flex-col gap-4">
          {cat.items.map((item) => (
            <div key={item.name}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{item.name}</span>
                <span className="text-xs font-mono text-[var(--accent)]">
                  {item.pct}%
                </span>
              </div>

              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] rounded-full transition-all duration-[1200ms]"
                  style={{
                    width: visible ? `${item.pct}%` : "0%",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap gap-2">
          {cat.items.map((pill) => (
            <span
              key={pill}
              className="px-3 py-1 text-xs rounded-full border border-[var(--border)] bg-white/5 text-[var(--muted)] font-mono"
            >
              {pill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-[var(--bg2)]">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-widest text-[var(--muted)] font-mono">
            My Toolkit
          </span>

          <h2 className="text-4xl font-extrabold mt-3 mb-4">
            Skills & Technologies
          </h2>

          <p className="text-[var(--muted)] max-w-xl mx-auto">
            A curated set of tools and technologies I use to build world-class
            applications from concept to deployment.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <SkillCard key={cat.title} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
