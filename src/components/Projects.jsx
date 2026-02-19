import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiCode, FiExternalLink, FiGithub } from 'react-icons/fi'
import { projects } from '../data'
import './Projects.css'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header-alt"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="section-number">02.</span>
          <h2 className="section-title-alt">coisas que construí</h2>
        </motion.div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="project-number">
                <FiCode />
                <span>0{index + 1}</span>
              </div>

              <div className="project-content">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-stack">
                  {project.tags.map((tag) => (
                    <span key={tag} className="stack-item">{tag}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FiGithub /> código
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <FiExternalLink /> ver ao vivo
                  </a>
                </div>
              </div>

              <motion.div
                className="project-visual"
                animate={{
                  scale: hoveredProject === project.id ? 1.05 : 1,
                  opacity: hoveredProject === project.id ? 1 : 0.7
                }}
              >
                <img src={project.image} alt={project.title} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
