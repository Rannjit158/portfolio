import { Heart, Mail } from 'lucide-react';
import {  Github, Linkedin} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();


const socialLinks = [
  { icon: Github , href: '#', label: 'GitHub', color: 'text-blue-600' },
  { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'text-blue-600' },
  { icon: Mail, href: '#contact', label: 'Email', color: 'text-blue-600' }
];
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];


  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white from-muted/50 to-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold text-gradient hover:scale-105 transition-smooth"
            >
              Ranjit Rajbanshi Developer
            </button>
            <p className="text-muted-foreground leading-relaxed">
              Passionate web developer creating beautiful, functional, and user-centered digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-bounce hover:scale-110 shadow-card"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2 text-blue-600">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-primary transition-smooth hover:translate-x-1"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>
                <span className="font-medium">Email:</span><br />
                ranjitrajbanshi158@gmail.com
              </p>
              <p>
                <span className="font-medium">Location:</span><br />
                Biratnagar,Morang
              </p>
              <div className="inline-flex items-center gap-1 text-green-600 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Available for new projects
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <span>© {currentYear} Ranjit Rajbanshi Developer. Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and lots of coffee</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <button className="hover:text-primary transition-smooth">
                Privacy Policy
              </button>
              <button className="hover:text-primary transition-smooth">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 gradient-primary text-primary-foreground rounded-full shadow-glow hover-lift transition-smooth opacity-80 hover:opacity-100"
        aria-label="Scroll to top"
      >
        <svg 
          className="w-5 h-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;