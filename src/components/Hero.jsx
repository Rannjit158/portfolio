import React from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  // const scrollToSection = (href) => {
  //   const element = document.querySelector(href);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-white z-10 overflow-auto"
    >
      <div className="w-full max-w-3xl px-6 text-center animate-fade-in-up">
        {/* Heading */}
        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
          Hi, I’m <span className="gradient-text">Ranjit Rajbanshi</span>
        </h1>

        {/* Image */}
        <div className="mb-6 flex justify-center">
          <img
            src="/image/1.png"
            alt="Ranjit Rajbanshi"
            className="h-72 w-72 rounded-full object-cover border-4 border-primary/30 shadow-xl"
          />
        </div>

        {/* Subtitle */}
        <p className="mb-4 text-xl text-muted-foreground">
          Full Stack Developer
        </p>

        {/* Description */}
        <p className="mb-8 mx-auto max-w-xl text-lg text-muted-foreground">
          I build modern, high-performance web applications with clean code,
          great user experience, and scalable architecture.
        </p>

        {/* Buttons */}
        <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={() => scrollToSection("#projects")}
            className="hero-gradient glow-effect inline-flex items-center justify-center rounded-lg px-6 py-3 text-white transition-transform duration-200 hover:scale-105"
          >
            View My Work
          </button>

          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-3 text-primary transition-all duration-200 hover:bg-primary hover:text-white"
          >
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition hover:scale-110 hover:text-primary"
          >
            <Github className="h-6 w-6" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition hover:scale-110 hover:text-primary"
          >
            <Linkedin className="h-6 w-6" />
          </a>

          <button
            onClick={() => scrollToSection("#contact")}
            className="text-muted-foreground transition hover:scale-110 hover:text-primary"
          >
            <Mail className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
