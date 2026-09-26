import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileDown, FileText, ArrowUp } from "lucide-react";
import useCvDownload from "../hooks/useCvDownload";
import useMagnetic from "../hooks/useMagnetic";

const EASE = [0.22, 1, 0.36, 1];

// Magnetic, always-reachable CV button + back-to-top control.
export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const { hasFile, download } = useCvDownload();
  const cv = useMagnetic(16);
  const top = useMagnetic(16);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-[95] flex flex-col items-end gap-3 md:bottom-8 md:right-8">
      {/* BACK TO TOP */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="group flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg2)]/80 text-[var(--text)] backdrop-blur-xl transition-colors duration-300 hover:border-[rgba(0,217,163,0.5)] hover:text-[var(--accent)]"
            style={top.style}
            onMouseMove={top.onMouseMove}
            onMouseLeave={top.onMouseLeave}
            initial={{ opacity: 0, scale: 0.6, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 14 }}
            whileTap={{ scale: 0.92 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <ArrowUp size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* DOWNLOAD CV */}
      <motion.button
        type="button"
        onClick={download}
        aria-label={hasFile ? "Download CV" : "View CV"}
        title={hasFile ? "Download CV" : "View CV"}
        className="group relative flex cursor-pointer items-center gap-2.5 overflow-hidden rounded-full border border-[rgba(0,217,163,0.35)] bg-[rgba(0,217,163,0.12)] py-3 pl-4 pr-4 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--accent)] backdrop-blur-xl transition-colors duration-300 hover:bg-[rgba(0,217,163,0.2)] md:pr-5"
        style={cv.style}
        onMouseMove={cv.onMouseMove}
        onMouseLeave={cv.onMouseLeave}
        initial={{ opacity: 0, y: 30, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.6, ease: EASE, delay: 1.4 }}
      >
        {/* pulse ring */}
        <span
          className="animate-cv-ring pointer-events-none absolute inset-0 rounded-full border border-[rgba(0,217,163,0.5)]"
          aria-hidden="true"
        />
        {/* shine sweep */}
        <span
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
          aria-hidden="true"
        />
        <span className="relative z-10 flex items-center gap-2.5">
          {hasFile ? <FileDown size={15} /> : <FileText size={15} />}
          <span className="hidden sm:inline">{hasFile ? "Download CV" : "View CV"}</span>
        </span>
      </motion.button>
    </div>
  );
}
