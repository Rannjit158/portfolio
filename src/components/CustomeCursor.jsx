// components/CustomCursor.jsx
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  let mx = 0,
    my = 0,
    rx = 0,
    ry = 0;
  let rafId = null;

  useEffect(() => {
    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };
    document.addEventListener("mousemove", onMove);

    const animate = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.left = mx + "px";
        dotRef.current.style.top = my + "px";
      }
      if (ringRef.current) {
        ringRef.current.style.left = rx + "px";
        ringRef.current.style.top = ry + "px";
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference">
      {/* Dot */}
      <div
        ref={dotRef}
        className="absolute w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="absolute w-9 h-9 border border-white/50 rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
      />
    </div>
  );
}
