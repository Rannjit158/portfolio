import { motion } from "framer-motion";
import { services } from "../data/portfolioData";
import { Stagger, StaggerItem } from "./animations/Stagger";
import SectionHeading from "./ui/SectionHeading";
import AnimatedCard from "./ui/AnimatedCard";

function ServiceCard({ svc }) {
  const Icon = svc.icon;

  return (
    <StaggerItem className="h-full">
      <AnimatedCard tilt={6} className="h-full">
        <div className="group relative h-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-10 text-center transition-all duration-300 hover:border-[rgba(0,217,163,0.25)] hover:bg-[var(--card-h)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
          {/* rotating halo behind the icon */}
          <div
            className="pointer-events-none absolute left-1/2 top-16 h-40 w-40 -translate-x-1/2 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
            style={{ background: svc.iconBg }}
            aria-hidden="true"
          />

          {/* ICON */}
          <motion.div
            className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl text-3xl"
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

          <h3 className="relative mb-3 text-xl font-bold">{svc.title}</h3>
          <p className="relative text-sm leading-relaxed text-[var(--muted)]">
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
        <SectionHeading
          eyebrow="What I Offer"
          title="Services"
          description="From backend development to UI design — I build complete digital solutions."
        />

        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerChildren={0.09}>
          {services.map((svc, i) => (
            <ServiceCard key={i} svc={svc} />
          ))}
        </Stagger>
      </div>
    </section>
  );
}