import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Badge } from '../ui'
import { siteConfig } from '../../data/site'

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'glass' : 'bg-geo-dark/80'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <div className="flex items-center gap-3">
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <img src="/favicon.png" alt="GeoAI LATAM Logo" className="h-10 w-10 object-contain" />
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-semibold tracking-tight">GeoAI</span>
              <span className="text-lg font-semibold gradient-text">LATAM</span>
            </div>
          </a>
          <Badge variant="green">{siteConfig.tagline}</Badge>
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex">
          {siteConfig.navigation.map((item) => (
            <a
              key={item.name}
              className="text-sm text-white/80 hover:text-white transition"
              href={item.href}
            >
              {item.name}
            </a>
          ))}
          <a
            className="rounded-full bg-geo-green px-4 py-2 text-sm font-semibold text-geo-dark hover:bg-geo-green-light transition"
            href="/#newsletter"
          >
            Newsletter
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-white/5"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-white/10 bg-geo-dark-200/95 backdrop-blur"
        >
          <div className="px-4 py-4 space-y-3">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.name}
                className="block text-sm text-white/80 hover:text-white"
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              className="block text-center rounded-full bg-geo-green px-4 py-2 text-sm font-semibold text-geo-dark"
              href="/#newsletter"
              onClick={() => setMobileMenuOpen(false)}
            >
              Newsletter
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
