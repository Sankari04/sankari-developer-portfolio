// src/data/portfolioData.js

export const personalInfo = {
  name: "Sankari",
  title: "Aspiring Software Developer | MCA Student",
  typingRoles: [
    "Aspiring Software Developer",
    "MCA Student @ Fatima College",
    "Frontend & React.js Developer",
    "UI/UX Design Enthusiast",
    "Problem Solver with Math Background"
  ],
  introduction:
    "I'm an MCA student passionate about software development, web technologies, and building practical applications. I enjoy turning ideas into functional and user-friendly digital experiences.",
  email: "nsankari0910@gmail.com",
  github: "https://github.com/Sankari04",
  linkedin: "https://linkedin.com/in/sankari10",
  location: "Madurai, Tamil Nadu, India",
  resumePath: "/Sankari_Resume.pdf",
  status: "Available for Software Developer Internships & Full-time Roles",
  year: 2026
};

export const aboutData = {
  title: "About Me",
  paragraph1:
    "I'm Sankari, currently pursuing my Master of Computer Applications at Fatima College, Madurai. I have a background in Mathematics and an interest in programming, web development, and software engineering. I enjoy learning new technologies and developing applications that solve real-world problems.",
  paragraph2:
    "My journey began with analytical problem-solving in Mathematics, which naturally transitioned into structured algorithmic thinking and clean software design. I love bridging technical logic with clean user interfaces that feel intuitive and responsive.",
  infoCards: [
    {
      label: "Degree",
      value: "MCA",
      subtext: "Master of Computer Applications",
      icon: "GraduationCap"
    },
    {
      label: "Graduation",
      value: "2027",
      subtext: "Fatima College, Madurai",
      icon: "Calendar"
    },
    {
      label: "Location",
      value: "Madurai, Tamil Nadu",
      subtext: "Open to Relocate / Remote",
      icon: "MapPin"
    },
    {
      label: "Interest",
      value: "Software Development",
      subtext: "Web & Full-Stack Tech",
      icon: "Code"
    }
  ],
  strengths: [
    {
      title: "Strong Analytical Thinking",
      description: "My B.Sc. in Mathematics provides deep logic, quantitative reasoning, and algorithmic problem-solving abilities."
    },
    {
      title: "Modern UI/UX Empathy",
      description: "Hands-on experience with Figma and modern design principles to craft human-centered digital experiences."
    },
    {
      title: "Clean Code & Scalability",
      description: "Committed to writing maintainable, modular JavaScript and React components with neat folder structures."
    }
  ]
};

export const skillsData = {
  categories: [
    { id: "all", label: "All Skills" },
    { id: "languages", label: "Languages" },
    { id: "frontend", label: "Frontend" },
    { id: "database", label: "Database" },
    { id: "tools", label: "Tools" }
  ],
  items: [
    {
      name: "Java",
      category: "languages",
      group: "Programming Languages",
      levelTag: "Core Language",
      description: "OOP concepts, Collections Framework, Multithreading & Exception Handling.",
      tags: ["OOP", "Collections", "Classes", "Methods"],
      icon: "Coffee",
      accent: "#ED8B00"
    },
    {
      name: "Python",
      category: "languages",
      group: "Programming Languages",
      levelTag: "Scripting & Logic",
      description: "Data processing, algorithms, automation, and logical problem solving.",
      tags: ["Data Structures", "Scripting", "Logic", "File I/O"],
      icon: "FileCode2",
      accent: "#3776AB"
    },
    {
      name: "HTML",
      category: "frontend",
      group: "Frontend Development",
      levelTag: "Semantic Markup",
      description: "Accessible, SEO-friendly HTML5 markup with responsive viewport structures.",
      tags: ["HTML5", "Accessibility", "Forms", "Semantic Tags"],
      icon: "Code2",
      accent: "#E34F26"
    },
    {
      name: "CSS",
      category: "frontend",
      group: "Frontend Development",
      levelTag: "Modern Styling",
      description: "Flexbox, CSS Grid, media queries, keyframe animations, glassmorphism.",
      tags: ["Flexbox", "CSS Grid", "Animations", "Glassmorphism"],
      icon: "Palette",
      accent: "#264DE4"
    },
    {
      name: "JavaScript",
      category: "frontend",
      group: "Frontend Development",
      levelTag: "ES6+ Core",
      description: "DOM manipulation, asynchronous fetch APIs, event loops, and array methods.",
      tags: ["ES6+", "Async/Await", "DOM", "State Logic"],
      icon: "Braces",
      accent: "#F7DF1E"
    },
    {
      name: "React.js",
      category: "frontend",
      group: "Frontend Development",
      levelTag: "Component Architecture",
      description: "Functional components, custom hooks, props, state management, and modern routing.",
      tags: ["Hooks", "Virtual DOM", "Components", "Vite"],
      icon: "Atom",
      accent: "#61DAFB"
    },
    {
      name: "MySQL",
      category: "database",
      group: "Database Systems",
      levelTag: "Relational DB",
      description: "Relational database schema modeling, normalized tables, complex JOINs, indexing.",
      tags: ["RDBMS", "SQL Queries", "JOINs", "Foreign Keys"],
      icon: "Database",
      accent: "#00758F"
    },
    {
      name: "Git",
      category: "tools",
      group: "Developer Tools",
      levelTag: "Version Control",
      description: "Branching, merging, commit history management, and resolving conflicts.",
      tags: ["Version Control", "Branching", "CLI", "Diffs"],
      icon: "GitBranch",
      accent: "#F05032"
    },
    {
      name: "GitHub",
      category: "tools",
      group: "Developer Tools",
      levelTag: "Collaboration",
      description: "Repository hosting, pull requests, open source workflows, deployment tracking.",
      tags: ["Repositories", "Pull Requests", "CI/CD", "Pages"],
      icon: "Github",
      accent: "#A855F7"
    },
    {
      name: "VS Code",
      category: "tools",
      group: "Developer Tools",
      levelTag: "Primary IDE",
      description: "Customized debugging workflows, extensions, terminal integration, snippet shortcuts.",
      tags: ["Code Editor", "Extensions", "Debugger", "Emmet"],
      icon: "Terminal",
      accent: "#007ACC"
    },
    {
      name: "Figma",
      category: "tools",
      group: "Developer Tools",
      levelTag: "UI/UX Design",
      description: "High-fidelity wireframes, interactive user journeys, component libraries & prototypes.",
      tags: ["UI/UX", "Wireframing", "Prototypes", "Design Systems"],
      icon: "Figma",
      accent: "#A259FF"
    }
  ]
};

export const educationData = [
  {
    degree: "MCA – Master of Computer Applications",
    institution: "Fatima College, Madurai",
    affiliation: "Affiliated to Madurai Kamaraj University",
    duration: "2025 – 2027",
    status: "Currently Pursuing (Second Year)",
    score: "83%",
    scoreLabel: "Aggregate Percentage",
    description:
      "Comprehensive curriculum focusing on software architecture, advanced database management, web application engineering, object-oriented software design, and algorithm analysis.",
    highlights: [
      "Advanced Java & Web Programming",
      "Database Systems & Query Optimization",
      "Software Engineering & Agile Methodologies",
      "Data Structures & Object-Oriented Analysis"
    ],
    featured: true
  },
  {
    degree: "B.Sc. Mathematics",
    institution: "Fatima College, Madurai",
    affiliation: "Affiliated to Madurai Kamaraj University",
    duration: "Completed: 2025",
    status: "Graduated with Distinction / First Class",
    score: "74%",
    scoreLabel: "Graduation Percentage",
    description:
      "Cultivated rigorous mathematical analysis, logical deduction, discrete algorithms, numerical techniques, and statistical modeling that empower efficient programming problem-solving.",
    highlights: [
      "Discrete Mathematics & Graph Theory",
      "Operations Research & Optimization",
      "Numerical Methods & Computational Logic",
      "Probability & Statistical Inference"
    ],
    featured: false
  }
];

export const experienceData = {
  company: "Infosys Springboard",
  role: "UI/UX Design Intern",
  duration: "May 2025",
  type: "Internship",
  location: "Virtual / Remote",
  project: "Campus Event Hub",
  summary:
    "Completed a structured UI/UX design and frontend conversion internship. Collaborated on defining user journeys, designing wireframes, and turning design mockups into working web interfaces.",
  bulletPoints: [
    "Designed 2 distinct user interfaces (Admin Dashboard and Student/User Portal) using Figma with consistent visual hierarchy.",
    "Created user-friendly layouts focusing on usability, accessibility, clear call-to-actions, and seamless navigation flows.",
    "Converted Figma designs into responsive frontend pages using HTML, CSS, and modern JavaScript with smooth user interactions.",
    "Conducted design audits to optimize user touchpoints for event discovery, RSVP workflows, and administrator event creation."
  ],
  figmaPreview: {
    title: "Campus Event Hub — Design System & Layout Preview",
    frames: [
      {
        name: "User Portal View",
        purpose: "Event Discovery, Filters, Registration & Calendar Sync",
        color: "#A855F7",
        features: ["Live Event Feed", "Category Pills", "1-Click RSVP", "Ticket QR View"]
      },
      {
        name: "Admin Control Center",
        purpose: "Event Publishing, Attendee Roster & Real-time Analytics",
        color: "#7C3AED",
        features: ["Event Creator Modal", "Attendance Analytics", "CSV Export", "Permission Controls"]
      }
    ],
    designTokens: [
      { name: "Primary Violet", hex: "#7C3AED" },
      { name: "Neon Purple", hex: "#A855F7" },
      { name: "Dark Charcoal", hex: "#101014" },
      { name: "Pure Black", hex: "#050505" }
    ]
  }
};

export const projectsData = [
  {
    id: "doctor-appointment-system",
    title: "Doctor Appointment Management System",
    category: "Full Stack Application",
    technologies: ["React.js", "Node.js", "Express", "MySQL", "JWT Auth", "REST API"],
    description:
      "A comprehensive full-stack healthcare scheduling web application engineered to streamline patient consultations, clinic workflow, and administrative control.",
    keyPoints: [
      "Developed 3 dedicated modules with role-based access for Patients, Doctors, and Administrators.",
      "Integrated instant appointment booking with automated queue token generation for queue management.",
      "Built medication tracking and prescription records history for follow-up consultations.",
      "Secured application endpoints and session storage using JSON Web Tokens (JWT) and encrypted password hashing."
    ],
    github: "https://github.com/Sankari04/Doctor_appointment_system",
    demo: null,
    status: "Completed & Tested",
    featured: true,
    visualType: "medical"
  },
  {
    id: "ecommerce-application",
    title: "E-Commerce Web Application",
    category: "Frontend & Web Store",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Local State"],
    description:
      "A responsive, modern e-commerce storefront providing seamless browsing, interactive product discovery, dynamic shopping cart management, and checkout simulation.",
    keyPoints: [
      "Developed an interactive product catalog with category filtering and instant price sorting.",
      "Engineered dynamic shopping cart logic with add, remove, quantity adjustments, and auto subtotal calculation.",
      "Crafted mobile-friendly responsive layouts with CSS Grid, Flexbox, and micro-interactions.",
      "Integrated product modal quick-views and state persistence for seamless customer journeys."
    ],
    github: "https://github.com/Sankari04/Shopping-site-Mini-project.git",
    demo: null,
    status: "Completed",
    featured: true,
    visualType: "ecommerce"
  },
  {
    id: "campus-event-hub",
    title: "Campus Event Hub (Figma & Frontend)",
    category: "UI/UX & Web Prototype",
    technologies: ["Figma", "HTML5", "CSS3", "JavaScript", "UI Systems"],
    description:
      "The practical project engineered during the Infosys Springboard internship. Designed high-fidelity prototypes and transformed them into interactive web experiences.",
    keyPoints: [
      "Engineered dual interfaces for Students and Campus Event Organizers.",
      "Focused on high accessibility, intuitive navigation trees, and rapid RSVP mechanisms.",
      "Converted custom Figma vector components directly into clean HTML5/CSS3 modules."
    ],
    github: "https://github.com/Sankari04",
    demo: null,
    status: "Internship Capstone",
    featured: false,
    visualType: "figma"
  }
];

export const certificationsData = [
  {
    id: "ibm-ai-fundamentals",
    title: "AI Fundamentals",
    issuer: "IBM SkillsBuild",
    issueDate: "May 2026",
    badge: "Verified Credential",
    icon: "Cpu",
    accent: "#054ADA",
    summary:
      "Comprehensive training covering fundamental artificial intelligence concepts, machine learning paradigms, neural network overviews, and AI ethics in modern software development.",
    skillsLearned: [
      "Artificial Intelligence Core Principles",
      "Supervised vs Unsupervised Learning",
      "Natural Language & Computer Vision Basics",
      "Ethical AI & Data Privacy"
    ]
  },
  {
    id: "nptel-software-testing",
    title: "Software Testing",
    issuer: "NPTEL",
    issueDate: "March 2026",
    badge: "National Certification",
    icon: "ShieldCheck",
    accent: "#A855F7",
    summary:
      "Rigorous academic certification on structured software quality assurance, test case generation methods, boundary value analysis, integration testing, and bug tracking life cycles.",
    skillsLearned: [
      "Black-Box & White-Box Testing",
      "Boundary Value & Equivalence Partitioning",
      "Unit & Integration Test Suites",
      "Software Reliability & Defect Tracking"
    ]
  }
];
