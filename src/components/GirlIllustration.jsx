// src/components/GirlIllustration.jsx
import React, { useState, useRef } from 'react';
import '../styles/GirlIllustration.css';

const GirlIllustration = () => {
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // subtle tilt limit
    setTilt({
      x: Math.max(-10, Math.min(10, -(y / 20))),
      y: Math.max(-10, Math.min(10, x / 20))
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      className="illustration-wrapper"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="illustration-container"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
        }}
      >
        {/* Floating Badges */}
        <div className="floating-badge badge-mca">
          <span style={{ fontSize: '1rem' }}>🎓</span>
          <span>MCA @ Fatima</span>
        </div>

        <div className="floating-badge badge-react">
          <svg width="18" height="18" viewBox="-11.5 -10.23174 23 20.46348" fill="#61DAFB">
            <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
            <g stroke="#61DAFB" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2"/>
              <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
              <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
            </g>
          </svg>
          <span>React.js</span>
        </div>

        <div className="floating-badge badge-code">
          <span style={{ color: '#A855F7' }}>&lt;/&gt;</span>
          <span>Clean Code</span>
        </div>

        <div className="floating-badge badge-figma">
          <svg width="14" height="18" viewBox="0 0 38 57" fill="none">
            <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
            <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
            <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
            <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
            <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
          </svg>
          <span>UI / UX</span>
        </div>

        {/* Central Bespoke Anime Developer Girl Illustration */}
        <svg
          className="illustration-svg"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradients */}
            <radialGradient id="portalGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#A855F7" stopOpacity="0.32" />
              <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.16" />
              <stop offset="80%" stopColor="#050505" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#050505" stopOpacity="1" />
            </radialGradient>

            <linearGradient id="neonRing" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="50%" stopColor="#C084FC" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>

            <linearGradient id="hoodieBody" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#251F33" />
              <stop offset="40%" stopColor="#191524" />
              <stop offset="100%" stopColor="#100D18" />
            </linearGradient>

            <linearGradient id="hoodieTrim" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="50%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#C084FC" />
            </linearGradient>

            <linearGradient id="hairBase" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2D1A45" />
              <stop offset="60%" stopColor="#1F1230" />
              <stop offset="100%" stopColor="#120A1C" />
            </linearGradient>

            <linearGradient id="hairHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C084FC" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#A855F7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="skin" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFE0D1" />
              <stop offset="100%" stopColor="#F8C9B5" />
            </linearGradient>

            <linearGradient id="laptopBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2E283E" />
              <stop offset="50%" stopColor="#1E1929" />
              <stop offset="100%" stopColor="#13101C" />
            </linearGradient>

            <linearGradient id="screenBeamGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#A855F7" stopOpacity="0.45" />
              <stop offset="40%" stopColor="#C084FC" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#E9D5FF" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="keyboardGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A855F7" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#E9D5FF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.7" />
            </linearGradient>

            <filter id="glowFilter" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* BACKDROP: Outer Glowing Portal */}
          <circle cx="300" cy="300" r="230" fill="url(#portalGlow)" />

          {/* Tech Decorative Rotating Rings */}
          <g className="svg-orbit-ring">
            <circle
              cx="300"
              cy="300"
              r="220"
              stroke="url(#neonRing)"
              strokeWidth="2"
              strokeDasharray="10 18 35 15"
              strokeOpacity="0.5"
            />
            <circle
              cx="300"
              cy="300"
              r="245"
              stroke="#A855F7"
              strokeWidth="1"
              strokeDasharray="4 24"
              strokeOpacity="0.3"
            />
            <circle cx="520" cy="300" r="4" fill="#A855F7" filter="url(#softGlow)" />
            <circle cx="80" cy="300" r="3" fill="#C084FC" filter="url(#softGlow)" />
          </g>

          <g className="svg-orbit-reverse">
            <circle
              cx="300"
              cy="300"
              r="195"
              stroke="#7C3AED"
              strokeWidth="1.5"
              strokeDasharray="60 30 15 30"
              strokeOpacity="0.3"
            />
            <circle cx="300" cy="105" r="3" fill="#E9D5FF" filter="url(#softGlow)" />
            <circle cx="300" cy="495" r="4" fill="#A855F7" filter="url(#softGlow)" />
          </g>

          {/* Ambient Particles */}
          <circle cx="210" cy="180" r="2" fill="#E9D5FF" className="svg-particle-1" filter="url(#softGlow)" />
          <circle cx="390" cy="160" r="2.5" fill="#A855F7" className="svg-particle-2" filter="url(#softGlow)" />
          <circle cx="160" cy="360" r="2" fill="#C084FC" className="svg-particle-3" filter="url(#softGlow)" />
          <circle cx="440" cy="340" r="2.2" fill="#E9D5FF" className="svg-particle-1" filter="url(#softGlow)" />

          {/* BACK HAIR (Volume behind shoulders) */}
          <path
            d="M210 250 C180 320 185 410 215 450 C230 430 250 400 240 340 Z"
            fill="url(#hairBase)"
          />
          <path
            d="M390 250 C420 320 415 410 385 450 C370 430 350 400 360 340 Z"
            fill="url(#hairBase)"
          />
          {/* Main Back Hair Canopy */}
          <path
            d="M215 220 C200 130 395 130 385 220 C420 280 430 400 390 460 C370 410 360 370 360 340 C330 360 270 360 240 340 C240 370 230 410 210 460 C170 400 180 280 215 220 Z"
            fill="url(#hairBase)"
          />

          {/* HEADPHONE HEADBAND */}
          <path
            d="M218 215 C215 130 385 130 382 215"
            stroke="#161224"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <path
            d="M218 215 C215 130 385 130 382 215"
            stroke="#A855F7"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#softGlow)"
          />

          {/* CHARACTER BODY / HOODIE */}
          {/* Shoulders & Torso */}
          <path
            d="M190 440 C200 375 235 345 270 340 L330 340 C365 345 400 375 410 440 L430 495 C430 520 170 520 170 495 Z"
            fill="url(#hoodieBody)"
            stroke="#2E2442"
            strokeWidth="2"
          />
          {/* Purple Hoodie Accents & V-neck */}
          <path
            d="M260 340 L300 420 L340 340 Z"
            fill="#14101E"
            stroke="url(#hoodieTrim)"
            strokeWidth="2"
          />
          {/* Hoodie drawstrings */}
          <path
            d="M285 405 C282 430 286 455 284 470"
            stroke="#A855F7"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#softGlow)"
          />
          <circle cx="284" cy="472" r="3" fill="#C084FC" />
          <path
            d="M315 405 C318 430 314 455 316 470"
            stroke="#A855F7"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#softGlow)"
          />
          <circle cx="316" cy="472" r="3" fill="#C084FC" />

          {/* NECK */}
          <path
            d="M275 300 C275 330 325 330 325 300 Z"
            fill="url(#skin)"
          />
          {/* Soft shadow under chin */}
          <path
            d="M278 300 C290 312 310 312 322 300 Z"
            fill="#E0A795"
            opacity="0.6"
          />

          {/* FACE */}
          <path
            d="M245 225 C245 295 280 322 300 322 C320 322 355 295 355 225 C355 175 245 175 245 225 Z"
            fill="url(#skin)"
          />

          {/* Cute Soft Cheek Blush */}
          <ellipse cx="265" cy="265" rx="12" ry="6" fill="#FF8BA7" opacity="0.45" />
          <ellipse cx="335" cy="265" rx="12" ry="6" fill="#FF8BA7" opacity="0.45" />

          {/* NOSE & CONFIDENT SMILE */}
          <path d="M300 262 L298 268 L302 268" stroke="#D99B8B" strokeWidth="1.2" strokeLinecap="round" />
          <path
            d="M292 282 C297 288 303 288 308 282"
            stroke="#9E4D64"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />

          {/* ANIME EYES WITH BLINK ANIMATION */}
          <g className="svg-eye-blink">
            {/* Left Eye */}
            <g transform="translate(262, 238)">
              {/* Eye shape / Sclera */}
              <ellipse cx="10" cy="10" rx="13" ry="12" fill="#FFFFFF" />
              {/* Iris */}
              <ellipse cx="10" cy="10" rx="9" ry="10" fill="#7C3AED" />
              <ellipse cx="10" cy="11" rx="7" ry="8" fill="#A855F7" />
              <circle cx="10" cy="11" r="4.5" fill="#1C112E" />
              {/* Highlights / Catchlights */}
              <circle cx="7.5" cy="7.5" r="3" fill="#FFFFFF" />
              <circle cx="12.5" cy="13.5" r="1.5" fill="#FFFFFF" />
              <circle cx="12" cy="7.5" r="1" fill="#E9D5FF" />
              {/* Upper Eyelash & Crease */}
              <path
                d="M-3 6 C2 0 18 0 23 6"
                stroke="#1B1228"
                strokeWidth="3.2"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M1 1 C6 -3 14 -3 19 1"
                stroke="#7C3AED"
                strokeWidth="1.2"
                strokeLinecap="round"
                fill="none"
              />
              {/* Lower Lash */}
              <path
                d="M3 19 C8 21 13 21 17 19"
                stroke="#8A5B9E"
                strokeWidth="1.2"
                strokeLinecap="round"
                fill="none"
              />
            </g>

            {/* Right Eye */}
            <g transform="translate(318, 238)">
              {/* Eye shape / Sclera */}
              <ellipse cx="10" cy="10" rx="13" ry="12" fill="#FFFFFF" />
              {/* Iris */}
              <ellipse cx="10" cy="10" rx="9" ry="10" fill="#7C3AED" />
              <ellipse cx="10" cy="11" rx="7" ry="8" fill="#A855F7" />
              <circle cx="10" cy="11" r="4.5" fill="#1C112E" />
              {/* Highlights */}
              <circle cx="7.5" cy="7.5" r="3" fill="#FFFFFF" />
              <circle cx="12.5" cy="13.5" r="1.5" fill="#FFFFFF" />
              <circle cx="12" cy="7.5" r="1" fill="#E9D5FF" />
              {/* Upper Eyelash */}
              <path
                d="M-3 6 C2 0 18 0 23 6"
                stroke="#1B1228"
                strokeWidth="3.2"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M1 1 C6 -3 14 -3 19 1"
                stroke="#7C3AED"
                strokeWidth="1.2"
                strokeLinecap="round"
                fill="none"
              />
              {/* Lower Lash */}
              <path
                d="M3 19 C8 21 13 21 17 19"
                stroke="#8A5B9E"
                strokeWidth="1.2"
                strokeLinecap="round"
                fill="none"
              />
            </g>

            {/* Stylish Eyebrows */}
            <path
              d="M260 232 C268 226 280 227 288 232"
              stroke="#58317A"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M312 232 C320 227 332 226 340 232"
              stroke="#58317A"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
            />
          </g>

          {/* FRONT HAIR & BANGS */}
          {/* Forehead Bangs */}
          <path
            d="M245 205 C260 225 275 235 285 228 C295 240 310 240 320 225 C330 238 345 230 355 205 C360 170 240 170 245 205 Z"
            fill="url(#hairBase)"
          />
          {/* Silky Hair Strands Left & Right with gentle swaying keyframes */}
          <g className="svg-hair-left">
            <path
              d="M242 210 C235 250 230 290 235 340 C238 345 245 345 245 335 C242 290 246 250 252 215 Z"
              fill="url(#hairBase)"
            />
            <path
              d="M240 230 C236 270 234 300 237 330"
              stroke="url(#hairHighlight)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>

          <g className="svg-hair-right">
            <path
              d="M358 210 C365 250 370 290 365 340 C362 345 355 345 355 335 C358 290 354 250 348 215 Z"
              fill="url(#hairBase)"
            />
            <path
              d="M360 230 C364 270 366 300 363 330"
              stroke="url(#hairHighlight)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>

          {/* Glossy Hair Crown Arc */}
          <path
            d="M255 185 C285 172 315 172 345 185"
            stroke="url(#hairHighlight)"
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* HEADPHONE EAR CUPS (Futuristic Neon Rings) */}
          {/* Left Ear Cup */}
          <g transform="translate(210, 225)">
            <rect x="0" y="0" width="18" height="38" rx="9" fill="#1A1526" stroke="#2D223F" strokeWidth="2" />
            <circle cx="9" cy="19" r="6" fill="#A855F7" filter="url(#softGlow)" />
            <circle cx="9" cy="19" r="3" fill="#FFFFFF" />
          </g>
          {/* Right Ear Cup */}
          <g transform="translate(372, 225)">
            <rect x="0" y="0" width="18" height="38" rx="9" fill="#1A1526" stroke="#2D223F" strokeWidth="2" />
            <circle cx="9" cy="19" r="6" fill="#A855F7" filter="url(#softGlow)" />
            <circle cx="9" cy="19" r="3" fill="#FFFFFF" />
          </g>

          {/* DESK SURFACE (Glassmorphism & Neon Edge) */}
          <path
            d="M80 500 L520 500 L540 560 L60 560 Z"
            fill="#100E17"
            fillOpacity="0.85"
          />
          {/* Purple neon desk edge */}
          <line
            x1="80"
            y1="500"
            x2="520"
            y2="500"
            stroke="#A855F7"
            strokeWidth="2.5"
            filter="url(#softGlow)"
          />

          {/* LAPTOP SCREEN LIGHT BEAM (Projects upwards onto character) */}
          <polygon
            points="240,490 360,490 395,330 205,330"
            fill="url(#screenBeamGrad)"
            className="svg-screen-beam"
          />

          {/* LAPTOP AND HANDS */}
          {/* Laptop Base & Keyboard */}
          <polygon
            points="220,500 380,500 405,535 195,535"
            fill="url(#laptopBody)"
            stroke="#3B2F54"
            strokeWidth="1.5"
          />
          {/* Glowing Keyboard Area */}
          <polygon
            points="232,504 368,504 388,526 212,526"
            fill="#151222"
            stroke="url(#keyboardGlow)"
            strokeWidth="1"
          />
          {/* Key row indicators */}
          <line x1="230" y1="510" x2="370" y2="510" stroke="#7C3AED" strokeWidth="1" strokeDasharray="5 3" opacity="0.7" />
          <line x1="225" y1="516" x2="375" y2="516" stroke="#A855F7" strokeWidth="1" strokeDasharray="6 3" opacity="0.8" />
          <line x1="220" y1="522" x2="380" y2="522" stroke="#C084FC" strokeWidth="1" strokeDasharray="8 4" opacity="0.85" />

          {/* Developer Girl Hands on Keyboard */}
          {/* Left Hand */}
          <ellipse cx="248" cy="508" rx="14" ry="7" fill="url(#skin)" transform="rotate(-10, 248, 508)" />
          {/* Right Hand */}
          <ellipse cx="352" cy="508" rx="14" ry="7" fill="url(#skin)" transform="rotate(10, 352, 508)" />

          {/* Laptop Screen Display (Facing character, backlit) */}
          <g className="svg-screen-glow">
            {/* Screen Lid backing */}
            <polygon
              points="235,492 365,492 355,420 245,420"
              fill="#1F182F"
              stroke="#A855F7"
              strokeWidth="2"
            />
            {/* Glowing Screen Content / Code Lines */}
            <polygon
              points="240,488 360,488 352,425 248,425"
              fill="#120D1E"
            />
            {/* Animated code stream representation */}
            <line x1="256" y1="435" x2="295" y2="435" stroke="#A855F7" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="302" y1="435" x2="335" y2="435" stroke="#61DAFB" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="256" y1="445" x2="340" y2="445" stroke="#E9D5FF" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
            <line x1="262" y1="455" x2="310" y2="455" stroke="#C084FC" strokeWidth="2" strokeLinecap="round" />
            <line x1="262" y1="465" x2="345" y2="465" stroke="#34D399" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
            <line x1="256" y1="475" x2="290" y2="475" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
            {/* Dev Logo on Laptop Lid center */}
            <circle cx="300" cy="454" r="5" fill="#A855F7" filter="url(#softGlow)" />
            <text x="300" y="457" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#FFFFFF">&lt;/&gt;</text>
          </g>

          {/* COFFEE MUG ON DESK WITH STEAM */}
          <g transform="translate(450, 485)">
            {/* Mug Body */}
            <rect x="0" y="0" width="24" height="28" rx="4" fill="#251B38" stroke="#A855F7" strokeWidth="1.5" />
            {/* Handle */}
            <path d="M24 6 C30 6 30 20 24 20" stroke="#A855F7" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            {/* Heart or Code icon on mug */}
            <path d="M8 12 L12 16 L16 12" stroke="#C084FC" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            {/* Steam curves */}
            <path
              d="M7 -4 C5 -10 10 -15 7 -22"
              stroke="#E9D5FF"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              className="svg-steam-1"
            />
            <path
              d="M15 -2 C18 -8 13 -14 16 -20"
              stroke="#A855F7"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              className="svg-steam-2"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default GirlIllustration;
