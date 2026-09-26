import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileDown, FileText } from "lucide-react";
import { navLinks, personalInfo } from "../data/portfolioData";
import useCvDownload from "../hooks/useCvDownload";

const EASE = [0.22, 1, 0.36, 1];

const links = navLinks;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { hasFile, download } = useCvDownload();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = document.querySelectorAll("section[id]");
      let current = "home";
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 140) current = s.id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const close = () => setMobileOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
        className={`fixed left-0 right-0 top-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "glass border-b border-[var(--border)]"
            : "bg-transparent"
        }`}
        style={{ padding: scrolled ? "14px 0" : "24px 0" }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <a
              href="#home"
              onClick={close}
              className="font-[var(--font-head)] text-[22px] font-extrabold tracking-tight text-[var(--text)] no-underline"
              style={{ fontFamily: "var(--font-head)" }}
            >
              {personalInfo.logo}
              <span className="text-[var(--accent)]">.</span>
            </a>

            {/* Desktop links */}
            <ul className="hidden items-center gap-8 md:flex">
              {links.map((l) => {
                const isActive = active === l.href.replace("#", "");
                return (
                  <li key={l.href} className="relative">
                    <a
                      href={l.href}
                      className={`group font-mono text-[13px] tracking-[0.05em] no-underline transition-colors duration-300 ${
                        isActive ? "text-[var(--accent)]" : "text-[var(--muted)] hover:text-[var(--text)]"
                      }`}
                    >
                      {l.label}
                      <span
                        className={`absolute -bottom-2 left-0 h-px w-full origin-left bg-[var(--accent)] transition-transform duration-300 ease-out ${
                          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={download}
                className="group hidden cursor-pointer items-center gap-2 rounded-lg border border-[var(--border)] px-[18px] py-[10px] font-mono text-[12px] tracking-[0.08em] text-[var(--text)] no-underline transition-all duration-300 hover:-translate-y-px hover:border-[rgba(0,217,163,0.5)] hover:text-[var(--accent)] hover:shadow-[0_8px_24px_rgba(0,217,163,0.18)] md:inline-flex"
              >
                {hasFile ? <FileDown size={13} /> : <FileText size={13} />}
                {hasFile ? "RESUME" : "MY CV"}
              </button>

              <a
                href="#contact"
                className="hidden rounded-lg bg-[var(--accent)] px-[22px] py-[10px] font-mono text-[12px] font-medium tracking-[0.08em] text-black no-underline transition-all duration-300 hover:-translate-y-px hover:bg-[#00f2b8] hover:shadow-[0_8px_24px_rgba(0,217,163,0.35)] md:inline-block"
              >
                LET'S TALK
              </a>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                aria-expanded={mobileOpen}
                className="flex cursor-pointer flex-col gap-[5px] border-none bg-transparent p-1 md:hidden"
              >
                <span className="block h-[2px] w-6 rounded bg-[var(--text)]" />
                <span className="block h-[2px] w-[18px] self-end rounded bg-[var(--accent)]" />
                <span className="block h-[2px] w-6 rounded bg-[var(--text)]" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[110] flex flex-col items-center justify-center gap-8 bg-[rgba(8,12,16,0.97)] backdrop-blur-xl"
          >
            <button
              onClick={close}
              aria-label="Close menu"
              className="absolute right-6 top-6 cursor-pointer border-none bg-transparent text-[var(--text)]"
            >
              <X size={30} />
            </button>

            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
              }}
              className="flex list-none flex-col items-center gap-6 p-0"
            >
              {links.map((l) => (
                <motion.li
                  key={l.href}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.55, ease: EASE },
                    },
                  }}
                >
                  <a
                    href={l.href}
                    onClick={close}
                    className={`font-[var(--font-head)] text-[30px] font-bold no-underline transition-colors duration-300 ${
                      active === l.href.replace("#", "")
                        ? "text-[var(--accent)]"
                        : "text-[var(--text)] hover:text-[var(--accent)]"
                    }`}
                    style={{ fontFamily: "var(--font-head)" }}
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}

              <motion.li
                className="mt-4"
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.55, ease: EASE },
                  },
                }}
              >
                <button
                  type="button"
                  onClick={() => {
                    close();
                    download();
                  }}
                  className="flex cursor-pointer items-center gap-3 rounded-xl border border-[rgba(0,217,163,0.4)] bg-[rgba(0,217,163,0.1)] px-6 py-3 font-mono text-[13px] uppercase tracking-[0.12em] text-[var(--accent)]"
                >
                  {hasFile ? <FileDown size={15} /> : <FileText size={15} />}
                  {hasFile ? "Download CV" : "View CV"}
                </button>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}