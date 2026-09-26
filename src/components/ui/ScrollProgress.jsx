import { motion, useScroll, useSpring } from "framer-motion";

// Slim gradient scroll-progress bar pinned to the top of the viewport.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[120] h-[3px] w-full origin-left bg-gradient-to-r from-[var(--accent)] via-[var(--accent2)] to-[var(--accent)]"
      style={{ scaleX }}
    />
  );
}