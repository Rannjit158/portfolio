import { motion } from "framer-motion";
import { services } from "../data/portfolioData";
import Reveal from "./animations/Reveal";
import { Stagger, StaggerItem } from "./animations/Stagger";
import AnimatedCard from "./ui/AnimatedCard";

function ServiceCard({ svc }) {
  const Icon = svc.icon;

  return (
    <StaggerItem className="h-full">
      <AnimatedCard tilt={6} className="h-full">
        <div className="group h-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-10 text-center transition-all duration-300 hover:border-[rgba(0,217,163,0.25)] hover:bg-[var(--card-h)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
          {/* ICON */}
          <motion.div
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl text-3xl"
            style={{
              background: svc.iconBg,
              border: `1px solid ${svc.iconBorder}`,
              color: svc.iconColor,
            }}
            whileHover={{ scale: 1.1, rotate: -6, y: -4 }}
            transition={{ type: "spring", stiffness: 260, damping: 14 }}
          >
            {Icon && <Icon size={28} />}
          </motion.div>

          <h3 className="mb-3 text-xl font-bold">{svc.title}</h3>
          <p className="text-sm leading-relaxed text-[var(--muted)]">
            {svc.desc}
          </p>
        </div>
      </AnimatedCard>
    </StaggerItem>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-28">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
              What I Offer
            </span>
          </Reveal>
          <Reveal variant="blur" delay={0.05}>
            <h2 className="mb-4 mt-3 text-4xl font-extrabold">
              <span className="text-gradient">Services</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto max-w-xl text-[var(--muted)]">
              From backend development to UI design — I build complete digital
              solutions.
            </p>
          </Reveal>
        </div>

        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerChildren={0.09}>
          {services.map((svc, i) => (
            <ServiceCard key={i} svc={svc} />
          ))}
        </Stagger>
      </div>
    </section>
  );
}