import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero  from '@/components/shared/PageHero'
import Reveal    from '@/components/ui/Reveal'
import { GALLERY_ITEMS } from '@/data'

const FILTERS = [
  { key: 'all',           label: 'All Projects' },
  { key: 'constructions', label: 'Constructions' },
  { key: 'works',         label: 'Our Works' },
  { key: 'ongoing',       label: 'Ongoing' },
  { key: 'services',      label: 'Services' },
]

export default function Gallery() {
  const [active,   setActive]   = useState('all')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(g => g.category === active)

  return (
    <>
      <PageHero
        title="Project"
        goldTitle="Gallery"
        subtitle="Browse our portfolio of completed, ongoing, and 3D-rendered projects across Tamil Nadu."
        crumb="Gallery"
      />

      <section className="section-wrap bg-navy">
        <div className="inner">
          {/* Filter buttons */}
          <Reveal>
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {FILTERS.map(f => (
                <button key={f.key} onClick={() => setActive(f.key)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border
                    ${active === f.key
                      ? 'bg-gold text-navy border-gold shadow-[0_0_20px_rgba(201,148,58,0.3)]'
                      : 'bg-transparent text-white/60 border-white/10 hover:border-gold/40 hover:text-gold'}`}>
                  {f.label}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Image grid */}
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            <AnimatePresence>
              {filtered.map((item, i) => (
                <motion.div key={item.image}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, delay: i * 0.03 }}
                  className="break-inside-avoid mb-5 group relative overflow-hidden rounded-xl cursor-pointer"
                  onClick={() => setLightbox(item)}
                >
                  <img src={item.image} alt={item.title}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy/10 to-transparent
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                  flex flex-col justify-end p-4">
                    <span className="text-gold text-[10px] uppercase tracking-widest font-medium">{item.category}</span>
                    <h4 className="font-heading text-sm font-semibold">{item.title}</h4>
                  </div>
                  {/* Expand icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-navy/60 backdrop-blur-sm
                                  flex items-center justify-center text-gold text-xs
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <i className="fa fa-expand-alt" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4"
            style={{ background: 'rgba(6,10,18,0.95)', backdropFilter: 'blur(16px)' }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="relative max-w-4xl w-full max-h-[90vh]"
              onClick={e => e.stopPropagation()}
            >
              <img src={lightbox.image} alt={lightbox.title}
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />
              {/* Caption */}
              <div className="mt-3 text-center">
                <span className="text-gold text-xs uppercase tracking-widest">{lightbox.category}</span>
                <p className="font-heading text-lg font-semibold mt-0.5">{lightbox.title}</p>
              </div>
              {/* Close */}
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gold text-navy
                           font-bold flex items-center justify-center text-sm hover:scale-110 transition-transform"
              >
                <i className="fa fa-xmark" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
