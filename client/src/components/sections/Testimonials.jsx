import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from '@/components/ui/Reveal'
import { TESTIMONIALS } from '@/data'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [paused,  setPaused]  = useState(false)

  const next = useCallback(() => setCurrent(c => (c + 1) % TESTIMONIALS.length), [])
  const prev = useCallback(() => setCurrent(c => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length), [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 5500)
    return () => clearInterval(id)
  }, [next, paused])

  const t = TESTIMONIALS[current]

  return (
    <section className="section-wrap bg-gradient-to-b from-navy-card to-navy">
      <div className="inner">
        <div className="text-center mb-14">
          <Reveal><p className="eyebrow mb-4">Testimonials</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="section-heading">
              What Our <span className="gold-text">Clients Say</span>
            </h2>
          </Reveal>
        </div>

        <div className="max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="bg-navy-card border border-white/5 rounded-2xl p-10"
            >
              {/* Quote mark */}
              <div className="font-heading text-7xl text-gold/40 leading-none mb-2 select-none">"</div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <i key={i} className="fa fa-star text-gold text-sm" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-white/70 text-lg leading-relaxed italic mb-8">{t.quote}</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-13 h-13 rounded-full bg-gold/10 border-2 border-gold/30
                                flex items-center justify-center font-heading text-gold text-lg font-semibold"
                  style={{ width: 52, height: 52 }}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-white/45 text-xs mt-0.5">
                    <i className="fa fa-location-dot text-gold mr-1" />
                    {t.location} — {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev}
              className="w-11 h-11 rounded-full border border-gold/30 text-gold text-xs
                         flex items-center justify-center hover:bg-gold hover:text-navy
                         hover:border-gold transition-all duration-300">
              <i className="fa fa-chevron-left" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} aria-label={`Testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-400
                    ${i === current ? 'w-7 bg-gold' : 'w-2 bg-white/25 hover:bg-white/50'}`}
                />
              ))}
            </div>
            <button onClick={next}
              className="w-11 h-11 rounded-full border border-gold/30 text-gold text-xs
                         flex items-center justify-center hover:bg-gold hover:text-navy
                         hover:border-gold transition-all duration-300">
              <i className="fa fa-chevron-right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
