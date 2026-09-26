import { useEffect, useRef } from "react";

// Returns a mutable ref carrying damped scroll values:
//   y         -> smoothed window.scrollY
//   progress  -> 0..1 scroll progress through the document
//   raw       -> actual scrollY (not smoothed)
// Updated in a single requestAnimationFrame loop.
export default function useScrollStage(damping = 0.1) {
  const scroll = useRef({ y: 0, progress: 0, raw: 0 });

  useEffect(() => {
    let raf;

    const tick = () => {
      const raw = window.scrollY;
      const max = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      scroll.current.raw = raw;
      scroll.current.y += (raw - scroll.current.y) * damping;
      scroll.current.progress = Math.min(1, scroll.current.y / max);
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [damping]);

  return scroll;
}