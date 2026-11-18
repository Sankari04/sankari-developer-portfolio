// src/components/About.jsx
import React from 'react';
import { GraduationCap, Calendar, MapPin, Code, Sparkles, CheckCircle2 } from 'lucide-react';
import { aboutData } from '../data/portfolioData';
import '../styles/About.css';

const iconMap = {
  GraduationCap: GraduationCap,
  Calendar: Calendar,
  MapPin: MapPin,
  Code: Code
};

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Sparkles size={14} />
            <span>Background & Overview</span>
          </div>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Bridging mathematical analysis with user-focused software engineering.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Narrative */}
          <div className="about-narrative">
            <p className="about-text-lead">{aboutData.paragraph1}</p>
            <p className="about-text-secondary">{aboutData.paragraph2}</p>

            <div className="about-highlights-row">
              {aboutData.strengths.map((item, index) => (
                <div key={index} className="about-highlight-item">
                  <div className="highlight-icon-box">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h3 className="highlight-title">{item.title}</h3>
                    <p className="highlight-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right 4 Small Info Cards */}
          <div className="about-cards-column">
            {aboutData.infoCards.map((card, index) => {
              const IconComponent = iconMap[card.icon] || Code;
              return (
                <div key={index} className="info-card">
                  <div className="info-card-top">
                    <span className="info-card-label">{card.label}</span>
                    <div className="info-card-icon">
                      <IconComponent size={20} />
                    </div>
                  </div>
                  <div>
                    <div className="info-card-value">{card.value}</div>
                    <div className="info-card-subtext">{card.subtext}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
