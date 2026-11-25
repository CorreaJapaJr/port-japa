import { FiArrowUpRight, FiMapPin, FiPhone } from 'react-icons/fi'

import { personalInfo } from '../data'
import SectionHeader from './SectionHeader'
import './Contact.css'

export default function Contact() {
  return (
    <section className='section contact' id='contact' aria-labelledby='contact-title'>
      <div className='container'>
        <SectionHeader
          id='contact-title'
          number='05'
          eyebrow='Contato'
          title='Vamos trabalhar juntos?'
          description='Tem um projeto, uma ideia ou só quer trocar uma ideia sobre front-end? Me chama.'
        />

        <div className='contact-grid'>
          <div className='contact-main card'>
            <p className='contact-label'>O jeito mais rápido</p>
            <a className='contact-email' href={`mailto:${personalInfo.email}`}>
              {personalInfo.email}
              <FiArrowUpRight aria-hidden='true' />
            </a>
            <p className='contact-note'>
              Respondo mensagens de segunda a sexta. Se preferir, também dá para
              ligar ou mandar um WhatsApp.
            </p>

            <div className='contact-direct'>
              <a href={personalInfo.phoneHref}>
                <FiPhone aria-hidden='true' /> {personalInfo.phone}
              </a>
              <span>
                <FiMapPin aria-hidden='true' /> {personalInfo.location}
              </span>
            </div>
          </div>

          <aside className='contact-side card'>
            <span className='contact-status'>
              <span aria-hidden='true' /> {personalInfo.availability}
            </span>
            <p>
              Aberto para projetos freelance, colaborações e oportunidades para
              crescer como desenvolvedor.
            </p>
            <div className='contact-social'>
              {personalInfo.social.map(({ label, href, Icon }) => (
                <a key={label} href={href} target='_blank' rel='noreferrer' aria-label={label}>
                  <Icon size={18} />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
