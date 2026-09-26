// Shared animation easing + presets for the animation library.
export const EASE = [0.22, 1, 0.36, 1];

export const REVEAL_PRESETS = {
  up: { hidden: { opacity: 0, y: 34 }, show: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -26 }, show: { opacity: 1, y: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.94 }, show: { opacity: 1, scale: 1 } },
  blur: {
    hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  slideLeft: { hidden: { opacity: 0, x: -44 }, show: { opacity: 1, x: 0 } },
  slideRight: { hidden: { opacity: 0, x: 44 }, show: { opacity: 1, x: 0 } },
  none: { hidden: {}, show: {} },
};