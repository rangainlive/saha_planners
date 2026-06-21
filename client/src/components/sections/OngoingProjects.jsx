import { motion } from 'framer-motion'
import { Link }   from 'react-router-dom'
import Reveal      from '@/components/ui/Reveal'
import { ONGOING_PROJECTS } from '@/data'

export default function OngoingProjects() {
  return (
    <section className="section-wrap bg-gradient-to-b from-navy-card to-navy">
      <div className="inner">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <Reveal><p className="eyebrow mb-4">Live Projects</p></Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-heading">
                Ongoing <span className="gold-text">Projects</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link to="/gallery" className="btn-outline shrink-0">
              <i className="fa fa-images" /> View Gallery
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ONGOING_PROJECTS.map((project, i) => (
            <Reveal key={project.location} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-xl cursor-pointer">
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: 280 }}>
                  <img
                    src={project.image}
                    alt={project.location}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />

                  {/* Status badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-navy/70
                                  backdrop-blur-sm border border-gold/30 px-2.5 py-1 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] text-white/80 font-medium">In Progress</span>
                  </div>

                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-gold text-[10px] uppercase tracking-widest font-medium mb-1">
                      <i className="fa fa-location-dot mr-1" />
                      {project.type}
                    </p>
                    <h3 className="font-heading text-lg font-semibold">{project.location}</h3>
                    <p className="text-white/50 text-xs mt-0.5">{project.area}</p>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gold/85 flex items-center justify-center
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-350">
                    <div className="text-center text-navy">
                      <i className="fa fa-expand text-2xl mb-2 block" />
                      <span className="text-sm font-semibold uppercase tracking-widest">View Project</span>
                    </div>
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
