import { motion } from 'framer-motion'
import Reveal     from '@/components/ui/Reveal'
import CountUp    from '@/components/ui/CountUp'
import PageHero   from '@/components/shared/PageHero'
import CTABanner  from '@/components/sections/CTABanner'
import { STATS, WHY_CHOOSE_US } from '@/data'

const PILLARS = [
  { icon: 'fa-bullseye',   title: 'Our Mission',  body: 'To deliver world-class architectural planning and construction services that transform client visions into enduring, functional spaces that stand the test of time.' },
  { icon: 'fa-eye',        title: 'Our Vision',   body: 'To be Tamil Nadu\'s most trusted architectural firm — recognised for our design innovation, regulatory expertise, and client-first philosophy.' },
  { icon: 'fa-gem',        title: 'Our Values',   body: 'Integrity in every drawing. Precision in every approval. Excellence in every finished structure. These are not aspirations — they are our daily standard.' },
]

const TEAM_HIGHLIGHTS = [
  { number: '15+', label: 'Years of Experience' },
  { number: '500+', label: 'Projects Delivered' },
  { number: '50+', label: 'Licensed Professionals' },
  { number: '12+', label: 'Districts Served' },
]

export default function About() {
  return (
    <>
      <PageHero
        title="About"
        goldTitle="Saha Planners"
        subtitle="15+ years of architectural excellence — from blueprint to building completion across Tamil Nadu."
        crumb="About Us"
      />

      {/* Intro Section */}
      <section className="section-wrap bg-navy">
        <div className="inner grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <Reveal><p className="eyebrow mb-4">Who We Are</p></Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-heading mb-6">
                Building Trust, One <span className="gold-text">Project</span> at a Time
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-white/60 leading-relaxed mb-5">
                Saha Planners & Engineers was founded with a singular vision — to make professional
                architectural services accessible without compromising on quality. Based in Tambaram,
                Chennai, we serve clients across Tamil Nadu with a full suite of planning, design,
                and approval services.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-white/60 leading-relaxed mb-8">
                From humble beginnings as a small design consultancy, we have grown into a trusted
                team of licensed professionals managing projects from initial site assessment through
                to final building completion. Our deep expertise in DTCP, CMDA, and Panchayat
                approval processes means our clients avoid costly delays and complications.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="grid grid-cols-2 gap-5">
                {TEAM_HIGHLIGHTS.map(h => (
                  <div key={h.label}
                    className="p-4 rounded-xl bg-navy-card border border-white/5 hover:border-gold/20 transition-colors">
                    <div className="font-heading text-3xl font-bold text-gold mb-1">{h.number}</div>
                    <div className="text-white/50 text-sm">{h.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Visual card */}
          <Reveal direction="right" delay={0.2}>
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-3xl"
                style={{ background: 'radial-gradient(ellipse at center, rgba(201,148,58,0.12) 0%, transparent 70%)' }}
              />
              <div className="relative rounded-2xl overflow-hidden border border-gold/20">
                <img src="/images/constructions/building1.png" alt="Our work"
                  className="w-full object-cover" style={{ height: 440 }} />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent" />

                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-navy/80 backdrop-blur-xl
                                border border-gold/20 rounded-xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30
                                  flex items-center justify-center text-gold text-xl">
                    <i className="fa fa-award" />
                  </div>
                  <div>
                    <div className="font-heading text-lg font-semibold">15+ Years</div>
                    <div className="text-white/50 text-xs">of Architectural Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission/Vision/Values */}
      <section className="section-wrap bg-navy-card border-y border-white/5">
        <div className="inner">
          <div className="text-center mb-14">
            <Reveal><p className="eyebrow mb-4">Our Foundation</p></Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-heading">
                Principles That <span className="gold-text">Drive Us</span>
              </h2>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="group p-8 rounded-2xl border border-white/5 hover:border-gold/20
                                bg-navy transition-all duration-350 hover:-translate-y-1"
                  style={{ boxShadow: 'none' }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = '0 20px 60px rgba(201,148,58,0.08)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
                >
                  <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/20
                                  flex items-center justify-center text-gold text-2xl mb-5
                                  group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                    <i className={`fa ${p.icon}`} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">{p.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6"
        style={{
          background: 'linear-gradient(135deg,#0d1a0a 0%,#0a0e1a 50%,#0a0d1a 100%)',
          backgroundImage: `linear-gradient(135deg,#0d1a0a 0%,#0a0e1a 50%,#0a0d1a 100%),
            repeating-linear-gradient(45deg,transparent,transparent 60px,rgba(201,148,58,0.02) 61px)`,
        }}
      >
        <div className="inner grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <CountUp value={s.value} suffix={s.suffix}
                className="font-heading text-5xl font-bold text-gold" />
              <p className="text-white/50 text-sm mt-2">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why Choose Us strip */}
      <section className="section-wrap bg-navy">
        <div className="inner">
          <div className="text-center mb-14">
            <Reveal><p className="eyebrow mb-4">Our Edge</p></Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-heading">
                Why Clients <span className="gold-text">Trust Us</span>
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_CHOOSE_US.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.07}>
                <div className="flex gap-4 p-5 rounded-xl border border-white/5 hover:border-gold/20
                                bg-navy-card transition-colors duration-300">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex-shrink-0
                                  flex items-center justify-center text-gold text-base mt-0.5">
                    <i className={`fa ${item.icon}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading={<>Start Your Project <span className="gold-text">Today</span></>}
        sub="Contact our team for a free site visit and consultation. No obligations, just expert advice."
        primaryLabel="Contact Us"
        primaryTo="/contact"
        outlineLabel="View Our Work"
        outlineTo="/gallery"
      />
    </>
  )
}
