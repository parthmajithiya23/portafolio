import { motion } from 'framer-motion'

/**
 * Wraps children in a scroll-triggered reveal animation.
 * Use `delay` to stagger sibling reveals.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  once = true,
  className = '',
  as = 'div',
}) {
  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      className={className}
      initial={{ y }}
      whileInView={{ y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  )
}
