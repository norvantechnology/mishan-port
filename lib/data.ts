export const siteConfig = {
  name: "Mishan Savaliya",
  title: "Full Stack Developer | MERN Stack Specialist",
  shortTitle: "Full Stack Developer",
  email: "mishansavaliya843@gmail.com",
  phone: "9558841100",
  location: "Surat, Gujarat, India",
  intro:
    "5+ years of experience building scalable web applications with React, Node.js, and modern cloud technologies. I turn ideas into fast, reliable, production-ready products.",
  bio: "I'm a Full Stack Developer with 5+ years of experience specializing in the MERN stack (MongoDB, Express, React, Node.js). I've worked across startups and agencies building automation platforms, booking systems, payment-integrated SaaS products, and real-time applications. I enjoy solving real business problems with clean, scalable code and have hands-on experience with AWS deployment, third-party API integrations, and AI-powered features.",
  languages: ["English", "Hindi", "Gujarati"],
  socials: {
    email: "mailto:mishansavaliya843@gmail.com",
    linkedin: "https://linkedin.com/in/your-profile",
    github: "https://github.com/your-username",
  },
  url: "https://your-domain.vercel.app",
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

export const stats = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Projects Delivered" },
  { value: 3, suffix: "", label: "Companies" },
] as const;

export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "Angular.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Nest.js", "Serverless"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "PostgreSQL", "SQL", "Supabase"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, Lambda, S3)", "Deployment", "Server Setup"],
  },
  {
    title: "Tools",
    skills: ["Git", "Postman", "Swagger"],
  },
  {
    title: "AI Integration",
    skills: [
      "Gemini Image Generation",
      "Video Generation",
      "Workflow Automation",
    ],
  },
];

export type Experience = {
  company: string;
  location: string;
  role: string;
  period: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    company: "Norvan Technology",
    location: "Surat",
    role: "Full Stack Developer",
    period: "July 2025 – Present",
    highlights: [
      "Working as a full-stack developer on MERN-based projects",
      "Building responsive web applications using React and Node.js",
      "Developing REST APIs and managing databases with MongoDB",
      "Handling deployment and basic AWS services",
      "Communicating directly with clients and delivering features on time",
    ],
  },
  {
    company: "Brainbinary Infotech",
    location: "Surat",
    role: "Full Stack Developer",
    period: "December 2023 – June 2025",
    highlights: [
      "Developed full-stack web applications using MERN Stack",
      "Created backend APIs with Node.js and Express",
      "Worked with MongoDB for data storage and optimization",
      "Implemented DevOps basics for deployment and server management",
      "Fixed bugs and improved performance of existing applications",
    ],
  },
  {
    company: "Dhiera Solutions",
    location: "Surat",
    role: "MERN Stack Developer",
    period: "July 2021 – December 2023",
    highlights: [
      "Started professional career as a MERN Stack Developer",
      "Built frontend interfaces using React.js",
      "Developed backend services and APIs using Node.js",
      "Integrated third-party APIs and handled authentication",
      "Worked closely with senior developers to deliver client projects",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  details: string[];
};

export const projects: Project[] = [
  {
    title: "LinkedOra",
    description:
      "LinkedIn Post Automation Platform — schedule and auto-publish LinkedIn posts with Google auth, LinkedIn integration, and Razorpay subscriptions.",
    tech: ["React.js", "Next.js", "Node.js", "MongoDB", "AWS"],
    details: [
      "Google authentication and LinkedIn account integration",
      "Razorpay subscription payments with plan-based feature access",
      "Schedule and auto-publish LinkedIn posts",
      "Deployed on Amazon EC2",
    ],
  },
  {
    title: "EasyReviewQR",
    description:
      "Review Automation Platform — QR-based Google Review redirection with OpenAI content generation and Razorpay subscriptions.",
    tech: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "TypeORM",
      "OpenAI",
      "Razorpay",
    ],
    details: [
      "QR-code-based Google Review redirection",
      "OpenAI-generated review content",
      "Razorpay subscriptions and cron-based tasks",
      "Master admin panel for full CRUD and dynamic configuration",
    ],
  },
  {
    title: "AbaPathway",
    description:
      "Doctor Appointment Booking App with role-based access, OTP verification, real-time slots, and Stripe payments.",
    tech: ["Node.js", "MongoDB", "React.js"],
    details: [
      "Doctor and patient roles with mobile OTP via Twilio",
      "Real-time slot availability and location-based doctor search",
      "Cloudinary image storage and Stripe payments",
      "Deployed on Render",
    ],
  },
  {
    title: "Muslim Matcher",
    description:
      "Dating application backend with real-time chat, location-based discovery, and admin panel on AWS.",
    tech: ["Node.js", "MongoDB", "AWS", "Socket.IO"],
    details: [
      "Real-time one-to-one chat via Socket.IO",
      "Secure password reset flows",
      "Location-based profile discovery and notifications",
      "Admin panel deployed on AWS EC2",
    ],
  },
  {
    title: "Befurbe",
    description:
      "Service Provider & Product Referral Platform connecting tradespeople with customers and tracking commissions.",
    tech: ["React.js", "Node.js", "TypeScript", "PostgreSQL"],
    details: [
      "Connects service providers (carpenters, plumbers) with customers",
      "Dynamic product catalog and role-based access control",
      "Automated referral and commission tracking",
      "Fully managed via admin panel",
    ],
  },
];

export type Education = {
  title: string;
  institution: string;
  period: string;
};

export const education: Education[] = [
  {
    title: "B.Tech, Computer Engineering",
    institution: "Gandhinagar",
    period: "July 2017 – June 2021",
  },
  {
    title: "G.G. Zadafiya Vidhalaya (Science)",
    institution: "Surat",
    period: "May 2015 – April 2017",
  },
];
