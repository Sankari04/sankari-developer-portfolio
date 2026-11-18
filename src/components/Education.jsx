// src/components/Education.jsx
import React from 'react';
import { GraduationCap, Calendar, Sparkles, Award } from 'lucide-react';
import { educationData } from '../data/portfolioData';
import '../styles/Education.css';

const Education = () => {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Sparkles size={14} />
            <span>Academic Milestones</span>
          </div>
          <h2 className="section-title">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            Formal academic foundation in computer applications and mathematical logic.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="timeline-wrapper">
          <div className="timeline-line" />

          {educationData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-node">
                <GraduationCap size={16} />
              </div>

              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div>
                    <h3 className="timeline-degree">{item.degree}</h3>
                    <div className="timeline-institution">{item.institution}</div>
                    <div className="timeline-affiliation">{item.affiliation}</div>
                  </div>

                  <div className="timeline-badge-group">
                    <div className="timeline-percentage-badge">
                      <span className="percentage-value">{item.score}</span>
                      <span className="percentage-label">{item.scoreLabel}</span>
                    </div>
                  </div>
                </div>

                <div className="timeline-duration-badge">
                  <Calendar size={14} />
                  <span>{item.duration}</span>
                  <span style={{ color: 'var(--text-muted)' }}>•</span>
                  <span style={{ color: item.featured ? 'var(--accent-light)' : 'var(--text-secondary)' }}>
                    {item.status}
                  </span>
                </div>

                <p className="timeline-description">{item.description}</p>

                <div className="timeline-highlights">
                  {item.highlights.map((point, pIndex) => (
                    <span key={pIndex} className="timeline-pill">
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
