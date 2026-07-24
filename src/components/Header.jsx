import { useState, useEffect } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { Menu01Icon, Cancel01Icon, Globe02Icon } from '@hugeicons/core-free-icons'
import logo from '../assets/charity-logo.png'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Impact', href: '#impact' },
  { label: 'Stories', href: '#stories' },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#contact' },
]

const Header = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-14 h-14 flex items-center justify-center group-hover:scale-105 transition-transform">
            <img src={logo} alt="World Charity Logo" className="w-14 h-14" />
          </div>
          <span className={`font-extrabold text-2xl tracking-tight ${scrolled ? 'text-green-800' : 'text-green-800'}`}>
            World Charity
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`text-md font-medium hover:text-green-500 transition-colors ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className={`text-sm font-semibold px-5 py-2.5 rounded-full transition-all ${
              scrolled
                ? 'bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-600/30'
                : 'bg-white text-green-700 hover:bg-green-50'
            }`}
          >
            Get Involved
          </a>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <HugeiconsIcon icon={Cancel01Icon} className={`w-6 h-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
          ) : (
            <HugeiconsIcon icon={Menu01Icon} className={`w-6 h-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
          )}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <ul className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-gray-700 font-medium hover:text-green-600 py-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block text-center bg-green-600 text-white font-semibold px-5 py-3 rounded-full mt-2"
              >
                Get Involved
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header