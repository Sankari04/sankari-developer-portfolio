// src/components/Experience.jsx
import React, { useState } from 'react';
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  Sparkles,
  Layers,
  Layout,
  SlidersHorizontal,
  ExternalLink,
  Users,
  ShieldCheck,
  Tag
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import '../styles/Experience.css';

const Experience = () => {
  const [activeFigmaView, setActiveFigmaView] = useState('user'); // 'user' or 'admin'

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Sparkles size={14} />
            <span>Professional Exposure</span>
          </div>
          <h2 className="section-title">
            Internship <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Industry training focused on modern UI/UX design systems and frontend component conversion.
          </p>
        </div>

        {/* Experience Showcase Card */}
        <div className="experience-container-card">
          <div className="experience-header-grid">
            <div className="experience-company-info">
              <div className="company-logo-avatar">
                <Briefcase size={28} />
              </div>
              <div>
                <h3 className="experience-role-title">{experienceData.role}</h3>
                <div className="experience-company-name">{experienceData.company}</div>
              </div>
            </div>

            <div className="experience-meta-badges">
              <div className="exp-date-badge">
                <Calendar size={14} />
                <span>{experienceData.duration}</span>
              </div>
              <span className="exp-type-badge">{experienceData.type}</span>
              <span className="exp-type-badge">{experienceData.location}</span>
            </div>
          </div>

          <p className="experience-summary">{experienceData.summary}</p>

          <div className="experience-bullet-list">
            {experienceData.bulletPoints.map((point, index) => (
              <div key={index} className="exp-bullet-item">
                <CheckCircle2 size={18} />
                <span>{point}</span>
              </div>
            ))}
          </div>

          {/* Dedicated Visual Project Preview Card for Campus Event Hub */}
          <div className="figma-preview-card">
            {/* Figma-like Toolbar Header */}
            <div className="figma-card-header">
              <div className="figma-left-tools">
                <div className="figma-brand-pill">
                  <svg width="14" height="18" viewBox="0 0 38 57" fill="none">
                    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
                    <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
                    <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
                    <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
                    <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
                  </svg>
                  <span>Figma Prototype</span>
                </div>
                <span className="figma-filename">campus-event-hub.fig</span>
              </div>

              {/* View Switcher: User View vs Admin View */}
              <div className="figma-view-toggles">
                <button
                  className={`figma-tab-btn ${activeFigmaView === 'user' ? 'active' : ''}`}
                  onClick={() => setActiveFigmaView('user')}
                >
                  <Users size={12} style={{ display: 'inline', marginRight: '5px' }} />
                  User Interface
                </button>
                <button
                  className={`figma-tab-btn ${activeFigmaView === 'admin' ? 'active' : ''}`}
                  onClick={() => setActiveFigmaView('admin')}
                >
                  <ShieldCheck size={12} style={{ display: 'inline', marginRight: '5px' }} />
                  Admin Interface
                </button>
              </div>
            </div>

            {/* Canvas Body with Simulated UI Preview */}
            <div className="figma-canvas-body">
              <div className="figma-screen-mockup">
                {/* Mockup Header */}
                <div className="mockup-nav">
                  <div className="mockup-logo">
                    <span style={{ color: '#A855F7' }}>●</span>
                    <span>Campus Event Hub</span>
                    <span style={{ fontSize: '0.7rem', color: '#71717A', marginLeft: '6px' }}>
                      [{activeFigmaView === 'user' ? 'Student Portal' : 'Administrator Dashboard'}]
                    </span>
                  </div>

                  <div className="mockup-search-bar">
                    🔍 {activeFigmaView === 'user' ? 'Search hackathons, seminars...' : 'Search registrations, events...'}
                  </div>
                </div>

                {/* Mockup Grid Cards */}
                {activeFigmaView === 'user' ? (
                  <div className="mockup-cards-row">
                    <div className="mockup-inner-card">
                      <span className="mockup-badge">Tech Symposium 2026</span>
                      <h4 className="mockup-card-title">National MCA Hackathon</h4>
                      <p className="mockup-desc">
                        36-hour coding sprint with live project presentations & mentorship.
                      </p>
                      <span style={{ fontSize: '0.72rem', color: '#A855F7', marginTop: '6px' }}>
                        ✓ 1-Click RSVP Available
                      </span>
                    </div>

                    <div className="mockup-inner-card">
                      <span className="mockup-badge">Workshop</span>
                      <h4 className="mockup-card-title">Full-Stack Web Dev Trends</h4>
                      <p className="mockup-desc">
                        Hands-on session on React 19, microservices & cloud deployment.
                      </p>
                      <span style={{ fontSize: '0.72rem', color: '#34D399', marginTop: '6px' }}>
                        ✓ Limited 60 Seats
                      </span>
                    </div>

                    <div className="mockup-inner-card">
                      <span className="mockup-badge">Cultural & Alumni</span>
                      <h4 className="mockup-card-title">Fatima Fest Annual Meet</h4>
                      <p className="mockup-desc">
                        Inter-departmental competitions, exhibitions, and networking.
                      </p>
                      <span style={{ fontSize: '0.72rem', color: '#FBBF24', marginTop: '6px' }}>
                        ✓ Open Registration
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="mockup-cards-row">
                    <div className="mockup-inner-card">
                      <span className="mockup-badge" style={{ background: 'rgba(124, 58, 237, 0.25)' }}>
                        Analytics Overview
                      </span>
                      <h4 className="mockup-card-title">Total Registrations: 840+</h4>
                      <p className="mockup-desc">
                        Real-time attendee check-in statistics & CSV roster export.
                      </p>
                      <span style={{ fontSize: '0.72rem', color: '#A855F7', marginTop: '6px' }}>
                        ⚡ 94% Capacity Filled
                      </span>
                    </div>

                    <div className="mockup-inner-card">
                      <span className="mockup-badge" style={{ background: 'rgba(124, 58, 237, 0.25)' }}>
                        Publishing Tool
                      </span>
                      <h4 className="mockup-card-title">Event Creator & Scheduler</h4>
                      <p className="mockup-desc">
                        Multi-step form with venue selection, banner upload & approval flow.
                      </p>
                      <span style={{ fontSize: '0.72rem', color: '#34D399', marginTop: '6px' }}>
                        ⚡ 3 Pending Approvals
                      </span>
                    </div>

                    <div className="mockup-inner-card">
                      <span className="mockup-badge" style={{ background: 'rgba(124, 58, 237, 0.25)' }}>
                        QR Verification
                      </span>
                      <h4 className="mockup-card-title">Entry Gate Scanner</h4>
                      <p className="mockup-desc">
                        Rapid camera validation of digital event passes at college entry.
                      </p>
                      <span style={{ fontSize: '0.72rem', color: '#60A5FA', marginTop: '6px' }}>
                        ⚡ Instant Token Check
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Design Tokens & Specs Footer */}
            <div className="figma-tokens-footer">
              <div className="token-swatches-group">
                <span className="token-label">Figma Tokens:</span>
                {experienceData.figmaPreview.designTokens.map((token, tIndex) => (
                  <div key={tIndex} className="token-swatch">
                    <span className="swatch-circle" style={{ backgroundColor: token.hex }} />
                    <span>{token.hex}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  Hand-coded to HTML / CSS / JS
                </span>
                <span className="mockup-badge">100% Responsive</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
