import { personalInfo } from "../data/portfolioData";

export default function About() {
  const facts = [
    { label: "Name", val: personalInfo.name },
    { label: "Location", val: personalInfo.location },
    { label: "Degree", val: personalInfo.degree },
    { label: "Status", val: personalInfo.status, highlight: true },
  ];

  return (
    <section id="about" className="py-28">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* IMAGE */}
          <div className="relative">
            <div className="relative w-full aspect-square bg-gradient-to-br from-[#0D1117] to-[#111820] border border-[var(--border)] rounded-2xl flex items-center justify-center overflow-hidden">
              {/* Big Background Letter */}
              <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
                <img
                  src={personalInfo.heroImage} // make sure this points to your image URL or import
                  alt="Hero"
                  className="w-[260px] h-[260px] object-cover rounded-full opacity-20"
                />
              </div>

              {/* Center Avatar */}
              <div className="relative z-10 w-[140px] h-[140px] rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent2)] flex items-center justify-center text-5xl font-extrabold text-[var(--bg)]">
                {personalInfo.initials}
              </div>
            </div>

            {/* Decorative Box */}
            {/* <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent2)] flex items-center justify-center">
              <i className="fas fa-code text-[var(--bg)] text-2xl"></i>
            </div> */}
          </div>

          {/* TEXT */}
          <div>
            <span className="inline-block mb-4 text-xs tracking-widest uppercase text-[var(--muted)] font-mono">
              About Me
            </span>

            <h2 className="text-4xl font-extrabold leading-tight mb-6">
              Turning ideas into <br />
              <span className="text-[var(--accent)]">digital reality</span>
            </h2>

            <p className="text-[var(--muted)] leading-relaxed mb-4">
              {personalInfo.aboutDesc1}
            </p>

            <p className="text-[var(--muted)] leading-relaxed mb-8">
              {personalInfo.aboutDesc2}
            </p>

            {/* FACTS */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-4"
                >
                  <div className="text-[11px] uppercase tracking-wider text-[var(--muted)] font-mono mb-1">
                    {f.label}
                  </div>
                  <div
                    className={`text-sm font-medium ${
                      f.highlight ? "text-[var(--accent)]" : ""
                    }`}
                  >
                    {f.val}
                  </div>
                </div>
              ))}
            </div>

            {/* BUTTON */}
            <a
              href={personalInfo.cvLink}
              className="inline-flex items-center gap-2 bg-[var(--accent)] text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
            >
              <i className="fas fa-download"></i>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
