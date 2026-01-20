import { useEffect, useState } from "react";
import { Github, Linkedin, Twitter, Mail, ChevronDown } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:ranjit@example.com", label: "Email" },
];

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Full Stack Developer";

  useEffect(() => {
    setIsVisible(true);

    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center">
        <p
          className={`text-primary font-mono text-sm mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Hello, my name is
        </p>

        <h1
          className={`text-5xl md:text-7xl font-bold mb-4 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Ranjit <span className="text-primary">Rajbanshi</span>
        </h1>

        <h2
          className={`text-3xl md:text-5xl font-bold text-muted-foreground mb-6 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {typedText}
          <span className="text-primary animate-pulse">|</span>
        </h2>

        <p
          className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          I build modern, high-performance web applications with clean code,
          scalable architecture, and great user experience.
        </p>

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition hover:-translate-y-1"
          >
            View My Work →
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 border border-primary text-primary rounded-lg hover:bg-primary/10 transition hover:-translate-y-1"
          >
            Get In Touch
          </button>
        </div>

        {/* Social Icons */}
        <div
          className={`flex justify-center gap-6 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition hover:-translate-y-1"
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
