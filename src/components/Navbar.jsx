// components/Navbar.jsx
import { useState, useEffect } from "react";
import { navLinks, personalInfo } from "../data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobile] = useState(false);
  const [activeSection, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMobile(false);

  return (
    <>
      <nav style={{ ...styles.nav, ...(scrolled ? styles.navScrolled : {}) }}>
        <div className="container">
          <div style={styles.inner}>
            <a href="#home" style={styles.logo}>
              {personalInfo.logo}
              <span style={{ color: "var(--accent)" }}>.</span>
            </a>
            <ul style={styles.navLinks}>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    style={{
                      ...styles.navLink,
                      color:
                        activeSection === l.href.replace("#", "")
                          ? "var(--accent)"
                          : "var(--muted)",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "var(--text)")}
                    onMouseLeave={(e) =>
                      (e.target.style.color =
                        activeSection === l.href.replace("#", "")
                          ? "var(--accent)"
                          : "var(--muted)")
                    }
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              style={styles.cta}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#00f2b8";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--accent)";
                e.currentTarget.style.transform = "";
              }}
            >
              LET'S TALK
            </a>
            <button
              style={styles.hamburger}
              onClick={() => setMobile(true)}
              aria-label="Menu"
            >
              <span style={styles.hLine}></span>
              <span style={styles.hLine}></span>
              <span style={styles.hLine}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div
        style={{
          ...styles.mobileNav,
          transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <button style={styles.mobileClose} onClick={close}>
          <i className="fas fa-times"></i>
        </button>
        {[{ href: "#home", label: "Home" }, ...navLinks].map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={styles.mobileLink}
            onClick={close}
            onMouseEnter={(e) => (e.target.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--text)")}
          >
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    padding: "20px 0",
    transition: "all 0.4s",
  },
  navScrolled: {
    background: "rgba(8,12,16,0.9)",
    backdropFilter: "blur(20px)",
    borderBottom: "1px solid var(--border)",
    padding: "14px 0",
  },
  inner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontFamily: "var(--font-head)",
    fontSize: 22,
    fontWeight: 800,
    color: "var(--text)",
    textDecoration: "none",
    letterSpacing: "-0.02em",
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: 36,
    listStyle: "none",
    "@media (max-width: 768px)": { display: "none" },
  },
  navLink: {
    fontFamily: "var(--font-mono)",
    fontSize: 13,
    letterSpacing: "0.05em",
    textDecoration: "none",
    transition: "color 0.3s",
  },
  cta: {
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    letterSpacing: "0.08em",
    color: "var(--bg)",
    background: "var(--accent)",
    padding: "10px 22px",
    borderRadius: 8,
    textDecoration: "none",
    transition: "all 0.3s",
    fontWeight: 500,
  },
  hamburger: {
    display: "none",
    flexDirection: "column",
    gap: 5,
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 4,
  },
  hLine: {
    display: "block",
    width: 24,
    height: 2,
    background: "var(--text)",
    borderRadius: 2,
  },
  mobileNav: {
    position: "fixed",
    inset: 0,
    zIndex: 99,
    background: "rgba(8,12,16,0.98)",
    backdropFilter: "blur(20px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 32,
    transition: "transform 0.4s",
  },
  mobileClose: {
    position: "absolute",
    top: 24,
    right: 24,
    background: "none",
    border: "none",
    color: "var(--text)",
    fontSize: 28,
    cursor: "pointer",
  },
  mobileLink: {
    fontFamily: "var(--font-head)",
    fontSize: 32,
    fontWeight: 700,
    color: "var(--text)",
    textDecoration: "none",
    transition: "color 0.3s",
  },
};

// Inject responsive CSS for hamburger / nav-links
const styleTag = document.createElement("style");
styleTag.innerHTML = `
  @media (max-width: 768px) {
    nav ul, nav a.nav-cta-class { display: none !important; }
  }
`;
document.head.appendChild(styleTag);
