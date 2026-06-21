import { Link } from 'react-router-dom'
import Reveal    from '@/components/ui/Reveal'
import { OUR_WORKS } from '@/data'

export default function OurWorks() {
  return (
    <section className="section-wrap bg-navy">
      <div className="inner">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <Reveal><p className="eyebrow mb-4">Portfolio</p></Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-heading">
                Our <span className="gold-text">Completed Works</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link to="/gallery" className="btn-outline shrink-0">
              <i className="fa fa-arrow-right" /> See All Work
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {OUR_WORKS.map((work, i) => (
            <Reveal key={work.title} direction={i === 0 ? 'left' : i === 2 ? 'right' : 'up'} delay={i * 0.15}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/5
                              hover:border-gold/30 transition-all duration-400"
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 24px 64px rgba(201,148,58,0.15)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: 300 }}>
                  <img src={work.image} alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-108"
                    style={{ transition: 'transform 0.6s ease' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy/20 to-transparent" />
                </div>

                {/* Info bar */}
                <div className="absolute bottom-0 left-0 right-0 p-5
                                flex items-end justify-between">
                  <div>
                    <span className="text-gold text-[10px] uppercase tracking-widest font-medium">
                      {work.type}
                    </span>
                    <h3 className="font-heading text-xl font-semibold mt-0.5">{work.title}</h3>
                    <p className="text-white/50 text-xs mt-0.5">
                      <i className="fa fa-location-dot mr-1" />{work.location}
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center
                                  text-gold text-xs group-hover:bg-gold group-hover:text-navy
                                  transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                    <i className="fa fa-arrow-up-right-from-square text-[10px]" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
