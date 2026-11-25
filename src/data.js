import { FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaReact, FaVuejs } from 'react-icons/fa'
import { FaCertificate, FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { FiMail } from 'react-icons/fi'
import { SiSass, SiTailwindcss, SiTypescript } from 'react-icons/si'

import avatar from './assets/me.jpeg'
import bikejapa from './assets/bikejapa.png'
import listasvue from './assets/listasvue.png'
import pokedevs from './assets/pokedevs.png'

export const personalInfo = {
  name: 'Reginaldo da Rosa Correa Junior',
  shortName: 'Reginaldo Correa',
  role: 'Front-end Developer',
  location: 'Imaruí, SC — Brasil',
  availability: 'Disponível para novos projetos',
  email: 'reginaldodarosacorreajr@gmail.com',
  phone: '+55 48 99615-1778',
  phoneHref: 'tel:+5548996151778',
  bio: 'Desenvolvedor front-end que gosta de transformar ideias em interfaces claras, rápidas e fáceis de usar. Trabalho principalmente com React, Vue.js e TypeScript.',
  avatar,
  social: [
    { label: 'GitHub', href: 'https://github.com/CorreaJapaJr', Icon: FaGithub },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/reginaldo-da-rosa-correa-junior-190799218/',
      Icon: FaLinkedinIn,
    },
    {
      label: 'E-mail',
      href: 'mailto:reginaldodarosacorreajr@gmail.com',
      Icon: FiMail,
    },
  ],
}

export const skills = {
  core: [
    { name: 'JavaScript', Icon: FaJs },
    { name: 'TypeScript', Icon: SiTypescript },
    { name: 'React', Icon: FaReact },
    { name: 'Vue.js', Icon: FaVuejs },
    { name: 'HTML5', Icon: FaHtml5 },
    { name: 'CSS3', Icon: FaCss3Alt },
  ],
  tools: [
    { name: 'Node.js', Icon: FaNodeJs },
    { name: 'Sass', Icon: SiSass },
    { name: 'Tailwind CSS', Icon: SiTailwindcss },
  ],
  certificates: [
    {
      name: 'Fullstack',
      href: 'https://app.rocketseat.com.br/certificates/7ca13a09-18fc-470c-a90a-6f66560eb540',
    },
    {
      name: 'React',
      href: 'https://app.rocketseat.com.br/certificates/5bea852b-d234-45cf-bd7a-15ef0d6999f1',
    },
  ],
}

export const projects = [
  {
    id: 1,
    title: 'Pokédevs',
    category: 'Galeria interativa',
    description:
      'Uma galeria de criaturas inspiradas no mundo da programação, com personagens, habilidades e uma interface divertida de explorar.',
    image: pokedevs,
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/CorreaJapaJr/pokedevs',
    demo: 'https://correajapajr.github.io/pokedevs/',
  },
  {
    id: 2,
    title: 'Bike Japa',
    category: 'Landing page',
    description:
      'Página de vendas para bicicletas elétricas personalizadas, com foco em hierarquia visual, responsividade e chamadas para ação.',
    image: bikejapa,
    tags: ['HTML5', 'CSS3', 'Responsivo'],
    github: 'https://github.com/CorreaJapaJr/bikejapa',
    demo: 'https://correajapajr.github.io/bikejapa/',
  },
  {
    id: 3,
    title: 'Listas Vue',
    category: 'Produtividade',
    description:
      'Aplicativo de listas e tarefas com interface retrô, criação e organização de itens e layout adaptado para celular.',
    image: listasvue,
    tags: ['Vue.js', 'CSS3', 'LocalStorage'],
    github: 'https://github.com/CorreaJapaJr/listas-vue',
    demo: 'https://listas-vue.vercel.app/',
  },
]

export const experience = [
  {
    id: 1,
    year: '2024 — hoje',
    role: 'Front-end Developer Junior',
    company: 'Web Jasper',
    description:
      'Desenvolvimento de interfaces web responsivas com Vue.js e TypeScript, componentização de UI e integração com APIs REST.',
    tags: ['Vue.js', 'TypeScript', 'APIs REST'],
  },
  {
    id: 2,
    year: 'Cursos',
    role: 'Formação contínua',
    company: 'Rocketseat',
    description:
      'Trilhas de Fullstack e React, com prática em projetos, componentes, state management e boas práticas de desenvolvimento web.',
    tags: ['React', 'Fullstack', 'Certificados'],
  },
]
