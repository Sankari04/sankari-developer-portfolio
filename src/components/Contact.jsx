// src/components/Contact.jsx
import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Sparkles, ExternalLink, Copy, Check } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', message: '' }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (status) setStatus(null);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Please fill in your name, email, and message.'
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      return;
    }

    // Construct functional mailto link
    const subjectLine = encodeURIComponent(
      formData.subject.trim() || `Portfolio Inquiry from ${formData.name}`
    );
    const bodyContent = encodeURIComponent(
      `Hi Sankari,\n\n${formData.message}\n\n---\nSender: ${formData.name}\nEmail: ${formData.email}`
    );

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subjectLine}&body=${bodyContent}`;

    // Open mail client
    window.location.href = mailtoUrl;

    setStatus({
      type: 'success',
      message: 'Launching your email client! If it didn’t open automatically, you can email directly at nsankari0910@gmail.com'
    });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Sparkles size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            Have an opportunity or an interesting project? Feel free to connect with me!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Side: Contact Channels */}
          <div className="contact-info-col">
            <p className="contact-intro-text">
              I am actively looking for software developer opportunities, internships, and collaborative tech projects. Reach out directly or drop a message via the form!
            </p>

            <div className="contact-cards-stack">
              {/* Email Card with Copy Feature */}
              <div className="contact-channel-card" style={{ cursor: 'pointer' }} onClick={handleCopyEmail}>
                <div className="channel-left">
                  <div className="channel-icon-box">
                    <Mail size={22} />
                  </div>
                  <div>
                    <div className="channel-label">Email Address</div>
                    <div className="channel-value">{personalInfo.email}</div>
                  </div>
                </div>
                <button
                  type="button"
                  className="channel-action-icon"
                  title="Copy email to clipboard"
                  style={{ background: 'transparent', padding: '6px' }}
                >
                  {copied ? <Check size={18} color="#34D399" /> : <Copy size={18} />}
                </button>
              </div>

              {/* LinkedIn Card */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-card"
              >
                <div className="channel-left">
                  <div className="channel-icon-box">
                    <Linkedin size={22} />
                  </div>
                  <div>
                    <div className="channel-label">LinkedIn</div>
                    <div className="channel-value">linkedin.com/in/sankari10</div>
                  </div>
                </div>
                <ExternalLink size={18} className="channel-action-icon" />
              </a>

              {/* GitHub Card */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-card"
              >
                <div className="channel-left">
                  <div className="channel-icon-box">
                    <Github size={22} />
                  </div>
                  <div>
                    <div className="channel-label">GitHub</div>
                    <div className="channel-value">github.com/Sankari04</div>
                  </div>
                </div>
                <ExternalLink size={18} className="channel-action-icon" />
              </a>

              {/* Location Card */}
              <div className="contact-channel-card">
                <div className="channel-left">
                  <div className="channel-icon-box">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <div className="channel-label">Location</div>
                    <div className="channel-value">{personalInfo.location}</div>
                  </div>
                </div>
                <span style={{ fontSize: '0.75rem', color: '#A855F7', fontWeight: 600 }}>TN, India</span>
              </div>
            </div>
          </div>

          {/* Right Side: Working Contact Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row-dual">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Opportunity / Collaboration / Project Inquiry"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Sankari, I came across your portfolio and would like to discuss..."
                  required
                  className="form-textarea"
                />
              </div>

              {status && (
                <div
                  className={`form-status-alert ${
                    status.type === 'success' ? 'form-status-success' : 'form-status-error'
                  }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle2 size={18} />
                  ) : (
                    <AlertCircle size={18} />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <button type="submit" className="btn btn-primary btn-send-message">
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
