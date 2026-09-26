import { motion } from "framer-motion";
import Marquee from "./animations/Marquee";
import { heroBadges, personalInfo } from "../data/portfolioData";

const ROW_A = [...heroBadges, "Tailwind CSS", "REST API", "Git", "Blade"];
const ROW_B = ["jQuery / Ajax", "Sanctum", "Postman", "Linux", "Nginx", "Composer", "Figma"];

/**
 * Scrolling tech band between the hero and the rest of the page.
 * Two rows moving in opposite directions give the site depth and motion.
 */
export default function TechMarquee() {
  return (
    <section
      aria-label="Technologies I work with"
      className="relative overflow-hidden border-y border-[var(--border)] bg-[var(--bg2)] py-7"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <Marquee items={ROW_A} speed={38} fadeFrom="var(--bg2)" />
        <Marquee
          items={ROW_B}
          speed={44}
          reverse
          fadeFrom="var(--bg2)"
          className="mt-3"
        />
      </motion.div>

      <span className="sr-only">Currently working with {personalInfo.role}</span>
    </section>
  );
}
