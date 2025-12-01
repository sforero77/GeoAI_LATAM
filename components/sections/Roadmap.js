import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronDown,
  ChevronRight,
  Rocket,
  BookOpen,
  Video,
  Users,
  Target,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  Circle,
  AlertCircle,
} from 'lucide-react'
import { Card, SectionTitle, Tag } from '../ui'
import roadmapData from '../../data/roadmap.json'

const priorityConfig = {
  Alta: { color: 'text-red-400', bg: 'bg-red-500/10', icon: AlertCircle },
  Media: { color: 'text-yellow-400', bg: 'bg-yellow-500/10', icon: Circle },
  Baja: { color: 'text-green-400', bg: 'bg-green-500/10', icon: CheckCircle2 },
}

const typeConfig = {
  Proyecto: { color: 'bg-blue-500/20 text-blue-300', icon: Rocket },
  Educación: { color: 'bg-purple-500/20 text-purple-300', icon: BookOpen },
  Investigación: { color: 'bg-pink-500/20 text-pink-300', icon: Sparkles },
  Herramienta: { color: 'bg-green-500/20 text-green-300', icon: Target },
  Infraestructura: { color: 'bg-orange-500/20 text-orange-300', icon: TrendingUp },
  Dataset: { color: 'bg-cyan-500/20 text-cyan-300', icon: Target },
}

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const priorityStyle = priorityConfig[project.priority]
  const typeStyle = typeConfig[project.type]
  const TypeIcon = typeStyle.icon
  const PriorityIcon = priorityStyle.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-geo-green/50 transition-all"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className={`text-xs px-2 py-1 rounded-full ${typeStyle.color} flex items-center gap-1`}>
              <TypeIcon className="w-3 h-3" />
              {project.type}
            </span>
            <span
              className={`text-xs px-2 py-1 rounded-full ${priorityStyle.bg} ${priorityStyle.color} flex items-center gap-1`}
            >
              <PriorityIcon className="w-3 h-3" />
              Prioridad {project.priority}
            </span>
          </div>
          <h4 className="font-semibold text-white mb-1">{project.title}</h4>
          <p className="text-sm text-white/70">{project.description}</p>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-white/60 hover:text-geo-green transition-colors"
        >
          {isExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="space-y-3 pt-3 border-t border-white/10"
          >
            <div>
              <h5 className="text-xs font-semibold text-geo-green mb-2">Entregables:</h5>
              <ul className="space-y-1">
                {project.deliverables.map((item, i) => (
                  <li key={i} className="text-xs text-white/70 flex items-start gap-2">
                    <span className="text-geo-green mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-xs font-semibold text-geo-cyan mb-2">Impacto Esperado:</h5>
              <p className="text-xs text-white/70">{project.impact}</p>
            </div>

            <div>
              <h5 className="text-xs font-semibold text-white/80 mb-2">Tecnologías:</h5>
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-xs px-2 py-0.5 rounded bg-white/5 text-white/70">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const ContentSection = ({ title, icon: Icon, items, type = 'list' }) => {
  return (
    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-5 h-5 text-geo-cyan" />
        <h4 className="font-semibold text-white">{title}</h4>
        <span className="ml-auto text-xs text-white/50">{items.length} items</span>
      </div>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="text-sm text-white/70 flex items-start gap-2">
            <span className="text-geo-green mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const QuarterSection = ({ quarter }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left bg-gradient-to-r from-geo-green/20 to-geo-cyan/20 rounded-lg p-4 border border-geo-green/30 hover:border-geo-green transition-all"
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl font-bold text-white">{quarter.name}</span>
              <span className="text-sm text-white/60">{quarter.period}</span>
            </div>
            <h3 className="text-lg font-semibold text-geo-green mb-1">{quarter.theme}</h3>
            <p className="text-sm text-white/70">{quarter.description}</p>
          </div>
          <div className="ml-4">
            {isExpanded ? (
              <ChevronDown className="w-6 h-6 text-geo-green" />
            ) : (
              <ChevronRight className="w-6 h-6 text-geo-green" />
            )}
          </div>
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mt-4 space-y-6"
          >
            {/* Proyectos */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-geo-green" />
                Proyectos Propuestos ({quarter.projects.length})
              </h4>
              <div className="grid gap-3">
                {quarter.projects.map((project, i) => (
                  <ProjectCard key={i} project={project} />
                ))}
              </div>
            </div>

            {/* Contenido */}
            <div className="grid md:grid-cols-2 gap-4">
              <ContentSection title="Posts de Blog" icon={BookOpen} items={quarter.content.blog} />
              <ContentSection title="Videos y Tutoriales" icon={Video} items={quarter.content.videos} />
            </div>

            {/* Comunidad */}
            <ContentSection title="Actividades Comunitarias" icon={Users} items={quarter.community} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const Vision2026 = ({ vision }) => {
  return (
    <Card hover={false} className="p-6 md:p-8 bg-gradient-to-br from-geo-green/10 to-geo-cyan/10 border-2 border-geo-green/30">
      <div className="flex items-center gap-3 mb-6">
        <Sparkles className="w-8 h-8 text-geo-green" />
        <h3 className="text-2xl font-bold text-white">{vision.title}</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {vision.goals.map((goal, i) => (
          <div key={i} className="bg-white/5 rounded-lg p-4 border border-white/10">
            <h4 className="font-semibold text-geo-green mb-2">{goal.title}</h4>
            <p className="text-sm text-white/70 mb-3">{goal.description}</p>
            <div className="space-y-1">
              {goal.metrics.map((metric, j) => (
                <div key={j} className="text-xs text-white/60 flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-geo-cyan mt-0.5" />
                  <span>{metric}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
        <h4 className="font-semibold text-white mb-3">Iniciativas Estratégicas</h4>
        <div className="grid md:grid-cols-2 gap-2">
          {vision.strategic.map((item, i) => (
            <div key={i} className="text-sm text-white/70 flex items-start gap-2">
              <TrendingUp className="w-4 h-4 text-geo-green mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

export const Roadmap = () => {
  const [activeTab, setActiveTab] = useState('roadmap')

  return (
    <section id="roadmap" className="mx-auto max-w-6xl px-4 py-16 md:px-8">
      <SectionTitle
        kicker="Hacia el Futuro"
        title="Roadmap GeoAI LATAM 2025-2026"
        subtitle="Plan estratégico basado en tendencias tecnológicas, necesidades de la comunidad y oportunidades de impacto real en Latinoamérica"
      />

      {/* Tabs */}
      <div className="flex gap-2 mb-8 overflow-x-auto">
        <button
          onClick={() => setActiveTab('roadmap')}
          className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
            activeTab === 'roadmap'
              ? 'bg-geo-green text-white'
              : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
          }`}
        >
          Roadmap 2025
        </button>
        <button
          onClick={() => setActiveTab('vision')}
          className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
            activeTab === 'vision'
              ? 'bg-geo-green text-white'
              : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
          }`}
        >
          Visión 2026
        </button>
        <button
          onClick={() => setActiveTab('priorities')}
          className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
            activeTab === 'priorities'
              ? 'bg-geo-green text-white'
              : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
          }`}
        >
          Prioridades
        </button>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'roadmap' && (
          <motion.div
            key="roadmap"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            <div className="mb-4 p-4 bg-geo-cyan/10 rounded-lg border border-geo-cyan/30">
              <p className="text-sm text-white/80">
                <strong className="text-geo-cyan">💡 Nota:</strong> Este roadmap es una propuesta inicial
                basada en análisis de mercado y tendencias. Tu feedback es esencial para priorizarlo y
                ajustarlo. Participa en las discusiones de la comunidad.
              </p>
            </div>

            {roadmapData.quarters.map((quarter) => (
              <QuarterSection key={quarter.id} quarter={quarter} />
            ))}
          </motion.div>
        )}

        {activeTab === 'vision' && (
          <motion.div
            key="vision"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            <Vision2026 vision={roadmapData.vision2026} />
          </motion.div>
        )}

        {activeTab === 'priorities' && (
          <motion.div
            key="priorities"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="grid md:grid-cols-3 gap-6"
          >
            <Card hover={false} className="p-6">
              <h3 className="text-lg font-semibold text-geo-green mb-4">🎯 Inmediatas (Ahora)</h3>
              <ul className="space-y-2">
                {roadmapData.priorities.immediate.map((item, i) => (
                  <li key={i} className="text-sm text-white/70 flex items-start gap-2">
                    <span className="text-geo-green">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card hover={false} className="p-6">
              <h3 className="text-lg font-semibold text-geo-cyan mb-4">📅 Corto Plazo (3-6 meses)</h3>
              <ul className="space-y-2">
                {roadmapData.priorities.short_term.map((item, i) => (
                  <li key={i} className="text-sm text-white/70 flex items-start gap-2">
                    <span className="text-geo-cyan">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card hover={false} className="p-6">
              <h3 className="text-lg font-semibold text-white mb-4">🚀 Largo Plazo (1+ año)</h3>
              <ul className="space-y-2">
                {roadmapData.priorities.long_term.map((item, i) => (
                  <li key={i} className="text-sm text-white/70 flex items-start gap-2">
                    <span className="text-white/50">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 p-6 bg-gradient-to-r from-geo-green/20 to-geo-cyan/20 rounded-lg border border-geo-green/30 text-center"
      >
        <h3 className="text-xl font-bold text-white mb-2">¿Quieres participar en el roadmap?</h3>
        <p className="text-white/70 mb-4">
          Este plan se construye con la comunidad. Comparte tus ideas, propón proyectos o únete a los existentes.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a
            href="/#comunidad"
            className="px-6 py-2 bg-geo-green text-white rounded-lg hover:bg-geo-green/80 transition-colors"
          >
            Únete a la Comunidad
          </a>
          <a
            href="https://github.com/geoai-latam"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors border border-white/20"
          >
            Ver en GitHub
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Roadmap
