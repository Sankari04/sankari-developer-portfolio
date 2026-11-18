// src/components/Footer.jsx
import React from 'react';
import { Mail, ArrowUp, Heart } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';
import '../styles/Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="portfolio-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              {personalInfo.name}
              <span style={{ color: 'var(--accent-purple)' }}>.dev</span>
            </div>
            <p className="footer-role-text">
              Aspiring Software Developer &bull; MCA Student @ Fatima College, Madurai
            </p>
          </div>

          <div className="footer-social-links">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              title="GitHub"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="footer-social-btn"
              title="Email"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {personalInfo.year} {personalInfo.name}. All rights reserved. Built with React & Vite.
          </div>

          <button onClick={scrollToTop} className="footer-back-to-top">
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
