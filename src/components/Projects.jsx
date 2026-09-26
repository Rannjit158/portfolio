import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/portfolioData";
import Reveal from "./animations/Reveal";
import AnimatedCard from "./ui/AnimatedCard";

const filters = [
  { key: "all", label: "All" },
  { key: "laravel", label: "Laravel" },
  { key: "react", label: "React / Next.js" },
  { key: "fullstack", label: "Full-Stack" },
];

function ProjectCard({ project, active }) {
  const featured = project.featured;
  const show = active === "all" || project.categories.includes(active);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: show ? 1 : 0.2, y: 0, scale: show ? 1 : 0.96 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`${featured ? "md:col-span-2" : ""} ${
        show ? "" : "pointer-events-none"
      } h-full`}
    >
      <AnimatedCard tilt={5} className="h-full">
        <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg3)] transition-all duration-300 hover:border-[rgba(0,217,163,0.3)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
          {/* THUMB */}
          <div
            className={`relative flex items-center justify-center overflow-hidden ${
              featured ? "h-[240px]" : "h-[200px]"
            }`}
          >
            <img
              src={project.image}
              alt={project.title || "Project Image"}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div
              className="absolute left-0 right-0 top-0 h-[3px]"
              style={{ background: project.accentBar }}
            />
          </div>

          {/* BODY */}
          <div className="flex flex-1 flex-col p-7">
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[rgba(0,217,163,0.2)] bg-[rgba(0,217,163,0.08)] px-3 py-1 font-mono text-[10px] text-[var(--accent)]"
                >
                  {t}
                </span>
              ))}
            </div>

            <h3 className="mb-3 text-xl font-bold leading-tight">
              {project.title}
            </h3>

            <p className="mb-6 text-sm leading-relaxed text-[var(--muted)]">
              {project.desc}
            </p>

            <div className="mt-auto flex gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="group/link flex items-center gap-2 font-mono text-xs text-[var(--muted)] transition-colors duration-300 hover:text-[var(--accent)]"
              >
                <ExternalLink
                  size={14}
                  className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                />
                Live Demo
              </a>

              <a
                href={project.githubUrl}
                className="group/link flex items-center gap-2 font-mono text-xs text-[var(--muted)] transition-colors duration-300 hover:text-[var(--accent)]"
              >
                <Github size={14} className="transition-transform duration-300 group-hover/link:-translate-y-0.5" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </AnimatedCard>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState("all");

  return (
    <section id="projects" className="py-28">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
              My Work
            </span>
          </Reveal>
          <Reveal variant="blur" delay={0.05}>
            <h2 className="mb-4 mt-3 text-4xl font-extrabold">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto max-w-xl text-[var(--muted)]">
              A selection of real-world applications built with modern stacks,
              focusing on performance, scalability, and great UX.
            </p>
          </Reveal>
        </div>

        {/* FILTERS */}
        <Reveal delay={0.1}>
          <div className="mb-14 flex flex-wrap justify-center gap-3">
            {filters.map((f) => {
              const isActive = active === f.key;
              return (
                <button
                  key={f.key}
                  onClick={() => setActive(f.key)}
                  className={`relative rounded-full border px-5 py-2 font-mono text-xs transition-colors duration-300 ${
                    isActive
                      ? "border-[var(--accent)] bg-[var(--accent)] text-black"
                      : "border-[var(--border)] bg-[var(--card)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-white"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* GRID */}
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} active={active} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}