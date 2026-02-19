import { motion } from 'framer-motion'
import { FaCss3Alt, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaJs, FaNode, FaNpm, FaReact, FaSass, FaVuejs } from 'react-icons/fa'
import { SiTailwindcss, SiTypescript, SiWebpack } from 'react-icons/si'
import { skills } from '../data'
import './Skills.css'

const iconMap = {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, SiTypescript,
  FaGitAlt, FaGithub, FaFigma, FaNpm,
  FaNode, FaSass, SiTailwindcss, SiWebpack
}

const Skills = () => {
  const renderSkillCard = (skill, index) => {
    const Icon = iconMap[skill.icon]

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
        <div className="skill-icon">
          {Icon && <Icon />}
        </div>
        <span className="skill-name">{skill.name}</span>
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
            <h3 className="category-title">Ferramentas</h3>
            <div className="skills-grid">
              {skills.tools.map((skill, index) => renderSkillCard(skill, index))}
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Outras Tecnologias</h3>
            <div className="skills-grid">
              {skills.other.map((skill, index) => renderSkillCard(skill, index))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
