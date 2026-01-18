import northwesternLogo from "./assets/northwestern_logo.jpeg";
import cdkLogo from "./assets/cdknorthamerica_logo.jpeg";
import recatLogo from "./assets/recat_logo.jpeg";
import slydLogo from "./assets/slyd_group_logo.jpeg"


export type SocialLink = {
  label: string;
  url: string;
  icon?: "email" | "github" | "linkedin" | "x" | "website" | "telegram";
};

export type EducationItem = {
  school: string;
  degree?: string;
  details?: string;
  url?: string;
  logo?: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  start: string;
  end?: string;
  location?: string;
  url?: string;
  logo?: string;
  summary?: string;
  details?: string[];
};

export type ProjectItem = {
  name: string;
  description?: string;
  link?: string;
  code?: string;
  tags?: string[];
};

export type CertificationItem = {
  name: string;
  issuer?: string;
  date?: string;
  credentialUrl?: string;
};

export type PortfolioData = {
  profile: {
    name: string;
    title?: string;
    location?: string;
    tagline?: string;
    primaryLinkLabel?: string;
    primaryLinkUrl?: string;
  };
  socials: SocialLink[];
  education: EducationItem[];
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  certifications: CertificationItem[];
};

export const portfolioData: PortfolioData = {
  profile: {
    name: "Harut Sargsyan",
    title: "Software Engineer",
    location: "Chicago",
    tagline: "",
  },
  socials: [
    { label: "Email", url: "mailto:hello@example.com", icon: "email" },
    { label: "GitHub", url: "https://github.com/your-handle", icon: "github" },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/your-handle",
      icon: "linkedin",
    },
  ],
  education: [
    {
      school: "Northwestern University",
      degree: "Bachelor of Science in Computer Science",
      logo: northwesternLogo,
      details:
        "Relevant Coursework: Database Systems, Scalable Software Architecture, Programming Languages, Parallel Computing, Operating Systems, Computer Networking, Stachastic Processes",
    },
  ],
  experiences: [
    {
      role: "Software Engineer Intern",
      company: "CDK Global",
      start: "June 2025",
      end: "August 2025",
      logo: cdkLogo,
      details: [
        "Engineered and production-tested 3 ASP.NET API endpoints supporting OEM dealer-settings workflows, implementing validation layers and fault-tolerant error handling to increase workflow reliability by 30% across thousands of dealership appointments.",
      "Improved backend performance by 25% by profiling memory and I/O bottlenecks with New Relic APM, optimizing LINQ-heavy database operations, adding strategic SQL indexes, and integrating Redis caching to reduce p95 latency under load.",
      "Developed a reusable, React sidebar component standardized across applications, implementing full accessibility support and theme configurability, which cut UI rewrite time by 20% and improved component reuse across 4+ teams."
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "SLYD",
      start: "Aug 2024",
      end: "September 2024",
      logo: slydLogo,
      details: [
        "Architected and deployed a secure .NET Blazor compute-sharing platform leveraging containerized virtualization, real-time status polling, and tenant isolation rules, enabling people to lend/borrow GPU/CPU resources with 40% greater accessibility.",
        "Increased PostgreSQL queries throughput by redesigning relational schemas, normalizing data, building composite indexes, and eliminating N+1 query patterns, reducing heavy query runtime by 25%.",
        "Reduced AWS deployment cycle time by 30% by building Dockerized pipelines and ECR workflows, implementing staged rollouts for zero-downtime updates, and integrating CloudWatch + structured logs to speed up incident diagnosis.",
      ],
    },
    {
      role: "Software Engineer",
      company: "ReCat (startup in Garage accelerator)",
      start: "March 2024",
      end: "September 2024",
      logo: recatLogo,
      details: [
        "Designed and built a modular React Native settings and preferences system with reusable UI primitives, giving users fine-grained control over notifications and app personalization, contributing to a 20% increase in App Store downloads.",
        "Architected scalable Firestore schemas optimized for mobile traffic, introducing batched document reads/writes, sub-collection reorganizations, and index rules that reduced query latency by 30% and cut Firestore costs by 20%.",
      ],
    },
  ],
  projects: [
    {
      name: "GroceryScout",
      description:
        "Track and compare grocery prices across stores to save money on everyday shopping.",
      link: "https://food-price-tracker-gamma.vercel.app",
      tags: ["React", "Firebase", "Tailwind CSS"],
    },
    {
      name: "LeFinance",
      description:
        "Stock portfolio app with Firebase auth, AWS newsletter pipeline, and predictive analytics.",
      link: "https://youtu.be/LdEM6BMSbyU",
      tags: ["React", "Docker", "Firebase", "AWS", "Python"],
    },
    {
      name: "Minesweeper",
      description:
        "Minimalistic minesweeper game clone built with C/C++ and SFML.",
      link: "https://youtu.be/MQIdJqihNJo",
      tags: ["C/C++", "SFML"],
    },
    {
      name: "Portfolio",
      description: "This portfolio website, built with React and Tailwind CSS.",
      link: "https://github.com/HarutSargsyan/harutsargsyan.github.io",
      code: "https://github.com/HarutSargsyan/harutsargsyan.github.io",
      tags: ["React", "Tailwind CSS"],
    },
  ],
  certifications: [
    { name: "Database Systems", issuer: "Coursework" },
    { name: "Scalable Software Architecture", issuer: "Coursework" },
    { name: "Programming Languages", issuer: "Coursework" },
    { name: "Parallel Computing", issuer: "Coursework" },
  ],
};
