import { useEffect, useRef } from "react";
import useReducedMotion from "../hooks/useReducedMotion";

// Polished custom cursor: instant dot + trailing ring that scales over
// interactive elements. Automatically disabled on coarse-pointer (touch)
// devices and when the user prefers reduced motion.
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !window.matchMedia("(pointer: fine)").matches) return;

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;
    let rafId = null;
    let visible = false;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (!visible) {
        visible = true;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
        rx = mx;
        ry = my;
      }
    };

    const onOver = (e) => {
      const interactive = e.target.closest(
        "a, button, input, textarea, select, [data-cursor-hover]",
      );
      if (ringRef.current) {
        ringRef.current.style.width = interactive ? "52px" : "36px";
        ringRef.current.style.height = interactive ? "52px" : "36px";
        ringRef.current.style.borderColor = interactive
          ? "rgba(0,217,163,0.7)"
          : "rgba(255,255,255,0.45)";
      }
    };

    const onLeave = () => {
      visible = false;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const animate = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
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

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafId);
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
      aria-hidden="true"
      style={{ opacity: 0 }}
    >
      <div
        ref={dotRef}
        className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
        style={{ opacity: 0 }}
      />
      <div
        ref={ringRef}
        className="absolute h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50 transition-[width,height,border-color] duration-300"
        style={{ opacity: 0 }}
      />
    </div>
  );
}