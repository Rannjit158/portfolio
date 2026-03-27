import React from "react";
import "./index.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About ";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experiance from "./components/Experiance";
import Services from "./components/Services";
// import CustomCursor from "./components/CustomCursor";
// import { useReveal } from "./hooks/useReveal";
import { personalInfo } from "./data/portfolioData";

function App() {
  useEffect(() => {
    if (window.emailjs) {
      window.emailjs.init(personalInfo.emailjsPublicKey);
    }
  }, []);

  // useReveal();

  return (
    <>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experiance />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
