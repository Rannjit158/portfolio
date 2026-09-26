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
import CursorGlow from "./components/animations/CursorGlow";
import TechMarquee from "./components/TechMarquee";
import CvModal from "./components/CvModal";
import FloatingActions from "./components/FloatingActions";
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
      <CursorGlow />
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <TechMarquee />
          <About />
          <Skills />
          <Projects />
          <Experiance />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
      <FloatingActions />
      <CvModal />
    </MotionConfig>
  );
}

export default App;