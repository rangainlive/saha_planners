import { Link } from 'react-router-dom'

const QUICK_LINKS = [
  { to: '/',         label: 'Home' },
  { to: '/about',    label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/gallery',  label: 'Gallery' },
  { to: '/contact',  label: 'Contact' },
]

const SERVICE_LINKS = [
  'Building Plans Approval',
  'Scheme & Working Plans',
  'Structural Designs',
  'Construction',
  '3D Elevation',
  'Consultancy',
]

const SOCIAL = [
  { icon: 'fab fa-facebook-f',  href: '#', label: 'Facebook' },
  { icon: 'fab fa-instagram',   href: '#', label: 'Instagram' },
  { icon: 'fab fa-whatsapp',    href: 'https://wa.me/919498658218', label: 'WhatsApp' },
  { icon: 'fab fa-youtube',     href: '#', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-gold/20">
      {/* Top */}
      <div className="inner py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="lg:col-span-1">
          <img src="/images/image.png" alt="Saha Planners" className="h-14 mb-5" />
          <p className="text-white/50 text-sm leading-relaxed mb-6">
            Transforming visions into reality across Tambaram, Chromepet, and Pallavaram with excellence in architectural design and construction.
          </p>
          <div className="flex gap-3">
            {SOCIAL.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-lg border border-gold/30 flex items-center justify-center
                           text-gold text-sm transition-all duration-300
                           hover:bg-gold hover:text-navy hover:border-gold"
              >
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold text-base mb-5 pb-3 border-b border-gold/20 relative">
            Quick Links
            <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gold" />
          </h4>
          <ul className="space-y-3">
            {QUICK_LINKS.map(l => (
              <li key={l.to}>
                <Link to={l.to}
                  className="text-white/50 text-sm hover:text-gold hover:pl-1
                             transition-all duration-300 inline-block">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-semibold text-base mb-5 pb-3 border-b border-gold/20 relative">
            Our Services
            <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gold" />
          </h4>
          <ul className="space-y-3">
            {SERVICE_LINKS.map(s => (
              <li key={s}>
                <Link to="/services"
                  className="text-white/50 text-sm hover:text-gold hover:pl-1
                             transition-all duration-300 inline-block">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold text-base mb-5 pb-3 border-b border-gold/20 relative">
            Contact Us
            <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gold" />
          </h4>
          <ul className="space-y-4">
            {[
              { icon: 'fa-location-dot', content: 'No. 9, Second Floor, Rajagopal Street, West Tambaram – 600 045' },
              { icon: 'fa-envelope',     content: 'sahaplanners.ch@gmail.com', href: 'mailto:sahaplanners.ch@gmail.com' },
              { icon: 'fa-phone',        content: '+91 94986 58218',           href: 'tel:+919498658218' },
              { icon: 'fa-phone',        content: '+91 99428 12218',           href: 'tel:+919942812218' },
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-start text-sm text-white/50">
                <i className={`fa ${item.icon} text-gold mt-0.5 w-4 flex-shrink-0`} />
                {item.href
                  ? <a href={item.href} className="hover:text-gold transition-colors">{item.content}</a>
                  : <span>{item.content}</span>
                }
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5 py-5">
        <div className="inner flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} Saha Planners &amp; Engineers. All rights reserved.</p>
          <p>Designed with excellence in Tambaram, Tamil Nadu.</p>
        </div>
      </div>
    </footer>
  )
}
