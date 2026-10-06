import { motion } from 'framer-motion'
import './AnimatedBackground.css'

/**
 * Soft, slow-moving gradient orbs + grid overlay used behind the hero and
 * section backgrounds. Kept subtle on purpose — ambient, not distracting.
 */
export default function AnimatedBackground({ variant = 'default' }) {
  return (
    <div className={`ambient-bg ambient-bg--${variant}`} aria-hidden="true">
      <div className="ambient-grid" />
      <motion.div
        className="orb orb-orange"
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="orb orb-blue"
        animate={{ x: [0, -50, 30, 0], y: [0, 40, -20, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="ambient-fade" />
    </div>
  )
}
