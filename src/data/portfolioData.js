// ── portfolioData.js ──
// Edit all your portfolio content here

import {
  FaServer,
  FaLaptopCode,
  FaPaintBrush,
  FaTools,
  FaDatabase,
  FaMobileAlt,
  FaBug,
  FaPlug,
} from "react-icons/fa";

export const personalInfo = {
  name: "Ranjit Rajbanshi",
  heroImage: "/image/1.png",
  initials: "RR",
  logo: "Ranjit",
  role: "Laravel · React · Next.js",
  tagline: "Available for freelance work",
  description:
    "I craft high-performance web applications using Laravel, React, and Next.js. Passionate about clean code, beautiful UI, and scalable architecture.",
  aboutDesc1:
    "I'm a passionate Full-Stack Developer based in Nepal, specialising in building robust web applications. With expertise spanning from UI design in Figma to backend APIs in Laravel, I deliver complete digital solutions that delight users and power businesses.",
  aboutDesc2:
    "When I'm not coding, I contribute to open-source projects, explore new web technologies, and mentor aspiring developers in my community.",
  location: "Nepal 🇳🇵",
  degree: "BSc.CSIT",
  status: "Open to work",
  cvLink: "#",
  email: "ranjitrajbanshi58@email.com",
  linkedin: "https://linkedin.com",
  linkedinHandle: "linkedin.com/in/ranjit-rajbanshi-a62856343/",
  github: "https://github.com",
  githubHandle: "github.com/Rannjit158",
  whatsapp: "https://wa.me/977XXXXXXXXXX",
  whatsappHandle: "9824301087",

  // EmailJS credentials
  emailjsPublicKey: "YOUR_PUBLIC_KEY",
  emailjsServiceId: "YOUR_SERVICE_ID",
  emailjsTemplateId: "YOUR_TEMPLATE_ID",
};

export const stats = [
  { num: "3", suffix: "+", label: "Years Experience" },
  { num: "40", suffix: "+", label: "Projects Done" },
  { num: "25", suffix: "+", label: "Happy Clients" },
];

export const heroBadges = ["Laravel", "React", "Next.js", "Figma", "MySQL"];

export const heroFloatCards = [
  { label: "Projects Shipped", value: "40+", className: "card1" },
  { label: "Client Rating", value: "4.9★", className: "card2" },
];

export const typedPhrases = [
  "Laravel Developer",
  "React Developer",
  "Full-Stack Dev",
  "UI/UX Enthusiast",
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export const skillCategories = [
  {
    icon: FaServer,
    title: "Backend Development",
    type: "bars",
    items: [
      { name: "Laravel / PHP", pct: 95 },
      { name: "REST API Design", pct: 90 },
      { name: "MySQL ", pct: 88 },
    ],
  },
  {
    icon: FaLaptopCode,
    title: "Frontend Development",
    type: "bars",
    items: [
      { name: "React.js", pct: 90 },
      { name: "JQuery/Ajax", pct: 85 },
      { name: "HTML / CSS / Tailwind", pct: 95 },
    ],
  },
  {
    icon: FaPaintBrush,
    title: "Design & UI/UX",
    type: "bars",
    items: [
      { name: "Figma", pct: 60 },
      { name: "UI/UX Principles", pct: 50 },
      { name: "Responsive Design", pct: 80 },
    ],
  },
  {
    icon: FaTools,
    title: "DevOps & Tools",
    type: "pills",
    items: [
      "Git / GitHub",
      "Linux",
      "Nginx",
      "AWS EC2",
      "Composer",
      "npm / yarn",
      "Postman",
    ],
  },
  {
    icon: FaDatabase,
    title: "Databases & Storage",
    type: "pills",
    items: ["MySQL", "Eloquent ORM", "Migrations"],
  },
  {
    icon: FaMobileAlt,
    title: "Other Skills",
    type: "pills",
    items: ["REST APIs", "Blade", "Sanctum", "Passport", "SEO"],
  },
];

export const projects = [
  {
    id: 1,
    featured: true,
    categories: ["fullstack", "laravel"],
    image: "image/pearl.png",
    thumbBg: "linear-gradient(135deg,#0a1628,#0d2240)",
    accentBar: "linear-gradient(90deg,#00D9A3,#0066FF)",
    tags: ["Laravel", "Laravel Blade", "MySQL"],
    title: "Pearl Makeup & Nil Studio",
    desc: "Perl Make Up Studio offers professional makeup services for bridal and special occasions, enhancing your natural beauty with flawless results.",
    liveUrl: "https://pearlmakeupstudio.com/home",
    githubUrl: "#",
  },
  {
    id: 2,
    categories: ["laravel"],
    emoji: "📋",
    num: "02",
    thumbBg: "linear-gradient(135deg,#0f1f0f,#142814)",
    accentBar: "linear-gradient(90deg,#00D9A3,#00ff88)",
    tags: ["Laravel", "Livewire", "Alpine.js"],
    title: "Project Management SaaS",
    desc: "A Kanban-based project management tool with real-time collaboration, role-based permissions, and PDF report generation.",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    categories: ["react"],
    emoji: "💬",
    num: "03",
    thumbBg: "linear-gradient(135deg,#0f0f28,#1a1a40)",
    accentBar: "linear-gradient(90deg,#0066FF,#6644ff)",
    tags: ["Next.js", "Socket.io", "Redis"],
    title: "Real-Time Chat App",
    desc: "A real-time messaging application with group chats, file sharing, emoji reactions, and end-to-end encryption support.",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    categories: ["laravel", "fullstack"],
    emoji: "🏥",
    num: "04",
    thumbBg: "linear-gradient(135deg,#1f0f0f,#2a1414)",
    accentBar: "linear-gradient(90deg,#ff4444,#ff8800)",
    tags: ["Laravel", "React", "PostgreSQL"],
    title: "Hospital Management System",
    desc: "A comprehensive HMS covering patient records, doctor scheduling, pharmacy, billing, and reporting modules.",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    categories: ["react"],
    emoji: "📊",
    num: "05",
    thumbBg: "linear-gradient(135deg,#1a0f28,#2a1a44)",
    accentBar: "linear-gradient(90deg,#a855f7,#ec4899)",
    tags: ["Next.js", "Tailwind", "Chart.js"],
    title: "Analytics Dashboard",
    desc: "A responsive analytics dashboard with interactive charts, dark/light mode, and real-time data polling via REST APIs.",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    categories: ["fullstack", "laravel"],
    emoji: "🎓",
    num: "06",
    thumbBg: "linear-gradient(135deg,#0f1a1a,#0a2828)",
    accentBar: "linear-gradient(90deg,#00D9A3,#0066FF)",
    tags: ["Laravel", "Inertia.js", "Vue"],
    title: "LMS Platform",
    desc: "A learning management system with video courses, quizzes, certificates, progress tracking, and payment integration.",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const workHistory = [
  {
    date: "2025 — Present",
    title: "Laravel Developer",
    company: "Ratoguras Technology Pvt.Ltd · Full-time",
    desc: "Leading development of SaaS products, architecting microservices, mentoring junior developers, and collaborating with design and product teams.",
    techs: ["Laravel", "React"],
  },
  {
    date: "2025-present",
    title: "Full-Stack Developer",
    company: "Ratoguras Technology Pvt.Ltd · Full-time",
    desc: "Built custom web applications for 10+ clients ranging from e-commerce to healthcare. Delivered projects on time with high client satisfaction.",
    techs: ["Laravel", "Vue.js", "MySQL"],
  },
];

export const education = [
  {
    date: "2022 — present",
    title: "BSc. Computer Science & Information Technology",
    company: "Hiamlaya Darshan College ·(Affiliated to Tribhuvan University)",
    desc: "Bachelor Running",
    techs: [],
  },
  {
    date: "2025",
    title: "Full Stack Development Certification",
    company: "Rato Guras Technology Pvr.Ltd",
    desc: "Completed advanced Full-Stack Development training, focusing on React for front-end, Laravel for back-end, UI/UX design, API development, state management, and building responsive, user-friendly web applications.",
    techs: [],
  },
];

export const services = [
  {
    icon: FaServer,
    iconBg: "rgba(0,217,163,0.1)",
    iconBorder: "rgba(0,217,163,0.2)",
    iconColor: "#00D9A3",
    title: "Laravel Development",
    desc: "Full-stack Laravel applications, REST APIs, SaaS platforms, admin panels, payment integrations, and custom CMS solutions.",
  },
  {
    icon: FaPaintBrush,
    iconBg: "rgba(245,200,66,0.1)",
    iconBorder: "rgba(245,200,66,0.2)",
    iconColor: "#F5C842",
    title: "UI/UX Design",
    desc: "Beautiful, user-centred interface designs in Figma — wireframes, prototypes, design systems, and handoff-ready components.",
  },
  {
    icon: FaPlug,
    iconBg: "rgba(0,217,163,0.1)",
    iconBorder: "rgba(0,217,163,0.2)",
    iconColor: "#00D9A3",
    title: "API Development",
    desc: "Well-structured RESTful & GraphQL APIs with documentation, authentication, rate limiting, and third-party integrations.",
  },
  {
    icon: FaBug,
    iconBg: "rgba(245,200,66,0.1)",
    iconBorder: "rgba(245,200,66,0.2)",
    iconColor: "#F5C842",
    title: "Code Review & Consulting",
    desc: "In-depth code audits, architecture consulting, performance profiling, and technical mentoring for your development team.",
  },
];
