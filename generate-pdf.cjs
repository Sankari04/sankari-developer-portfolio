// generate-pdf.js
// Generates a valid PDF 1.4 file for Sankari's resume without external dependencies
const fs = require('fs');
const path = require('path');

function createPdf(outputPath) {
  const objects = [];
  let byteOffset = 0;
  const offsets = [];

  function addObject(content) {
    const objNum = objects.length + 1;
    offsets.push(byteOffset);
    const str = `${objNum} 0 obj\n${content}\nendobj\n`;
    objects.push(str);
    byteOffset += Buffer.byteLength(str, 'utf8');
    return objNum;
  }

  // Pre-calculate header length
  const header = '%PDF-1.4\n%\xE2\xE3\xCF\xD3\n';
  byteOffset = Buffer.byteLength(header, 'latin1');

  // We will build streams of PDF instructions
  // Page size: Letter 612 x 792 pt
  // Margins: 40pt left, 40pt right
  const lines = [
    // Header
    { type: 'font', font: 'F2', size: 22 },
    { type: 'color', r: 0.1, g: 0.1, b: 0.12 },
    { type: 'text', x: 40, y: 750, text: 'SANKARI' },

    { type: 'font', font: 'F2', size: 12 },
    { type: 'color', r: 0.45, g: 0.18, b: 0.85 }, // Purple accent
    { type: 'text', x: 40, y: 732, text: 'Aspiring Software Developer | MCA Student' },

    { type: 'font', font: 'F1', size: 9 },
    { type: 'color', r: 0.35, g: 0.35, b: 0.4 },
    { type: 'text', x: 40, y: 717, text: 'Madurai, Tamil Nadu, India  |  nsankari0910@gmail.com  |  linkedin.com/in/sankari10  |  github.com/Sankari04' },

    // Line rule
    { type: 'line', x1: 40, y1: 708, x2: 572, y2: 708, color: [0.7, 0.4, 0.95], width: 1.5 },

    // PROFESSIONAL SUMMARY
    { type: 'font', font: 'F2', size: 11 },
    { type: 'color', r: 0.45, g: 0.18, b: 0.85 },
    { type: 'text', x: 40, y: 692, text: 'PROFESSIONAL SUMMARY' },

    { type: 'font', font: 'F1', size: 9 },
    { type: 'color', r: 0.15, g: 0.15, b: 0.2 },
    { type: 'text', x: 40, y: 677, text: 'MCA student with a strong mathematics background and deep interest in software engineering, frontend' },
    { type: 'text', x: 40, y: 664, text: 'technologies, and full-stack development. Experienced in designing intuitive user interfaces and building' },
    { type: 'text', x: 40, y: 651, text: 'scalable web applications using React.js, Node.js, and MySQL. Passionate about solving real-world problems.' },

    // EDUCATION
    { type: 'font', font: 'F2', size: 11 },
    { type: 'color', r: 0.45, g: 0.18, b: 0.85 },
    { type: 'text', x: 40, y: 633, text: 'EDUCATION' },

    { type: 'font', font: 'F2', size: 10 },
    { type: 'color', r: 0.1, g: 0.1, b: 0.1 },
    { type: 'text', x: 40, y: 618, text: 'Master of Computer Applications (MCA)' },
    { type: 'font', font: 'F1', size: 9 },
    { type: 'color', r: 0.3, g: 0.3, b: 0.35 },
    { type: 'text', x: 400, y: 618, text: '2025 - 2027 | Score: 83%' },
    { type: 'text', x: 40, y: 605, text: 'Fatima College, Madurai (Affiliated to Madurai Kamaraj University)' },
    { type: 'text', x: 40, y: 593, text: 'Key Focus: Software Engineering, Web Technologies, Database Systems, Object-Oriented Programming' },

    { type: 'font', font: 'F2', size: 10 },
    { type: 'color', r: 0.1, g: 0.1, b: 0.1 },
    { type: 'text', x: 40, y: 577, text: 'Bachelor of Science in Mathematics (B.Sc.)' },
    { type: 'font', font: 'F1', size: 9 },
    { type: 'color', r: 0.3, g: 0.3, b: 0.35 },
    { type: 'text', x: 400, y: 577, text: 'Completed: 2025 | Score: 74%' },
    { type: 'text', x: 40, y: 564, text: 'Fatima College, Madurai (Affiliated to Madurai Kamaraj University)' },
    { type: 'text', x: 40, y: 552, text: 'Key Focus: Discrete Mathematics, Mathematical Modeling, Numerical Methods, Logical Analysis' },

    // TECHNICAL SKILLS
    { type: 'font', font: 'F2', size: 11 },
    { type: 'color', r: 0.45, g: 0.18, b: 0.85 },
    { type: 'text', x: 40, y: 534, text: 'TECHNICAL SKILLS' },

    { type: 'font', font: 'F2', size: 9.5 },
    { type: 'color', r: 0.1, g: 0.1, b: 0.1 },
    { type: 'text', x: 40, y: 519, text: 'Programming Languages:' },
    { type: 'font', font: 'F1', size: 9 },
    { type: 'color', r: 0.2, g: 0.2, b: 0.25 },
    { type: 'text', x: 170, y: 519, text: 'Java, Python, JavaScript (ES6+)' },

    { type: 'font', font: 'F2', size: 9.5 },
    { type: 'color', r: 0.1, g: 0.1, b: 0.1 },
    { type: 'text', x: 40, y: 504, text: 'Frontend Technologies:' },
    { type: 'font', font: 'F1', size: 9 },
    { type: 'color', r: 0.2, g: 0.2, b: 0.25 },
    { type: 'text', x: 170, y: 504, text: 'HTML5, CSS3, JavaScript, React.js, Responsive Design, CSS Animations' },

    { type: 'font', font: 'F2', size: 9.5 },
    { type: 'color', r: 0.1, g: 0.1, b: 0.1 },
    { type: 'text', x: 40, y: 489, text: 'Databases & Backend:' },
    { type: 'font', font: 'F1', size: 9 },
    { type: 'color', r: 0.2, g: 0.2, b: 0.25 },
    { type: 'text', x: 170, y: 489, text: 'MySQL (Relational Database Design, Queries, Joins), Node.js, Express.js' },

    { type: 'font', font: 'F2', size: 9.5 },
    { type: 'color', r: 0.1, g: 0.1, b: 0.1 },
    { type: 'text', x: 40, y: 474, text: 'Developer Tools:' },
    { type: 'font', font: 'F1', size: 9 },
    { type: 'color', r: 0.2, g: 0.2, b: 0.25 },
    { type: 'text', x: 170, y: 474, text: 'Git, GitHub, VS Code, Figma (UI/UX Wireframing & Prototyping)' },

    // INTERNSHIP EXPERIENCE
    { type: 'font', font: 'F2', size: 11 },
    { type: 'color', r: 0.45, g: 0.18, b: 0.85 },
    { type: 'text', x: 40, y: 456, text: 'INTERNSHIP EXPERIENCE' },

    { type: 'font', font: 'F2', size: 10 },
    { type: 'color', r: 0.1, g: 0.1, b: 0.1 },
    { type: 'text', x: 40, y: 441, text: 'UI/UX Design Intern | Infosys Springboard' },
    { type: 'font', font: 'F1', size: 9 },
    { type: 'color', r: 0.35, g: 0.35, b: 0.4 },
    { type: 'text', x: 450, y: 441, text: 'May 2025' },
    { type: 'font', font: 'F2', size: 9 },
    { type: 'color', r: 0.2, g: 0.2, b: 0.25 },
    { type: 'text', x: 50, y: 428, text: 'Project: Campus Event Hub' },
    { type: 'font', font: 'F1', size: 9 },
    { type: 'color', r: 0.2, g: 0.2, b: 0.25 },
    { type: 'text', x: 50, y: 415, text: '- Designed 2 comprehensive user interfaces (Admin and User portals) using Figma.' },
    { type: 'text', x: 50, y: 402, text: '- Created user-friendly layouts focusing on usability, navigation flow, and visual accessibility.' },
    { type: 'text', x: 50, y: 389, text: '- Converted Figma designs into interactive frontend web pages using HTML, CSS, and JavaScript.' },

    // KEY PROJECTS
    { type: 'font', font: 'F2', size: 11 },
    { type: 'color', r: 0.45, g: 0.18, b: 0.85 },
    { type: 'text', x: 40, y: 371, text: 'KEY PROJECTS' },

    { type: 'font', font: 'F2', size: 10 },
    { type: 'color', r: 0.1, g: 0.1, b: 0.1 },
    { type: 'text', x: 40, y: 356, text: 'Doctor Appointment Management System' },
    { type: 'font', font: 'F1', size: 8.5 },
    { type: 'color', r: 0.35, g: 0.35, b: 0.4 },
    { type: 'text', x: 340, y: 356, text: 'React.js, Node.js, Express, MySQL' },
    { type: 'font', font: 'F1', size: 9 },
    { type: 'color', r: 0.2, g: 0.2, b: 0.25 },
    { type: 'text', x: 50, y: 343, text: '- Engineered a full-stack appointment platform with 3 dedicated modules: Patients, Doctors, and Admin.' },
    { type: 'text', x: 50, y: 330, text: '- Built appointment booking, real-time queue token generation, and medication tracking.' },
    { type: 'text', x: 50, y: 317, text: '- Integrated secure JWT-based authentication and role-based access control.' },
    { type: 'font', font: 'F1', size: 8.5 },
    { type: 'color', r: 0.45, g: 0.18, b: 0.85 },
    { type: 'text', x: 50, y: 304, text: 'GitHub: github.com/Sankari04/Doctor_appointment_system' },

    { type: 'font', font: 'F2', size: 10 },
    { type: 'color', r: 0.1, g: 0.1, b: 0.1 },
    { type: 'text', x: 40, y: 288, text: 'E-Commerce Web Application' },
    { type: 'font', font: 'F1', size: 8.5 },
    { type: 'color', r: 0.35, g: 0.35, b: 0.4 },
    { type: 'text', x: 340, y: 288, text: 'HTML5, CSS3, JavaScript, MySQL' },
    { type: 'font', font: 'F1', size: 9 },
    { type: 'color', r: 0.2, g: 0.2, b: 0.25 },
    { type: 'text', x: 50, y: 275, text: '- Developed a web-based e-commerce application with clean product catalogs and filters.' },
    { type: 'text', x: 50, y: 262, text: '- Implemented dynamic shopping cart functionality, item counter, and responsive navigation.' },
    { type: 'font', font: 'F1', size: 8.5 },
    { type: 'color', r: 0.45, g: 0.18, b: 0.85 },
    { type: 'text', x: 50, y: 249, text: 'GitHub: github.com/Sankari04/Shopping-site-Mini-project' },

    // CERTIFICATIONS
    { type: 'font', font: 'F2', size: 11 },
    { type: 'color', r: 0.45, g: 0.18, b: 0.85 },
    { type: 'text', x: 40, y: 231, text: 'CERTIFICATIONS' },

    { type: 'font', font: 'F2', size: 9.5 },
    { type: 'color', r: 0.1, g: 0.1, b: 0.1 },
    { type: 'text', x: 40, y: 216, text: 'AI Fundamentals' },
    { type: 'font', font: 'F1', size: 9 },
    { type: 'color', r: 0.3, g: 0.3, b: 0.35 },
    { type: 'text', x: 180, y: 216, text: 'IBM SkillsBuild  |  Issued: May 2026' },

    { type: 'font', font: 'F2', size: 9.5 },
    { type: 'color', r: 0.1, g: 0.1, b: 0.1 },
    { type: 'text', x: 40, y: 201, text: 'Software Testing' },
    { type: 'font', font: 'F1', size: 9 },
    { type: 'color', r: 0.3, g: 0.3, b: 0.35 },
    { type: 'text', x: 180, y: 201, text: 'NPTEL  |  Issued: March 2026' },

    // FOOTER NOTE
    { type: 'line', x1: 40, y1: 180, x2: 572, y2: 180, color: [0.85, 0.85, 0.88], width: 0.5 },
    { type: 'font', font: 'F1', size: 8 },
    { type: 'color', r: 0.5, g: 0.5, b: 0.55 },
    { type: 'text', x: 160, y: 168, text: 'Portfolio: sankari-developer-portfolio.vercel.app  |  Madurai, Tamil Nadu' },
  ];

  // Helper to escape PDF text
  function esc(s) {
    return s.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
  }

  // Construct stream content
  let streamParts = [];
  lines.forEach(item => {
    if (item.type === 'font') {
      streamParts.push(`/${item.font} ${item.size} Tf`);
    } else if (item.type === 'color') {
      streamParts.push(`${item.r.toFixed(3)} ${item.g.toFixed(3)} ${item.b.toFixed(3)} rg`);
    } else if (item.type === 'text') {
      streamParts.push(`BT ${item.x} ${item.y} Td (${esc(item.text)}) Tj ET`);
    } else if (item.type === 'line') {
      streamParts.push(`${item.color[0].toFixed(3)} ${item.color[1].toFixed(3)} ${item.color[2].toFixed(3)} RG`);
      streamParts.push(`${item.width} w`);
      streamParts.push(`${item.x1} ${item.y1} m ${item.x2} ${item.y2} l S`);
    }
  });

  const streamContent = streamParts.join('\n');
  const streamLength = Buffer.byteLength(streamContent, 'latin1');

  // Objects:
  // 1: Catalog
  // 2: Pages
  // 3: Page
  // 4: Content Stream
  // 5: Font F1 (Helvetica)
  // 6: Font F2 (Helvetica-Bold)

  // Object 1: Catalog
  const obj1 = `<< /Type /Catalog /Pages 2 0 R >>`;
  // Object 2: Pages
  const obj2 = `<< /Type /Pages /Kids [3 0 R] /Count 1 >>`;
  // Object 3: Page
  const obj3 = `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>`;
  // Object 4: Stream
  const obj4 = `<< /Length ${streamLength} >>\nstream\n${streamContent}\nendstream`;
  // Object 5: Font F1
  const obj5 = `<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>`;
  // Object 6: Font F2
  const obj6 = `<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>`;

  const rawObjs = [obj1, obj2, obj3, obj4, obj5, obj6];
  let body = header;
  const objOffsets = [];

  rawObjs.forEach((content, index) => {
    objOffsets.push(Buffer.byteLength(body, 'latin1'));
    body += `${index + 1} 0 obj\n${content}\nendobj\n`;
  });

  const startXref = Buffer.byteLength(body, 'latin1');
  body += `xref\n0 7\n0000000000 65535 f \n`;
  objOffsets.forEach(offset => {
    const padded = String(offset).padStart(10, '0');
    body += `${padded} 00000 n \n`;
  });

  body += `trailer\n<< /Size 7 /Root 1 0 R >>\nstartxref\n${startXref}\n%%EOF\n`;

  fs.writeFileSync(outputPath, body, 'latin1');
  console.log('Resume PDF generated successfully at:', outputPath);
}

const targetPath = path.join(__dirname, 'public', 'Sankari_Resume.pdf');
createPdf(targetPath);
