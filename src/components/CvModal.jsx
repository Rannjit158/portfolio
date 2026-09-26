import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useScroll, useReducedMotion } from "framer-motion";
import {
  X,
  Printer,
  FileDown,
  FileText,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  MessageCircle,
  Check,
  ExternalLink as ExternalLinkIcon,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";
import {
  cvMeta,
  cvExperience,
  cvEducation,
  cvProjects,
  cvSkillGroups,
  cvStrengths,
  cvLanguages,
} from "../data/cvData";
import useCvDownload, { CV_OPEN_EVENT } from "../hooks/useCvDownload";
import Magnetic from "./ui/Magnetic";
import Reveal from "./animations/Reveal";
import CountUp from "./ui/CountUp";

const EASE = [0.22, 1, 0.36, 1];

const QUICK_LINKS = [
  { id: "cv-summary", label: "Summary" },
  { id: "cv-experience", label: "Experience" },
  { id: "cv-projects", label: "Projects" },
  { id: "cv-education", label: "Education" },
  { id: "cv-skills", label: "Skills" },
];

function SectionTitle({ id, index, children, action }) {
  return (
    <div className="cv-anchor" id={id}>
      <Reveal>
        <div className="mb-6 flex items-center gap-4">
          <span className="cv-index">{index}</span>
          <h3 className="cv-h2">{children}</h3>
          <span className="cv-rule grow" />
          {action}
        </div>
      </Reveal>
    </div>
  );
}

function Bullets({ items }) {
  return (
    <ul className="mb-4 flex flex-col gap-2">
      {items.map((b, i) => (
        <li key={i} className="cv-li">
          <span className="cv-bullet" aria-hidden="true" />
          <span className="cv-muted cv-body-sm">{b}</span>
        </li>
      ))}
    </ul>
  );
}

function Chips({ items }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((t) => (
        <span key={t} className="cv-chip">
          {t}
        </span>
      ))}
    </div>
  );
}

function Entry({ item }) {
  return (
    <Reveal>
      <article className="cv-block">
        <div className="mb-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h4 className="cv-h3">{item.role}</h4>
          <span className="cv-period">{item.period}</span>
        </div>
        <div className="mb-3 font-mono text-[12px] tracking-wide">
          <span className="cv-accent">{item.company}</span>
          {item.location ? <span className="cv-muted"> · {item.location}</span> : null}
          {item.type ? <span className="cv-muted"> · {item.type}</span> : null}
        </div>

        {item.bullets?.length > 0 && <Bullets items={item.bullets} />}
        {item.tech?.length > 0 && <Chips items={item.tech} />}
      </article>
    </Reveal>
  );
}

function ProjectEntry({ project }) {
  return (
    <Reveal>
      <article className="cv-block">
        <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
          <h4 className="cv-h3">{project.title}</h4>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="cv-link font-mono text-[11px]"
            >
              {project.url.replace(/^https?:\/\//, "")} ↗
            </a>
          )}
        </div>
        <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.12em] cv-muted">
          {project.role}
        </div>
        <Bullets items={project.bullets} />
        <Chips items={project.stack} />
      </article>
    </Reveal>
  );
}

function ActionButton({ onClick, title, children, primary = false }) {
  return (
    <Magnetic strength={9}>
      <button
        type="button"
        onClick={onClick}
        title={title}
        className={`cv-action ${primary ? "cv-action-primary" : ""}`}
      >
        {children}
      </button>
    </Magnetic>
  );
}

// Rendered only while the modal is open, so the scroll container ref is
// hydrated on mount and useScroll can measure it.
function CvSheet({ onClose }) {
  const [copied, setCopied] = useState(false);
  const [view, setView] = useState("doc");
  const scrollRef = useRef(null);
  const reduced = useReducedMotion();
  const { hasFile, download, size } = useCvDownload();

  const { scrollYProgress } = useScroll({ container: scrollRef });

  // Esc to close + scroll lock without a layout jump.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    const prevOverflow = document.body.style.overflow;
    const prevPad = document.body.style.paddingRight;
    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPad;
    };
  }, [onClose]);

  const runPrint = () => {
    document.body.classList.add("cv-print-mode");
    const cleanup = () => {
      document.body.classList.remove("cv-print-mode");
      window.removeEventListener("afterprint", cleanup);
    };
    window.addEventListener("afterprint", cleanup);
    window.print();
    // Some engines never fire afterprint — don't leave the body locked.
    window.setTimeout(cleanup, 2000);
  };

  // Always print the on-site document, never the embedded PDF viewer.
  const print = () => {
    if (view === "doc") {
      runPrint();
    } else {
      setView("doc");
      window.setTimeout(runPrint, 150);
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked — the mailto link still works */
    }
  };

  const jump = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  };

  const contacts = [
    { icon: Mail, label: personalInfo.email, action: copyEmail },
    { icon: Phone, label: "+977 9824301087", href: "tel:+9779824301087" },
    { icon: MapPin, label: "Biratnagar, Nepal" },
    { icon: FaWhatsapp, label: personalInfo.whatsappHandle, href: personalInfo.whatsapp },
    { icon: Github, label: personalInfo.githubHandle, href: personalInfo.github },
    { icon: Linkedin, label: "LinkedIn", href: personalInfo.linkedin },
  ];

  return (
    <>
      <motion.div
        className="cv-backdrop absolute inset-0 bg-[rgba(3,6,9,0.82)] backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Curriculum vitae"
        className="cv-sheet-wrap relative mx-auto flex h-full w-full flex-col overflow-hidden border border-[var(--border)] bg-[var(--bg2)] shadow-[0_40px_120px_rgba(0,0,0,0.7)] md:my-6 md:h-[calc(100vh-3rem)] md:w-[min(1080px,calc(100vw-3rem))] md:rounded-3xl"
        initial={reduced ? { opacity: 0 } : { opacity: 0, y: 44, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={reduced ? { opacity: 0 } : { opacity: 0, y: 30, scale: 0.98 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        {/* progress of the CV sheet itself */}
        <motion.div
          aria-hidden="true"
          className="no-print absolute left-0 top-0 z-30 h-[3px] w-full origin-left bg-gradient-to-r from-[var(--accent)] via-[var(--accent2)] to-[var(--accent)]"
          style={{ scaleX: scrollYProgress }}
        />

        {/* HEADER */}
        <header className="no-print relative z-20 flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] bg-[var(--bg2)]/95 px-4 py-3.5 backdrop-blur-xl md:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(0,217,163,0.3)] bg-[rgba(0,217,163,0.1)] font-mono text-xs text-[var(--accent)]">
              CV
            </span>
                <div>
                  <div className="text-sm font-bold leading-tight">{personalInfo.name}</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">
                    {cvMeta.headline} · {hasFile ? `PDF${size ? ` · ${size} KB` : ""}` : "on-site CV"} · updated {cvMeta.updated}
                  </div>
                </div>
          </div>

          <div className="flex items-center gap-2">
            <ActionButton
              onClick={hasFile ? download : print}
              primary
              title={hasFile ? "Download PDF" : "Save as PDF"}
            >
              {hasFile ? <FileDown size={14} /> : <Printer size={14} />}
              <span className="hidden sm:inline">
                {hasFile ? "Download PDF" : "Save as PDF"}
              </span>
            </ActionButton>

            <ActionButton onClick={print} title="Print">
              <Printer size={14} />
              <span className="hidden md:inline">Print</span>
            </ActionButton>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close CV"
              className="cv-action !px-2.5"
            >
              <X size={16} />
            </button>
          </div>
        </header>

        {/* VIEW SWITCH + QUICK JUMP */}
        <nav className="no-print flex shrink-0 items-center gap-2 overflow-x-auto border-b border-[var(--border)] bg-[var(--bg2)]/80 px-4 py-2 backdrop-blur-xl md:px-8">
          <div className="flex shrink-0 items-center rounded-full border border-[var(--border)] p-0.5">
            {[
              { key: "doc", label: "Résumé", icon: FileText },
              ...(hasFile ? [{ key: "pdf", label: "My PDF", icon: FileDown }] : []),
            ].map((v) => {
              const active = view === v.key;
              const Icon = v.icon;
              return (
                <button
                  key={v.key}
                  type="button"
                  onClick={() => setView(v.key)}
                  aria-pressed={active}
                  className={`flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11px] transition-colors duration-300 ${
                    active
                      ? "bg-[var(--accent)] text-black"
                      : "text-[var(--muted)] hover:text-[var(--text)]"
                  }`}
                >
                  <Icon size={12} />
                  {v.label}
                </button>
              );
            })}
          </div>

          {view === "doc" && (
            <>
              <span className="h-4 w-px shrink-0 bg-[var(--border)]" aria-hidden="true" />
              {QUICK_LINKS.map((l) => (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => jump(l.id)}
                  className="shrink-0 rounded-full px-3 py-1 font-mono text-[11px] text-[var(--muted)] transition-colors duration-300 hover:bg-white/5 hover:text-[var(--accent)]"
                >
                  {l.label}
                </button>
              ))}
            </>
          )}
        </nav>

        {/* EMBEDDED PDF */}
        {view === "pdf" && hasFile && (
          <div className="relative flex-1 bg-[#0b1116]">
            <iframe
              src={`${cvMeta.file}#view=FitH`}
              title={`${personalInfo.name} — CV`}
              className="h-full w-full border-0"
            />
            <a
              href={cvMeta.file}
              download={cvMeta.fileName}
              className="cv-action cv-action-primary absolute bottom-4 right-4 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            >
              <FileDown size={14} />
              <span>Download</span>
            </a>
            <a
              href={cvMeta.file}
              target="_blank"
              rel="noreferrer"
              className="cv-action absolute bottom-4 left-4 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            >
              <ExternalLinkIcon size={14} />
              <span>Open in new tab</span>
            </a>
          </div>
        )}

        {/* SCROLLABLE DOCUMENT */}
        {view === "doc" && (
        <div
          ref={scrollRef}
          className="cv-print-root relative flex-1 overflow-y-auto overscroll-contain px-4 py-8 md:px-10 md:py-12"
        >
          <motion.div
            className="cv-sheet mx-auto max-w-3xl"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.05, delayChildren: 0.04 } },
            }}
          >
            {/* MASTHEAD */}
            <Reveal>
              <div className="mb-10">
                <span className="cv-availability">
                  <span className="animate-pulse h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  {cvMeta.availability}
                </span>
                <h1 className="cv-name">{personalInfo.name}</h1>
                <p className="cv-role-label">{cvMeta.headline}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {contacts.map(({ icon: Icon, label, href, action }) => {
                    const cls =
                      "cv-chip !py-1.5 transition-colors duration-300 hover:!border-[rgba(0,217,163,0.5)]";
                    if (action) {
                      return (
                        <button
                          key={label}
                          type="button"
                          onClick={action}
                          className={cls}
                          title="Copy email"
                        >
                          {copied ? (
                            <Check size={13} />
                          ) : (
                            <Icon className="text-[13px]" />
                          )}
                          <span>{copied ? "Copied" : label}</span>
                        </button>
                      );
                    }
                    const inner = (
                      <>
                        <Icon className="text-[13px]" />
                        <span>{label}</span>
                      </>
                    );
                    return href ? (
                      <a
                        key={label}
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noreferrer" : undefined}
                        className={cls}
                      >
                        {inner}
                      </a>
                    ) : (
                      <span key={label} className={cls}>
                        {inner}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            {/* SUMMARY */}
            <section className="mb-12">
              <SectionTitle id="cv-summary" index="01">
                Profile
              </SectionTitle>
              <Reveal>
                <p className="cv-muted cv-body">{cvMeta.summary}</p>
              </Reveal>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {cvMeta.highlights.map((h, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <div className="cv-block">
                      <span className="cv-accent mr-2 font-mono text-xs">▸</span>
                      <span className="cv-muted cv-body-sm">{h}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* EXPERIENCE */}
            <section className="mb-12">
              <SectionTitle id="cv-experience" index="02">
                Experience
              </SectionTitle>
              <div className="flex flex-col gap-6">
                {cvExperience.map((e) => (
                  <Entry key={e.role} item={e} />
                ))}
              </div>
            </section>

            {/* PROJECTS */}
            <section className="mb-12">
              <SectionTitle
                id="cv-projects"
                index="03"
                action={
                  <span className="hidden font-mono text-[10px] uppercase tracking-[0.14em] cv-muted sm:inline">
                    {cvProjects.length} selected
                  </span>
                }
              >
                Selected Projects
              </SectionTitle>
              <div className="flex flex-col gap-6">
                {cvProjects.map((p) => (
                  <ProjectEntry key={p.title} project={p} />
                ))}
              </div>
            </section>

            {/* EDUCATION */}
            <section className="mb-12">
              <SectionTitle id="cv-education" index="04">
                Education &amp; Certifications
              </SectionTitle>
              <div className="flex flex-col gap-6">
                {cvEducation.map((e) => (
                  <Entry key={e.role} item={e} />
                ))}
              </div>
            </section>

            {/* SKILLS */}
            <section className="mb-12">
              <SectionTitle id="cv-skills" index="05">
                Technical Skills
              </SectionTitle>
              <div className="grid gap-6 sm:grid-cols-2">
                {cvSkillGroups.map((g, gi) => (
                  <Reveal key={g.title} delay={gi * 0.06}>
                    <div className="cv-block">
                      <h4 className="cv-h4">{g.title}</h4>
                      <Chips items={g.items} />
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* STRENGTHS + LANGUAGES */}
            <section className="grid gap-8 sm:grid-cols-2">
              <div>
                <SectionTitle index="06">Strengths</SectionTitle>
                <ul className="flex flex-col gap-2">
                  {cvStrengths.map((s, i) => (
                    <Reveal key={s} delay={i * 0.04}>
                      <li className="cv-li">
                        <span className="cv-bullet" aria-hidden="true" />
                        <span className="cv-muted cv-body-sm">{s}</span>
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
              <div>
                <SectionTitle index="07">Languages</SectionTitle>
                <ul className="flex flex-col gap-2">
                  {cvLanguages.map((l, i) => (
                    <Reveal key={l.name} delay={i * 0.06}>
                      <li className="cv-block flex items-baseline justify-between gap-4 border-b border-[var(--border)] pb-2">
                        <span className="cv-strong">{l.name}</span>
                        <span className="cv-level">{l.level}</span>
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </section>

            {/* CLOSING */}
            <Reveal>
              <div className="cv-block mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] pt-6">
                <p className="font-mono text-[11px] cv-muted">
                  References available on request · {personalInfo.location}
                </p>
                <a href={`mailto:${personalInfo.email}`} className="cv-link font-mono text-[11px]">
                  <MessageCircle className="mr-1 inline" size={12} />
                  {personalInfo.email}
                </a>
              </div>
            </Reveal>

            {/* TRUST ROW */}
            <Reveal>
              <div className="cv-block mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[var(--border)] bg-white/[0.03] p-5">
                <div className="flex items-center gap-4">
                  <FileText className="cv-accent shrink-0" size={20} />
                  <div>
                    <div className="text-sm font-semibold">
                      Looking for a Laravel + React developer?
                    </div>
                    <div className="font-mono text-[11px] cv-muted">
                      I reply to every serious message within 24 hours.
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <div className="text-xl font-extrabold cv-accent">
                      <CountUp to={3} suffix="+" />
                    </div>
                    <div className="cv-caption">Years</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-extrabold cv-accent">
                      <CountUp to={40} suffix="+" />
                    </div>
                    <div className="cv-caption">Projects</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </motion.div>
        </div>
        )}

        {/* FOOTER BAR */}
        <div className="no-print flex shrink-0 flex-wrap items-center justify-between gap-3 border-t border-[var(--border)] bg-[var(--bg2)]/95 px-4 py-3 backdrop-blur-xl md:px-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">
            Press Esc to close
          </span>
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="cv-action"
            >
              <Linkedin size={14} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <ActionButton
              onClick={hasFile ? download : print}
              primary
              title={hasFile ? "Download PDF" : "Save as PDF"}
            >
              {hasFile ? <FileDown size={14} /> : <Printer size={14} />}
              <span className="hidden sm:inline">
                {hasFile ? "Download PDF" : "Save as PDF"}
              </span>
            </ActionButton>
          </div>
        </div>
      </motion.div>
    </>
  );
}

// Mounted once in App. Listens for the global "open CV" event so any button
// anywhere on the site can open the same document.
export default function CvModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const openCv = () => setOpen(true);
    window.addEventListener(CV_OPEN_EVENT, openCv);
    return () => window.removeEventListener(CV_OPEN_EVENT, openCv);
  }, []);

  return createPortal(
    <AnimatePresence>
      {open && (
        <div className="cv-modal-portal fixed inset-0 z-[200]">
          <CvSheet key="cv-sheet" onClose={() => setOpen(false)} />
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
