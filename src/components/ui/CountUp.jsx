import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

// Number that counts up once it scrolls into view.
export default function CountUp({
  to,
  prefix = "",
  suffix = "",
  duration = 1.5,
  delay = 0,
  start = true,
  decimals = 0,
  className,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduced = useReducedMotion();
  const [value, setValue] = useState(reduced ? to : 0);

  useEffect(() => {
    if (!start || !inView || reduced) return;
    let raf;
    const controls = animate(0, to, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Number(v.toFixed(decimals))),
    });
    return () => {
      controls.stop();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [start, inView, reduced, to, duration, delay, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
