import { motion } from "framer-motion";
import useMagnetic from "../../hooks/useMagnetic";

// Wrapper that makes any child element magnetic.
export default function Magnetic({
  children,
  strength = 14,
  disabled = false,
  className = "",
}) {
  const { onMouseMove, onMouseLeave, style } = useMagnetic(strength, disabled);

  return (
    <motion.div
      className={`inline-block ${className}`}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </motion.div>
  );
}
