import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "./constants";

// Container + item pair for staggered scroll reveals.
// Items inherit the parent's stagger timing through variant propagation.
export function Stagger({
  children,
  className,
  staggerChildren = 0.09,
  delayChildren = 0.08,
  amount = 0.15,
  once = true,
  as = "div",
}) {
  const reduced = useReducedMotion();
  const Tag = motion[as] || motion.div;

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren, delayChildren } },
      }}
    >
      {children}
    </Tag>
  );
}

const ITEM = {
  up: {
    hidden: { opacity: 0, y: 28, filter: "blur(5px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 },
  },
};

export function StaggerItem({ children, className, variant = "up" }) {
  return (
    <motion.div
      className={className}
      variants={ITEM[variant] || ITEM.up}
      transition={{ duration: 0.7, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}