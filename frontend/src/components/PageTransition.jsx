import { motion } from 'framer-motion'

const variants = {
  initial: { y: 16 },
  animate: { y: 0 },
  exit: { y: -12 },
}

export default function PageTransition({ children }) {
  return (
    <motion.main
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.main>
  )
}
