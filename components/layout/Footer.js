import { Mail } from 'lucide-react'
import { siteConfig } from '../../data/site'

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-geo-dark-200">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-8 md:flex-row md:px-8">
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded-md bg-gradient-to-br from-geo-green to-geo-cyan flex items-center justify-center">
            <span className="text-[10px] font-bold text-geo-dark">GA</span>
          </div>
          <div className="text-sm text-white/70">
            © {new Date().getFullYear()} {siteConfig.name} · Código abierto con ❤️
          </div>
        </div>
        <div className="flex gap-6 text-sm text-white/70">
          <a
            href={`mailto:${siteConfig.social.email}`}
            className="hover:text-white transition flex items-center gap-1"
          >
            <Mail size={14} /> Contacto
          </a>
          <a href="#manifiesto" className="hover:text-white transition">
            Manifiesto
          </a>
          <a href="#comunidad" className="hover:text-white transition">
            Comunidad
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
