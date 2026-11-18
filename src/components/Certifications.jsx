// src/components/Certifications.jsx
import React from 'react';
import { Award, Cpu, ShieldCheck, Calendar, Sparkles } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import '../styles/Certifications.css';

const certIconMap = {
  Cpu: Cpu,
  ShieldCheck: ShieldCheck,
  Award: Award
};

const Certifications = () => {
  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Sparkles size={14} />
            <span>Verified Credentials</span>
          </div>
          <h2 className="section-title">
            Licenses & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Industry and academic certifications validating software engineering, testing, and AI fundamentals.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="certifications-grid">
          {certificationsData.map((cert) => {
            const IconComponent = certIconMap[cert.icon] || Award;
            return (
              <div key={cert.id} className="cert-card">
                <div>
                  <div className="cert-top">
                    <div className="cert-icon-container">
                      <IconComponent size={26} />
                    </div>
                    <span className="cert-badge-pill">{cert.badge}</span>
                  </div>

                  <h3 className="cert-title">{cert.title}</h3>
                  <div className="cert-issuer">{cert.issuer}</div>

                  <div className="cert-date-wrap">
                    <Calendar size={14} />
                    <span>Issued: {cert.issueDate}</span>
                  </div>

                  <p className="cert-summary">{cert.summary}</p>
                </div>

                <div className="cert-skills-list">
                  {cert.skillsLearned.map((skill, sIndex) => (
                    <span key={sIndex} className="cert-skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
