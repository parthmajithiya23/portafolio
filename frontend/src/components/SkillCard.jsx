import { motion } from 'framer-motion'
import {
  Atom,
  Blocks,
  Braces,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  Github,
  Palette,
  Route,
  Server,
  Wind,
} from 'lucide-react'
import './SkillCard.css'

const skillIcons = {
  HTML5: FileCode2,
  CSS3: Palette,
  JavaScript: Braces,
  React: Atom,
  'React Router': Route,
  Bootstrap: Blocks,
  'Tailwind CSS': Wind,
  'Node.js': Server,
  'Express.js': Server,
  MongoDB: Database,
  Git: GitBranch,
  GitHub: Github,
}

export default function SkillCard({ name, abbr, index = 0 }) {
  const Icon = skillIcons[name] || Code2

  return (
    <motion.div
      className="skill-card glass-card"
      initial={{ y: 20 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 8) * 0.05, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
    >
      <div className="skill-card__badge">{abbr}</div>
      <div className="skill-card__content">
        <Icon className="skill-card__icon" aria-hidden="true" />
        <p className="skill-card__name">{name}</p>
      </div>
    </motion.div>
  )
}
