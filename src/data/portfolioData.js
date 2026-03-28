// ── portfolioData.js ──
// Edit all your portfolio content here

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
  linkedinHandle: "linkedin.com/in/yourprofile",
  github: "https://github.com",
  githubHandle: "github.com/yourusername",
  whatsapp: "https://wa.me/977XXXXXXXXXX",
  whatsappHandle: "+977 XXXXXXXXXX",
  twitter: "https://twitter.com",
  copyright: "© 2025 Your Name. Crafted with ❤️ in Nepal 🇳🇵",
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
    icon: "fas fa-server",
    title: "Backend Development",
    type: "bars",
    items: [
      { name: "Laravel / PHP", pct: 95 },
      { name: "REST API Design", pct: 90 },
      { name: "MySQL / PostgreSQL", pct: 88 },
      { name: "Node.js / Express", pct: 70 },
    ],
  },
  {
    icon: "fas fa-laptop-code",
    title: "Frontend Development",
    type: "bars",
    items: [
      { name: "React.js", pct: 90 },
      { name: "Next.js", pct: 85 },
      { name: "HTML / CSS / Tailwind", pct: 95 },
      { name: "JavaScript / TypeScript", pct: 85 },
    ],
  },
  {
    icon: "fas fa-paint-brush",
    title: "Design & UI/UX",
    type: "bars",
    items: [
      { name: "Figma", pct: 88 },
      { name: "UI/UX Principles", pct: 82 },
      { name: "Responsive Design", pct: 95 },
      { name: "Adobe XD / PS", pct: 70 },
    ],
  },
  {
    icon: "fas fa-tools",
    title: "DevOps & Tools",
    type: "pills",
    items: [
      "Git / GitHub",
      "Docker",
      "Linux",
      "Nginx",
      "AWS EC2",
      "CI/CD",
      "Redis",
      "Composer",
      "npm / yarn",
      "Postman",
    ],
  },
  {
    icon: "fas fa-database",
    title: "Databases & Storage",
    type: "pills",
    items: [
      "MySQL",
      "PostgreSQL",
      "SQLite",
      "Redis",
      "MongoDB",
      "Firebase",
      "Eloquent ORM",
      "Migrations",
    ],
  },
  {
    icon: "fas fa-mobile-alt",
    title: "Other Skills",
    type: "pills",
    items: [
      "REST APIs",
      "GraphQL",
      "Livewire",
      "Inertia.js",
      "Blade",
      "Sanctum",
      "Passport",
      "Stripe / PayPal",
      "SEO",
      "PWA",
    ],
  },
];

export const projects = [
  {
    id: 1,
    featured: true,
    categories: ["fullstack", "laravel"],
    emoji: "🛒",
    num: "01",
    thumbBg: "linear-gradient(135deg,#0a1628,#0d2240)",
    accentBar: "linear-gradient(90deg,#00D9A3,#0066FF)",
    tags: ["Laravel", "React", "MySQL", "Stripe"],
    title: "E-Commerce Platform",
    desc: "A full-featured multi-vendor e-commerce platform with real-time inventory management, Stripe payments, order tracking, and an admin dashboard built with React and Laravel API backend.",
    liveUrl: "#",
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
    date: "2023 — Present",
    title: "Senior Laravel Developer",
    company: "Tech Company · Full-time",
    desc: "Leading development of SaaS products, architecting microservices, mentoring junior developers, and collaborating with design and product teams.",
    techs: ["Laravel 11", "React", "AWS", "Docker"],
  },
  {
    date: "2022 — 2023",
    title: "Full-Stack Developer",
    company: "Digital Agency · Full-time",
    desc: "Built custom web applications for 10+ clients ranging from e-commerce to healthcare. Delivered projects on time with high client satisfaction.",
    techs: ["Laravel", "Vue.js", "MySQL"],
  },
  {
    date: "2021 — 2022",
    title: "Junior PHP Developer",
    company: "Startup · Full-time",
    desc: "Developed and maintained Laravel applications, wrote RESTful APIs, implemented authentication, and worked on payment integrations.",
    techs: ["PHP", "Laravel", "MySQL"],
  },
];

export const education = [
  {
    date: "2018 — 2022",
    title: "BSc. Computer Science",
    company: "University of Science & Technology · Nepal",
    desc: "Graduated with honours. Focused on software engineering, databases, algorithms, and web technologies. Final year project: Full-stack hospital management system.",
    techs: [],
  },
  {
    date: "2021",
    title: "Laravel Certification",
    company: "Laracasts · Online",
    desc: "Completed advanced Laravel certification covering Eloquent ORM, API development, queues, and testing.",
    techs: [],
  },
  {
    date: "2020",
    title: "React Developer Certification",
    company: "Meta / Coursera",
    desc: "Professional certificate in React development including hooks, context, testing, and performance optimization.",
    techs: [],
  },
];

export const services = [
  {
    icon: "fas fa-server",
    iconBg: "rgba(0,217,163,0.1)",
    iconBorder: "rgba(0,217,163,0.2)",
    iconColor: "#00D9A3",
    title: "Laravel Development",
    desc: "Full-stack Laravel applications, REST APIs, SaaS platforms, admin panels, payment integrations, and custom CMS solutions.",
  },
  {
    icon: "fas fa-laptop-code",
    iconBg: "rgba(0,102,255,0.1)",
    iconBorder: "rgba(0,102,255,0.2)",
    iconColor: "#0066FF",
    title: "React / Next.js Apps",
    desc: "Modern, performant frontend applications with SSR, SSG, dynamic routing, and seamless API integration using React & Next.js.",
  },
  {
    icon: "fas fa-paint-brush",
    iconBg: "rgba(245,200,66,0.1)",
    iconBorder: "rgba(245,200,66,0.2)",
    iconColor: "#F5C842",
    title: "UI/UX Design",
    desc: "Beautiful, user-centred interface designs in Figma — wireframes, prototypes, design systems, and handoff-ready components.",
  },
  {
    icon: "fas fa-plug",
    iconBg: "rgba(0,217,163,0.1)",
    iconBorder: "rgba(0,217,163,0.2)",
    iconColor: "#00D9A3",
    title: "API Development",
    desc: "Well-structured RESTful & GraphQL APIs with documentation, authentication, rate limiting, and third-party integrations.",
  },
  {
    icon: "fas fa-cloud",
    iconBg: "rgba(0,102,255,0.1)",
    iconBorder: "rgba(0,102,255,0.2)",
    iconColor: "#0066FF",
    title: "Deployment & DevOps",
    desc: "Server setup, Docker containerisation, CI/CD pipelines, AWS deployment, performance optimisation and monitoring.",
  },
  {
    icon: "fas fa-bug",
    iconBg: "rgba(245,200,66,0.1)",
    iconBorder: "rgba(245,200,66,0.2)",
    iconColor: "#F5C842",
    title: "Code Review & Consulting",
    desc: "In-depth code audits, architecture consulting, performance profiling, and technical mentoring for your development team.",
  },
];

export const testimonials = [
  {
    stars: 5,
    text: "Delivered the project 2 weeks ahead of schedule. The Laravel API is rock-solid and the React frontend looks stunning. Highly recommend!",
    avatarBg: "linear-gradient(135deg,#00D9A3,#0066FF)",
    initials: "A",
    name: "Amit Sharma",
    role: "CTO, TechNepal",
  },
  {
    stars: 5,
    text: "Exceptional attention to detail and clean code. Our e-commerce platform handles thousands of orders seamlessly. A true professional.",
    avatarBg: "linear-gradient(135deg,#f5c842,#ff8800)",
    initials: "S",
    name: "Sarah Johnson",
    role: "Founder, ShopEasy",
  },
  {
    stars: 5,
    text: "Transformed our Figma designs into a pixel-perfect Next.js app. Communication was clear throughout. We'll definitely work again!",
    avatarBg: "linear-gradient(135deg,#a855f7,#ec4899)",
    initials: "R",
    name: "Ravi Patel",
    role: "Product Manager, Edunow",
  },
];
