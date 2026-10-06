import { Link, useParams } from 'react-router-dom'
import { Github, ExternalLink, ArrowLeft, Check } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import ProjectCard from '../components/ProjectCard'
import { getProjectBySlug, projects } from '../data/projects'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)
  const projectGradient = Array.isArray(project?.gradient) && project.gradient.length >= 2
    ? project.gradient
    : ['#67e8f9', '#38bdf8']

  if (!project) {
    return (
      <PageTransition>
        <SEO title="Project not found" description="This project could not be found." />
        <section className="section center-col">
          <div className="container center-col">
            <h1 className="section-title">Project not found</h1>
            <p className="section-desc">The project you&rsquo;re looking for doesn&rsquo;t exist.</p>
            <Link to="/projects" className="btn btn-primary" style={{ marginTop: 24 }}>
              <ArrowLeft /> Back to Projects
            </Link>
          </div>
        </section>
      </PageTransition>
    )
  }

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 2)

  return (
    <PageTransition>
      <SEO title={project.title} description={project.description} />

      <section className="section project-detail">
        <div className="container">
          <Reveal>
            <Link to="/projects" className="btn btn-ghost project-detail__back">
              <ArrowLeft /> All Projects
            </Link>
          </Reveal>

          <div className="project-detail__header">
            <Reveal>
              <span className="tag tag-accent">{project.category}</span>
              <h1 className="project-detail__title">{project.title}</h1>
              <p className="project-detail__tagline">{project.tagline}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="project-detail__actions">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline">
                    <Github /> View Code
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary">
                    <ExternalLink /> Live Demo
                  </a>
                )}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div
              className="project-detail__banner"
              style={{ background: `linear-gradient(135deg, ${projectGradient[0]}, ${projectGradient[1]})` }}
            >
              {project.image && <img className="project-detail__image" src={project.image} alt={`${project.title} project preview`} />}
              <span className="project-detail__banner-initials">
                {project.title.split(' ').map((w) => w[0]).slice(0, 2).join('')}
              </span>
              <div className="project-card__art-grid" />
            </div>
          </Reveal>

          <div className="project-detail__body">
            <Reveal className="project-detail__main">
              <h2 className="project-detail__section-title">Overview</h2>
              <p className="project-detail__text">{project.longDescription}</p>

              <h2 className="project-detail__section-title">Key features</h2>
              <ul className="project-detail__features">
                {project.features.map((f) => (
                  <li key={f}>
                    <Check /> {f}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1} className="project-detail__aside">
              <div className="glass-card project-detail__card">
                <p className="project-detail__card-label mono">Tech Stack</p>
                <div className="project-detail__tech">
                  {project.tech.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
                <div className="divider" style={{ margin: '20px 0' }} />
                <p className="project-detail__card-label mono">Links</p>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-detail__link">
                    <Github /> Repository
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="project-detail__link">
                    <ExternalLink /> Live Demo
                  </a>
                )}
                {!project.github && !project.live && (
                  <p className="project-detail__text" style={{ fontSize: 13 }}>No public links yet.</p>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section project-detail__related">
          <div className="container">
            <Reveal>
              <span className="eyebrow">Keep Exploring</span>
              <h2 className="section-title">More projects</h2>
            </Reveal>
            <div className="grid home-projects-grid" style={{ marginTop: 40 }}>
              {related.map((p, i) => (
                <ProjectCard project={p} index={i} key={p.slug} />
              ))}
            </div>
          </div>
        </section>
      )}
    </PageTransition>
  )
}