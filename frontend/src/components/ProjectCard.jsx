import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Github, ExternalLink, ArrowRight } from 'lucide-react'
import './ProjectCard.css'

export default function ProjectCard({ project, index = 0 }) {
  const { slug, title, tagline, tech, github, live, image, gradient, category } = project
  const cardGradient = Array.isArray(gradient) && gradient.length >= 2 ? gradient : ['#67e8f9', '#38bdf8']

  return (
    <motion.article
      className="pm-project-card glass-card"
      initial={{ y: 28 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: (index % 6) * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={`/projects/${slug}`} className="pm-project-card__media" aria-label={`View details for ${title}`}>
        <div
          className="pm-project-card__art"
          style={{ background: `linear-gradient(135deg, ${cardGradient[0]}, ${cardGradient[1]})` }}
        >
          {image && <img className="pm-project-card__image" src={image} alt={`${title} project preview`} />}
          <span className="pm-project-card__initials">
            {title.split(' ').map((w) => w[0]).slice(0, 2).join('')}
          </span>
          <div className="pm-project-card__art-grid" />
        </div>
        <span className="tag pm-project-card__category">{category}</span>
      </Link>

      <div className="pm-project-card__body">
        <h3 className="pm-project-card__title">{title}</h3>
        <p className="pm-project-card__tagline">{tagline}</p>

        <div className="pm-project-card__tech">
          {tech.slice(0, 4).map((t) => (
            <span className="tag" key={t}>{t}</span>
          ))}
        </div>

        <div className="pm-project-card__actions">
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm" aria-label={`${title} GitHub repository`}>
              <Github /> Code
            </a>
          )}
          <a
            href={live || undefined}
            target="_blank"
            rel="noreferrer"
            className={`btn btn-outline btn-sm${live ? '' : ' pm-project-card__live-disabled'}`}
            aria-label={`${title} live demo`}
            aria-disabled={!live}
            tabIndex={live ? undefined : -1}
          >
            <ExternalLink /> Live
          </a>
          <Link to={`/projects/${slug}`} className="btn btn-ghost btn-sm pm-project-card__details">
            Details <ArrowRight />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
