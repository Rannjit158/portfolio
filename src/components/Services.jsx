// // components/Services.jsx
// import { services } from "../data/portfolioData";

// function ServiceCard({ svc, delay }) {
//   return (
//     <div
//       className={`
//         group rounded-2xl border border-[var(--border)] bg-[var(--card)]
//         p-10 text-center transition-all duration-300
//         hover:-translate-y-2 hover:bg-[var(--card-h)]
//         hover:border-[rgba(0,217,163,0.25)]
//         hover:shadow-[0_24px_60px_rgba(0,0,0,0.4)]
//         reveal ${delay ? `reveal-delay-${delay}` : ""}
//       `}
//     >
//       {/* ICON */}
//       <div
//         className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-xl text-3xl border"
//         style={{
//           background: svc.iconBg,
//           borderColor: svc.iconBorder,
//           color: svc.iconColor,
//         }}
//       >
//         <i className={svc.icon}></i>
//       </div>

//       {/* TITLE */}
//       <h3 className="text-xl font-bold mb-3 font-[var(--font-head)]">
//         {svc.title}
//       </h3>

//       {/* DESC */}
//       <p className="text-sm text-[var(--muted)] leading-relaxed">{svc.desc}</p>
//     </div>
//   );
// }

// export default function Services() {
//   return (
//     <section id="services" className="py-28">
//       <div className="container mx-auto px-6">
//         {/* HEADER */}
//         <div className="text-center mb-20 reveal">
//           <span className="text-xs uppercase tracking-widest text-[var(--muted)] font-mono">
//             What I Offer
//           </span>

//           <h2 className="text-4xl font-extrabold mt-3 mb-4">Services</h2>

//           <p className="text-[var(--muted)] max-w-xl mx-auto">
//             From initial design mockup to production deployment — I handle every
//             phase of your project with care and expertise.
//           </p>
//         </div>

//         {/* GRID */}
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {services.map((svc, i) => (
//             <ServiceCard
//               key={svc.title}
//               svc={svc}
//               delay={i % 3 > 0 ? i % 3 : null}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// components/Services.jsx
import { services } from "../data/portfolioData";

function ServiceCard({ svc }) {
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
      {/* TITLE */}
      <h3 className="text-xl font-bold mb-3 font-[var(--font-head)]">
        {svc.title}
      </h3>

      {/* DESC */}
      <p className="text-sm text-[var(--muted)] leading-relaxed">{svc.desc}</p>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-28 relative z-10">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-widest text-[var(--muted)] font-mono">
            What I Offer
          </span>

          <h2 className="text-4xl font-extrabold mt-3 mb-4">Services</h2>

          <p className="text-[var(--muted)] max-w-xl mx-auto">
            From initial design mockup to production deployment — I handle every
            phase of your project with care and expertise.
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
