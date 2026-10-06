import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Github,
  Linkedin,
  Download,
  ArrowRight,
  Sparkles,
  Layers,
  Atom,
  Webhook,
  Database,
  MonitorSmartphone,
  LayoutDashboard,
  PenTool,
  Blocks,
  Wrench,
  Lightbulb,
} from 'lucide-react'
import PageTransition from '../components/PageTransition'
import SEO from '../components/SEO'
import AnimatedBackground from '../components/AnimatedBackground'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import ExperienceSection from '../components/ExperienceSection'
import CertificatesSection from '../components/CertificatesSection'
import { projects } from '../data/projects'
import { socials } from '../data/socials'
import { allSkillsFlat } from '../data/skills'
import './Home.css'
import pic from './photo.jpeg';


const highlights = [
  { label: 'Focus', value: 'MERN Stack' },
  { label: 'Approach', value: 'Product-minded' },
  { label: 'Education', value: 'BCA Graduate' },
]

const services = [
  {
    icon: Layers,
    title: 'MERN Stack Web Development',
    text: 'End-to-end web applications built with the MERN stack, from database schema to a polished, responsive UI.',
  },
  {
    icon: Atom,
    title: 'React Development',
    text: 'Component-driven, accessible interfaces built with React and React Router, styled with Tailwind CSS or Bootstrap.',
  },
  {
    icon: Webhook,
    title: 'REST API Development',
    text: 'Predictable, well-structured REST APIs built with Node.js and Express.js that are easy to extend and maintain.',
  },
  {
    icon: Database,
    title: 'MongoDB & Backend Development',
    text: 'MongoDB schemas and backend logic designed around how the data is actually used, not just how it is stored.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Responsive Website Development',
    text: 'Layouts that hold up across desktop, tablet and mobile, with attention to real-world responsive behaviour.',
  },
  {
    icon: LayoutDashboard,
    title: 'Business / Admin Dashboard Development',
    text: 'Data-heavy dashboards with tables, filters and forms for managing bookings, inventory or customer records.',
  },
]

const whyWorkWithMe = [
  {
    icon: PenTool,
    title: 'Clean & Responsive UI',
    text: 'Interfaces built to feel fast and obvious to use, and genuinely responsive rather than just shrunk down for mobile.',
  },
  {
    icon: Blocks,
    title: 'MERN Stack Development',
    text: 'Comfortable across the stack — from the React frontend to the Express API to the MongoDB schema behind it.',
  },
  {
    icon: Wrench,
    title: 'Practical Project Experience',
    text: 'A track record of shipping real, working projects — booking systems, dashboards and e-commerce flows.',
  },
  {
    icon: Lightbulb,
    title: 'Problem-Solving & Continuous Improvement',
    text: 'I start with the actual problem, not just the feature request, and keep refining my toolkit through practical work.',
  },
]

const marqueeSkills = allSkillsFlat.map((skill) => skill.name)
const typingTitles = ['MERN Stack Developer', 'Web Enthusiast', 'BCA Graduate']

export default function Home() {
  const [typedRole, setTypedRole] = useState('')
  const [typingTitleIndex, setTypingTitleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  useEffect(() => {
    const currentTitle = typingTitles[typingTitleIndex]
    const isComplete = typedRole === currentTitle
    const isEmpty = typedRole.length === 0
    const delay = isComplete && !isDeleting ? 1500 : isEmpty && isDeleting ? 450 : isDeleting ? 55 : 90

    const timeoutId = window.setTimeout(() => {
      if (!isDeleting && !isComplete) {
        setTypedRole(currentTitle.slice(0, typedRole.length + 1))
      } else if (!isDeleting) {
        setIsDeleting(true)
      } else if (!isEmpty) {
        setTypedRole(currentTitle.slice(0, typedRole.length - 1))
      } else {
        setIsDeleting(false)
        setTypingTitleIndex((index) => (index + 1) % typingTitles.length)
      }
    }, delay)

    return () => window.clearTimeout(timeoutId)
  }, [isDeleting, typedRole, typingTitleIndex])

  const highlightsWithProjects = [...highlights, { label: 'Projects Shipped', value: `${projects.length}+` }]

  return (
    <PageTransition>
      <SEO
        title="Home"
        description="Parth Majithiya — MERN Stack Developer. View projects, skills and get in touch."
      />

      {/* ================= HERO ================= */}
      <section className="hero">
        <AnimatedBackground />
        <div className="container hero__grid">
          <div className="hero__content">
            <motion.span
              className="eyebrow"
              initial={{ y: 12 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Open to opportunities
            </motion.span>

            <motion.h1
              className="hero__title"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Hi, I&rsquo;m  */}
              <span className="gradient-text">Parth Majithiya</span>
            </motion.h1>

            <motion.p
              className="hero__role"
              aria-live="polite"
              initial={{ y: 16 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span>{typedRole}</span><span className="typing-cursor" aria-hidden="true" />
            </motion.p>

            <motion.p
              className="hero__desc"
              initial={{ y: 16 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              I&rsquo;m a BCA graduate who builds MERN Stack web applications with
              MongoDB, Express.js, React and Node.js, with a focus on clean
              interfaces and reliable APIs.
            </motion.p>

            <motion.div
              className="hero__actions"
              initial={{ y: 16 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to="/projects" className="btn btn-primary">
                View Projects <ArrowRight />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Hire Me
              </Link>
              <a href="./Parth Majithiya - Resume.pdf" target="_blank" rel="noopener noreferrer" download="Parth_Majithiya_Resume.pdf" className="btn btn-outline">
                <Download /> Resume
              </a>
            </motion.div>

            <motion.div
              className="hero__socials"
              initial={{ y: 8 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
            >
              <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
              <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
            </motion.div>
          </div>

          <div className="hero__visual">
            <div className="hero-profile">
              <div className="hero-profile__glow" />
              <div className="hero-profile__ring">
                <img
                  className="hero-profile__image"
                  src={pic}
                  alt="Parth Majithiya"
                />
              </div>
              <div className="hero-profile__badge">
                <span className="hero-profile__dot" />
                Available for work
              </div>
              <p className="hero-profile__hint mono">Parth Majithiya</p>
            </div>
          </div>
        </div>

        <div className="hero__highlights container">
          {highlightsWithProjects.map((h, i) => (
            <motion.div
              key={h.label}
              className="hero__highlight glass"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.08 }}
            >
              <span className="hero__highlight-value">{h.value}</span>
              <span className="hero__highlight-label mono">{h.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= SKILLS MARQUEE ================= */}
      <section className="marquee-section">
        <div className="marquee">
          <div className="marquee__track">
            {[...marqueeSkills, ...marqueeSkills].map((s, i) => (
              <span className="marquee__item" key={i}>
                {s} <span className="marquee__sep">/</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <ExperienceSection />

      {/* ================= FEATURED PROJECTS ================= */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head pm-home-projects-head">
              <div>
                <span className="eyebrow">Selected Work</span>
                <h2 className="section-title">Featured projects</h2>
                <p className="section-desc">
                  A few MERN Stack and frontend builds — from booking systems to
                  e-commerce — solving real, practical problems.
                </p>
              </div>
              <Link to="/projects" className="btn btn-outline pm-home-projects-link">
                All Projects <ArrowRight />
              </Link>
            </div>
          </Reveal>

          {/* Featured projects */}
          <div className="grid pm-home-projects-grid">
            {projects.slice(0, 6).map((project, i) => (
              <ProjectCard project={project} index={i} key={project.slug} />
            ))}
          </div>
        </div>
      </section>

      <CertificatesSection />

      {/* ================= SERVICES ================= */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div>
                <span className="eyebrow">What I Offer</span>
                <h2 className="section-title">Services</h2>
                <p className="section-desc">
                  Practical MERN Stack help across the parts of a web
                  product I actually work with day to day.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid pm-services-grid">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={(i % 6) * 0.06}>
                <div className="pm-service-card glass-card">
                  <div className="pm-service-card__icon">
                    <service.icon />
                  </div>
                  <h3 className="pm-service-card__title">{service.title}</h3>
                  <p className="pm-service-card__text">{service.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY WORK WITH ME ================= */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div>
                <span className="eyebrow">Why Work With Me</span>
                <h2 className="section-title">What you can expect</h2>
              </div>
            </div>
          </Reveal>

          <div className="grid pm-why-us-grid">
            {whyWorkWithMe.map((item, i) => (
              <Reveal key={item.title} delay={(i % 4) * 0.08}>
                <div className="pm-why-us-card glass-card">
                  <div className="pm-why-us-card__icon">
                    <item.icon />
                  </div>
                  <h3 className="pm-why-us-card__title">{item.title}</h3>
                  <p className="pm-why-us-card__text">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="cta glass">
              <AnimatedBackground variant="section" />
              <div className="cta__content">
                <span className="eyebrow"><Sparkles /> Let&rsquo;s work together</span>
                <h2 className="cta__title">
                  Have a project in mind? <span className="gradient-text">Let&rsquo;s build it.</span>
                </h2>
                <p className="cta__desc">
                  Whether it&rsquo;s a MERN Stack web app or an idea that needs a solid
                  MERN foundation, I&rsquo;d love to hear about it.
                </p>
                <div className="hero__actions">
                  <Link to="/contact" className="btn btn-primary">
                    Hire Me <ArrowRight />
                  </Link>
                  <Link to="/about" className="btn btn-outline">
                    Learn more about me
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}