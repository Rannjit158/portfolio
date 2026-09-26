import { personalInfo } from "./portfolioData";

/**
 * Everything the CV / Resume needs lives here so the printable document,
 * the on-site preview and the download button always stay in sync.
 * Edit this file (and only this file) to update the CV.
 */

export const cvMeta = {
  // Your uploaded CV: public/cv/Ranjit_Rajbanshi_cv.pdf
  // Buttons download this file; the on-site document below is the preview /
  // print fallback when the PDF is missing.
  file: personalInfo.cvLink,
  fileName: "Ranjit_Rajbanshi_cv.pdf",
  updated: "September 2026",
  availability: "Open to full-time, remote & freelance work",
  headline: "Full-Stack Developer · Laravel & React",
  summary:
    "Full-Stack Developer from Nepal with 3+ years of experience shipping production web applications. I build reliable backends in Laravel, craft fast, accessible interfaces in React, and care about the boring details — clean code, sane database design, fast pages and deployments that do not wake anyone at 3 AM.",
  highlights: [
    "3+ years building and maintaining production Laravel + React applications",
    "40+ projects delivered across Laravel, React, Blade and jQuery stacks",
    "Strong API design, authentication (Sanctum / Passport) and database modelling",
    "Comfortable owning a feature end-to-end: UI design → API → deployment",
  ],
};

export const cvExperience = [
  {
    period: "2025 — Present",
    role: "Full-Stack Developer",
    company: "Rato Guras Technology Pvt. Ltd.",
    location: "Biratnagar, Nepal",
    type: "Full-time",
    tech: ["Laravel", "React", "MySQL", "Blade", "jQuery", "REST API"],
    bullets: [
      "Build and maintain full-stack web applications end-to-end, from database schema and REST API design through to the responsive UI.",
      "Translate Figma designs into pixel-accurate, responsive interfaces with Tailwind CSS and component-driven React front-ends.",
      "Model MySQL schemas, write migrations and optimise the queries behind reporting-heavy dashboards.",
      "Integrate third-party services, payment flows and third-party authentication (Sanctum / Passport).",
      "Work directly with clients to gather requirements, break features into shippable increments and deliver reliable releases.",
    ],
  },
];

export const cvEducation = [
  {
    period: "2022 — Present",
    role: "BSc. Computer Science & Information Technology",
    company: "Himalaya Darshan College · affiliated to Tribhuvan University",
    location: "Biratnagar, Nepal",
    type: "Bachelor",
    tech: [],
    bullets: [
      "Core coursework in data structures, algorithms, databases, web technologies, software engineering and networking.",
    ],
  },
  {
    period: "2025",
    role: "Full-Stack Development Certification",
    company: "Rato Guras Technology Pvt. Ltd.",
    location: "Nepal",
    type: "Certification",
    tech: ["React", "Laravel", "UI/UX"],
    bullets: [
      "Advanced full-stack training covering React front-ends, Laravel back-ends, UI/UX design, API development, state management and responsive application builds.",
    ],
  },
];

export const cvProjects = [
  {
    title: "Pearl Makeup & Nil Studio",
    role: "Full-Stack Developer",
    url: "https://pearlmakeupstudio.com",
    stack: ["Laravel", "Laravel Blade", "MySQL"],
    bullets: [
      "Online presence for a professional bridal & occasion makeup studio with service pages, gallery and enquiry flow.",
      "Built on Laravel with server-rendered Blade templates for fast first paint and strong SEO.",
    ],
  },
  {
    title: "Bajrang Steel",
    role: "Full-Stack Developer",
    url: "https://bajrangsteel.com.np",
    stack: ["Laravel", "Laravel Blade", "jQuery", "Ajax"],
    bullets: [
      "Business website for a steel supplier presenting products, company information and enquiry paths.",
      "Ajax-powered product filtering and quote requests to shorten the path from visit to lead.",
    ],
  },
  {
    title: "Sherpa Churpi — Himalayan Dog Chew",
    role: "Full-Stack Developer",
    url: "https://sherpachurpihimalayandogchew.com/home",
    stack: ["Laravel", "Laravel Blade", "jQuery", "Ajax"],
    bullets: [
      "Responsive marketing site showcasing premium Himalayan dog chew products and export capabilities.",
      "Product catalogue with Ajax interactions and a clear, professional navigation structure.",
    ],
  },
  {
    title: "Tole Bikas Samiti — Savings & Loan Management",
    role: "Full-Stack Developer",
    url: "",
    stack: ["Laravel", "MySQL", "Reporting"],
    bullets: [
      "College project: a web-based management system for members, savings, loan processing, repayments and financial reporting.",
      "Automated daily financial operations and improved record accuracy and transparency for the committee.",
    ],
  },
];

export const cvSkillGroups = [
  {
    title: "Backend",
    items: [
      "Laravel 8–11",
      "PHP 8",
      "REST API design",
      "Eloquent ORM",
      "Migrations & seeding",
      "Blade templating",
      "Sanctum / Passport",
      "Payment integration",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React.js",
      "JavaScript (ES6+)",
      "jQuery / Ajax",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "Responsive design",
      "Figma handoff",
    ],
  },
  {
    title: "Database",
    items: ["MySQL", "Query optimisation", "Schema design", "Reporting"],
  },
  {
    title: "Tools & DevOps",
    items: [
      "Git / GitHub",
      "Linux",
      "Nginx",
      "Composer",
      "npm / yarn",
      "Postman",
      "AWS EC2",
      "VS Code",
    ],
  },
];

export const cvStrengths = [
  "Clean, readable code that the next developer can maintain",
  "REST APIs designed first, screens built second",
  "Performance and SEO treated as features, not afterthoughts",
  "Calm communication with clients and teammates",
  "Fast learner — comfortable picking up a new stack quickly",
];

export const cvLanguages = [
  { name: "Nepali", level: "Native" },
  { name: "English", level: "Professional" },
  { name: "Hindi", level: "Fluent" },
];
