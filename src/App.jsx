// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundParticles from './components/BackgroundParticles';
import ResumeModal from './components/ResumeModal';
import './App.css';

function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="portfolio-app">
      {/* Background Ambience & Particles */}
      <BackgroundParticles />

      {/* Fixed Navigation Bar */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
