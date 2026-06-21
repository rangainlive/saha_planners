import PageHero    from '@/components/shared/PageHero'
import ServicesGrid from '@/components/sections/ServicesGrid'
import CTABanner    from '@/components/sections/CTABanner'
import Reveal       from '@/components/ui/Reveal'
import { PROCESS_STEPS } from '@/data'

export default function Services() {
  return (
    <>
      <PageHero
        title="Our"
        goldTitle="Services"
        subtitle="Comprehensive architectural and engineering solutions — from concept design to government approvals and beyond."
        crumb="Services"
      />

      {/* Full services grid — no preview cap */}
      <ServicesGrid preview={false} />

      {/* Process Timeline */}
      <section className="section-wrap bg-navy-card border-y border-white/5">
        <div className="inner">
          <div className="text-center mb-16">
            <Reveal><p className="eyebrow mb-4">How We Work</p></Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-heading">
                Our <span className="gold-text">Process</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-white/50 text-sm max-w-lg mx-auto mt-3">
                A transparent, step-by-step journey from your first call to the final handover.
              </p>
            </Reveal>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg,transparent 6%,rgba(201,148,58,0.25) 12%,rgba(201,148,58,0.25) 88%,transparent 94%)' }}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PROCESS_STEPS.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.12}>
                  <div className="relative flex flex-col items-center text-center">
                    {/* Step number circle */}
                    <div className="relative w-20 h-20 rounded-full bg-navy border-2 border-gold/30
                                    flex items-center justify-center mb-5 z-10
                                    hover:border-gold hover:bg-gold/10 transition-all duration-300 group">
                      <i className={`fa ${step.icon} text-2xl text-gold group-hover:scale-110 transition-transform`} />
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold
                                      flex items-center justify-center text-navy text-xs font-bold">
                        {i + 1}
                      </div>
                    </div>
                    <h3 className="font-heading text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-white/50 text-xs leading-relaxed max-w-[200px]">{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialisations strip */}
      <section className="section-wrap bg-navy">
        <div className="inner grid lg:grid-cols-2 gap-12 items-center">
          <Reveal direction="left">
            <div>
              <p className="eyebrow mb-4">Specialisation</p>
              <h2 className="section-heading mb-6">
                Experts in <span className="gold-text">Government Approvals</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-5">
                Navigating government approval processes is the most time-consuming part of any
                construction project. Our dedicated approval team has deep working relationships
                with DTCP, CMDA, Panchayat, and municipality offices across Tamil Nadu.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                We handle documentation, revisions, follow-ups, and compliance checks — so you
                don't have to. Most of our clients achieve approvals 40% faster compared to
                self-managed applications.
              </p>
              <ul className="space-y-3">
                {['DTCP Plan Approvals','CMDA Sanction','Panchayat Approval','Municipality Approval','Completion Certificates','EC & Land Verification'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/70">
                    <div className="w-5 h-5 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                      <i className="fa fa-check text-gold text-[9px]" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.15}>
            <div className="relative rounded-2xl overflow-hidden border border-gold/15">
              <img src="/images/constructions/building2.png" alt="Government approvals"
                className="w-full object-cover" style={{ height: 460 }} />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner
        heading={<>Have a Project in <span className="gold-text">Mind?</span></>}
        sub="Get in touch for a free consultation and quote. Our team responds within 24 hours."
        primaryLabel="Get a Quote"
        primaryTo="/contact"
        outlineLabel="View Our Portfolio"
        outlineTo="/gallery"
      />
    </>
  )
}
