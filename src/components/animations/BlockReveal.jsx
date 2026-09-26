import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "./constants";

// Clip-path block reveal for images / panels. The masked surface slides
// open from a chosen edge while content inside gently scales into place.
export default function BlockReveal({
  children,
  className = "",
  direction = "left",
  duration = 0.95,
  amount = 0.25,
}) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;

  const closedByDirection = {
    left: "inset(0 100% 0 0)",
    right: "inset(0 0 0 100%)",
    top: "inset(0 0 100% 0)",
  };

  return (
    <motion.div
      className={className}
      initial={{ clipPath: closedByDirection[direction] || closedByDirection.left }}
      whileInView={{ clipPath: "inset(0 0% 0 0)" }}
      viewport={{ once: true, amount }}
      transition={{ duration, ease: EASE }}
    >
      <motion.div
        className="h-full"
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount }}
        transition={{ duration: duration * 0.9, ease: EASE }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}