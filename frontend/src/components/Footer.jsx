import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, Phone, ArrowUpRight } from 'lucide-react'
import { socials } from '../data/socials'
import './Footer.css'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="nav__logo-mark footer__mark">PM</span>
            <div>
              <p className="footer__name">Parth Majithiya</p>
              <p className="footer__role text-faint">MERN Stack Developer</p>
            </div>
          </div>

          <div className="footer__cols">
            <div className="footer__col">
              <p className="footer__col-title">Navigate</p>
              <Link to="/about">About</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/projects">Projects</Link>
            </div>
            <div className="footer__col">
              <p className="footer__col-title">Connect</p>
              <a href={socials.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight className="footer__ext" /></a>
              <a href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight className="footer__ext" /></a>
              <a href="tel:+918866598170">+91 88665 98170</a>
              <Link to="/contact">Hire Me</Link>
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="footer__bottom">
          <p className="text-faint">© {YEAR} Parth Majithiya. All rights reserved.</p>
          <div className="footer__socials">
            <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
            <a href={`mailto:${socials.email}`} aria-label="Email"><Mail /></a>
            <a href="tel:+918866598170" aria-label="Phone"><Phone /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
