// Centralize todos os dados do portfólio aqui para fácil edição

export const personalInfo = {
  name: "Reginaldo da Rosa Correa Junior",
  role: "Front-end Developer",
  tagline: "construo interfaces que as pessoas realmente querem usar",
  location: "Imaruí/SC, Brasil",
  email: "reginaldodarosacorreajr@gmail.com",
  phone: "+55 48 996151778",
  bio: "dev front-end que gosta de experimentar, quebrar coisas e aprender no processo. especializado em react e vuejs, typescript e fazer as coisas funcionarem de verdade.",
  avatar: "/me.jpeg",
  cvLink: "/cv.pdf",
  social: {
    github: "https://github.com/CorreaJapaJr",
    linkedin: "https://linkedin.com/in/seuusuario",

  }
};

export const skills = {
  frontend: [
    { name: "HTML5", icon: "FaHtml5" },
    { name: "CSS3", icon: "FaCss3Alt" },
    { name: "JavaScript", icon: "FaJs" },
    { name: "React", icon: "FaReact" },
    { name: "Vue.js", icon: "FaVuejs" },
    { name: "TypeScript", icon: "SiTypescript" },
  ],
  tools: [
    { name: "Git", icon: "FaGitAlt" },
    { name: "GitHub", icon: "FaGithub" },
    { name: "npm", icon: "FaNpm" },
  ],
  other: [
    { name: "Node.js", icon: "FaNode" },
    { name: "Sass", icon: "FaSass" },
    { name: "Tailwind", icon: "SiTailwindcss" },
  ]
};

export const projects = [
  {
    id: 1,
    title: "loja online experimental",
    description: "testei criar um e-commerce do zero. tem carrinho, checkout, integração com stripe. aprendi muito sobre estado global e otimização de performance.",
    image: "https://via.placeholder.com/600x400",
    tags: ["react", "typescript", "stripe", "zustand"],
    github: "https://github.com/seuusuario/projeto1",
    demo: "https://projeto1.vercel.app",
  },
  {
    id: 2,
    title: "dashboard de dados",
    description: "criei um dashboard para visualizar dados em tempo real. foi desafiador fazer os gráficos performarem bem com muita informação.",
    image: "https://via.placeholder.com/600x400",
    tags: ["vue", "d3.js", "websockets"],
    github: "https://github.com/seuusuario/projeto2",
    demo: "https://projeto2.vercel.app",
  },
  {
    id: 3,
    title: "gerenciador de tarefas",
    description: "app de tarefas com drag-and-drop. foquei em fazer a UX ser realmente fluida e intuitiva.",
    image: "https://via.placeholder.com/600x400",
    tags: ["react", "framer-motion", "dnd-kit"],
    github: "https://github.com/seuusuario/projeto3",
    demo: "https://projeto3.vercel.app",
  },
];

export const experience = [
{
  id: 1,
  year: "2024 - Presente",
  role: "Front-end Developer Junior",
  company: "Web Jasper",
  description: "Desenvolvimento de aplicações web responsivas utilizando Vue.js e TypeScript, com foco em componentização, boas práticas de código e integração com APIs RESTful.",
}
];
