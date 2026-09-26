import React, { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experiance from "./components/Experiance";
import Services from "./components/Services";
import CustomCursor from "./components/CustomeCursor";
import ScrollProgress from "./components/ui/ScrollProgress";
import { personalInfo } from "./data/portfolioData";

function App() {
  useEffect(() => {
    if (window.emailjs) {
      window.emailjs.init(personalInfo.emailjsPublicKey);
    }
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <CustomCursor />
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experiance />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;