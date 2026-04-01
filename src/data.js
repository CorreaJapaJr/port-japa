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
    linkedin: "https://www.linkedin.com/in/reginaldo-da-rosa-correa-junior-190799218/",

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
  courses: [
    { name: "Fullstack", icon: "FaCertificate", link: "https://app.rocketseat.com.br/certificates/7ca13a09-18fc-470c-a90a-6f66560eb540" },
    { name: "React", icon: "FaCertificate", link: "https://app.rocketseat.com.br/certificates/5bea852b-d234-45cf-bd7a-15ef0d6999f1" },
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
    title: "Pokédevs",
    description: "Uma galeria interativa e divertida que apresenta 'Pokédevs' – criaturas inspiradas no mundo do desenvolvimento com habilidades e atributos únicos.",
    image: "/pokedevs.png",
    tags: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/CorreaJapaJr/pokedevs",
    demo: "https://correajapajr.github.io/pokedevs/",
  },
  {
    id: 2,
    title: "Bike Japa",
    description: "Landing page profissional para e-commerce de bicicletas elétricas personalizadas, com foco em design premium e experiência do usuário.",
    image: "/bikejapa.png",
    tags: ["HTML5", "CSS3", "Design Responsivo"],
    github: "https://github.com/CorreaJapaJr/bikejapa",
    demo: "https://correajapajr.github.io/bikejapa/",
  },
  {
    id: 3,
    title: "Listas Vue",
    description: "Aplicação dinâmica de gerenciamento de tarefas com uma interface retrô e responsiva, permitindo organização eficiente no dia a dia.",
    image: "/listasvue.png",
    tags: ["Vue.js", "CSS3", "Retro UI"],
    github: "https://github.com/CorreaJapaJr/listas-vue",
    demo: "https://listas-vue.vercel.app/",
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
