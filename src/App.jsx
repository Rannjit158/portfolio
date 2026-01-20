import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About ";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <Hero />
        <About />

        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
