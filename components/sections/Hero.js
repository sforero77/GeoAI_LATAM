import Image from 'next/image'
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
          <div className="mb-4 flex items-center gap-2 md:gap-3">
            <Image
              src="/GloboSinFondo.png"
              alt="GeoAI Globe"
              width={40}
              height={40}
              className="h-8 w-8 md:h-10 md:w-10 object-contain flex-shrink-0"
              priority
            />
            <p className="text-[0.65rem] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] text-geo-green/80 leading-tight">
              Soluciones Integrales de Inteligencia Geoespacial
            </p>
          </div>
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
          <div className="mt-6 flex flex-wrap gap-1.5">
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
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-geo-green/20 via-geo-cyan/20 to-transparent blur-3xl glow-green" />
          <div className="relative rounded-[2rem] border-2 border-geo-green/30 bg-geo-dark-300/95 p-4 md:p-6 shadow-2xl backdrop-blur-xl w-full">
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <div className="h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50" />
              <div className="h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50" />
              <div className="h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
            </div>
            <div className="overflow-x-auto">
              <pre className="text-xs md:text-sm text-geo-green font-mono leading-relaxed whitespace-pre" style={{ textShadow: '0 0 10px rgba(16, 185, 129, 0.5)' }}>
{`# GeoAI LATAM — Comunidad para crear,
# aprender y compartir GeoAI en LATAM

community = GeoAI_Latam()

community.purpose = [
    "Aprender en público",
    "Compartir métodos y código",
    "Construir soluciones para LATAM"
]

community.commitments = [
    "Honestidad", "Código abierto",
    "Trabajo colaborativo", "Impacto real"
]

community.start()  # 🌎 ¡Bienvenido!`}
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  )
}

export default Hero
