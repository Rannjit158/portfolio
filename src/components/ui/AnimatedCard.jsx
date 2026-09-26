import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useReducedMotion,
} from "framer-motion";

// Card with subtle 3D tilt + lift on hover. Tilt is disabled on touch
// devices and when the user prefers reduced motion.
export default function AnimatedCard({
  children,
  className = "",
  tilt = 6,
  lift = -8,
  glare = true,
  style,
}) {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  const srx = useSpring(rx, { stiffness: 200, damping: 22, mass: 0.5 });
  const sry = useSpring(ry, { stiffness: 200, damping: 22, mass: 0.5 });
  const sglareX = useSpring(glareX, { stiffness: 120, damping: 20 });
  const sglareY = useSpring(glareY, { stiffness: 120, damping: 20 });

  const glareBg = useMotionTemplate`radial-gradient(420px circle at ${sglareX}% ${sglareY}%, rgba(255,255,255,0.06), transparent 55%)`;

  const handleMove = (e) => {
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) return;
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    rx.set(-py * tilt);
    ry.set(px * tilt);
    glareX.set((px + 0.5) * 100);
    glareY.set((py + 0.5) * 100);
  };

  const handleLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <div style={{ perspective: 900 }} className="h-full">
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX: srx, rotateY: sry, ...style }}
        className={`relative h-full will-change-transform ${className}`}
      >
        <motion.div
          className="h-full"
          whileHover={{ y: reduced ? 0 : lift }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
        >
          {children}
          {glare && (
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 hover:opacity-100"
              style={{ background: glareBg }}
            />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}