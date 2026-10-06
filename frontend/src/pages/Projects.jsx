import { useMemo, useState } from 'react'
import PageTransition from '../components/PageTransition'
import SEO from '../components/SEO'
import AnimatedBackground from '../components/AnimatedBackground'
import Reveal from '../components/Reveal'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import './Projects.css'

export default function Projects() {
  const [active, setActive] = useState('All')

  const categories = useMemo(
    () => ['All', ...new Set(projects.map((project) => project.category).filter(Boolean))],
    []
  )

  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active]
  )

  return (
    <PageTransition>
      <SEO
        title="Projects"
        description="Explore projects by Parth Majithiya including an e-commerce platform, transport management system, movie ticket booking app and more."
      />

      <section className="section projects-hero">
        <AnimatedBackground variant="section" />
        <div className="container">
          <Reveal>
            <span className="eyebrow">Portfolio</span>
            <h1 className="section-title">Projects I&rsquo;ve built</h1>
            <p className="section-desc">
              A mix of MERN Stack applications and frontend builds —
              each one solving a real, practical use case.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="projects-filter" role="tablist" aria-label="Filter projects by category">
              {categories.map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={active === cat}
                  className={`projects-filter__btn ${active === cat ? 'projects-filter__btn--active' : ''}`}
                  onClick={() => setActive(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section projects-list">
        <div className="container">
          <div className="grid pm-projects-grid">
            {filtered.map((project, i) => (
              <ProjectCard project={project} index={i} key={project.slug} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-dim">No projects in this category yet.</p>
          )}
        </div>
      </section>
    </PageTransition>
  )
}
