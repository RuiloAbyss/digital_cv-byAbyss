const universityData = 
  {
    date: "August 2021 - Present",
    institution: "Instituto Tecnológico de Tepic",
    degree: "B.S. in Computer Systems Engineering",
    description: "Currently in my final semester, specializing in Full Stack software development and system architecture."
  };

const topExperience = [
  {
    date: "September 2025 - December 2025",
    company: "Electronic Store Project",
    tag: "proyect",
    role: "Full Stack Developer & Technical Lead",
    description: `
      Optimized billing, payment, and notification workflows by integrating 
      third-party APIs (PayPal, SendGrid, FacturAPI). Architected a scalable, 
      real-time database environment using Firebase and managed CI/CD deployment 
      pipelines on Vercel, ensuring a stable transition to production.
      `
  },
  {
    date: "June 2025 - August 2025",
    company: "Agrosoft - Academic Research",
    tag: "proyect",
    role: "Full Stack Developer (UI/UX Focus)",
    description: `
      Led the design and front-end prototyping of a high-fidelity agricultural monitoring application, 
      applying advanced interaction standards to effectively visualize complex scientific data structures.
      `
  },
  {
    date: "January 2025 - June 2025",
    company: "Mila Project",
    tag: "proyect",
    role: "Full Stack Developer",
    description: `
      Drove product identity and system architecture using modern frameworks like 
      React and TailwindCSS, achieving a highly responsive and functional user experience. 
      Coordinated development iterations under the Agile SCRUM methodology.
      `
  },
];

const learningData = [
  {
    date: "In Progress 2025",
    company: "Google / Coursera",
    tag: "formative",
    role: "UX/UI Design Professional Certificate",
    description: `
      Developing specialized skills to standardize complex interfaces and significantly 
      reduce visual technical debt in frontend development through design systems and interactive prototyping.
    `
  },
];

const socialData = {
    name: "Abisai Ruiz López",
    linkedin: "https://www.linkedin.com/in/abisai-ruiz/",
    github: "https://github.com/RuiloAbyss/",
    cv: "/Abisai Ruiz - Resume.pdf",
    email: "ruilo.abisai@gmail.com",
    phone: "523891050431"
};

const aboutMeData = [
  {
    title: "Photography",
    imglink: "/fotografia.jpeg", 
    content: "Capturing moments and subtle details that usually go unnoticed.",
    technologies: [],
    theme: "sunset"
  },
  {
    title: "Creative Writing",
    imglink: "/leer.jpeg", 
    content: "Crafting narratives and fictional worlds, which enhances my storytelling approach to digital products.",
    technologies: [],
    theme: "cosmic"
  },
  {
    title: "Hiking",
    imglink: "/senderismo.jpeg", 
    content: "Connecting with nature to recharge my energy and spark creative problem-solving for engineering tasks.",
    technologies: [], 
    theme: "cosmic"
  },
  {
    title: "Exploring New Places",
    imglink: "/interes.jpeg", 
    content: "Appreciating architectural and community spaces to find continuous inspiration for digital design.",
    technologies: [], 
    theme: "sunset"
  },
  {
    title: "Drawing & Illustration",
    imglink: "/dibujar.jpeg", 
    content: "Visualizing concepts on paper as a core part of my abstract and logical design process.",
    technologies: [],
    theme: "cosmic"
  }
];

  const aboutMeDescription = `
  I consider myself a software engineer with an artist's soul. My approach goes far beyond writing lines of code; 
  I look to bridge the gap between structured backend logic and smooth, engaging user journeys. 
  Whether I am tracking a trail outdoors or leading the technical architectural design of an interface, 
  I always chase the sweet spot between bulletproof backend reliability and striking visual execution.
  `;

const menuTabs = [
  {id: 'hs', label: 'Technologies'},
  {id: 'ss', label: 'Core Skills'},
  {id: 'learn', label: 'Certifications'},
];

export { universityData, topExperience, learningData, socialData, menuTabs, aboutMeData, aboutMeDescription };