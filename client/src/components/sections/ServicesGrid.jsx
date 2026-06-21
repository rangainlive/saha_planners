import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from '@/components/ui/Reveal'
import { SERVICES } from '@/data'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const cardVariant = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function ServicesGrid({ preview = true }) {
  const items = preview ? SERVICES : SERVICES

  return (
    <section className="section-wrap bg-gradient-to-b from-navy to-navy-card">
      <div className="inner">
        <div className="text-center mb-14">
          <Reveal><p className="eyebrow mb-4">What We Offer</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="section-heading">
              Comprehensive <span className="gold-text">Design &amp; Planning</span> Services
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="section-sub mx-auto text-center">
              End-to-end architectural solutions for residential and commercial projects, delivered by experienced professionals.
            </p>
          </Reveal>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {items.map(svc => (
            <motion.div key={svc.id} variants={cardVariant}
              className="group bg-navy-card border border-white/5 rounded-xl overflow-hidden
                         transition-all duration-400 hover:border-gold/30 hover:-translate-y-2"
              style={{ transition: 'transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 24px 64px rgba(201,148,58,0.12)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img src={svc.image} alt={svc.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-card via-navy-card/30 to-transparent" />
                {/* Icon badge */}
                <div className="absolute bottom-4 left-4 w-11 h-11 rounded-xl bg-gold/10 border border-gold/30
                                flex items-center justify-center text-gold text-lg
                                group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                  <i className={`fa ${svc.icon}`} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold mb-3">{svc.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{svc.shortDesc}</p>
                <Link to="/services"
                  className="inline-flex items-center gap-2 mt-4 text-gold text-sm font-medium
                             hover:gap-3 hover:text-gold-light transition-all duration-300">
                  Learn More <i className="fa fa-arrow-right text-xs" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {preview && (
          <div className="text-center mt-12">
            <Reveal>
              <Link to="/services" className="btn-outline">
                <i className="fa fa-layer-group" /> View All Services
              </Link>
            </Reveal>
          </div>
        )}
      </div>
    </section>
  )
}
