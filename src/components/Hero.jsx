import { FiArrowDown, FiArrowUpRight, FiMapPin } from 'react-icons/fi'

import { personalInfo } from '../data'
import './Hero.css'

export default function Hero() {
  return (
    <section className='hero' aria-labelledby='hero-title'>
      <div className='container hero-grid'>
        <div className='hero-copy rise'>
          <p className='hero-status'>
            <span className='status-dot' aria-hidden='true' />
            {personalInfo.availability}
          </p>

          <h1 id='hero-title'>
            Reginaldo
            <br />
            <span>Correa.</span>
          </h1>

          <p className='hero-role'>{personalInfo.role}</p>
          <p className='hero-lead'>
            Interfaces claras, rápidas e feitas para pessoas — com atenção
            aos detalhes que fazem diferença na hora de usar.
          </p>
          <p className='hero-bio'>{personalInfo.bio}</p>

          <div className='hero-actions'>
            <a className='btn btn-primary' href='#projects'>
              Ver projetos <FiArrowUpRight size={18} />
            </a>
            <a className='btn btn-ghost' href='#contact'>
              Falar comigo
            </a>
          </div>

          <div className='hero-meta'>
            <span className='hero-location'>
              <FiMapPin size={16} /> {personalInfo.location}
            </span>
            <span className='hero-social'>
              {personalInfo.social.map(({ label, href, Icon }) => (
                <a key={label} href={href} target='_blank' rel='noreferrer' aria-label={label}>
                  <Icon size={18} />
                </a>
              ))}
            </span>
          </div>
        </div>

        <div className='hero-visual rise'>
          <div className='hero-photo-card'>
            <img
              src={personalInfo.avatar}
              alt={`Foto de ${personalInfo.shortName}`}
              width='720'
              height='1280'
            />
          </div>
          <div className='hero-photo-label'>
            <span className='hero-photo-label-dot' aria-hidden='true' />
            {personalInfo.location}
          </div>
        </div>
      </div>

      <a className='scroll-hint' href='#about' aria-label='Ir para a seção Sobre'>
        <span>role para baixo</span>
        <FiArrowDown size={16} />
      </a>
    </section>
  )
}
