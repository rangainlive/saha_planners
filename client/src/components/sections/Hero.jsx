import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HERO_SLIDES } from '@/data'

const INTERVAL = 5000

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [paused,  setPaused]  = useState(false)

  const next = useCallback(() => setCurrent(c => (c + 1) % HERO_SLIDES.length), [])
  const prev = useCallback(() => setCurrent(c => (c - 1 + HERO_SLIDES.length) % HERO_SLIDES.length), [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, INTERVAL)
    return () => clearInterval(id)
  }, [next, paused])

  const slide = HERO_SLIDES[current]

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-navy"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_900px_700px_at_15%_60%,rgba(201,148,58,0.07)_0%,transparent_70%)]" />
        <div className="absolute inset-0"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 79px,rgba(201,148,58,0.03) 80px),repeating-linear-gradient(90deg,transparent,transparent 79px,rgba(201,148,58,0.025) 80px)' }} />
      </div>

      {/* Floating particles */}
      {[
        { size: 6,  top: '18%', left: '8%',  delay: 0 },
        { size: 4,  top: '62%', left: '18%', delay: 1.5 },
        { size: 8,  top: '25%', left: '78%', delay: 3 },
        { size: 5,  top: '72%', left: '72%', delay: 4.5 },
        { size: 10, top: '80%', left: '38%', delay: 2 },
      ].map((p, i) => (
        <span key={i} className="absolute rounded-full bg-gold-light animate-float pointer-events-none"
          style={{ width: p.size, height: p.size, top: p.top, left: p.left, opacity: 0.25, animationDelay: `${p.delay}s` }} />
      ))}

      {/* Content */}
      <div className="inner relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-28 pb-16">

        {/* ── Left: Text ── */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div key={current} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }} transition={{ duration: 0.6, ease: 'easeOut' }}>

              <p className="eyebrow mb-5">{slide.eyebrow}</p>

              <h1 className="font-heading font-bold leading-[1.08] mb-6"
                style={{ fontSize: 'clamp(2.4rem,5.5vw,5rem)' }}>
                {slide.headline}<br />
                <span className="gold-text">{slide.subHeadline}</span>
              </h1>

              <p className="text-white/55 leading-relaxed mb-9"
                style={{ fontSize: 'clamp(1rem,1.5vw,1.15rem)', maxWidth: 520 }}>
                {slide.subtitle}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-gold">
                  <i className="fa fa-comments" /> Free Consultation
                </Link>
                <Link to="/services" className="btn-outline">
                  <i className="fa fa-layer-group" /> Our Services
                </Link>
              </div>

              {/* Slide dots */}
              <div className="flex gap-2 mt-10">
                {HERO_SLIDES.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-500
                      ${i === current ? 'w-8 bg-gold' : 'w-2 bg-white/25 hover:bg-white/50'}`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Right: Building image ── */}
        <div className="relative hidden lg:block">
          {/* Glow halo */}
          <div className="absolute inset-0 rounded-3xl blur-3xl bg-gold/10 scale-90 translate-x-4" />

          {/* Decorative rings */}
          <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full border border-gold/20 animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full border border-gold/15 animate-float" style={{ animationDelay: '2.5s' }} />
          <div className="absolute top-1/2 -right-3 w-6 h-6 rounded-full bg-gold/30" />

          <AnimatePresence mode="wait">
            <motion.div key={current}
              initial={{ opacity: 0, scale: 0.93, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.93, x: -40 }}
              transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative z-10"
            >
              <img
                src={slide.image}
                alt="Featured project"
                className="w-full rounded-2xl border border-gold/25 shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
              />
              {/* Image overlay badge */}
              <div className="absolute bottom-5 left-5 bg-navy/80 backdrop-blur-md border border-gold/30
                              px-4 py-2.5 rounded-xl flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-medium text-white/80">Ongoing Projects Active</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrow controls */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-5 z-20">
            <button onClick={prev}
              className="w-10 h-10 rounded-full border border-gold/40 bg-navy/70 backdrop-blur-sm
                         flex items-center justify-center text-gold text-xs
                         hover:bg-gold hover:text-navy transition-all duration-300">
              <i className="fa fa-chevron-left" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-5 z-20">
            <button onClick={next}
              className="w-10 h-10 rounded-full border border-gold/40 bg-navy/70 backdrop-blur-sm
                         flex items-center justify-center text-gold text-xs
                         hover:bg-gold hover:text-navy transition-all duration-300">
              <i className="fa fa-chevron-right" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <div className="w-6 h-9 rounded-full border border-gold/30 flex justify-center pt-1.5">
          <div className="w-0.5 h-2 rounded-full bg-gold animate-scrollBounce" />
        </div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">Scroll</p>
      </div>
    </section>
  )
}
