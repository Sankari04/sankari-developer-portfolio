// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Sparkles, FileText } from 'lucide-react';
import '../styles/Navbar.css';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Brand Logo */}
          <a
            href="#home"
            className="brand-logo"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <div className="brand-icon">
              <span>&lt;S/&gt;</span>
            </div>
            <span>
              Sankari<span className="brand-dot">.</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav>
            <ul className="nav-links">
              {navItems.map((item) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <li key={item.label} className="nav-item">
                    <a
                      href={item.href}
                      className={`nav-link ${isActive ? 'active' : ''}`}
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Actions: Glowing Resume Button & Mobile Toggle */}
          <div className="nav-actions">
            <a
              href="/Sankari_Resume.pdf"
              download="Sankari_Resume.pdf"
              className="btn-glow-resume"
              title="Download Sankari's Resume PDF"
            >
              <Download size={16} />
              <span>Resume</span>
            </a>

            <button
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Only mounted when opened on mobile) */}
      {mobileMenuOpen && (
        <>
          <div
            className="mobile-drawer-overlay open"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="mobile-drawer open">
            <div style={{ marginBottom: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 700, fontSize: '1.2rem', color: '#FFFFFF' }}>
                  Sankari<span style={{ color: '#A855F7' }}>.dev</span>
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ color: '#A1A1AA', padding: '6px' }}
                >
                  <X size={20} />
                </button>
              </div>
              <p style={{ fontSize: '0.82rem', color: '#71717A', marginTop: '4px' }}>
                MCA Student & Aspiring Software Developer
              </p>
            </div>

            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  <span>{item.label}</span>
                </a>
              );
            })}

            <div className="mobile-resume-container">
              <a
                href="/Sankari_Resume.pdf"
                download="Sankari_Resume.pdf"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Download size={16} />
                <span>Download Resume PDF</span>
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
