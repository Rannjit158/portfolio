import { services } from "../data/portfolioData";

function ServiceCard({ svc }) {
  const Icon = svc.icon;

  return (
    <div
      className="
        group rounded-2xl border border-[var(--border)] bg-[var(--card)]
        p-10 text-center transition-all duration-300
        hover:-translate-y-2 hover:bg-[var(--card-h)]
        hover:border-[rgba(0,217,163,0.25)]
        hover:shadow-[0_24px_60px_rgba(0,0,0,0.4)]
      "
    >
      {/* ICON */}
      <div
        className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-xl text-3xl"
        style={{
          background: svc.iconBg,
          border: `1px solid ${svc.iconBorder}`,
          color: svc.iconColor,
        }}
      >
        {Icon && <Icon size={28} />}
      </div>

      {/* TITLE */}
      <h3 className="text-xl font-bold mb-3">{svc.title}</h3>

      {/* DESCRIPTION */}
      <p className="text-sm text-[var(--muted)] leading-relaxed">{svc.desc}</p>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-28">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-widest text-[var(--muted)] font-mono">
            What I Offer
          </span>

          <h2 className="text-4xl font-extrabold mt-3 mb-4">Services</h2>

          <p className="text-[var(--muted)] max-w-xl mx-auto">
            From backend development to UI design — I build complete digital
            solutions.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, i) => (
            <ServiceCard key={i} svc={svc} />
          ))}
        </div>
      </div>
    </section>
  );
}
