import { motion } from 'framer-motion'
import Reveal from '@/components/ui/Reveal'
import { WHY_CHOOSE_US } from '@/data'

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const card = {
  hidden:  { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function WhyChooseUs() {
  return (
    <section className="section-wrap bg-navy">
      <div className="inner">
        <div className="text-center mb-14">
          <Reveal><p className="eyebrow mb-4">Why Choose Us</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="section-heading">
              Built on <span className="gold-text">Trust &amp; Excellence</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="section-sub mx-auto text-center">
              Our commitment to quality, innovation, and reliability sets us apart in Tambaram's architectural landscape.
            </p>
          </Reveal>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {WHY_CHOOSE_US.map(item => (
            <motion.div key={item.title} variants={card}
              className="group p-7 bg-navy-card border border-white/5 rounded-xl text-center
                         transition-all duration-350 hover:border-gold/30 hover:-translate-y-1.5"
              style={{ transition: 'all 0.35s ease' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 16px 50px rgba(201,148,58,0.1)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-full border border-gold/30
                              flex items-center justify-center text-gold text-2xl
                              group-hover:bg-gold group-hover:text-navy group-hover:border-gold
                              transition-all duration-300">
                <i className={`fa ${item.icon}`} />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-3">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
