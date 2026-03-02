import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';
import { personalInfo } from '../data';
import './Hero.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const roles = ["dev", "criador", "experimentador", "aprendiz"]
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="hero">
      <motion.div
        className="cursor-glow"
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div className="glitch-wrapper">
              <h1 className="hero-name" data-text={personalInfo.name}>
                {personalInfo.name}
              </h1>
            </motion.div>

            <div className="role-container">
              <span className="role-prefix">//</span>
              <motion.span
                key={currentRole}
                className="role-text"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
              >
                {roles[currentRole]}
              </motion.span>
            </div>

            <motion.p
              className="hero-bio"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              className="about-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="about-content">
                <motion.div
                  className="about-image"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 }}
                >
                  <div className="image-wrapper">
                    <img src={personalInfo.avatar} alt={personalInfo.name} />
                    <div className="image-border"></div>
                  </div>
                </motion.div>

                <motion.div
                  className="about-text"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
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
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
