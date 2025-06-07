import {
  FaLinkedin,
  FaGithubAlt,
  FaEnvelope,
  FaFilePdf,
  FaGraduationCap,
} from "react-icons/fa";

// Type definitions
export type SocialLink = {
  href: string;
  title: string;
  icon: typeof FaLinkedin | typeof FaGithubAlt | typeof FaEnvelope | typeof FaFilePdf;
};

export type Job = {
  title: string;
  place: string;
  placeUrl: string;
  years: string;
  bullets: string[];
};

export type Project = {
  title: string;
  description: string[];
  imageUrl: string;
  codeLink: string;
};

export type Skill = {
  name: string;
  levelLabel: "Expert" | "Pro";
  percent: number;
};

export type Education = {
  degree: string;
  school: string;
  schoolUrl: string;
  years: string;
  icon: typeof FaGraduationCap;
};

export type Volunteer = {
  title: string;
  org: string;
  orgLink: string;
  years: string;
  desc: string;
};

export type Language = {
  name: string;
  stars: number;
};

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  linkedin?: string;
};

export type SkillCategory = {
  name: string;
  skills: readonly string[];
};

export type Music = {
  title: string;
  subtitle: string;
  playlistId: string;
};

export const siteConfig = {
  // Basic Info
  name: "K-M Samiul Haque",
  titles: ["Staff Software Engineer"],
  profileImage: "/static/images/profile.png",

  // Contact & Social
  email: "sammy.haque@alumni.utoronto.ca",
  socialLinks: [
    {
      href: "https://www.linkedin.com/in/samiul-haque",
      title: "LinkedIn",
      icon: FaLinkedin,
    },
    {
      href: "https://github.com/samhaque",
      title: "GitHub",
      icon: FaGithubAlt,
    },
    {
      href: "mailto:sammy.haque@alumni.utoronto.ca",
      title: "Email",
      icon: FaEnvelope,
    },
    {
      href: "/static/content/K-M_Samiul_Haque_Resume_2025.pdf",
      title: "Resume",
      icon: FaFilePdf,
    },
  ] as const,

  // Experience
  experience: [
    {
      title: "Staff Software Engineer",
      place: "Royal Bank of Canada",
      placeUrl: "https://www.rbc.com",
      years: "Jul 2024 – Present",
      bullets: [
        "Built centralized web platform for vulnerability triage and exemption services across subsidiaries in Canada, the US, and UK using React, Tailwind, FastAPI, Snowflake, Redis, SQL Server; deployed on OpenShift.",
      ],
    },
    {
      title: "Lead Software Engineer",
      place: "Royal Bank of Canada",
      placeUrl: "https://www.rbc.com",
      years: "Aug 2022 – Jul 2024",
      bullets: [
        "Automated large-scale chaos testing for VMs and Kubernetes workloads on AKS, OpenShift, and VMware clusters using Tanium API and Gremlin API; reduced setup time by 90%.",
        "Designed enrichment pipelines for SRE tooling and observability platforms, reducing Mean Time to Detection (MTTD) by 30%.",
      ],
    },
    {
      title: "Senior Software Developer",
      place: "Royal Bank of Canada",
      placeUrl: "https://www.rbc.com",
      years: "Nov 2020 – Aug 2022",
      bullets: [
        "Developed mutual TLS (mTLS) gateway connecting Slack apps to internal services using Golang, Apache APISIX, Vault, Apigee, Elasticsearch, Nginx, and OpenShift; enabled ChatOps workflows.",
        "Innersourced SDKs and templates in Python and Golang that reduced Slackbot onboarding time from 2 weeks to 2 days for 15+ teams.",
      ],
    },
    {
      title: "Software Developer",
      place: "Royal Bank of Canada",
      placeUrl: "https://www.rbc.com",
      years: "Aug 2019 – Nov 2020",
      bullets: [
        "Created Stack Overflow–style Q&A forum with Java, Spring Boot, Elasticsearch, and MariaDB; gamification features boosted answered-question rate by 25%.",
      ],
    },
    {
      title: "Software Developer Intern (3 terms)",
      place: "Royal Bank of Canada",
      placeUrl: "https://www.rbc.com",
      years: "May 2017 – Aug 2019",
      bullets: [
        "Developed Slackbot ChatOps pipeline saving 20+ engineer-hours weekly using Python, MongoDB, Redis, Rasa NLU, and Kubernetes.",
        "Created internal automation portal with live analytics to run test suites; cut test time by 80%, saving \$100k/year. Built with Python, Django, MongoDB, Bootstrap, and Jenkins.",
      ],
    },
  ] as const,

  // Projects
  projects: [
    {
      title: "CreatorsUnchained",
      description: [
        "Built a platform based on the Ethereum Blockchain using Solidity to bridge the gap between content creators and advertisers by making smart contracts to ensure fair transactions while protecting both parties.",
        "Created a karma system to devalue and restrict creators and advertisers who do not hold up their end of the bargain."
      ],
      imageUrl: "/static/images/projects/ethuoft.jpg",
      codeLink: "https://github.com/samhaque/CreatorsUnchained",
    },
    {
      title: "RAWCast",
      description: [
        "Created a Desktop application using C# and the .NET framework to cast Canon .CR2 RAW image files to nearby Google Chromecasts, converting them on the fly using a custom C image manipulation library.",
        "The application decodes every image in the selected folder, generating a slideshow preview. When an image is chosen, it converts the image to a common format and serves it to nearby Chromecasts.",
        "Especially useful for photographers who want to cast their RAW image files to their TV."
      ],
      imageUrl: "/static/images/projects/RAWCast.jpg", 
      codeLink: "https://github.com/samhaque/RAWCast",
    },
    {
      title: "MirrML",
      description: [
        "MirrML is a web application built on the Flask web framework that analyzes user's clothing given a set of pictures of the users clothing and return what type of attire it is.",
        "Uses the Clarify Image Recognition API and a custom model trained using a web scraper to analyze any picture of the users attire and return a probabilistic match, regarding what kind of style it is.",
        "Matches the user's clothing with their friends and check which of their friends have the most similar clothes."
      ],
      imageUrl: "/static/images/projects/mirrormirror.jpg", 
      codeLink: "https://github.com/samhaque/UofTHacksIV_MirrML",
    },
    {
      title: "LendR",
      description: [
        "NFC based social micro-financing application that uses NFC technology to loan money to trusted friends, allowing fast, seamless and secure money transfers.",
        "Built a karma system to differentiate reliable users from defaulters. Users who don't pay back on time accumulate interest and negative karma points, reducing their borrowing limit.",
        "Custom backend tracks users' karma points and transactions, with verification prompts for lenders to check borrowers' karma rating before authorizing transfers."
      ],
      imageUrl: "/static/images/projects/lendr.jpg",
      codeLink: "https://github.com/samhaque/FinTech_LendR",
    },
    {
      title: "Ultralux",
      description: [
        "IoT-based early warning system that sends tweets using the Twitter API via lasers and solid state switching by a Raspberry Pi to an android receiver.",
        "Data is compressed, converted into binary, and transmitted via modulated laser flashes toward the android camera.",
        "The android app receiver converts the binary data back into Unicode."
      ],
      imageUrl: "/static/images/projects/ultralux.jpg",
      codeLink: "https://github.com/samhaque/UofTHacks3_Ultralux",
    }
  ] as const,

  // Skills - organized by category
  skills: [
    // Languages
    { name: "Java", levelLabel: "Expert", percent: 100 },
    { name: "Golang", levelLabel: "Expert", percent: 100 },
    { name: "Python", levelLabel: "Expert", percent: 100 },
    { name: "JavaScript", levelLabel: "Expert", percent: 100 },
    { name: "TypeScript", levelLabel: "Expert", percent: 100 },
    { name: "SQL", levelLabel: "Expert", percent: 100 },
    { name: "Shell", levelLabel: "Expert", percent: 100 },

    // Frameworks & Libraries
    { name: "Spring Boot", levelLabel: "Pro", percent: 90 },
    { name: "Django", levelLabel: "Pro", percent: 90 },
    { name: "Flask", levelLabel: "Pro", percent: 90 },
    { name: "ASP.NET Core", levelLabel: "Pro", percent: 85 },
    { name: "React", levelLabel: "Expert", percent: 100 },
    { name: "FastAPI", levelLabel: "Expert", percent: 100 },
    { name: "Gin", levelLabel: "Pro", percent: 85 },

    // Databases
    { name: "PostgreSQL", levelLabel: "Pro", percent: 90 },
    { name: "SQL Server", levelLabel: "Pro", percent: 90 },
    { name: "MongoDB", levelLabel: "Pro", percent: 90 },
    { name: "MySQL", levelLabel: "Pro", percent: 85 },
    { name: "SQLite", levelLabel: "Pro", percent: 85 },
    { name: "Oracle", levelLabel: "Pro", percent: 85 },

    // Data/ETL
    { name: "Apache Airflow", levelLabel: "Pro", percent: 85 },
    { name: "Snowflake", levelLabel: "Pro", percent: 85 },
    { name: "Amazon S3", levelLabel: "Pro", percent: 85 },
    { name: "Rundeck", levelLabel: "Pro", percent: 85 },

    // DevOps & Tooling
    { name: "GitHub Actions", levelLabel: "Pro", percent: 90 },
    { name: "Jenkins", levelLabel: "Pro", percent: 90 },
    { name: "Ansible", levelLabel: "Pro", percent: 85 },
    { name: "Vault", levelLabel: "Pro", percent: 85 },
    { name: "Redis", levelLabel: "Pro", percent: 85 },
    { name: "RabbitMQ", levelLabel: "Pro", percent: 85 },
    { name: "SonarQube", levelLabel: "Pro", percent: 80 },
    { name: "Artifactory", levelLabel: "Pro", percent: 80 },

    // Cloud & Containers
    { name: "Kubernetes", levelLabel: "Expert", percent: 100 },
    { name: "Docker", levelLabel: "Expert", percent: 100 },
    { name: "OpenShift", levelLabel: "Expert", percent: 100 },
    { name: "AKS", levelLabel: "Pro", percent: 90 },
    { name: "PCF", levelLabel: "Pro", percent: 85 },

    // Security
    { name: "Snyk", levelLabel: "Pro", percent: 85 },
    { name: "NexusIQ", levelLabel: "Pro", percent: 80 },
    { name: "Bright Security", levelLabel: "Pro", percent: 80 },
    { name: "Kenna", levelLabel: "Pro", percent: 80 },
    { name: "Tenable", levelLabel: "Pro", percent: 80 },
    { name: "Aqua", levelLabel: "Pro", percent: 80 },
    { name: "Recorded Future", levelLabel: "Pro", percent: 80 },

    // SRE & Monitoring
    { name: "Gremlin", levelLabel: "Pro", percent: 85 },
    { name: "Tanium", levelLabel: "Pro", percent: 85 },
    { name: "ServiceNow", levelLabel: "Pro", percent: 85 },
    { name: "PagerDuty", levelLabel: "Pro", percent: 85 },
    { name: "ELK Stack", levelLabel: "Pro", percent: 85 },
  ] as const,

  // Education
  education: {
    degree: "HBSc Statistics",
    school: "University of Toronto",
    schoolUrl: "https://www.utoronto.ca/",
    years: "2015 – 2021",
    icon: FaGraduationCap,
  } as const,

  // Volunteer Experience
  volunteer: [] as Volunteer[],

  // Languages
  languages: [
    { name: "English", stars: 5 },
    { name: "Bengali", stars: 5 },
  ] as const,

  // Music
  music: {
    title: "Favourite coding music",
    subtitle: "Music that keeps me in the flow",
    playlistId: "PLA3ethPT6T1t_At7oIuSf2pgLnUj_Mzww"
  } as const,

  // Testimonials
  testimonials: [] as Testimonial[],

  // Footer
  footer: {
    message: "Thanks for visiting my portfolio!",
    repo: "https://github.com/samhaque/samhaque.io",
  } as const,

  // Skills - organized by category
  skillCategories: [
    {
      name: "Languages",
      skills: ["Java", "Golang", "Python", "JavaScript", "TypeScript", "SQL", "Shell"],
    },
    {
      name: "Frameworks & Libraries",
      skills: ["Spring Boot", "Django", "Flask", "ASP.NET Core", "React", "FastAPI", "Gin"],
    },
    {
      name: "Databases",
      skills: ["PostgreSQL", "SQL Server", "MongoDB", "MySQL", "SQLite", "Oracle"],
    },
    {
      name: "Cloud & Containers",
      skills: ["Kubernetes", "Docker", "OpenShift", "AKS", "PCF"],
    },
    {
      name: "DevOps & Tools",
      skills: ["GitHub Actions", "Jenkins", "Ansible", "Vault", "Redis", "RabbitMQ"],
    },
    {
      name: "Security",
      skills: ["Snyk", "NexusIQ", "Bright Security", "Kenna", "Tenable", "Aqua"],
    },
        {
      name: "Data & ETL",
      skills: ["Apache Airflow", "Snowflake", "Amazon S3", "Rundeck"],
    },
    {
      name: "SRE & Monitoring",
      skills: ["Gremlin", "Tanium", "ServiceNow", "PagerDuty", "ELK Stack"],
    },

  ] as const,
} as const;

export default siteConfig;
