import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    company: "TechCorp",
    role: "Senior Front-End Developer",
    period: "2023 — Present",
    description: [
      "Lead development of the company's flagship SaaS product, improving performance by 40%",
      "Architect and implement new features using React, TypeScript, and Next.js",
      "Mentor junior developers and conduct code reviews to maintain code quality",
      "Collaborate with design and product teams to deliver exceptional user experiences",
    ],
    technologies: ["React", "Next.js", "TypeScript", "GraphQL", "Tailwind CSS"],
    url: "https://techcorp.com",
  },
  {
    company: "StartupXYZ",
    role: "Front-End Developer",
    period: "2021 — 2023",
    description: [
      "Built and maintained multiple client-facing web applications from scratch",
      "Implemented responsive designs and ensured cross-browser compatibility",
      "Integrated third-party APIs and services for enhanced functionality",
      "Participated in agile ceremonies and contributed to sprint planning",
    ],
    technologies: ["Vue.js", "JavaScript", "SCSS", "REST APIs", "Jest"],
    url: "https://startupxyz.com",
  },
  {
    company: "Digital Agency",
    role: "Junior Developer",
    period: "2019 — 2021",
    description: [
      "Developed custom WordPress themes and plugins for various clients",
      "Created responsive email templates and landing pages",
      "Assisted senior developers with larger projects and bug fixes",
      "Gained experience with version control and collaborative development",
    ],
    technologies: ["WordPress", "PHP", "JavaScript", "HTML/CSS", "Git"],
    url: "https://digitalagency.com",
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "2018 — 2019",
    description: [
      "Designed and developed websites for small businesses and individuals",
      "Managed client relationships and project timelines independently",
      "Learned fundamentals of web development and responsive design",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
    url: "#",
  },
];

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-24 md:py-32 bg-gray-50"
    >
      <div className="mx-auto max-w-4xl px-6">
        {/* Section Header */}
        <div
          className={`mb-12 flex items-center gap-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-mono text-sm text-primary">04.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Where I’ve Worked
          </h2>
          <div className="h-px flex-1 max-w-xs bg-gray-200" />
        </div>

        {/* Experience Tabs */}
        <div
          className={`flex flex-col gap-4 md:flex-row transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Tabs */}
          <div className="relative flex md:flex-col overflow-x-auto border-b md:border-b-0 md:border-l border-gray-200">
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-3 text-sm font-mono whitespace-nowrap transition ${
                  activeTab === index
                    ? "text-primary bg-primary/5"
                    : "text-gray-500 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {exp.company}
              </button>
            ))}

            {/* Indicator */}
            <div
              className="absolute left-0 hidden md:block w-0.5 h-11 bg-primary transition-all duration-300"
              style={{ top: `${activeTab * 44}px` }}
            />
            <div
              className="absolute bottom-0 md:hidden h-0.5 bg-primary transition-all duration-300"
              style={{ left: `${activeTab * 120}px`, width: "120px" }}
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-h-[350px] md:pl-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`transition-all duration-500 ${
                  activeTab === index
                    ? "opacity-100 translate-y-0"
                    : "hidden opacity-0 translate-y-4"
                }`}
              >
                <h3 className="mb-1 text-xl font-semibold text-gray-900">
                  {exp.role}{" "}
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    @ {exp.company}
                  </a>
                </h3>

                <p className="mb-6 text-sm font-mono text-gray-500">
                  {exp.period}
                </p>

                <ul className="mb-6 space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-gray-600">
                      <span className="mt-1.5 text-primary">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-mono text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
