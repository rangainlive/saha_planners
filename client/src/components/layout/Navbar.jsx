import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrolled } from '@/hooks/useScrolled'

const NAV_LINKS = [
  { to: '/',         label: 'Home',     end: true },
  { to: '/about',    label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/gallery',  label: 'Gallery' },
]

export default function Navbar() {
  const scrolled   = useScrolled(80)
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  const linkClass = ({ isActive }) =>
    `relative text-sm font-medium transition-colors duration-300
     after:absolute after:bottom-[-5px] after:left-0 after:h-[1.5px] after:bg-gold
     after:transition-all after:duration-300
     ${isActive
       ? 'text-gold after:w-full'
       : 'text-white/80 hover:text-gold after:w-0 hover:after:w-full'}`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${scrolled
          ? 'py-3 bg-navy/90 backdrop-blur-xl border-b border-gold/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'py-5'}`}
    >
      <div className="inner flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={close}>
          <img src="/images/image.png" alt="Saha Planners & Engineers" className="h-12 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map(l => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>{l.label}</NavLink>
          ))}
          <Link to="/contact" className="btn-gold text-xs px-5 py-2.5">
            <i className="fa fa-phone mr-1" /> Contact Us
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1 z-[60]"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              className={`block w-6 h-0.5 bg-white rounded transition-all duration-300
                ${open && i === 0 ? 'translate-y-[7px] rotate-45' : ''}
                ${open && i === 1 ? 'opacity-0 scale-x-0' : ''}
                ${open && i === 2 ? '-translate-y-[7px] -rotate-45' : ''}`}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-navy border-t border-gold/20 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-6">
              {NAV_LINKS.map(l => (
                <NavLink key={l.to} to={l.to} end={l.end} onClick={close}
                  className={({ isActive }) =>
                    `text-base font-medium ${isActive ? 'text-gold' : 'text-white/80'}`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <Link to="/contact" onClick={close} className="btn-gold w-fit px-6 py-2.5 text-sm">
                <i className="fa fa-phone mr-1" /> Contact Us
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
