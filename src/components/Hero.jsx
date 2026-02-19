import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
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
              className="terminal-box"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="terminal-header">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
              </div>
              <div className="terminal-body">
                <p><span className="prompt">$</span> sobre_mim</p>
                <p className="terminal-output">{personalInfo.bio}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
