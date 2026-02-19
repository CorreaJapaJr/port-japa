import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'
import './Navbar.css'

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projetos' },
    { id: 'experience', label: 'Experiência' },
    { id: 'contact', label: 'Contato' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Detectar seção ativa
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 200

      sections.forEach((section, index) => {
        if (section) {
          const top = section.offsetTop
          const bottom = top + section.offsetHeight
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(navItems[index].id)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <motion.div
          className="navbar-logo"
          whileHover={{ scale: 1.05 }}
        >
          <span className="logo-text">&lt;Dev/&gt;</span>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="navbar-menu desktop-menu">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <motion.button
            className="theme-toggle"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </motion.button>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}
        initial={{ opacity: 0, x: '100%' }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          x: mobileMenuOpen ? 0 : '100%'
        }}
        transition={{ duration: 0.3 }}
      >
        <ul>
          {navItems.map((item) => (
            <motion.li
              key={item.id}
              whileHover={{ x: 10 }}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className={activeSection === item.id ? 'active' : ''}
              >
                {item.label}
              </button>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
