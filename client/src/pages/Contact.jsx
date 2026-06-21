import { useState } from 'react'
import { motion }   from 'framer-motion'
import PageHero     from '@/components/shared/PageHero'
import Reveal       from '@/components/ui/Reveal'
import { submitContactForm } from '@/api'

const INITIAL = { name: '', email: '', phone: '', service: '', message: '' }
const SERVICES = [
  'Architectural Design',
  'Structural Design',
  '3D Elevation Design',
  'DTCP / CMDA Approval',
  'Panchayat Approval',
  'Interior Design',
  'Other',
]
const INFO_CARDS = [
  { icon: 'fa-location-dot', label: 'Our Office',   value: '19, Gandhi Street, Puzhuthivakkam, Chennai - 600091', link: null },
  { icon: 'fa-phone',        label: 'Call Us',       value: '+91 94986 58218', link: 'tel:+919498658218' },
  { icon: 'fa-envelope',     label: 'Email Us',      value: 'sahaplanners.ch@gmail.com', link: 'mailto:sahaplanners.ch@gmail.com' },
  { icon: 'fa-clock',        label: 'Working Hours', value: 'Mon – Sat: 9:00 AM – 7:00 PM', link: null },
]

function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-xs font-medium text-white/60 uppercase tracking-widest mb-2">{label}</label>
      {children}
      {error && <p className="mt-1 text-red-400 text-xs">{error}</p>}
    </div>
  )
}

const inputCls = `w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-sm text-white
  placeholder-white/25 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/25
  transition-all duration-300`

export default function Contact() {
  const [form,    setForm]    = useState(INITIAL)
  const [errors,  setErrors]  = useState({})
  const [status,  setStatus]  = useState('idle') // idle | loading | success | error

  function validate() {
    const e = {}
    if (!form.name.trim())    e.name    = 'Full name is required'
    if (!form.email.trim())   e.email   = 'Email address is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.phone.trim())   e.phone   = 'Phone number is required'
    if (!form.message.trim()) e.message = 'Please describe your project'
    return e
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setStatus('loading')
    try {
      await submitContactForm(form)
      setStatus('success')
      setForm(INITIAL)
    } catch {
      setStatus('error')
    }
  }

  function change(field) {
    return e => {
      setForm(f => ({ ...f, [field]: e.target.value }))
      if (errors[field]) setErrors(er => { const n = { ...er }; delete n[field]; return n })
    }
  }

  return (
    <>
      <PageHero
        title="Get In"
        goldTitle="Touch"
        subtitle="Reach out for a free consultation. We'll get back to you within 24 hours."
        crumb="Contact"
      />

      <section className="section-wrap bg-navy">
        <div className="inner grid lg:grid-cols-5 gap-12">

          {/* Form — spans 3 cols */}
          <div className="lg:col-span-3">
            <Reveal>
              <h2 className="font-heading text-2xl font-semibold mb-2">Send Us a Message</h2>
              <p className="text-white/45 text-sm mb-8">Fill in the details below and we'll respond within 24 hours.</p>
            </Reveal>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl border border-gold/25 bg-gold/5 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center
                                text-gold text-2xl mx-auto mb-4">
                  <i className="fa fa-check" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Message Received!</h3>
                <p className="text-white/55 text-sm mb-6">
                  Thank you for reaching out. Our team will contact you within 24 hours.
                </p>
                <button onClick={() => setStatus('idle')}
                  className="btn-outline text-sm px-6 py-2.5">
                  Send Another
                </button>
              </motion.div>
            ) : (
              <Reveal delay={0.1}>
                <form onSubmit={handleSubmit} className="space-y-5 novalidate">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Full Name *" error={errors.name}>
                      <input type="text" placeholder="Your full name"
                        value={form.name} onChange={change('name')}
                        className={`${inputCls} ${errors.name ? 'border-red-500/60' : ''}`} />
                    </Field>
                    <Field label="Phone Number *" error={errors.phone}>
                      <input type="tel" placeholder="+91 98765 43210"
                        value={form.phone} onChange={change('phone')}
                        className={`${inputCls} ${errors.phone ? 'border-red-500/60' : ''}`} />
                    </Field>
                  </div>
                  <Field label="Email Address *" error={errors.email}>
                    <input type="email" placeholder="you@example.com"
                      value={form.email} onChange={change('email')}
                      className={`${inputCls} ${errors.email ? 'border-red-500/60' : ''}`} />
                  </Field>
                  <Field label="Service Required">
                    <select value={form.service} onChange={change('service')} className={inputCls}>
                      <option value="">Select a service (optional)</option>
                      {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </Field>
                  <Field label="Project Description *" error={errors.message}>
                    <textarea rows={5} placeholder="Tell us about your project — location, size, type, timeline..."
                      value={form.message} onChange={change('message')}
                      className={`${inputCls} resize-none ${errors.message ? 'border-red-500/60' : ''}`} />
                  </Field>

                  {status === 'error' && (
                    <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                      <i className="fa fa-triangle-exclamation mr-2" />
                      Something went wrong. Please try calling us directly.
                    </p>
                  )}

                  <button type="submit" disabled={status === 'loading'}
                    className="btn-gold w-full sm:w-auto min-w-[180px] disabled:opacity-60 disabled:cursor-wait">
                    {status === 'loading'
                      ? <><i className="fa fa-spinner fa-spin" /> Sending...</>
                      : <><i className="fa fa-paper-plane" /> Send Message</>}
                  </button>
                </form>
              </Reveal>
            )}
          </div>

          {/* Sidebar — spans 2 cols */}
          <div className="lg:col-span-2 space-y-5">
            {INFO_CARDS.map((card, i) => (
              <Reveal key={card.label} delay={i * 0.08}>
                <div className="flex gap-4 p-5 rounded-xl border border-white/5 bg-navy-card hover:border-gold/20 transition-colors">
                  <div className="w-11 h-11 rounded-lg bg-gold/10 border border-gold/20 flex-shrink-0
                                  flex items-center justify-center text-gold">
                    <i className={`fa ${card.icon}`} />
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest font-medium mb-1">{card.label}</p>
                    {card.link
                      ? <a href={card.link} className="text-sm text-white hover:text-gold transition-colors">{card.value}</a>
                      : <p className="text-sm text-white/80">{card.value}</p>}
                  </div>
                </div>
              </Reveal>
            ))}

            {/* WhatsApp quick contact */}
            <Reveal delay={0.35}>
              <a href="https://wa.me/919498658218?text=Hi%20Saha%20Planners%2C%20I%27d%20like%20to%20enquire%20about%20your%20services."
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 p-5 rounded-xl border border-green-500/20 bg-green-500/5
                           hover:bg-green-500/10 hover:border-green-500/40 transition-all duration-300 group">
                <div className="w-11 h-11 rounded-full bg-green-500 flex items-center justify-center text-white text-xl flex-shrink-0">
                  <i className="fab fa-whatsapp" />
                </div>
                <div>
                  <p className="font-semibold text-sm group-hover:text-green-400 transition-colors">Chat on WhatsApp</p>
                  <p className="text-white/40 text-xs">Fastest response</p>
                </div>
                <i className="fa fa-arrow-right text-green-500/50 ml-auto text-xs group-hover:translate-x-1 transition-transform" />
              </a>
            </Reveal>

            {/* Map */}
            <Reveal delay={0.4}>
              <div className="rounded-xl overflow-hidden border border-white/5" style={{ height: 200 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3!2d80.215!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzEyLjAiTiA4MMKwMTInNTQuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%" height="100%" style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  title="Saha Planners Location"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
