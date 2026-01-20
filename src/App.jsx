import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About ";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experiance from "./components/Experiance";

function App() {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Experiance />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
