import { motion } from 'framer-motion'
import { experience } from '../data'
import './Experience.css'

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experiência</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="timeline">
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <h3 className="timeline-role">{item.role}</h3>
                <h4 className="timeline-company">{item.company}</h4>
                <p className="timeline-description">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
