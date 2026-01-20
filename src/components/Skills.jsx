import { useEffect, useRef, useState } from "react";
import { Code2, Palette, Database, Globe, Smartphone, Zap } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces with modern frameworks and best practices.",
    technologies: ["React", "Next.js", "Vue.js", "TypeScript"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating beautiful, intuitive designs that prioritize user experience and accessibility.",
    technologies: ["Figma", "Adobe XD", "Tailwind CSS", "Framer Motion"],
  },
  {
    icon: Database,
    title: "Backend Integration",
    description:
      "Connecting frontends with robust APIs and managing data flow efficiently.",
    technologies: ["Node.js", "REST APIs", "GraphQL", "PostgreSQL"],
  },
  {
    icon: Globe,
    title: "Web Performance",
    description:
      "Optimizing applications for speed, SEO, and delivering exceptional user experiences.",
    technologies: ["Core Web Vitals", "Lighthouse", "CDN", "Caching"],
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Crafting seamless experiences across all devices and screen sizes.",
    technologies: ["Mobile-First", "CSS Grid", "Flexbox", "Media Queries"],
  },
  {
    icon: Zap,
    title: "Modern Tooling",
    description:
      "Leveraging cutting-edge development tools for efficient workflows.",
    technologies: ["Git", "Vite", "Webpack", "Docker"],
  },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-24 md:py-32 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div
          className={`mb-12 flex items-center gap-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-mono text-sm text-primary">02.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Skills & Expertise
          </h2>
          <div className="h-px flex-1 max-w-xs bg-gray-200" />
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className={`group relative rounded-xl border bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 rounded-xl bg-primary/5 blur-xl transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-primary transition">
                  {skill.title}
                </h3>

                {/* Description */}
                <p className="mb-4 text-sm text-gray-600 leading-relaxed">
                  {skill.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-primary/10 px-2 py-1 text-xs font-mono text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute right-0 top-0 h-20 w-20 overflow-hidden rounded-tr-xl">
                <div className="absolute right-0 top-0 h-full w-full origin-top-right scale-0 bg-gradient-to-bl from-primary/10 to-transparent transition-transform duration-500 group-hover:scale-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
