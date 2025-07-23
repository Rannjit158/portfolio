import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import EnrollmentForm from "./components/Enroll";

function App() {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <EnrollmentForm />
        <Contact />
          <Footer />
      </div>
    </>
  );
}

export default App;