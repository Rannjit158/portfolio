import { motion } from "framer-motion";
import { Heart, Mail, Github, Linkedin, FileDown, FileText } from "lucide-react";
import Reveal from "./animations/Reveal";
import useCvDownload from "../hooks/useCvDownload";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { hasFile, download } = useCvDownload();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Rannjit158",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ranjit-rajbanshi-a62856343/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:ranjitrajbanshi158@gmail.com",
      label: "Email",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="border-t border-[rgba(255,255,255,0.07)] bg-black py-4 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8 grid gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <Reveal>
            <div className="space-y-4">
              <button
                onClick={scrollToTop}
                className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-2xl font-bold text-transparent transition-transform hover:scale-105"
              >
                Ranjit Rajbanshi Developer
              </button>
              <p className="leading-relaxed text-[rgba(255,255,255,0.6)]">
                Passionate web developer creating beautiful, functional, and
                user-centered digital experiences.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.12, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-full bg-[rgba(255,255,255,0.05)] p-2 shadow-md transition-colors hover:bg-green-500 hover:text-white"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Quick Links */}
          <Reveal delay={0.1}>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <div className="space-y-2">
                {quickLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-[rgba(255,255,255,0.7)] transition-all duration-300 hover:translate-x-1 hover:text-green-500"
                  >
                    {link.name}
                  </button>
                ))}
                <motion.button
                  onClick={download}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 text-green-500"
                >
                  {hasFile ? <FileDown size={15} /> : <FileText size={15} />}
                  {hasFile ? "Download CV" : "View CV"}
                </motion.button>
              </div>
            </div>
          </Reveal>

          {/* Contact Info */}
          <Reveal delay={0.2}>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Get In Touch</h3>
              <div className="space-y-3 text-[rgba(255,255,255,0.6)]">
                <p>
                  <span className="font-medium">Email:</span>
                  <br />
                  ranjitrajbanshi158@gmail.com
                </p>
                <p>
                  <span className="font-medium">Location:</span>
                  <br />
                  Biratnagar, Morang
                </p>
                <div className="inline-flex items-center gap-2 text-sm text-green-500">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                  Available for new projects
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div className="flex flex-wrap items-center justify-center gap-1 text-sm leading-relaxed text-[rgba(255,255,255,0.6)] md:justify-start">
            <span>© {currentYear} Ranjit Rajbanshi Developer.</span>
            <span className="flex items-center gap-1">
              Made with{" "}
              <Heart className="inline-block h-4 w-4 animate-pulse text-red-500" />
            </span>
            <span>and lots of coffee</span>
          </div>

          {/* <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[rgba(255,255,255,0.5)] transition-colors duration-300 hover:text-green-500"
          >
            Back to top
          </motion.button> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;