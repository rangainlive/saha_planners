import { Link }  from 'react-router-dom'
import Reveal     from '@/components/ui/Reveal'

export default function CTABanner({ heading, sub, primaryLabel, primaryTo, outlineLabel, outlineTo }) {
  return (
    <section className="py-20 px-6 text-center relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center,rgba(201,148,58,0.12) 0%,transparent 70%), linear-gradient(135deg,#1a0e00 0%,#0d0900 50%,#1a0e00 100%)',
        borderTop: '1px solid rgba(201,148,58,0.25)',
        borderBottom: '1px solid rgba(201,148,58,0.25)',
      }}
    >
      <div className="inner relative z-10">
        <Reveal>
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            {heading}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-white/55 text-base max-w-md mx-auto mb-8">{sub}</p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to={primaryTo} className="btn-gold">
              <i className="fa fa-phone" /> {primaryLabel}
            </Link>
            <Link to={outlineTo} className="btn-outline">
              <i className="fa fa-layer-group" /> {outlineLabel}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
