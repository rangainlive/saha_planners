import CountUp from '@/components/ui/CountUp'
import Reveal   from '@/components/ui/Reveal'
import { STATS } from '@/data'

export default function StatsStrip() {
  return (
    <section className="py-16 border-y border-white/5 relative overflow-hidden"
      style={{
        background: 'repeating-linear-gradient(45deg,rgba(201,148,58,0.02) 0,rgba(201,148,58,0.02) 1px,transparent 0,transparent 50%), linear-gradient(135deg,#111827 0%,#0d1520 100%)',
        backgroundSize: '30px 30px, 100% 100%',
      }}
    >
      <div className="inner grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.1}>
            <div className={`px-4 ${i < STATS.length - 1 ? 'md:border-r md:border-gold/20' : ''}`}>
              <p className="font-heading text-5xl font-bold text-gold leading-none mb-2">
                <CountUp to={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-white/45 text-xs uppercase tracking-[0.12em] font-medium">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
