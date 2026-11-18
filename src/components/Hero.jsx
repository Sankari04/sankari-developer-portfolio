// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';
import { ArrowDown, Download, Mail, Sparkles } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import GirlIllustration from './GirlIllustration';
import { personalInfo } from '../data/portfolioData';
import '../styles/Hero.css';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  const roles = personalInfo.typingRoles;

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[roleIndex];

      if (!isDeleting) {
        // Typing forward
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(80);

        if (currentText.length + 1 === fullText.length) {
          // Pause at full word
          setTypingSpeed(1800);
          setIsDeleting(true);
        }
      } else {
        // Deleting backward
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(40);

        if (currentText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(350);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, roles, typingSpeed]);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* LEFT SIDE */}
          <div className="hero-content">
            <div className="hero-status-pill">
              <span className="status-dot-pulse" />
              <span>{personalInfo.status}</span>
            </div>

            <h1 className="hero-greeting">
              Hi, I'm <span className="gradient-text">Sankari</span>
            </h1>

            <div className="hero-title-box">
              <span className="hero-title-text">{currentText}</span>
              <span className="typing-cursor" />
            </div>

            <p className="hero-intro">{personalInfo.introduction}</p>

            <div className="hero-cta-group">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="btn btn-primary"
              >
                <span>View My Projects</span>
                <ArrowDown size={18} />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Sankari_Resume.pdf"
                className="btn btn-secondary"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
            </div>

            <div className="hero-social-bar">
              <span className="hero-social-label">Connect:</span>
              <div className="hero-social-links">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="social-icon-btn"
                  title="Send Email"
                  aria-label="Send Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: ANIMATED GIRL DEVELOPER ILLUSTRATION */}
          <div className="hero-visual-wrapper">
            <GirlIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
