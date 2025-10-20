import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Mail, 
  ArrowRight,
  Code,
  Globe,
  Users,
  BookOpen,
  Heart,
  Rocket,
  Menu,
  X,
  ExternalLink,
  CheckCircle,
  Star,
  GitBranch
} from 'lucide-react'

// Componentes reutilizables
const Badge = ({ children, variant = 'default' }) => {
  const variants = {
    default: 'border-white/10 bg-white/5 text-white/80',
    green: 'border-geo-green/20 bg-geo-green/10 text-geo-green',
    cyan: 'border-geo-cyan/20 bg-geo-cyan/10 text-geo-cyan',
  }
  
  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium backdrop-blur ${variants[variant]}`}>
      {children}
    </span>
  )
}

const Tag = ({ children }) => (
  <span className="mr-2 mb-2 inline-block rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/70 ring-1 ring-white/10">
    {children}
  </span>
)

const Card = ({ children, className = '', hover = true }) => (
  <motion.div 
    whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : {}}
    className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-geo-dark-300/60 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur transition-all ${hover ? 'hover:shadow-2xl hover:shadow-geo-green/10' : ''} ${className}`}
  >
    {hover && (
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-geo-green/5 via-transparent to-geo-cyan/5 opacity-0 transition group-hover:opacity-100" />
    )}
    {children}
  </motion.div>
)

const SectionTitle = ({ kicker, title, subtitle }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mx-auto mb-10 max-w-3xl text-center"
  >
    {kicker && (
      <p className="mb-2 text-xs uppercase tracking-[0.2em] text-geo-green/80">{kicker}</p>
    )}
    <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">{title}</h2>
    {subtitle && (
      <p className="mt-3 text-base text-white/70 md:text-lg">{subtitle}</p>
    )}
  </motion.div>
)

const Stat = ({ value, label }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur"
  >
    <div className="text-3xl font-bold gradient-text md:text-4xl">{value}</div>
    <div className="mt-1 text-sm text-white/70">{label}</div>
  </motion.div>
)

export default function GeoAILatam() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const proyectos = [
    {
      title: 'Detector de Incendios Forestales',
      description: 'Sistema de alerta temprana usando Sentinel-2 y redes neuronales para detectar incendios en tiempo real.',
      tags: ['Python', 'TensorFlow', 'Sentinel-2', 'GEE'],
      status: 'Activo',
      github: '#',
      demo: '#',
      stars: 42,
      contributors: 5
    },
    {
      title: 'Mapa de Movilidad Urbana',
      description: 'Análisis de patrones de movilidad en ciudades latinoamericanas para optimizar transporte público.',
      tags: ['QGIS', 'PostGIS', 'ML', 'OSM'],
      status: 'En desarrollo',
      github: '#',
      stars: 18,
      contributors: 3
    },
    {
      title: 'GeoAI Toolkit',
      description: 'Conjunto de notebooks y herramientas para empezar con GeoAI sin experiencia previa.',
      tags: ['Jupyter', 'Docker', 'Python', 'Docs'],
      status: 'Planificación',
      github: '#',
      stars: 127,
      contributors: 7
    }
  ]

  const blogPosts = [
    {
      title: 'Detectando Deforestación con Sentinel-2 y Python',
      excerpt: 'Tutorial completo paso a paso para monitorear cambios en la cobertura forestal usando machine learning.',
      tags: ['Tutorial', 'Python', 'Sentinel-2'],
      date: '2025-10-18',
      readTime: 15
    },
    {
      title: 'Mi Primer Fracaso con U-Net: Lo que Aprendí',
      excerpt: 'Documentando errores y aprendizajes de un modelo que no funcionó como esperaba.',
      tags: ['Aprendizaje', 'Deep Learning'],
      date: '2025-10-15',
      readTime: 10
    },
    {
      title: 'GeoAI para Agricultura de Precisión en Colombia',
      excerpt: 'Caso de estudio real implementando visión artificial para optimización de cultivos.',
      tags: ['Caso de Uso', 'Agricultura'],
      date: '2025-10-12',
      readTime: 20
    }
  ]

  return (
    <div className="min-h-screen w-full gradient-dark text-white overflow-x-hidden">
      {/* NAVBAR */}
      <nav className={`sticky top-0 z-50 transition-all ${scrolled ? 'glass' : 'bg-geo-dark/80'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-geo-green to-geo-cyan flex items-center justify-center">
              <span className="text-xs font-bold text-geo-dark">GA</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-semibold tracking-tight">GeoAI</span>
              <span className="text-lg font-semibold gradient-text">LATAM</span>
            </div>
            <Badge variant="green">Del dato a la acción</Badge>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden items-center gap-6 md:flex">
            <a className="text-sm text-white/80 hover:text-white transition" href="#proyectos">Proyectos</a>
            <a className="text-sm text-white/80 hover:text-white transition" href="#blog">Blog</a>
            <a className="text-sm text-white/80 hover:text-white transition" href="#manifiesto">Manifiesto</a>
            <a className="text-sm text-white/80 hover:text-white transition" href="#comunidad">Conecta</a>
            <a className="rounded-full bg-geo-green px-4 py-2 text-sm font-semibold text-geo-dark hover:bg-geo-green-light transition" href="#newsletter">
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
              <a className="block text-sm text-white/80 hover:text-white" href="#proyectos">Proyectos</a>
              <a className="block text-sm text-white/80 hover:text-white" href="#blog">Blog</a>
              <a className="block text-sm text-white/80 hover:text-white" href="#manifiesto">Manifiesto</a>
              <a className="block text-sm text-white/80 hover:text-white" href="#comunidad">Conecta</a>
              <a className="block text-center rounded-full bg-geo-green px-4 py-2 text-sm font-semibold text-geo-dark" href="#newsletter">
                Newsletter
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="gradient-hero pointer-events-none absolute inset-0 -z-10"/>
        <div className="absolute inset-0 noise-bg opacity-30" />
        
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-8 md:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-geo-green/80">
              Inteligencia Artificial Geoespacial para Hispanoamérica
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Democratizando el conocimiento de <span className="gradient-text">GeoAI</span> en español
            </h1>
            <p className="mt-4 max-w-xl text-white/80 text-lg">
              Soy el puente entre la revolución GeoAI que está transformando el planeta y los 500+ millones de hispanohablantes que merecen acceso a ella.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#proyectos" className="group rounded-full bg-geo-green px-5 py-2.5 text-sm font-semibold text-geo-dark hover:bg-geo-green-light transition flex items-center gap-2">
                Ver proyectos 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
              </a>
              <a href="#manifiesto" className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white/90 hover:bg-white/5 transition">
                Leer manifiesto
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/70">
              <Tag>Python</Tag>
              <Tag>TensorFlow</Tag>
              <Tag>QGIS</Tag>
              <Tag>Sentinel-2</Tag>
              <Tag>Google Earth Engine</Tag>
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
              <pre className="text-xs text-geo-green/80 font-mono">
{`# Detectando deforestación con GeoAI
import rasterio
import numpy as np
from tensorflow import keras

# Cargar imagen Sentinel-2
with rasterio.open('sentinel2.tif') as src:
    img = src.read()
    
# Aplicar modelo CNN
model = keras.models.load_model('forest_model.h5')
predictions = model.predict(img)

print(f"Área deforestada: {np.sum(predictions)} ha")
# Output: Área deforestada: 342.7 ha`}
              </pre>
            </div>
          </motion.div>
        </div>
      </header>

      {/* MÉTRICAS */}
      <section className="mx-auto max-w-7xl px-4 pb-10 md:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <Stat value="100%" label="Código Abierto" />
          <Stat value="500M+" label="Hispanohablantes" />
          <Stat value="∞" label="Potencial de Impacto" />
          <Stat value="1" label="Comunidad Unida" />
        </div>
      </section>

      {/* VALORES */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <SectionTitle 
          kicker="Mis Pilares"
          title="Construyendo el futuro GeoAI de LATAM"
          subtitle="Cada línea de código compartida, cada concepto explicado con paciencia, cada error admitido honestamente, es un ladrillo en el puente."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <BookOpen className="w-10 h-10 text-geo-green mb-4" />
            <h3 className="text-lg font-semibold mb-2">Educación Accesible</h3>
            <p className="text-sm text-white/75">
              Contenido técnico riguroso pero comprensible. Todo en español, sin barreras, para cualquier profesional motivado.
            </p>
          </Card>
          
          <Card>
            <Code className="w-10 h-10 text-geo-green mb-4" />
            <h3 className="text-lg font-semibold mb-2">Código Abierto</h3>
            <p className="text-sm text-white/75">
              Todo el código disponible. Cada proyecto, tutorial y experimento. El conocimiento que no se comparte se desperdicia.
            </p>
          </Card>
          
          <Card>
            <Users className="w-10 h-10 text-geo-green mb-4" />
            <h3 className="text-lg font-semibold mb-2">Comunidad Primero</h3>
            <p className="text-sm text-white/75">
              No busco audiencia, busco comunidad. Personas que se conocen, se ayudan y crean juntos.
            </p>
          </Card>
          
          <Card>
            <Heart className="w-10 h-10 text-geo-green mb-4" />
            <h3 className="text-lg font-semibold mb-2">Honestidad Radical</h3>
            <p className="text-sm text-white/75">
              Documento mis errores y fracasos. Aprende de mis tropiezos. La transparencia construye confianza.
            </p>
          </Card>
          
          <Card>
            <Globe className="w-10 h-10 text-geo-green mb-4" />
            <h3 className="text-lg font-semibold mb-2">Contexto Local</h3>
            <p className="text-sm text-white/75">
              Aplicaciones para problemas latinoamericanos reales: deforestación, agricultura tropical, urbanización.
            </p>
          </Card>
          
          <Card>
            <Rocket className="w-10 h-10 text-geo-green mb-4" />
            <h3 className="text-lg font-semibold mb-2">Impacto Real</h3>
            <p className="text-sm text-white/75">
              El éxito se mide en proyectos implementados y vidas mejoradas, no en likes o seguidores.
            </p>
          </Card>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <SectionTitle 
          kicker="Open Source"
          title="Proyectos Destacados"
          subtitle="Soluciones reales para problemas reales de nuestra región"
        />
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {proyectos.map((proyecto, i) => (
            <Card key={i}>
              <div className="flex items-start justify-between mb-4">
                <Badge variant={proyecto.status === 'Activo' ? 'green' : proyecto.status === 'En desarrollo' ? 'cyan' : 'default'}>
                  {proyecto.status}
                </Badge>
                <div className="flex items-center gap-3 text-xs text-white/60">
                  <span className="flex items-center gap-1">
                    <Star size={12} /> {proyecto.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={12} /> {proyecto.contributors}
                  </span>
                </div>
              </div>
              
              <h3 className="mb-2 text-lg font-semibold">{proyecto.title}</h3>
              <p className="mb-3 text-sm text-white/75">{proyecto.description}</p>
              
              <div className="mb-4">
                {proyecto.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
              </div>
              
              <div className="flex items-center gap-3">
                <a href={proyecto.github} className="flex items-center gap-1 text-sm font-semibold text-geo-green hover:text-geo-green-light transition">
                  <Github size={14} />
                  GitHub
                </a>
                {proyecto.demo && (
                  <a href={proyecto.demo} className="flex items-center gap-1 text-sm font-semibold text-geo-cyan hover:text-geo-cyan-light transition">
                    <ExternalLink size={14} />
                    Demo
                  </a>
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
          <a href="#comunidad" className="rounded-full bg-geo-green px-5 py-2.5 text-sm font-semibold text-geo-dark hover:bg-geo-green-light transition inline-flex items-center gap-2">
            <GitBranch size={16} />
            Proponer Proyecto
          </a>
        </motion.div>
      </section>

      {/* BLOG */}
      <section id="blog" className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <SectionTitle 
          kicker="Aprendizaje en Público"
          title="Blog & Tutoriales"
          subtitle="Documentando el camino, compartiendo conocimiento"
        />
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Card key={i}>
              <div className="flex items-center gap-2 mb-3">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="green">{tag}</Badge>
                ))}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{post.title}</h3>
              <p className="mb-3 text-sm text-white/75">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>{post.date}</span>
                <span>{post.readTime} min lectura</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* MANIFIESTO */}
      <section id="manifiesto" className="mx-auto max-w-5xl px-4 py-16 md:px-8">
        <SectionTitle 
          kicker="El Core Genuino"
          title="Manifiesto GeoAI LATAM"
        />
        
        <Card hover={false} className="p-8 md:p-10">
          <div className="space-y-6 text-white/80">
            <div>
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-geo-green">🎯</span> Mi Propósito
              </h3>
              <p className="leading-relaxed">
                Soy el puente entre dos mundos que necesitan encontrarse: La revolución GeoAI que está transformando el planeta 
                y los 500+ millones de hispanohablantes que merecen acceso a ella.
              </p>
              <p className="mt-2 text-sm italic">
                No porque sea el más brillante. No porque lo sepa todo. 
                Sino porque estoy aquí, ahora, dispuesto a construir esa conexión.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-geo-green">🔭</span> Visión
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-geo-green mt-1 flex-shrink-0" />
                  <span>Un estudiante en Bogotá, Lima o Ciudad de México puede aprender GeoAI sin dominar inglés perfectamente</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-geo-green mt-1 flex-shrink-0" />
                  <span>Una ingeniera en Argentina puede implementar IA geoespacial para resolver problemas locales</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-geo-green mt-1 flex-shrink-0" />
                  <span>Proyectos latinoamericanos usando las mismas herramientas de vanguardia que Silicon Valley</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-geo-green mt-1 flex-shrink-0" />
                  <span>Una comunidad vibrante donde compartir conocimiento GeoAI es la norma</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-geo-green">💎</span> Mis No Negociables
              </h3>
              <ul className="space-y-2">
                <li>• <b>Honestidad Radical:</b> Admitir errores, mostrar fracasos, ser transparente</li>
                <li>• <b>Código Abierto:</b> Todo público, reproducible y versionado</li>
                <li>• <b>Comunidad sobre Audiencia:</b> Prefiero 500 personas activas que 50,000 fantasmas</li>
                <li>• <b>Impacto Real:</b> Éxito = proyectos implementados, no likes</li>
                <li>• <b>Sostenibilidad Personal:</b> Esto es un maratón, no un sprint</li>
              </ul>
            </div>

            <div className="pt-4 border-t border-white/10">
              <blockquote className="text-center italic text-lg">
                "Cada línea de código compartida, cada concepto explicado con paciencia, 
                cada error admitido honestamente, es un ladrillo en el puente entre 
                la revolución GeoAI global y los profesionales hispanohablantes que la necesitan."
              </blockquote>
              <p className="text-center mt-4 font-semibold gradient-text">
                Del dato a la acción. Del presente al futuro.
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* COMUNIDAD/CONECTA */}
      <section id="comunidad" className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <SectionTitle 
          kicker="Únete"
          title="Conecta con la Comunidad"
          subtitle="No busco audiencia, busco comunidad"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card>
            <Github className="w-8 h-8 text-geo-green mb-3" />
            <h4 className="font-semibold mb-1">GitHub</h4>
            <p className="text-xs text-white/60">Código abierto</p>
          </Card>
          
          <Card>
            <Twitter className="w-8 h-8 text-geo-cyan mb-3" />
            <h4 className="font-semibold mb-1">Twitter/X</h4>
            <p className="text-xs text-white/60">Actualizaciones</p>
          </Card>
          
          <Card>
            <Linkedin className="w-8 h-8 text-geo-green mb-3" />
            <h4 className="font-semibold mb-1">LinkedIn</h4>
            <p className="text-xs text-white/60">Profesional</p>
          </Card>
          
          <Card>
            <Youtube className="w-8 h-8 text-geo-cyan mb-3" />
            <h4 className="font-semibold mb-1">YouTube</h4>
            <p className="text-xs text-white/60">Tutoriales</p>
          </Card>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="newsletter" className="mx-auto max-w-3xl px-4 pb-20 md:px-8">
        <SectionTitle 
          kicker="Newsletter"
          title="No te pierdas nada"
          subtitle="Tutoriales, proyectos y recursos GeoAI cada dos semanas"
        />
        
        <form className="mx-auto flex max-w-xl flex-col items-center gap-3 md:flex-row">
          <input 
            type="email" 
            placeholder="tu@email.com" 
            className="w-full flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-geo-green backdrop-blur"
          />
          <button className="rounded-full bg-geo-green px-6 py-3 text-sm font-semibold text-geo-dark hover:bg-geo-green-light transition">
            Suscribirme
          </button>
        </form>
        <p className="mt-3 text-center text-xs text-white/60">
          Sin spam. Solo contenido de valor.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-geo-dark-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-8 md:flex-row md:px-8">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-geo-green to-geo-cyan flex items-center justify-center">
              <span className="text-[10px] font-bold text-geo-dark">GA</span>
            </div>
            <div className="text-sm text-white/70">
              © 2025 GeoAI LATAM · Código abierto con ❤️
            </div>
          </div>
          <div className="flex gap-6 text-sm text-white/70">
            <a href="#" className="hover:text-white transition flex items-center gap-1">
              <Mail size={14} /> Contacto
            </a>
            <a href="#manifiesto" className="hover:text-white transition">Manifiesto</a>
            <a href="#comunidad" className="hover:text-white transition">Comunidad</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
