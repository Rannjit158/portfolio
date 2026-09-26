import { useCallback } from "react";
import { useMotionValue, useSpring, useReducedMotion } from "framer-motion";

const isCoarsePointer = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(pointer: coarse)").matches;

/**
 * Magnetic hover: the element is pulled toward the cursor with a spring.
 * Spread the returned handlers + style onto the interactive element itself.
 * Automatically disabled on touch devices and under reduced motion.
 */
export default function useMagnetic(strength = 14, disabled = false) {
  const reduced = useReducedMotion();
  const off = disabled || reduced;

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 220, damping: 18, mass: 0.35 });
  const y = useSpring(my, { stiffness: 220, damping: 18, mass: 0.35 });

  const onMouseMove = useCallback(
    (e) => {
      if (off || isCoarsePointer()) return;
      const el = e.currentTarget;
      if (!el) return;
      const r = el.getBoundingClientRect();
      if (!r.width || !r.height) return;
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      mx.set((dx / r.width) * strength);
      my.set((dy / r.height) * strength);
    },
    [off, strength, mx, my],
  );

  const onMouseLeave = useCallback(() => {
    mx.set(0);
    my.set(0);
  }, [mx, my]);

  return { onMouseMove, onMouseLeave, style: { x, y }, reset: onMouseLeave };
}
