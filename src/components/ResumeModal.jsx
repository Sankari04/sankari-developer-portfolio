// src/components/ResumeModal.jsx
import React from 'react';
import { X, Download, Printer, FileText, CheckCircle2 } from 'lucide-react';
import { personalInfo, educationData, experienceData, projectsData, certificationsData, skillsData } from '../data/portfolioData';
import '../styles/ResumeModal.css';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div className="resume-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="resume-modal-header">
          <div className="resume-modal-title">
            <FileText size={20} color="#A855F7" />
            <span>Sankari — Curriculum Vitae</span>
          </div>

          <div className="resume-modal-actions">
            <a
              href={personalInfo.resumePath}
              download="Sankari_Resume.pdf"
              className="btn-glow-resume"
              style={{ fontSize: '0.82rem', padding: '7px 14px' }}
            >
              <Download size={15} />
              <span>Download PDF</span>
            </a>

            <button
              className="resume-modal-close-btn"
              onClick={onClose}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Body / Paper View */}
        <div className="resume-modal-body">
          <div className="resume-paper">
            <h2>SANKARI</h2>
            <div className="resume-paper-sub">Aspiring Software Developer | MCA Student</div>
            <div className="resume-paper-contacts">
              Madurai, Tamil Nadu, India &bull; nsankari0910@gmail.com &bull; linkedin.com/in/sankari10 &bull; github.com/Sankari04
            </div>

            <div className="resume-section-heading">Professional Summary</div>
            <p>
              MCA student with a solid mathematical foundation and deep interest in software engineering, frontend technologies, and full-stack development. Experienced in designing intuitive user interfaces and building applications using React.js, Node.js, and MySQL. Passionate about turning requirements into practical software solutions.
            </p>

            <div className="resume-section-heading">Education</div>
            <div style={{ marginBottom: '8px' }}>
              <strong>Master of Computer Applications (MCA)</strong> — Fatima College, Madurai (2025 – 2027)
              <div style={{ color: '#52525B', fontSize: '0.82rem' }}>Aggregate: 83% &bull; Affiliated to Madurai Kamaraj University</div>
            </div>
            <div>
              <strong>Bachelor of Science in Mathematics (B.Sc.)</strong> — Fatima College, Madurai (Completed: 2025)
              <div style={{ color: '#52525B', fontSize: '0.82rem' }}>Aggregate: 74% (First Class with Distinction)</div>
            </div>

            <div className="resume-section-heading">Technical Skills</div>
            <p>
              <strong>Programming Languages:</strong> Java, Python, JavaScript (ES6+)<br />
              <strong>Frontend Technologies:</strong> HTML5, CSS3, JavaScript, React.js, Responsive UI<br />
              <strong>Database & Backend:</strong> MySQL, Node.js, Express.js<br />
              <strong>Tools & Methodologies:</strong> Git, GitHub, VS Code, Figma (UI/UX)
            </p>

            <div className="resume-section-heading">Internship Experience</div>
            <div>
              <strong>UI/UX Design Intern</strong> — Infosys Springboard (May 2025)
              <ul>
                <li>Designed 2 user interfaces (Admin Dashboard and Student Portal) using Figma.</li>
                <li>Created user-friendly layouts focusing on usability, accessibility, and clear navigation paths.</li>
                <li>Converted Figma designs into responsive frontend web pages using HTML, CSS, and JavaScript.</li>
              </ul>
            </div>

            <div className="resume-section-heading">Projects</div>
            <div style={{ marginBottom: '10px' }}>
              <strong>Doctor Appointment Management System</strong> (React.js, Node.js, MySQL)
              <ul>
                <li>Developed a full-stack appointment platform with 3 dedicated modules: Patients, Doctors, Admin.</li>
                <li>Integrated appointment booking, queue token generation, medication tracking, and JWT authentication.</li>
              </ul>
            </div>
            <div>
              <strong>E-Commerce Web Application</strong> (HTML, CSS, JavaScript)
              <ul>
                <li>Developed a web-based e-commerce store with product listings, search filters, and shopping cart logic.</li>
              </ul>
            </div>

            <div className="resume-section-heading">Certifications</div>
            <p>
              &bull; <strong>AI Fundamentals</strong> — IBM SkillsBuild (May 2026)<br />
              &bull; <strong>Software Testing</strong> — NPTEL (March 2026)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
