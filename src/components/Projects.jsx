// src/components/Projects.jsx
import React from 'react';
import { ExternalLink, Sparkles, Check, ArrowRight, ShieldCheck, ShoppingBag, Stethoscope, Layers } from 'lucide-react';
import { Github } from './Icons';
import { projectsData } from '../data/portfolioData';
import '../styles/Projects.css';

// Custom Vector Artwork for Project Banners
const ProjectIllustration = ({ type }) => {
  if (type === 'medical') {
    return (
      <svg className="project-banner-svg" viewBox="0 0 400 210" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="medGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          <radialGradient id="medRadial" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A855F7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0D0C13" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Glow */}
        <circle cx="200" cy="105" r="90" fill="url(#medRadial)" />

        {/* Background Grid Pattern */}
        <g stroke="rgba(168, 85, 247, 0.1)" strokeWidth="1">
          <line x1="40" y1="0" x2="40" y2="210" />
          <line x1="120" y1="0" x2="120" y2="210" />
          <line x1="200" y1="0" x2="200" y2="210" />
          <line x1="280" y1="0" x2="280" y2="210" />
          <line x1="360" y1="0" x2="360" y2="210" />
          <line x1="0" y1="50" x2="400" y2="50" />
          <line x1="0" y1="105" x2="400" y2="105" />
          <line x1="0" y1="160" x2="400" y2="160" />
        </g>

        {/* Central Medical Cross Shield */}
        <g transform="translate(170, 75)">
          <rect width="60" height="60" rx="16" fill="#181525" stroke="url(#medGrad)" strokeWidth="2" />
          {/* Medical Cross */}
          <path d="M30 18V42M18 30H42" stroke="#A855F7" strokeWidth="4" strokeLinecap="round" />
          <circle cx="30" cy="30" r="22" stroke="#C084FC" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
        </g>

        {/* Dynamic ECG Heartbeat Pulse Line */}
        <path
          d="M30 105 L110 105 L125 70 L140 135 L155 90 L165 115 L175 105 L225 105 L235 85 L245 125 L255 105 L370 105"
          stroke="#C084FC"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="drop-shadow(0 0 8px rgba(168, 85, 247, 0.8))"
        />

        {/* Floating Queue Token Badge */}
        <g transform="translate(45, 45)">
          <rect width="105" height="34" rx="8" fill="#141120" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="1" />
          <circle cx="16" cy="17" r="4" fill="#34D399" />
          <text x="26" y="21" fill="#FFFFFF" fontSize="10" fontFamily="'JetBrains Mono', monospace" fontWeight="bold">Token #A-024</text>
        </g>

        {/* Floating Auth & Modules Badge */}
        <g transform="translate(265, 140)">
          <rect width="95" height="32" rx="8" fill="#141120" stroke="rgba(124, 58, 237, 0.4)" strokeWidth="1" />
          <text x="12" y="20" fill="#E9D5FF" fontSize="9.5" fontWeight="600">JWT Auth &bull; 3 Roles</text>
        </g>
      </svg>
    );
  }

  if (type === 'ecommerce') {
    return (
      <svg className="project-banner-svg" viewBox="0 0 400 210" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ecomGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          <radialGradient id="ecomRadial" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A855F7" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0D0C13" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="200" cy="105" r="95" fill="url(#ecomRadial)" />

        {/* Shopping Cart Icon Box */}
        <g transform="translate(165, 65)">
          <rect width="70" height="70" rx="18" fill="#181525" stroke="url(#ecomGrad)" strokeWidth="2" />
          <path
            d="M20 22 H26 L32 44 H52 L56 28 H28"
            stroke="#A855F7"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="34" cy="50" r="3" fill="#C084FC" />
          <circle cx="50" cy="50" r="3" fill="#C084FC" />
        </g>

        {/* Floating Product Cards Preview */}
        <g transform="translate(45, 120)">
          <rect width="90" height="48" rx="8" fill="#141120" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1" />
          <rect x="8" y="10" width="28" height="28" rx="4" fill="rgba(168, 85, 247, 0.2)" />
          <line x1="42" y1="18" x2="80" y2="18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <line x1="42" y1="26" x2="68" y2="26" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Floating Cart Counter Badge */}
        <g transform="translate(265, 45)">
          <rect width="95" height="32" rx="8" fill="#141120" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="1" />
          <circle cx="16" cy="16" r="5" fill="#A855F7" />
          <text x="28" y="20" fill="#FFFFFF" fontSize="10" fontWeight="bold">Cart: 3 items</text>
        </g>

        {/* Floating Price Tag */}
        <g transform="translate(275, 125)">
          <rect width="85" height="30" rx="6" fill="#181526" stroke="rgba(52, 211, 153, 0.5)" strokeWidth="1" />
          <text x="14" y="19" fill="#34D399" fontSize="10" fontFamily="'JetBrains Mono', monospace" fontWeight="bold">Checkout OK</text>
        </g>
      </svg>
    );
  }

  // Fallback / Figma type
  return (
    <svg className="project-banner-svg" viewBox="0 0 400 210" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="figmaRadial" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#A855F7" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#0D0C13" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="105" r="90" fill="url(#figmaRadial)" />
      {/* Figma Logo Artwork */}
      <g transform="translate(175, 60)">
        <rect width="50" height="75" rx="14" fill="#161422" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="1.5" />
        <circle cx="25" cy="22" r="9" fill="#FF7262" />
        <circle cx="25" cy="40" r="9" fill="#A259FF" />
        <circle cx="25" cy="58" r="9" fill="#0ACF83" />
      </g>
      <g transform="translate(50, 80)">
        <rect width="90" height="36" rx="6" fill="#12101C" stroke="rgba(168, 85, 247, 0.3)" />
        <text x="12" y="22" fill="#E9D5FF" fontSize="10" fontWeight="600">Dual UX Wireframes</text>
      </g>
      <g transform="translate(260, 80)">
        <rect width="95" height="36" rx="6" fill="#12101C" stroke="rgba(168, 85, 247, 0.3)" />
        <text x="12" y="22" fill="#E9D5FF" fontSize="10" fontWeight="600">HTML/CSS Modules</text>
      </g>
    </svg>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Sparkles size={14} />
            <span>Featured Portfolio Works</span>
          </div>
          <h2 className="section-title">
            Key <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Practical software applications and systems engineered with modern web technologies.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              {/* Visual Banner */}
              <div className="project-banner-wrapper">
                <span className="project-category-badge">{project.category}</span>
                <ProjectIllustration type={project.visualType} />
              </div>

              {/* Project Content */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>

                {/* Tech Stack Badges */}
                <div className="project-tech-stack">
                  {project.technologies.map((tech, tIndex) => (
                    <span key={tIndex} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="project-description">{project.description}</p>

                {/* Key Bullet Features */}
                <div className="project-features-list">
                  {project.keyPoints.map((point, pIndex) => (
                    <div key={pIndex} className="project-feature-item">
                      <Check size={16} />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Footer with GitHub Button */}
                <div className="project-footer">
                  <div className="project-status-text">
                    <span className="status-dot-green" />
                    <span>{project.status}</span>
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-github-link"
                    title={`View ${project.title} on GitHub`}
                  >
                    <Github size={17} />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
