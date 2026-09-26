import { motion, useReducedMotion } from "framer-motion";
import { EASE, REVEAL_PRESETS } from "./constants";

// Scroll-triggered reveal with a variety of professional presets.
// Renders plain content when the user prefers reduced motion.
export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  duration = 0.8,
  amount = 0.2,
  once = true,
  as = "div",
  className,
}) {
  const reduced = useReducedMotion();
  const Tag = motion[as] || motion.div;

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <Tag
      className={className}
      variants={REVEAL_PRESETS[variant] || REVEAL_PRESETS.up}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={{ delay, duration, ease: EASE }}
    >
      {children}
    </Tag>
  );
}