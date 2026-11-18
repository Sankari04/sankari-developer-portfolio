// src/components/Skills.jsx
import React, { useState } from 'react';
import {
  Code2,
  Palette,
  Braces,
  Atom,
  Database,
  GitBranch,
  Terminal,
  Coffee,
  FileCode2,
  Sparkles,
  Layers
} from 'lucide-react';
import { Github, Figma } from './Icons';
import { skillsData } from '../data/portfolioData';
import '../styles/Skills.css';

const skillIconMap = {
  Coffee: Coffee,
  FileCode2: FileCode2,
  Code2: Code2,
  Palette: Palette,
  Braces: Braces,
  Atom: Atom,
  Database: Database,
  GitBranch: GitBranch,
  Github: Github,
  Terminal: Terminal,
  Figma: Figma
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills =
    activeCategory === 'all'
      ? skillsData.items
      : skillsData.items.filter((item) => item.category === activeCategory);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Sparkles size={14} />
            <span>Core Competencies</span>
          </div>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            Languages, frameworks, and developer tools I utilize to craft modern web applications.
          </p>
        </div>

        {/* Category Filters */}
        <div className="skills-filter-bar">
          {skillsData.categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => {
            const IconComponent = skillIconMap[skill.icon] || Code2;
            return (
              <div key={skill.name} className="skill-card">
                <div>
                  <div className="skill-card-header">
                    <div
                      className="skill-icon-wrap"
                      style={{ color: skill.accent || '#A855F7' }}
                    >
                      <IconComponent size={24} />
                    </div>
                    <span className="skill-level-tag">{skill.levelTag}</span>
                  </div>

                  <h3 className="skill-name">{skill.name}</h3>
                  <p className="skill-desc">{skill.description}</p>
                </div>

                <div className="skill-tags-group">
                  {skill.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="skill-subtag">
                      {tag}
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

export default Skills;
