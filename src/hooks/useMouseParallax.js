import { useEffect, useRef } from "react";

// Returns a mutable ref carrying the damped, normalized mouse position.
// { x, y } range from -1 (left/top) to 1 (right/bottom).
// Values are updated inside requestAnimationFrame so consumers can read
// them without re-rendering React.
export default function useMouseParallax(damping = 0.92) {
  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      target.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    let last = performance.now();
    const tick = (now) => {
      const dt = Math.min((now - last) / 16.667, 3);
      last = now;
      const k = 1 - Math.pow(damping, dt);
      mouse.current.x += (target.current.x - mouse.current.x) * k;
      mouse.current.y += (target.current.y - mouse.current.y) * k;
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, [damping]);

  return mouse;
}

// Layer helper: multiply the normalized mouse by per-axis strength.
export const mouseOffset = (mouse, strengthX, strengthY = strengthX) => ({
  x: (mouse?.current?.x ?? 0) * strengthX,
  y: (mouse?.current?.y ?? 0) * strengthY,
});