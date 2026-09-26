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
  heroImage: "/image/ranjit.png",
  heroImageFallback: "/image/ranjit.webp",
  initials: "RR",
  logo: "Ranjit",
  role: "Laravel · React ",
  tagline: "Available for work",
  description:
    "I craft high-performance web applications using Laravel and React. Passionate about clean code, beautiful UI, and scalable architecture.",
  aboutDesc1:
    "I'm a passionate Full-Stack Developer based in Nepal, specialising in building robust web applications. With expertise spanning from UI design in Figma to backend APIs in Laravel, I deliver complete digital solutions that delight users and power businesses.",
  aboutDesc2:
    "When I'm not coding, I contribute to open-source projects, explore new web technologies, and mentor aspiring developers in my community.",
  location: "Nepal 🇳🇵",
  degree: "BSc.CSIT",
  status: "Open to work",
  cvLink: "#",
  email: "ranjitrajbanshi58@email.com",
  linkedin: "https://linkedin.com/in/ranjit-rajbanshi-a62856343/",
  linkedinHandle: "linkedin.com/in/ranjit-rajbanshi-a62856343/",
  github: "https://github.com/Rannjit158",
  githubHandle: "github.com/Rannjit158",
  whatsapp: "https://wa.me/9824301087",
  whatsappHandle: "9824301087",

  // EmailJS credentials
  emailjsPublicKey: "DjkipE-DZtAFPogrK",
  emailjsServiceId: "service_nukmaaf",
  emailjsTemplateId: "template_gp7w8hm",
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
];

// Auto-cycling snippets shown in the hero code editor card.
// Token kinds: c comment · kw keyword · fn function/id-blue · s string
//              p property · b boolean/accent · t plain text
export const heroCodeSnippets = [
  {
    file: "developer.js",
    cmd: "npm run dev",
    lines: [
      [{ t: "c", v: "// Full-Stack Developer · Nepal" }],
      [
        { t: "kw", v: "const" },
        { t: "t", v: " " },
        { t: "fn", v: "dev" },
        { t: "t", v: " = {" },
      ],
      [
        { t: "t", v: "  " },
        { t: "p", v: "name" },
        { t: "t", v: ": " },
        { t: "s", v: '"Ranjit Rajbanshi"' },
        { t: "t", v: "," },
      ],
      [
        { t: "t", v: "  " },
        { t: "p", v: "stack" },
        { t: "t", v: ": [" },
        { t: "s", v: '"Laravel"' },
        { t: "t", v: ", " },
        { t: "s", v: '"React"' },
        { t: "t", v: ", " },
        { t: "s", v: '"MySQL"' },
        { t: "t", v: "]," },
      ],
      [
        { t: "t", v: "  " },
        { t: "p", v: "hireable" },
        { t: "t", v: ": " },
        { t: "b", v: "true" },
        { t: "t", v: ";" },
      ],
      [{ t: "t", v: "};" }],
      [{ t: "t", v: "" }],
      [
        { t: "fn", v: "console" },
        { t: "t", v: ".log(" },
        { t: "s", v: '"Let\'s build something great"' },
        { t: "t", v: ");" },
      ],
    ],
  },
  {
    file: "routes/web.php",
    cmd: "php artisan serve",
    lines: [
      [{ t: "c", v: "// Laravel route definition" }],
      [
        { t: "fn", v: "Route" },
        { t: "t", v: "::get(" },
        { t: "s", v: '"/"' },
        { t: "t", v: ", " },
        { t: "fn", v: "HomeController" },
        { t: "t", v: "::class)->" },
        { t: "p", v: "name" },
        { t: "t", v: "(" },
        { t: "s", v: '"home"' },
        { t: "t", v: ");" },
      ],
      [{ t: "t", v: "" }],
      [
        { t: "fn", v: "Route" },
        { t: "t", v: "::prefix(" },
        { t: "s", v: '"api/v1"' },
        { t: "t", v: ")" },
      ],
      [
        { t: "t", v: "  ->" },
        { t: "p", v: "middleware" },
        { t: "t", v: "(" },
        { t: "s", v: '"auth:sanctum"' },
        { t: "t", v: ")" },
      ],
      [
        { t: "t", v: "  ->" },
        { t: "fn", v: "group" },
        { t: "t", v: "(function () {" },
      ],
      [
        { t: "t", v: "    " },
        { t: "fn", v: "Route" },
        { t: "t", v: "::apiResource(" },
        { t: "s", v: '"posts"' },
        { t: "t", v: ", " },
        { t: "fn", v: "PostController" },
        { t: "t", v: "::class);" },
      ],
      [{ t: "t", v: "  });" }],
    ],
  },
  {
    file: "HomePage.jsx",
    cmd: "npm run build",
    lines: [
      [{ t: "c", v: "// React functional component" }],
      [
        { t: "kw", v: "const" },
        { t: "t", v: " " },
        { t: "fn", v: "HomePage" },
        { t: "t", v: " = () => {" },
      ],
      [
        { t: "t", v: "  " },
        { t: "kw", v: "const" },
        { t: "t", v: " [" },
        { t: "p", v: "user" },
        { t: "t", v: ", " },
        { t: "p", v: "setUser" },
        { t: "t", v: "] = " },
        { t: "fn", v: "useState" },
        { t: "t", v: "(null);" },
      ],
      [{ t: "t", v: "" }],
      [
        { t: "t", v: "  " },
        { t: "fn", v: "useEffect" },
        { t: "t", v: "(() => {" },
      ],
      [
        { t: "t", v: "    " },
        { t: "fn", v: "fetchUser" },
        { t: "t", v: "().then(" },
        { t: "p", v: "setUser" },
        { t: "t", v: ");" },
      ],
      [{ t: "t", v: "  }, []);" }],
      [{ t: "t", v: "" }],
      [
        { t: "t", v: "  " },
        { t: "kw", v: "return" },
        { t: "t", v: " <" },
        { t: "fn", v: "ProfileCard" },
        { t: "t", v: " user={user} />;" },
      ],
      [{ t: "t", v: "};" }],
      [
        { t: "kw", v: "export" },
        { t: "t", v: " " },
        { t: "kw", v: "default" },
        { t: "t", v: " " },
        { t: "fn", v: "HomePage" },
        { t: "t", v: ";" },
      ],
    ],
  },
  {
    file: "queries.sql",
    cmd: "mysql -u root portfolio",
    lines: [
      [{ t: "c", v: "-- Active users from the last 30 days" }],
      [
        { t: "kw", v: "SELECT" },
        { t: "t", v: " u.id, u." },
        { t: "p", v: "email" },
      ],
      [
        { t: "kw", v: "FROM" },
        { t: "t", v: " users u" },
      ],
      [
        { t: "kw", v: "JOIN" },
        { t: "t", v: " orders o " },
        { t: "kw", v: "ON" },
        { t: "t", v: " o.user_id = u.id" },
      ],
      [
        { t: "kw", v: "WHERE" },
        { t: "t", v: " u." },
        { t: "p", v: "status" },
        { t: "t", v: " = " },
        { t: "s", v: '"active"' },
      ],
      [
        { t: "t", v: "  " },
        { t: "kw", v: "AND" },
        { t: "t", v: " o.created_at >= " },
        { t: "fn", v: "NOW" },
        { t: "t", v: "() - " },
        { t: "kw", v: "INTERVAL" },
        { t: "t", v: " 30 " },
        { t: "kw", v: "DAY" },
      ],
      [
        { t: "kw", v: "GROUP BY" },
        { t: "t", v: " u.id;" },
      ],
    ],
  },
  {
    file: "~/terminal",
    cmd: "sh deploy.sh",
    lines: [
      [
        { t: "b", v: "$" },
        { t: "t", v: " git init && git add ." },
      ],
      [
        { t: "b", v: "$" },
        { t: "t", v: " git commit -m " },
        { t: "s", v: '"init: portfolio"' },
      ],
      [
        { t: "b", v: "$" },
        { t: "t", v: " composer create-project laravel app" },
      ],
      [
        { t: "b", v: "$" },
        { t: "t", v: " php artisan migrate --seed" },
      ],
      [
        { t: "b", v: "$" },
        { t: "t", v: " npm run build" },
      ],
      [{ t: "c", v: "✓ deployed to production" }],
    ],
  },
  {
    file: "styles.css",
    cmd: "tailwindcss watch",
    lines: [
      [{ t: "c", v: "/* Glassmorphic hero panel */" }],
      [{ t: "t", v: ".hero-panel {" }],
      [
        { t: "t", v: "  " },
        { t: "p", v: "@apply" },
        { t: "t", v: " rounded-2xl border border-white/10;" },
      ],
      [{ t: "t", v: "  " }, { t: "p", v: "bg-white/5" }, { t: "t", v: " backdrop-blur-md;" }],
      [{ t: "t", v: "}" }],
      [{ t: "t", v: "" }],
      [
        { t: "kw", v: "@media" },
        { t: "t", v: " (" },
        { t: "p", v: "prefers-reduced-motion" },
        { t: "t", v: ": reduce) {" },
      ],
      [{ t: "t", v: "  .hero-panel { animation: none; }" }],
      [{ t: "t", v: "}" }],
    ],
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
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
    image: "image/pearlmakeup.webp",
    thumbBg: "linear-gradient(135deg,#0a1628,#0d2240)",
    accentBar: "linear-gradient(90deg,#00D9A3,#0066FF)",
    tags: ["Laravel", "Laravel Blade", "MySQL"],
    title: "Pearl Makeup & Nil Studio",
    desc: "Perl Make Up Studio offers professional makeup services for bridal and special occasions, enhancing your natural beauty with flawless results.",
    liveUrl: "https://pearlmakeupstudio.com",
    githubUrl: "#",
  },
  {
    id: 2,
    categories: ["fullstack", "laravel"],
    image: "image/bajrang.webp",
    num: "02",
    thumbBg: "linear-gradient(135deg,#0f1f0f,#142814)",
    accentBar: "linear-gradient(90deg,#00D9A3,#00ff88)",
    tags: ["Laravel", "Laravel Blade", "JQuery", "Ajax"],
    title: "Bajrang steel",
    desc: "Bajrang Steel is a trusted steel supplier offering high-quality, durable steel products for construction and industrial use with a focus on strength, reliability, and timely delivery.",
    liveUrl: "https://bajrangsteel.com.np",
    githubUrl: "#",
  },
  {
    id: 3,
    categories: ["fullstack", "laravel"],
    image: "image/sherpa_churpi.webp",
    num: "04",
    thumbBg: "linear-gradient(135deg,#0f1f0f,#142814)",
    accentBar: "linear-gradient(90deg,#00D9A3,#00ff88)",
    tags: ["Laravel", "Laravel Blade", "JQuery", "Ajax"],
    title: "Sherpa Churpi",
    desc: "Developed a responsive business website for Sherpa Churpi Himalayan Dog Chew to showcase premium Himalayan dog chew products, company information, and export capabilities. Focused on creating a modern user experience with easy navigation and a professional online presence.",
    liveUrl: "https://sherpachurpihimalayandogchew.com/home",
    githubUrl: "#",
  },
  {
    id: 4,
    categories: ["fullstack", "laravel"],
    image: "image/tolebikas.webp",
    num: "03",
    thumbBg: "linear-gradient(135deg,#0f1f0f,#142814)",
    accentBar: "linear-gradient(90deg,#00D9A3,#00ff88)",
    tags: ["Laravel", "Laravel Blade", "JQuery", "Ajax"],
    title: "Tole Bikas Samiti (community Saving and Lone Management)",
    desc: "Built a comprehensive web-based management system for Tole Bikash Samiti to streamline member management, savings, loan processing, repayments, and financial reporting. The system automates daily financial operations and improves record accuracy and transparency.",
    liveUrl: "College Project",
    githubUrl: "#",
  },
];

export const workHistory = [
  // {
  //   date: "2025 — Present",
  //   title: "Laravel Developer",
  //   company: "Ratoguras Technology Pvt.Ltd · Full-time",
  //   desc:"Developing scalable web applications and backend systems using Laravel, building REST APIs, implementing business logic, managing databases, and integrating modern frontend technologies.",
  //   techs: ["Laravel", "React", "MySQL"],
  // },
  {
    date: "2025-present",
    title: "Full-Stack Developer",
    company: "Ratoguras Technology Pvt.Ltd · Full-time",
    desc: "Building and maintaining full-stack web applications, developing responsive user interfaces, integrating Laravel APIs, and delivering reliable solutions tailored to client requirements.",
    techs: ["Laravel", "React", "MySQL"],
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
