import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const technologies = [
    "JavaScript (ES6+)",
    "React",
    "Node.js",
    "Tailwind CSS",
    "REST APIs",
    "Git & GitHub",
  ];

  return (
    <section ref={sectionRef} id="about" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div
          className={`mb-12 flex items-center gap-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-mono text-sm text-primary">01.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            About Me
          </h2>
          <div className="h-px flex-1 max-w-xs bg-gray-200" />
        </div>

        <div className="grid gap-12 md:grid-cols-5">
          {/* Text Content */}
          <div className="md:col-span-3 space-y-4">
            <p
              className={`text-gray-600 transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Hello! I’m{" "}
              <span className="text-primary font-medium">Ranjit Rajbanshi</span>
              , a passionate web developer who loves building clean, modern, and
              scalable web applications.
            </p>

            <p
              className={`text-gray-600 transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              I enjoy turning complex problems into simple, beautiful interfaces
              and continuously learning new technologies to improve my craft.
            </p>

            <p
              className={`text-gray-600 transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Here are a few technologies I’ve been working with recently:
            </p>

            {/* Tech Stack */}
            <ul
              className={`grid grid-cols-2 gap-2 pt-4 transition-all duration-700 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {technologies.map((tech) => (
                <li
                  key={tech}
                  className="flex items-center gap-2 text-sm text-gray-600 group"
                >
                  <span className="text-primary group-hover:translate-x-1 transition-transform">
                    ▹
                  </span>
                  <span className="group-hover:text-primary transition-colors">
                    {tech}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div
            className={`md:col-span-2 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative group max-w-xs mx-auto">
              {/* Image Box */}
              <div className="relative z-10 overflow-hidden rounded-lg">
                <img
                  src="/image/1.png"
                  alt="Ranjit Rajbanshi"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition" />
              </div>

              {/* Border */}
              <div className="absolute top-4 left-4 w-full h-full border-2 border-primary rounded-lg transition-all duration-300 group-hover:top-2 group-hover:left-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
