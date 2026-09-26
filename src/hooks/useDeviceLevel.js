import { useEffect, useState } from "react";

// Device-aware quality tier:
//   mobile  (< 768px)  -> lightweight 3D, minimal animation
//   tablet  (< 1024px) -> reduced 3D complexity
//   desktop            -> full experience
// `isTouch` detects coarse-pointer devices so magnetic/tilt/cursor
// effects can be disabled where they are not useful.
export default function useDeviceLevel() {
  const [level, setLevel] = useState(() =>
    typeof window === "undefined"
      ? "desktop"
      : window.innerWidth < 768
        ? "mobile"
        : window.innerWidth < 1024
          ? "tablet"
          : "desktop",
  );
  const [isTouch, setIsTouch] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches,
  );

  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      setLevel(w < 768 ? "mobile" : w < 1024 ? "tablet" : "desktop");
    };
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return { level, isTouch };
}