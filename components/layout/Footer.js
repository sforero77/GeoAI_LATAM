import Image from 'next/image'
import { Mail } from 'lucide-react'
import { siteConfig } from '../../data/site'

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-geo-dark-200">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-8 md:flex-row md:px-8">
        <div className="flex items-center gap-3">
          <Image
            src="/GloboSinFondo.png"
            alt="GeoAI Globe"
            width={24}
            height={24}
            className="h-6 w-6 object-contain"
            priority
          />
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
