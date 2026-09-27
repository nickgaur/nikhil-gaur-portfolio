import React from "react";
import Sidebar from "./components/Sidebar.jsx";
import Hero from "./components/Hero.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Credentials from "./components/Credentials.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import BackToTop from "./components/BackToTop.jsx";
import Blobs from "./components/Blobs.jsx";

export default function App() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <div className="page-blobs">
          <Blobs />
        </div>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Credentials />
        <Education />
        <Contact />
      </main>
      <BackToTop />
    </div>
  );
}
