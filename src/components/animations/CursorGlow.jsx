import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/**
 * Soft accent glow that follows the cursor across the whole page.
 * Desktop pointer devices only — it would be dead weight on touch.
 */
export default function CursorGlow({ size = 460, opacity = 0.5 }) {
  const reduced = useReducedMotion();
  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);
  const sx = useSpring(x, { stiffness: 90, damping: 22, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 90, damping: 22, mass: 0.6 });

  useEffect(() => {
    if (reduced) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.innerWidth < 1024) return;

    const onMove = (e) => {
      x.set(e.clientX - size / 2);
      y.set(e.clientY - size / 2);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y, size, reduced]);

  if (reduced) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 hidden lg:block"
      style={{ x: sx, y: sy }}
    >
      <div
        className="-translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: size,
          height: size,
          opacity,
          background:
            "radial-gradient(circle, rgba(0,217,163,0.13) 0%, rgba(0,102,255,0.07) 45%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}
