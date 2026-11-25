import { experience } from '../data'
import SectionHeader from './SectionHeader'
import './Experience.css'

export default function Experience() {
  return (
    <section className='section experience' id='experience' aria-labelledby='experience-title'>
      <div className='container'>
        <SectionHeader
          id='experience-title'
          number='04'
          eyebrow='Experiência'
          title='Caminho até aqui'
        />

        <div className='timeline'>
          {experience.map((item) => (
            <article className='timeline-item' key={item.id}>
              <div className='timeline-line' aria-hidden='true'>
                <span className='timeline-dot' />
              </div>
              <div className='timeline-content card'>
                <span className='timeline-year'>{item.year}</span>
                <h3>{item.role}</h3>
                <p className='timeline-company'>{item.company}</p>
                <p className='timeline-description'>{item.description}</p>
                <div className='chip-list'>
                  {item.tags.map((tag) => (
                    <span className='chip' key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
