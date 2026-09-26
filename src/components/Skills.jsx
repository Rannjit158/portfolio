import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "../data/portfolioData";
import { Stagger, StaggerItem } from "./animations/Stagger";
import SectionHeading from "./ui/SectionHeading";
import AnimatedCard from "./ui/AnimatedCard";
import CountUp from "./ui/CountUp";

function SkillCard({ cat }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  // Intersection Observer triggers the skill bars.
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const Icon = cat.icon;

  return (
    <StaggerItem className="h-full">
      <AnimatedCard tilt={5} className="h-full">
        <div
          ref={ref}
          className="group relative h-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 transition-all duration-300 hover:border-[rgba(0,217,163,0.3)] hover:bg-[var(--card-h)]"
        >
          {/* Top gradient bar */}
          <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* cursor spotlight */}
          <div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 cv-card-glow" aria-hidden="true" />

          {/* Icon */}
          <motion.div
            className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(0,217,163,0.2)] bg-[rgba(0,217,163,0.1)] text-xl text-[var(--accent)]"
            whileHover={{ scale: 1.08, rotate: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 16 }}
          >
            {Icon && <Icon size={24} />}
          </motion.div>

          <h3 className="mb-5 text-lg font-bold">{cat.title}</h3>

          {cat.type === "bars" ? (
            <div className="flex flex-col gap-4">
              {cat.items.map((item, i) => (
                <div key={item.name}>
                  <div className="mb-1 flex justify-between">
                    <span className="text-sm font-medium">{item.name}</span>
                    <span className="font-mono text-xs text-[var(--accent)]">
                      <CountUp
                        to={item.pct}
                        suffix="%"
                        start={visible}
                        delay={i * 0.12}
                        duration={1.3}
                      />
                    </span>
                  </div>
                  <div className="h-1 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)]"
                      initial={{ width: 0 }}
                      animate={{ width: visible ? `${item.pct}%` : "0%" }}
                      transition={{ duration: 1.2, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <span className="block h-full w-full bg-white/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <Stagger className="flex flex-wrap gap-2" staggerChildren={0.05} amount={0.1}>
              {cat.items.map((pill) => (
                <StaggerItem key={pill} variant="scale">
                  <span className="inline-block rounded-full border border-[var(--border)] bg-white/5 px-3 py-1 font-mono text-xs text-[var(--muted)] transition-colors duration-300 hover:border-[rgba(0,217,163,0.4)] hover:text-[var(--accent)]">
                    {pill}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          )}
        </div>
      </AnimatedCard>
    </StaggerItem>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-[var(--bg2)]">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="My Toolkit"
          title="Skills"
          accent="& Technologies"
          description="A curated set of tools and technologies I use to build world-class applications from concept to deployment."
        />

        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" staggerChildren={0.08}>
          {skillCategories.map((cat) => (
            <SkillCard key={cat.title} cat={cat} />
          ))}
        </Stagger>
      </div>
    </section>
  );
}