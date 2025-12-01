import { Heart, BookOpen, Users, Target, Leaf, Compass, Search, Lightbulb, Megaphone } from 'lucide-react'
import { Card, SectionTitle } from '../ui'

export const Manifest = () => {
  return (
    <section id="manifiesto" className="mx-auto max-w-6xl px-4 py-16 md:px-8">
      <SectionTitle kicker="Del territorio al dato. Del dato a la acción. Juntos." title="Manifiesto GeoAI LATAM" />

      {/* Top row: Propósito and Lo que buscamos side by side */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Nuestro Propósito */}
        <Card hover={false} className="p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-geo-green/10 text-geo-green">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Nuestro Propósito</h3>
          </div>

          <div className="space-y-3 text-white/80 text-sm leading-relaxed">
            <p>
              GeoAI LATAM nació de una idea sencilla pero poderosa: <span className="text-white font-medium">crear un espacio donde la inteligencia artificial geoespacial deje de ser algo lejano y se convierta en una herramienta real para transformar nuestro territorio.</span>
            </p>
            <p>
              No buscamos construir la comunidad perfecta. Tampoco queremos jugar a ser expertos iluminados.
            </p>
            <p className="font-medium text-geo-cyan">
              Queremos aprender, compartir, equivocarnos, mejorar... y hacerlo en comunidad, desde Latinoamérica, para Latinoamérica.
            </p>
          </div>
        </Card>

        {/* Lo que buscamos */}
        <Card hover={false} className="p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-geo-cyan/10 text-geo-cyan">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Lo que buscamos</h3>
          </div>

          <ul className="space-y-3 text-white/80 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-geo-green mt-0.5">•</span>
              <span><b className="text-white">Personas</b> que quieran usar GeoAI para resolver problemas reales.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-geo-green mt-0.5">•</span>
              <span><b className="text-white">Proyectos</b> que nazcan de nuestras necesidades: deforestación, agricultura, ciudades, riesgos.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-geo-green mt-0.5">•</span>
              <span><b className="text-white">Colaboración genuina:</b> ideas que se cruzan y se convierten en soluciones.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-geo-green mt-0.5">•</span>
              <span><b className="text-white">Metodologías</b> que funcionen aquí, con nuestros datos y realidades.</span>
            </li>
          </ul>
        </Card>
      </div>

      {/* Nuestros compromisos - Full width with 5 columns */}
      <Card hover={false} className="p-6 md:p-8 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-geo-green/10 text-geo-green">
            <Lightbulb className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white">Nuestros compromisos</h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          <div className="text-center p-3 md:p-4 rounded-lg bg-white/5">
            <div className="inline-flex p-2 rounded-lg bg-geo-green/10 text-geo-green mb-2 md:mb-3">
              <Heart className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <h4 className="font-semibold text-white text-xs md:text-sm mb-1 md:mb-2">Honestidad</h4>
            <p className="text-white/60 text-[0.7rem] md:text-xs leading-relaxed">
              No escondemos errores. Documentamos todo.
            </p>
          </div>

          <div className="text-center p-3 md:p-4 rounded-lg bg-white/5">
            <div className="inline-flex p-2 rounded-lg bg-geo-cyan/10 text-geo-cyan mb-2 md:mb-3">
              <BookOpen className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <h4 className="font-semibold text-white text-xs md:text-sm mb-1 md:mb-2">Apertura</h4>
            <p className="text-white/60 text-[0.7rem] md:text-xs leading-relaxed">
              Conocimiento compartido. Código liberado.
            </p>
          </div>

          <div className="text-center p-3 md:p-4 rounded-lg bg-white/5">
            <div className="inline-flex p-2 rounded-lg bg-geo-green/10 text-geo-green mb-2 md:mb-3">
              <Users className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <h4 className="font-semibold text-white text-xs md:text-sm mb-1 md:mb-2">Comunidad</h4>
            <p className="text-white/60 text-[0.7rem] md:text-xs leading-relaxed">
              Personas sobre métricas. Conversación real.
            </p>
          </div>

          <div className="text-center p-3 md:p-4 rounded-lg bg-white/5">
            <div className="inline-flex p-2 rounded-lg bg-geo-cyan/10 text-geo-cyan mb-2 md:mb-3">
              <Target className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <h4 className="font-semibold text-white text-xs md:text-sm mb-1 md:mb-2">Impacto</h4>
            <p className="text-white/60 text-[0.7rem] md:text-xs leading-relaxed">
              Éxito = proyectos que sirven.
            </p>
          </div>

          <div className="text-center p-3 md:p-4 rounded-lg bg-white/5 col-span-2 sm:col-span-1">
            <div className="inline-flex p-2 rounded-lg bg-geo-green/10 text-geo-green mb-2 md:mb-3">
              <Leaf className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <h4 className="font-semibold text-white text-xs md:text-sm mb-1 md:mb-2">Sostenibilidad</h4>
            <p className="text-white/60 text-[0.7rem] md:text-xs leading-relaxed">
              Sin prisa pero sin pausa.
            </p>
          </div>
        </div>
      </Card>

      {/* Bottom row: Nuestra Voz - Full width but compact */}
      <Card hover={false} className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-geo-cyan/10 text-geo-cyan">
                <Megaphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Nuestra Voz</h3>
            </div>

            <div className="space-y-3 text-white/80 text-sm leading-relaxed">
              <p>
                Creemos que Latinoamérica no solo puede usar GeoAI. <span className="text-white font-semibold">Puede liderarla.</span> Porque aquí los desafíos son inmensos, sí... pero también lo es la creatividad y el talento.
              </p>
              <p>
                Este manifiesto no es una meta final. Es una invitación: a quienes ya están en este camino, a quienes están empezando, y a quienes sienten la curiosidad despertándose.
              </p>
            </div>
          </div>

          <div className="md:w-80 p-4 rounded-lg bg-white/5 border-l-2 border-geo-green">
            <blockquote className="text-sm italic text-white/90 mb-4">
              &quot;Cada mapa que compartimos, cada modelo que entrenamos, cada error del que aprendemos... nos acerca a una Latinoamérica más informada y capaz de decidir su futuro.&quot;
            </blockquote>
            <div className="text-center">
              <p className="text-lg font-bold gradient-text">GeoAI LATAM</p>
              <p className="text-white/60 text-xs">Territorio, datos y comunidad.</p>
            </div>
          </div>
        </div>
      </Card>
    </section>
  )
}

export default Manifest
