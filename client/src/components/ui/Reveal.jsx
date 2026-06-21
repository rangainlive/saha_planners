import { motion } from 'framer-motion'

const variants = {
  up:    { hidden: { opacity: 0, y: 40 },        visible: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -30 },       visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -50 },       visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 50 },        visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.88 },  visible: { opacity: 1, scale: 1 } },
  fade:  { hidden: { opacity: 0 },               visible: { opacity: 1 } },
}

export default function Reveal({ children, direction = 'up', delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={variants[direction]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}
