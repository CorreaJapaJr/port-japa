import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMapPin, FiTwitter } from 'react-icons/fi';
import { personalInfo } from '../data';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >


        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="image-wrapper">
              <img src={personalInfo.avatar} alt={personalInfo.name} />
              <div className="image-border"></div>
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="about-bio">{personalInfo.bio}</p>

            <div className="about-info">
              <div className="info-item">
                <FiMapPin className="info-icon" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <div className="social-links">
              <motion.a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub />
              </motion.a>
              <motion.a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiLinkedin />
              </motion.a>
              <motion.a
                href={personalInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiTwitter />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
