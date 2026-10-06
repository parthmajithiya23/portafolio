import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
]

const RESUME_HREF = './Parth Majithiya - Resume.pdf'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <NavLink to="/" className="nav__logo" aria-label="Parth Majithiya — home">
          <span className="nav__logo-mark">PM</span>
          <span className="nav__logo-text">Parth <span className="gradient-text"> Majithiya</span></span>
        </NavLink>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/contact" end className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}>
            Contact
          </NavLink>
        </nav>

        <div className="nav__actions">
          <NavLink to="/contact" className="btn btn-primary btn-sm">
            Hire Me
          </NavLink>
          <a href={RESUME_HREF} target="_blank" rel="noopener noreferrer" download="Parth_Majithiya_Resume.pdf" className="btn btn-outline btn-sm nav__resume-btn">
            Resume
          </a>
        </div>

        <button
          className="nav__burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="nav__mobile-inner">
              {LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) => `nav__mobile-link ${isActive ? 'nav__link--active' : ''}`}
                >
                  {link.label}
                </NavLink>
              ))}
              <a href={RESUME_HREF} target="_blank" rel="noopener noreferrer" download="Parth_Majithiya_Resume.pdf" className="nav__mobile-link">
                Resume``
              </a>
              <NavLink to="/contact" end className={({ isActive }) => `nav__mobile-link ${isActive ? 'nav__link--active' : ''}`}>
                Contact
              </NavLink>
              <NavLink to="/contact" className="nav__mobile-link nav__mobile-link--cta">
                Hire Me
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}