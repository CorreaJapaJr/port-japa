import { FiCode, FiLayers, FiMapPin } from 'react-icons/fi'

import { personalInfo } from '../data'
import SectionHeader from './SectionHeader'
import './About.css'

const points = [
  {
    Icon: FiCode,
    title: 'Código com propósito',
    text: 'Componentes organizados, nomes claros e decisões que facilitam a manutenção.',
  },
  {
    Icon: FiLayers,
    title: 'Do layout ao detalhe',
    text: 'Cuidado com hierarquia, responsividade e acessibilidade em cada tela.',
  },
  {
    Icon: FiMapPin,
    title: 'De Imaruí para o mundo',
    text: 'Trabalho remoto e colaboração com times de diferentes lugares e fusos.',
  },
]

export default function About() {
  return (
    <section className='section about' id='about' aria-labelledby='about-title'>
      <div className='container about-grid'>
        <div>
          <SectionHeader
            id='about-title'
            number='01'
            eyebrow='Sobre'
            title='Olá, eu sou o Reginaldo.'
            description='Desenvolvedor front-end de Santa Catarina, com foco em criar produtos digitais que sejam simples de usar e sólidos por dentro.'
          />

          <div className='about-copy'>
            <p>
              Comecei pela curiosidade de entender como as coisas funcionam na
              web e, desde então, transformei isso em rotina: estudar, construir,
              quebrar, refazer e melhorar. Gosto de projetos que misturam design
              e lógica — onde uma boa decisão de interface muda a experiência de
              quem está do outro lado da tela.
            </p>
            <p>
              Hoje trabalho com React, Vue.js e TypeScript, e me sinto confortável
              atravessando o caminho inteiro: do componente à integração com API,
              passando por responsividade, performance e acessibilidade.
            </p>
          </div>

          <ul className='about-points'>
            {points.map(({ Icon, title, text }) => (
              <li key={title}>
                <span className='about-point-icon'>
                  <Icon size={20} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <aside className='about-card card'>
          <p className='about-card-label'>Em resumo</p>
          <h3>{personalInfo.shortName}</h3>
          <p className='about-card-role'>{personalInfo.role}</p>

          <dl className='about-facts'>
            <div>
              <dt>Localização</dt>
              <dd>{personalInfo.location}</dd>
            </div>
            <div>
              <dt>Foco</dt>
              <dd>React, Vue.js e TypeScript</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd className='about-available'>{personalInfo.availability}</dd>
            </div>
          </dl>

          <a className='btn btn-ghost about-card-action' href='#contact'>
            Entrar em contato
          </a>
        </aside>
      </div>
    </section>
  )
}
