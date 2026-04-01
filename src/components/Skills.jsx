import { motion } from 'framer-motion'
import { FaCertificate, FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJs, FaNpm, FaReact, FaVuejs } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'
import { skills } from '../data'
import './Skills.css'

const iconMap = {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, SiTypescript,
  FaGitAlt, FaGithub, FaNpm, FaCertificate
}

const Skills = () => {
  const renderSkillCard = (skill, index) => {
    const Icon = iconMap[skill.icon]
    const content = (
      <>
        <div className="skill-icon">
          {Icon && <Icon />}
        </div>
        <span className="skill-name">{skill.name}</span>
      </>
    )

    if (skill.link) {
      return (
        <motion.a
          key={skill.name}
          href={skill.link}
          target="_blank"
          rel="noopener noreferrer"
          className="skill-card certificate-link"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -10, scale: 1.05 }}
        >
          {content}
        </motion.a>
      )
    }

    return (
      <motion.div
        key={skill.name}
        className="skill-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -10, scale: 1.05 }}
      >
        {content}
      </motion.div>
    )
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Habilidades</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="skills-content">
          <div className="skills-category">
            <h3 className="category-title">Front-end</h3>
            <div className="skills-grid">
              {skills.frontend.map((skill, index) => renderSkillCard(skill, index))}
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Cursos</h3>
            <div className="skills-grid">
              {skills.courses.map((skill, index) => renderSkillCard(skill, index))}
            </div>
            <p className='certificate-link'>Clique no card para ver o certificado</p>
          </div>

     
        </div>
      </div>
    </section>
  )
}

export default Skills
