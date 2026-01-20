import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with real-time inventory management, secure payment processing, and an admin dashboard. Features include product filtering, user authentication, and order tracking.",
    image: "/projects/ecommerce.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    github: "https://github.com",
    external: "https://example.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative project management tool with drag-and-drop functionality, real-time updates, and team collaboration features. Includes Kanban boards, calendars, and progress tracking.",
    image: "/projects/taskapp.jpg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redux"],
    github: "https://github.com",
    external: "https://example.com",
  },
  {
    title: "AI Content Generator",
    description:
      "An AI-powered content creation platform that helps users generate blog posts, social media content, and marketing copy. Integrates with OpenAI GPT-4 for intelligent content suggestions.",
    image: "/projects/ai-generator.jpg",
    technologies: [
      "Next.js",
      "OpenAI API",
      "Prisma",
      "Vercel AI SDK",
      "shadcn/ui",
    ],
    github: "https://github.com",
    external: "https://example.com",
  },
];

const otherProjects = [
  {
    title: "Weather Dashboard",
    description:
      "A beautiful weather app with 7-day forecasts, location search, and animated weather conditions.",
    technologies: ["React", "Weather API", "Charts.js"],
    github: "https://github.com",
    external: "https://example.com",
  },
  {
    title: "Portfolio Template",
    description:
      "A customizable portfolio template for developers with dark mode and smooth animations.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com",
    external: "https://example.com",
  },
  {
    title: "Chat Application",
    description:
      "Real-time messaging app with private rooms, emoji support, and file sharing capabilities.",
    technologies: ["Socket.io", "Express", "React"],
    github: "https://github.com",
    external: "https://example.com",
  },
  {
    title: "Fitness Tracker",
    description:
      "Track workouts, set goals, and monitor progress with detailed analytics and charts.",
    technologies: ["React Native", "Firebase", "D3.js"],
    github: "https://github.com",
    external: "https://example.com",
  },
  {
    title: "Recipe Finder",
    description:
      "Search and save recipes with ingredient-based filtering and nutritional information.",
    technologies: ["Vue.js", "Spoonacular API", "Vuex"],
    github: "https://github.com",
    external: "https://example.com",
  },
  {
    title: "Markdown Editor",
    description:
      "A minimal markdown editor with live preview, syntax highlighting, and export options.",
    technologies: ["TypeScript", "CodeMirror", "React"],
    github: "https://github.com",
    external: "https://example.com",
  },
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const displayedProjects = showAll ? otherProjects : otherProjects.slice(0, 3);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-24 md:py-32 bg-gray-50"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div
          className={`mb-12 flex items-center gap-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary font-mono text-sm md:text-base">
            03.
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Featured Projects
          </h2>
          <div className="flex-1 h-px bg-gray-200 max-w-xs" />
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`relative grid md:grid-cols-12 gap-4 items-center transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div
                className={`md:col-span-7 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}
              >
                <a
                  href={project.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative group rounded-lg overflow-hidden"
                >
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    <Folder className="w-16 h-16 text-primary/50" />
                  </div>
                </a>
              </div>

              {/* Project Content */}
              <div
                className={`md:col-span-6 relative z-10 ${
                  index % 2 === 0
                    ? "md:order-2 md:text-right md:-ml-12"
                    : "md:order-1 md:text-left md:-mr-12"
                }`}
              >
                <p className="text-primary font-mono text-sm mb-2">
                  Featured Project
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 hover:text-primary transition-colors duration-300">
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>

                <div className="bg-white p-6 rounded-lg shadow mb-4">
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <ul
                  className={`flex flex-wrap gap-3 mb-4 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}
                >
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="text-xs font-mono text-gray-500 hover:text-primary transition-colors duration-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div
                  className={`flex gap-4 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-primary transition-colors duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">
            Other Noteworthy Projects
          </h3>
          <p className="text-gray-500 mt-2">View the archive</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative p-6 bg-white rounded-lg border border-gray-200 hover:border-primary/50 hover:-translate-y-2 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
            >
              <div className="flex items-center justify-between mb-6">
                <Folder className="w-10 h-10 text-primary" />
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary transition-colors duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h4>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs font-mono text-gray-500">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Show More */}
        {otherProjects.length > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 text-sm font-medium border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-300"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
