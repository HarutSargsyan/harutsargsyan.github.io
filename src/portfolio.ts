import northwesternLogo from "./assets/northwestern_logo.jpeg";
import cdkLogo from "./assets/cdknorthamerica_logo.jpeg";
import recatLogo from "./assets/recat_logo.jpeg";
import slydLogo from "./assets/slyd_group_logo.jpeg"
import microsoftLogo from "./assets/microsoft_logo.jpg"


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

export type ResearchItem = {
  title: string;
  context: string;
  date?: string;
  authors: string[];
  description: string;
  pdf: string;
  linkLabel: string;
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
  research: ResearchItem[];
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
    { label: "Email", url: "harutsargsyan2027@u.northwestern.edu", icon: "email" },
    { label: "GitHub", url: "https://github.com/HarutSargsyan", icon: "github" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/harutyunsargsyan/",
      icon: "linkedin",
    },
  ],
  education: [
    {
      school: "Northwestern University",
      degree: "Bachelor of Science in Computer Science",
      logo: northwesternLogo,
      details:
        "Relevant Coursework: Database Systems, Scalable Software Architecture, Programming Languages, Parallel Computing, Operating Systems, Computer Networking, Stochastic Processes",
    },
  ],
  experiences: [
    {
      role: "Software Engineer Intern",
      company: "Microsoft",
      start: "June 2026",
      end: "September 2026",
      location: "Redmond, WA",
      logo: microsoftLogo,
      details: [
        "Shipped a public REST API for programmatic Power BI subscription management across multiple backend services, unblocking enterprise customers migrating 30K+ reports and 13K+ subscriptions previously manageable only through the UI.",
        "Drove the API from customer requirements through design, cross-service integration, and delivery, resolving distributed-system consistency constraints and validating behavior with 1,200+ automated tests in a production environment.",
        "Built a modular Teams notification pipeline for report-delivery failures, rolled out incrementally alongside the existing email path with zero customer disruption and extensible to new alert types without rework.",
        "Analyzed 30 days of production telemetry covering 23K+ failed deliveries to scope alerting to unrecoverable failures only, tracing the systemic root cause behind 80% of them to guide a durable fix.",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "CDK Global",
      start: "June 2025",
      end: "August 2025",
      location: "Hoffman Estates, IL",
      logo: cdkLogo,
      details: [
        "Built and production-tested 3 .NET API endpoints for OEM dealer-settings workflows, adding validation and error-handling layers that supported hundreds of dealership appointments per day.",
        "Standardized a reusable React sidebar component across applications with full accessibility support and theme configurability, cutting UI rewrite time by 20% and removing duplicate implementations on 8 different teams.",
        "Cut endpoint latency by 40% by profiling memory and I/O bottlenecks in New Relic APM, adding targeted SQL indexes, and introducing Redis caching.",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "SLYD (computer resource sharing company)",
      start: "June 2024",
      end: "September 2024",
      location: "Chicago, IL",
      logo: slydLogo,
      details: [
        "Architected and deployed a secure .NET Blazor compute-sharing platform using containerized virtualization, real-time status polling, and tenant-isolation rules, letting users lend and borrow GPU/CPU capacity.",
        "Raised PostgreSQL query throughput by 3x by normalizing relational schemas, building composite indexes, and eliminating N+1 query patterns.",
        "Cut AWS deployment cycle time by 40% with Dockerized build pipelines and ECR workflows, using staged rollouts to ship updates with zero downtime.",
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
  research: [
    {
      title: "Toward Reproducible Measurement of Government Web Infrastructure Consolidation",
      context: "CS 298 Project Proposal, Northwestern University",
      date: "November 2026",
      authors: ["Harutyun Sargsyan", "Alan Kim"],
      description:
        "Proposes an automated, repeatable pipeline for collecting government websites across 61 countries and measuring how their DNS, CDN, and certificate authority providers consolidate over time. Early country adapters recover 98.6% of the 2024 baseline hostnames for Paraguay, 96.8% for Latvia, and 89.2% for the United States.",
      pdf: "/research/government-web-consolidation-proposal.pdf",
      linkLabel: "Proposal",
    },
    {
      title: "Evaluating Internet Measurement Bias Using Metis, APNIC, and RIPE Probe Selection",
      context: "CS 445 Reproducibility Project, Northwestern University",
      authors: ["Harutyun Sargsyan", "Lianhao Zheng"],
      description:
        "Reproduced a subset of the Metis paper's experiments, comparing three RIPE Atlas probe selection strategies through RTT measurements to nine anycast targets. Median RTT was 13.05 ms for default worldwide selection, 14.09 ms for Metis AS-path diversity, and 21.17 ms for APNIC top ASes, consistent with the original finding that naive selection yields overly optimistic latency.",
      pdf: "/research/metis-probe-selection-reproducibility.pdf",
      linkLabel: "Paper",
    },
  ],
  projects: [
    {
      name: "Air Sampler FX",
      description:
        "Gesture-controlled audio sampler with bare-metal C drivers for touch pads, a rotary encoder, and a distance sensor, streaming events over UART to a real-time Python/NumPy DSP engine for slice playback, effects, and hand-distance-controlled modulation.",
      link: "https://youtu.be/ENWoqJh1ri8",
      tags: ["Embedded C", "nRF52 SDK", "I2C", "UART", "Python", "NumPy", "Real-time DSP"],
    },
    {
      name: "Better Split",
      description:
        "Real-time bill splitting app with OCR receipt scanning, WebSocket-synced item claiming, and typo-tolerant item search.",
      tags: ["Java", "WebSockets", "Protobuf", "Google Cloud Vision", "PostgreSQL"],
    },
    {
      name: "LeFinance",
      description:
        "Stock portfolio app with Firebase auth, AWS newsletter pipeline, and predictive analytics.",
      link: "https://youtu.be/LdEM6BMSbyU",
      tags: ["React", "Docker", "Firebase", "AWS", "Python"],
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
