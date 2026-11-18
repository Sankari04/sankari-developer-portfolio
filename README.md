# Sankari — Modern Developer Portfolio 💜✨

A modern, responsive, and visually striking personal portfolio website for **Sankari**, an MCA student and aspiring software developer. Built with **React.js, Vite, modern CSS3, and JavaScript**, featuring an anime-inspired developer girl illustration, glassmorphism cards, glowing purple gradients, interactive project showcases, and a downloadable resume.

---

## 🌟 Live Demo & Theme

- **Theme Palette:** Pure Black (`#050505`), Dark Charcoal (`#101014`), Neon Purple (`#A855F7`), and Deep Violet (`#7C3AED`).
- **Typography:** `Plus Jakarta Sans`, `Inter`, `JetBrains Mono`.
- **Target Role:** Software Developer / Frontend / Full-Stack Engineer.

---

## 🚀 Key Features & Sections

1. **Fixed Navigation Bar:**
   - Smooth navigation linking to `#home`, `#about`, `#skills`, `#education`, `#experience`, `#projects`, `#certifications`, and `#contact`.
   - Dynamic scroll-spy indicator showing the current active section.
   - Animated purple glowing **"Resume"** button that directly triggers resume download.
   - Fully responsive slide-in mobile navigation drawer.

2. **Split-Screen Hero Section:**
   - **Left:** Welcome badge, dynamic role typing animation (*Aspiring Software Developer*, *MCA Student @ Fatima College*, *Frontend & React.js Developer*, *UI/UX Enthusiast*), introduction, CTA buttons (*View My Projects*, *Download Resume*), and social links (GitHub, LinkedIn, Email).
   - **Right:** Custom **Animated Anime Developer Girl Illustration** seated with a glowing laptop, animated hair sway, blinking eyes, glowing headphones, laptop light beam illuminating her face/keyboard, coffee mug with steam, ambient rotating tech orbit rings, and floating interactive badges (*React.js*, *Figma*, *MCA*, *Code*). Includes interactive 3D mouse tilt depth effect!

3. **About Me:**
   - Highlights Sankari's transition from **B.Sc. Mathematics** to **Master of Computer Applications (MCA)** at Fatima College, Madurai.
   - 4 glassmorphic information cards:
     - **Degree:** MCA
     - **Graduation:** 2027
     - **Location:** Madurai, Tamil Nadu
     - **Interest:** Software Development
   - Core strengths highlighting analytical problem solving, UI/UX empathy, and clean code principles.

4. **Technical Skills:**
   - Categorized and filterable skill grid (*All*, *Languages*, *Frontend*, *Database*, *Tools*).
   - **Programming Languages:** Java, Python.
   - **Frontend:** HTML, CSS, JavaScript, React.js.
   - **Database:** MySQL.
   - **Tools:** Git, GitHub, VS Code, Figma.
   - Focus tags for each skill (no arbitrary fake percentages).

5. **Academic Education:**
   - Modern vertical timeline with glowing nodes and purple gradient track.
   - **MCA – Master of Computer Applications:** Fatima College, Madurai (2025 – 2027) | **83%**
   - **B.Sc. Mathematics:** Fatima College, Madurai (Completed: 2025) | **74%**
   - Coursework tags and degree highlights.

6. **Internship Experience:**
   - **Infosys Springboard** (May 2025) — *UI/UX Design Intern*.
   - **Campus Event Hub** Project Details: Admin & User UI design in Figma and conversion to responsive HTML, CSS, and JavaScript.
   - **Figma Interactive Preview Card:** Live view toggle between *Student Portal* and *Admin Dashboard*, design system token swatches, and wireframe cards.

7. **Featured Projects:**
   - Modern project cards with glowing borders, hover lift, tech badges, and GitHub buttons.
   - **Doctor Appointment Management System** (React.js, Node.js, Express, MySQL) — 3-tier modules for Patients, Doctors, Admin, real-time queue tokens, and JWT authentication.
     - Repo: [github.com/Sankari04/Doctor_appointment_system](https://github.com/Sankari04/Doctor_appointment_system)
   - **E-Commerce Application** (HTML5, CSS3, JavaScript) — Product catalog, category filtering, and shopping cart logic.
     - Repo: [github.com/Sankari04/Shopping-site-Mini-project](https://github.com/Sankari04/Shopping-site-Mini-project.git)
   - **Campus Event Hub** (Figma & Frontend) — UI/UX case study and interactive prototypes.

8. **Certifications:**
   - **AI Fundamentals:** IBM SkillsBuild (May 2026).
   - **Software Testing:** NPTEL (March 2026).

9. **Let's Connect (Contact Section):**
   - Direct click-to-copy email (`nsankari0910@gmail.com`), LinkedIn, GitHub, and location cards.
   - Functional contact form (Name, Email, Subject, Message) with client-side validation and automated `mailto:` generation.

10. **Interactive Resume Modal & Download:**
    - Downloadable PDF stored locally at `/public/Sankari_Resume.pdf`.
    - Modal preview allowing visitors to view and inspect her complete resume on desktop and mobile.

---

## 🛠️ Project Structure

```text
sankari-developer-portfolio/
├── index.html                  # HTML entry point with Google Fonts & SEO meta
├── package.json                # Project dependencies and npm scripts
├── vite.config.js              # Vite configuration
├── vercel.json                 # Vercel deployment configuration
├── README.md                   # Complete documentation & deployment guide
├── public/
│   ├── favicon.svg             # Custom neon purple developer logo
│   └── Sankari_Resume.pdf      # Complete PDF resume asset
└── src/
    ├── main.jsx                # React root mount
    ├── App.jsx                 # App root component
    ├── App.css                 # Base application styles
    ├── index.css               # Global theme variables, reset & utilities
    ├── components/
    │   ├── Navbar.jsx          # Fixed navigation with active spy & resume trigger
    │   ├── Hero.jsx            # Split hero with typing roles & CTA
    │   ├── GirlIllustration.jsx# Custom vector anime developer illustration
    │   ├── About.jsx           # About me section with 4 info cards
    │   ├── Skills.jsx          # Filterable skills grid with brand icons
    │   ├── Education.jsx       # Vertical timeline for MCA & B.Sc. Math
    │   ├── Experience.jsx      # Infosys Springboard internship & Figma mockup
    │   ├── Projects.jsx        # Project gallery with custom SVG banners
    │   ├── Certifications.jsx  # IBM and NPTEL certificate cards
    │   ├── Contact.jsx         # Contact form & social cards
    │   ├── Footer.jsx          # Modern footer with copyright 2026
    │   ├── BackgroundParticles.jsx # Canvas interactive ambient particles
    │   ├── ResumeModal.jsx     # Interactive curriculum vitae modal
    │   └── Icons.jsx           # Vector SVG icons for GitHub, LinkedIn, Figma
    ├── data/
    │   └── portfolioData.js    # Centralized portfolio data
    └── styles/
        ├── variables.css       # Color tokens, fonts & spacing
        ├── animations.css      # Pulse, glow, hair sway, blinking & hover effects
        ├── Navbar.css
        ├── Hero.css
        ├── GirlIllustration.css
        ├── About.css
        ├── Skills.css
        ├── Education.css
        ├── Experience.css
        ├── Projects.css
        ├── Certifications.css
        ├── Contact.css
        ├── Footer.css
        └── ResumeModal.css

&copy; 2026 Sankari. Built with modern web technologies.
