import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "./constants";

// Word-by-word heading reveal: each word rises out of a masked line and
// sharpens from blur. Renders a plain element under reduced motion.
export default function SplitText({
  text,
  className = "",
  as: Tag = "h2",
  stagger = 0.06,
  delay = 0,
  once = true,
  amount = 0.4,
}) {
  const reduced = useReducedMotion();

  if (reduced || typeof text !== "string") {
    return <Tag className={className}>{text}</Tag>;
  }

  const words = text.trim().split(/\s+/);

  return (
    <Tag className={className} aria-label={text}>
      <motion.span
        aria-hidden="true"
        className="inline-block"
        initial="hidden"
        whileInView="show"
        viewport={{ once, amount }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: stagger, delayChildren: delay } },
        }}
      >
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            className="inline-block overflow-hidden pb-[0.08em] align-top"
            variants={{
              hidden: { opacity: 0, y: "120%", filter: "blur(6px)" },
              show: {
                opacity: 1,
                y: "0%",
                filter: "blur(0px)",
                transition: { duration: 0.55, ease: EASE },
              },
            }}
          >
            <span className="inline-block">{word}</span>
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}