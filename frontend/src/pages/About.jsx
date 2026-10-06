import { Link } from 'react-router-dom'
import { GraduationCap, Code2, ArrowRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import SEO from '../components/SEO'
import AnimatedBackground from '../components/AnimatedBackground'
import Reveal from '../components/Reveal'
import './About.css'

const pillars = [
  {
    icon: GraduationCap,
    title: 'Foundation',
    text: 'Completed my BCA, where I built a solid base in programming logic, data structures and how the web actually works under the hood.',
  },
  {
    icon: Code2,
    title: 'MERN Stack',
    text: 'I work with MongoDB, Express.js, React and Node.js to build responsive, component-driven applications — from UI to API to database.',
  },
 ]

export default function About() {
  return (
    <PageTransition>
      <SEO
        title="About"
        description="About Parth Majithiya — BCA graduate and MERN Stack Developer ."
      />

      <section className="section about-hero">
        <AnimatedBackground variant="section" />
        <div className="container about-hero__inner">
          <Reveal>
            <span className="eyebrow">About Me</span>
            <h1 className="section-title about-hero__title">
              Building on the web, <span className="gradient-text">one product at a time.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="about-hero__desc">
              I&rsquo;m Parth Majithiya, a MERN Stack Developer with a Bachelor&rsquo;s in
              Computer Applications (BCA). I enjoy turning ideas into working
              products — clean interfaces backed by solid, reliable APIs. Outside
              of client and personal projects, I&rsquo;m always sharpening my tools
              and looking for better ways to turn ideas into useful products.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section about-pillars">
        <div className="container">
          <div className="grid about-pillars__grid">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="about-pillar glass-card">
                  <div className="about-pillar__icon">
                    <p.icon />
                  </div>
                  <h3 className="about-pillar__title">{p.title}</h3>
                  <p className="about-pillar__text">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-story">
        <div className="container about-story__grid">
          <Reveal>
            <span className="eyebrow">How I Work</span>
            <h2 className="section-title">From idea to interface to API.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="about-story__text">
              <p>
                My approach starts with understanding the actual problem — not
                just the feature request. On the frontend, I care about
                interfaces that feel fast and obvious to use, built with React
                and styled to be genuinely responsive, not just &ldquo;shrunk
                down&rdquo; for mobile.
              </p>
              <p>
                On the backend, I design REST APIs with Express and Node.js
                that are predictable and easy to extend, backed by MongoDB
                schemas that match how the data is actually used. I write code
                that the next person — often future me — can read without a
                walkthrough.
              </p>
              <p>
                I&rsquo;m continuously adding depth to that toolkit through practical
                projects, thoughtful architecture and a close eye on the details
                that make MERN Stack applications feel reliable.
              </p>
              <Link to="/skills" className="btn btn-outline about-story__cta">
                See my full skill set <ArrowRight />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}
