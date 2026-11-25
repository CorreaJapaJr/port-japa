import { FaCertificate } from 'react-icons/fa6'

import { skills } from '../data'
import SectionHeader from './SectionHeader'
import './Skills.css'

function SkillGroup({ title, items }) {
  return (
    <div className='skill-group card'>
      <h3>{title}</h3>
      <div className='chip-list'>
        {items.map(({ name, Icon }) => (
          <span className='skill-chip' key={name}>
            <Icon aria-hidden='true' />
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section className='section skills' id='skills' aria-labelledby='skills-title'>
      <div className='container'>
        <SectionHeader
          id='skills-title'
          number='03'
          eyebrow='Skills'
          title='Ferramentas do dia a dia'
          description='Tecnologias que uso para tirar ideias do papel e manter os projetos evoluindo.'
        />

        <div className='skills-grid'>
          <SkillGroup title='Front-end' items={skills.core} />
          <SkillGroup title='Ferramentas' items={skills.tools} />
        </div>

        <div className='certificates'>
          <div>
            <h3>Certificações</h3>
            <p>Estudos que complementam a prática e renderam certificados.</p>
          </div>
          <ul>
            {skills.certificates.map(({ name, href }) => (
              <li key={name}>
                <a href={href} target='_blank' rel='noreferrer'>
                  <FaCertificate aria-hidden='true' />
                  {name}
                  <span aria-hidden='true'>↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
