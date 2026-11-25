import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

import './Navbar.css'

const links = [
  { href: '#about', label: 'Sobre' },
  { href: '#projects', label: 'Projetos' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experiência' },
  { href: '#contact', label: 'Contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <nav className='container nav' aria-label='Navegação principal'>
        <a className='brand' href='#top' aria-label='Voltar ao início'>
          RC<span>.</span>
        </a>

        <ul className={`nav-links${open ? ' is-open' : ''}`} id='mobile-menu'>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a className='nav-cta' href='#contact'>
          Vamos conversar
        </a>

        <button
          type='button'
          className='menu-toggle'
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls='mobile-menu'
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>
    </header>
  )
}
