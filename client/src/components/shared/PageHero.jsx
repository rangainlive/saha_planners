import { Link }  from 'react-router-dom'
import { motion } from 'framer-motion'

export default function PageHero({ title, goldTitle, subtitle, crumb }) {
  return (
    <section className="relative pt-36 pb-20 px-6 overflow-hidden border-b border-white/5"
      style={{
        background: 'radial-gradient(ellipse 600px 400px at 75% 50%,rgba(201,148,58,0.05) 0%,transparent 70%), linear-gradient(160deg,#0a0e1a 0%,#0d1520 100%)',
        backgroundImage: `
          radial-gradient(ellipse 600px 400px at 75% 50%,rgba(201,148,58,0.05) 0%,transparent 70%),
          linear-gradient(160deg,#0a0e1a 0%,#0d1520 100%),
          repeating-linear-gradient(0deg,transparent,transparent 59px,rgba(201,148,58,0.025) 60px),
          repeating-linear-gradient(90deg,transparent,transparent 59px,rgba(201,148,58,0.02) 60px)
        `,
      }}
    >
      <div className="inner">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-xs text-white/35 mb-5"
        >
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <i className="fa fa-chevron-right text-[8px]" />
          <span>{crumb}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading font-bold leading-tight mb-4"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.8rem)' }}
        >
          {title} <span className="gold-text">{goldTitle}</span>
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-base max-w-xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
