import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

import { projects } from '../data'
import SectionHeader from './SectionHeader'
import './Projects.css'

export default function Projects() {
  return (
    <section className='section projects' id='projects' aria-labelledby='projects-title'>
      <div className='container'>
        <SectionHeader
          id='projects-title'
          number='02'
          eyebrow='Projetos'
          title='Coisas que já construí'
          description='Cada projeto aqui tem um link público: você pode ver a interface rodando e o código-fonte.'
        />

        <div className='projects-grid'>
          {projects.map((project, index) => (
            <article className='project-card card' key={project.id}>
              <div className='project-image'>
                <img
                  src={project.image}
                  alt={`Prévia da interface do projeto ${project.title}`}
                  width='929'
                  height='823'
                  loading='lazy'
                />
              </div>

              <div className='project-body'>
                <div className='project-meta'>
                  <span className='project-index'>0{index + 1}</span>
                  <span>{project.category}</span>
                </div>

                <h3>{project.title}</h3>
                <p className='project-description'>{project.description}</p>

                <div className='chip-list project-tags'>
                  {project.tags.map((tag) => (
                    <span className='chip' key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className='project-actions'>
                  <a href={project.demo} target='_blank' rel='noreferrer'>
                    Ver demo <FaExternalLinkAlt size={13} />
                  </a>
                  <a href={project.github} target='_blank' rel='noreferrer'>
                    <FaGithub size={16} /> Código
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
