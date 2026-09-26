import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

// Premium button: magnetic pull toward the cursor, springy press feedback,
// a shine sweep and an animated arrow. Renders <a> when `href` is given,
// otherwise a <button>. Keeps the existing .btn-primary/.btn-secondary look.
export default function AnimatedButton({
  href,
  variant = "primary",
  magnetic = true,
  strength = 10,
  icon,
  children,
  className = "",
  wrapperClassName = "inline-block",
  type,
  onClick,
  disabled,
  ariaLabel,
}) {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 180, damping: 16, mass: 0.3 });
  const sy = useSpring(my, { stiffness: 180, damping: 16, mass: 0.3 });

  const handleMove = (e) => {
    if (!magnetic || reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    const max = Math.max(r.width, r.height) * 0.5;
    mx.set((dx / max) * strength);
    my.set((dy / max) * strength);
  };

  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const base =
    variant === "primary"
      ? "btn-primary group relative overflow-hidden"
      : "btn-secondary group relative overflow-hidden";

  const content = (
    <>
      {/* shine sweep */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        {icon && (
          <span className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-0.5">
            {icon}
          </span>
        )}
      </span>
    </>
  );

  const commonProps = {
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    className: `${base} ${className}`,
    "aria-label": ariaLabel,
  };

  const Wrapper = href ? (
    <a href={href} {...commonProps}>
      {content}
    </a>
  ) : (
    <button
      {...commonProps}
      {...(type ? { type } : {})}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );

  return (
    <motion.div
      className={wrapperClassName}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: reduced ? 1 : 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {Wrapper}
    </motion.div>
  );
}