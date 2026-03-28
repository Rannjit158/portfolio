// components/Projects.jsx
import { useState } from "react";
import { projects } from "../data/portfolioData";

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
    <div
      className={`group relative bg-[var(--bg3)] border border-[var(--border)] rounded-2xl overflow-hidden transition-all duration-300
      ${featured ? "md:col-span-2" : ""}
      ${show ? "opacity-100 scale-100" : "opacity-20 scale-95 pointer-events-none"}
      hover:-translate-y-1 hover:border-[rgba(0,217,163,0.3)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.5)]`}
    >
      {/* THUMB */}
      <div
        className={`relative flex items-center justify-center overflow-hidden ${
          featured ? "h-[240px]" : "h-[200px]"
        }`}
      >
        {/* Project Image */}
        <img
          src={project.image} // make sure this points to your image URL or import
          alt={project.title || "Project Image"}
          className="w-full h-full object-cover "
        />

        {/* Optional Overlay (if you want accent bar visible) */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{ background: project.accentBar }}
        />

        {/* Optional Number Overlay */}
        {/* <span className="absolute bottom-4 left-5 text-[80px] font-extrabold text-white/5 leading-none">
          {project.num}
        </span> */}
      </div>

      {/* BODY */}
      <div className="p-7">
        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-[10px] px-3 py-1 rounded-full font-mono text-[var(--accent)] bg-[rgba(0,217,163,0.08)] border border-[rgba(0,217,163,0.2)]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* TITLE */}
        <h3 className="text-xl font-bold mb-3 leading-tight">
          {project.title}
        </h3>

        {/* DESC */}
        <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
          {project.desc}
        </p>

        {/* LINKS */}
        <div className="flex gap-4">
          <a
            href={project.liveUrl}
            className="flex items-center gap-2 text-xs font-mono text-[var(--muted)] hover:text-[var(--accent)] transition"
          >
            <i className="fas fa-external-link-alt"></i>
            Live Demo
          </a>

          <a
            href={project.githubUrl}
            className="flex items-center gap-2 text-xs font-mono text-[var(--muted)] hover:text-[var(--accent)] transition"
          >
            <i className="fab fa-github"></i>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState("all");

  return (
    <section id="projects" className="py-28">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-widest text-[var(--muted)] font-mono">
            My Work
          </span>

          <h2 className="text-4xl font-extrabold mt-3 mb-4">
            Featured Projects
          </h2>

          <p className="text-[var(--muted)] max-w-xl mx-auto">
            A selection of real-world applications built with modern stacks,
            focusing on performance, scalability, and great UX.
          </p>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`px-5 py-2 text-xs font-mono rounded-full border transition
                ${
                  active === f.key
                    ? "bg-[var(--accent)] text-black border-[var(--accent)]"
                    : "bg-[var(--card)] text-[var(--muted)] border-[var(--border)] hover:border-[var(--accent)] hover:text-white"
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
