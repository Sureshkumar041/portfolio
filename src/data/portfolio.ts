import type { Portfolio } from "@/lib/types";

/**
 * ─────────────────────────────────────────────────────────────
 *  ALL SITE CONTENT LIVES HERE.
 *  Edit text in this file — no component changes needed.
 * ─────────────────────────────────────────────────────────────
 */

export const portfolio: Portfolio = {
  // Used for canonical URL, sitemap and Open Graph. Override with NEXT_PUBLIC_SITE_URL.
  // Any trailing slash is stripped so paths like `${siteUrl}/sitemap.xml` stay clean.
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://suresh-kumar.vercel.app").replace(
    /\/+$/,
    "",
  ),

  seo: {
    title: "Suresh Kumar — Software Engineer (Full Stack)",
    description:
      "Full-stack software engineer in Chennai with 3.5+ years building production web and mobile apps with NestJS, Node.js, Next.js and React Native.",
    keywords: [
      "Suresh Kumar",
      "Full Stack Developer",
      "Software Engineer",
      "NestJS",
      "Node.js",
      "Next.js",
      "React",
      "React Native",
      "TypeScript",
      "GraphQL",
      "Chennai",
    ],
    ogStack: ["NestJS", "Node.js", "GraphQL", "PostgreSQL", "Next.js", "React Native"],
  },

  personal: {
    name: "Suresh Kumar",
    firstName: "Suresh",
    title: "Software Engineer (Full Stack)",
    tagline:
      "I build production web and mobile apps end to end — from NestJS backends and real-time features to Next.js and React Native front ends.",
    location: "Chennai, Tamil Nadu, India",
    email: "sureshkumarbe04@gmail.com",
    resumeUrl: "/resume.pdf",
    socials: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/suresh-kumar-s-91771a219/",
        icon: "linkedin",
        handle: "in/suresh-kumar-s",
      },
      {
        label: "GitHub",
        href: "https://github.com/Sureshkumar041",
        icon: "github",
        handle: "Sureshkumar041",
      },
    ],
  },

  nav: [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education & Learning" },
    { id: "contact", label: "Contact" },
  ],

  whoami: {
    role: "Software Engineer (Full Stack)",
    company: "CubeMatch Technologies",
    backend: ["NodeJs", "NestJS", "GraphQL", "PostgreSQL"],
    frontend: ["ReactJs", "Next.js", "React Native"],
    location: "Chennai, IN",
    learning: "DSA",
  },

  highlights: [
    { value: "4", label: "Years of experience", icon: "briefcase" },
    { value: "30+", label: "Backend modules built solo", icon: "layers" },
    { value: "Rookie of the Year", label: "Claritaz TechLabs, first year", icon: "trophy" },
    {
      value: "Queensland Govt–listed",
      label: "Product: PayTrade trust account software",
      icon: "landmark",
    },
  ],

  // Small label + heading shown at the top of each section.
  sections: {
    about: { label: "about", title: "About me" },
    skills: { label: "skills", title: "Skills & tools" },
    experience: { label: "experience", title: "Where I've worked" },
    projects: {
      label: "projects",
      title: "Selected projects",
      description:
        "Client and company work, so the source code is private. Expand a card for the full details.",
    },
    education: { label: "education & learning", title: "Education & Learning" },
    contact: { label: "contact", title: "Get in touch" },
  },

  about: {
    summary: [
      "I'm a Software Engineer (Full Stack) with 3.5+ years building production web and mobile apps with NestJS, Node.js, React, Next.js and React Native.",
      "I built an entire NestJS backend single-handedly, integrated Stripe subscriptions and real-time Socket.io features, and added BullMQ email queuing to Queensland Government–listed trust account software.",
    ],
    facts: [
      "Software Engineer at CubeMatch Technologies",
      "Based in Chennai, Tamil Nadu, India",
      "B.E. Computer Science and Engineering",
      "Learning DSA on NamasteDev",
    ],
  },

  skills: [
    { category: "Languages", icon: "code", items: ["JavaScript", "TypeScript"] },
    {
      category: "Backend",
      icon: "server",
      items: [
        "Node.js",
        "NestJS",
        "GraphQL",
        "REST APIs",
        "WebSocket (Socket.io)",
        "Webhooks",
        "BullMQ",
      ],
    },
    {
      category: "Frontend",
      icon: "layout",
      items: ["React.js", "Next.js", "Redux", "Context API"],
    },
    { category: "Mobile", icon: "smartphone", items: ["React Native"] },
    {
      category: "Databases & ORM",
      icon: "database",
      items: ["PostgreSQL", "MongoDB", "TypeORM"],
    },
    {
      category: "Integrations",
      icon: "plug",
      items: ["Stripe (subscriptions)", "Mailgun", "Third-party REST APIs"],
    },
    {
      category: "Tools & Practices",
      icon: "wrench",
      items: ["Git", "TFS", "Jenkins CI/CD", "Postman", "Agile"],
    },
  ],

  experience: [
    {
      company: "CubeMatch Technologies Pvt. Ltd.",
      period: "Mar 2024 – Present",
      roles: [
        { title: "Software Engineer", period: "Feb 2026 – Present", promotion: true },
        { title: "Junior Software Engineer", period: "Mar 2024 – Feb 2026" },
      ],
      points: [
        "Build full-stack features across NestJS backends, Next.js web apps and React Native mobile apps for two client products in an Agile team.",
        "Designed the data exchange layer between frontend and backend over GraphQL and REST for web and mobile clients.",
        "Deployed releases through Jenkins CI/CD pipelines.",
        "Created reusable, responsive UI components for a consistent user experience.",
      ],
    },
    {
      company: "Claritaz TechLabs LLP",
      period: "Jan 2023 – Mar 2024",
      roles: [{ title: "Junior Software Engineer", period: "Jan 2023 – Mar 2024" }],
      points: [
        "Integrated multiple third-party APIs, handling endpoint configuration and data mapping.",
        "Worked with UX/UI designers to turn designs into responsive web and mobile interfaces.",
      ],
      award: "Rookie of the Year — outstanding first-year performance",
    },
  ],

  projects: [
    {
      slug: "paytrade-sss",
      title: "Paytrade-SSS",
      company: "CubeMatch",
      summary: "Site work progress and employee tracking app.",
      role: "Sole backend engineer",
      teamSize: "Team of 3",
      tech: ["NestJS", "PostgreSQL", "TypeORM", "Socket.io", "Stripe", "Mailgun", "React Native"],
      highlights: [
        "Owned the complete NestJS backend: 13+ modules covering users, companies, projects, timesheets, tasks, incident reporting, RAMS, drawings and roles.",
        "Stripe subscription billing with auto-renewal, plus webhook handlers for Stripe and Mailgun events.",
        "Real-time live location tracking and instant check-in / check-out notifications with Socket.io.",
        "Support ticket system with automated email notifications.",
        "Built selected React Native screens and wired them to the backend APIs.",
      ],
      isPrivate: true,
    },
    {
      slug: "paytrade-australia",
      title: "PayTrade Australia",
      company: "CubeMatch",
      summary:
        "Audit-first, Xero-connected project trust account software for Queensland construction businesses.",
      context:
        "Listed on the Queensland Government's assessed trust account software page. Used by builders, contractors, bookkeepers, accountants and auditors.",
      role: "Full-stack developer (backend focus)",
      tech: ["NestJS", "GraphQL", "PostgreSQL", "TypeORM", "Next.js", "Mailgun", "BullMQ"],
      highlights: [
        "Built audit reporting that logs system and process changes for accountants, auditors and the QBCC.",
        "Delivered an end-to-end support ticket system with Mailgun email notifications.",
        "Introduced a BullMQ email queue that tracks delivery and auto-resends failed or rate-limited emails.",
      ],
      isPrivate: true,
    },
    {
      slug: "itas",
      title: "ITAS – Transport Appointment Booking",
      company: "Claritaz",
      summary: "Mobile app for truck drivers and transport companies.",
      context:
        "Lets drivers and transport companies schedule appointments and manage trouble tickets.",
      role: "Sole mobile developer",
      tech: ["React Native", "REST APIs"],
      highlights: [
        "Built the complete React Native app, including appointment scheduling and trouble-ticket handling.",
        "Integrated REST APIs for the booking and ticket workflows.",
      ],
      isPrivate: true,
    },
    {
      slug: "hire-programmers",
      title: "Hire Programmers",
      company: "Claritaz",
      summary: "Freelancer hiring platform connecting clients with freelancers.",
      context: "Clients post projects and freelancers apply to them.",
      role: "Full-stack developer",
      teamSize: "Team of 4",
      tech: ["Next.js", "NestJS", "MongoDB", "Socket.io"],
      highlights: [
        "Built full-stack features: project posting, search & filtering, and user profiles.",
        "Real-time client–freelancer messenger with Socket.io.",
        "Next.js pages for listings, project details, profiles and messaging.",
      ],
      isPrivate: true,
    },
  ],

  education: [
    {
      degree: "Bachelor of Engineering",
      field: "Computer Science and Engineering",
      institution: "AVS College of Technology",
      period: "2018 – 2022",
      grade: "CGPA 7.9",
    },
  ],

  learning: [
    {
      title: "Namaste JavaScript",
      provider: "NamasteDev",
      providerUrl: "https://namastedev.com/",
      status: "completed",
      completedOn: "Mar 2026",
      certificateUrl: "https://namastedev.com/suresh/certificates/namaste-javascript",
    },
    {
      title: "Data Structures & Algorithms (DSA)",
      provider: "NamasteDev",
      providerUrl: "https://namastedev.com/",
      status: "in-progress",
    },
  ],

  contact: {
    heading: "Let's build something together.",
    message:
      "Whether it's a role, a project or just a question about NestJS or React Native, my inbox is open.",
  },

  footer: {
    builtWith: "Built with Next.js & Tailwind",
    // Kept here (not `new Date()`) so the page stays fully static.
    copyrightYear: 2026,
  },
};
