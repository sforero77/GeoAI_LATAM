import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Tag } from '../ui'
import { siteConfig } from '../../data/site'

export const Hero = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="gradient-hero pointer-events-none absolute inset-0 -z-10" />
      <div className="absolute inset-0 noise-bg opacity-30 pointer-events-none" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-8 md:py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-geo-green/80">
            Soluciones Integrales de Inteligencia Geoespacial
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Construyendo <span className="gradient-text">GeoAI</span> para Latinoamérica
          </h1>
          <p className="mt-4 max-w-xl text-white/80 text-lg">
            Una comunidad donde compartimos conocimiento, desarrollamos soluciones reales y crecemos juntos enfrentando los desafíos únicos de nuestra región.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#proyectos"
              className="group rounded-full bg-geo-green px-5 py-2.5 text-sm font-semibold text-geo-dark hover:bg-geo-green-light transition flex items-center gap-2"
            >
              Ver proyectos
              <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
            </a>
            <a
              href="#manifiesto"
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white/90 hover:bg-white/5 transition"
            >
              Leer manifiesto
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/70">
            {siteConfig.heroTags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-geo-green/10 via-geo-cyan/10 to-transparent blur-3xl" />
          <div className="relative rounded-[2rem] border border-white/10 bg-geo-dark-300/80 p-8 shadow-2xl backdrop-blur">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-2 w-2 rounded-full bg-red-500" />
              <div className="h-2 w-2 rounded-full bg-yellow-500" />
              <div className="h-2 w-2 rounded-full bg-green-500" />
            </div>
            <pre className="text-xs text-geo-green/80 font-mono leading-relaxed">
{`# GeoAI LATAM — Comunidad para crear,
# aprender y compartir GeoAI en LATAM

community = GeoAI_Latam()

community.purpose = [
    "Aprender en público",
    "Compartir métodos, código y errores",
    "Construir soluciones para el territorio",
    "Conectar talento de toda Latinoamérica"
]

community.commitments = [
    "Honestidad",
    "Código abierto",
    "Trabajo colaborativo",
    "Impacto sobre teoría"
]

community.start()
# Output: 🌎 ¡Bienvenido a la comunidad!`}
            </pre>
          </div>
        </motion.div>
      </div>
    </header>
  )
}

export default Hero
