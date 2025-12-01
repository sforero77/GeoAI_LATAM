import { motion } from 'framer-motion'
import { Github, ExternalLink, Star, Users, GitBranch } from 'lucide-react'
import { Badge, Tag, Card, SectionTitle } from '../ui'
import Link from 'next/link'

export const Projects = ({ projects = [] }) => {
  return (
    <section id="proyectos" className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <SectionTitle
        kicker="Open Source"
        title="Proyectos Destacados"
        subtitle="Soluciones reales para problemas reales de nuestra región"
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((proyecto, i) => (
          <Card key={proyecto.slug || i}>
            <div className="flex items-start justify-between mb-4">
              <Badge
                variant={
                  proyecto.status === 'Activo'
                    ? 'green'
                    : proyecto.status === 'En desarrollo'
                    ? 'cyan'
                    : 'default'
                }
              >
                {proyecto.status}
              </Badge>
              <div className="flex items-center gap-3 text-xs text-white/60">
                {proyecto.stars && (
                  <span className="flex items-center gap-1">
                    <Star size={12} /> {proyecto.stars}
                  </span>
                )}
                {proyecto.contributors && (
                  <span className="flex items-center gap-1">
                    <Users size={12} /> {proyecto.contributors}
                  </span>
                )}
              </div>
            </div>

            <h3 className="mb-2 text-lg font-semibold">{proyecto.title}</h3>
            <p className="mb-3 text-sm text-white/75">{proyecto.description}</p>

            <div className="mb-4 flex flex-wrap gap-2">
              {proyecto.tags?.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {proyecto.github && proyecto.github !== '#' && (
                <a
                  href={proyecto.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-semibold text-geo-green hover:text-geo-green-light transition"
                >
                  <Github size={14} />
                  GitHub
                </a>
              )}
              {proyecto.demo && proyecto.demo !== '#' && (
                <a
                  href={proyecto.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-semibold text-geo-cyan hover:text-geo-cyan-light transition"
                >
                  <ExternalLink size={14} />
                  Demo
                </a>
              )}
              {proyecto.slug && (
                <Link
                  href={`/proyectos/${proyecto.slug}`}
                  className="flex items-center gap-1 text-sm font-semibold text-white/70 hover:text-white transition ml-auto"
                >
                  Ver más →
                </Link>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* CTA Proponer Proyecto */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 rounded-3xl border-2 border-dashed border-geo-green/40 bg-geo-green/5 p-8 text-center"
      >
        <h4 className="mb-2 text-xl font-semibold">¿Tienes una idea?</h4>
        <p className="mx-auto mb-4 max-w-2xl text-white/70">
          Propón un proyecto GeoAI para resolver problemas de nuestra región. Podemos construirlo juntos.
        </p>
        <a
          href="#comunidad"
          className="rounded-full bg-geo-green px-5 py-2.5 text-sm font-semibold text-geo-dark hover:bg-geo-green-light transition inline-flex items-center gap-2"
        >
          <GitBranch size={16} />
          Proponer Proyecto
        </a>
      </motion.div>
    </section>
  )
}

export default Projects
