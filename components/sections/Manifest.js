import { Heart, BookOpen, Users, Target, Leaf } from 'lucide-react'
import { Card, SectionTitle } from '../ui'

export const Manifest = () => {
  return (
    <section id="manifiesto" className="mx-auto max-w-5xl px-4 py-16 md:px-8">
      <SectionTitle kicker="Del territorio al dato. Del dato a la acción. Juntos." title="Manifiesto GeoAI LATAM" />

      <div className="space-y-8">
        {/* Nuestro Propósito */}
        <Card hover={false} className="p-8 md:p-10">
          <div className="space-y-6 text-white/80">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-geo-green">🎯</span> Nuestro Propósito
              </h3>

              <div className="space-y-4 leading-relaxed">
                <p>
                  GeoAI LATAM nació de una idea sencilla pero poderosa:<br />
                  <span className="text-white font-medium">crear un espacio donde la inteligencia artificial geoespacial deje de ser algo lejano y se convierta en una herramienta real para transformar nuestro territorio.</span>
                </p>

                <p>
                  No buscamos construir la comunidad perfecta.<br />
                  Tampoco queremos jugar a ser expertos iluminados.
                </p>

                <p className="text-lg font-medium text-geo-cyan">
                  Queremos aprender, compartir, equivocarnos, mejorar… y hacerlo en comunidad, desde Latinoamérica, para Latinoamérica.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Lo que buscamos */}
        <Card hover={false} className="p-8 md:p-10">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-geo-green">🔭</span> Lo que buscamos
          </h3>

          <ul className="space-y-4 text-white/80">
            <li className="flex items-start gap-3">
              <span className="text-geo-green mt-1">•</span>
              <span><b className="text-white">Personas</b> que quieran usar GeoAI para resolver problemas reales, sin importar su país, su profesión o su nivel de experiencia.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-geo-green mt-1">•</span>
              <span><b className="text-white">Proyectos</b> que nazcan de nuestras necesidades: deforestación, agricultura inteligente, ciudades complejas, riesgos, desigualdad, territorio vivo.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-geo-green mt-1">•</span>
              <span><b className="text-white">Colaboración genuina:</b> ideas que se cruzan, que se mezclan y que se convierten en soluciones.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-geo-green mt-1">•</span>
              <span><b className="text-white">Metodologías y herramientas</b> que funcionen aquí, con nuestros datos, nuestras realidades y nuestros ritmos.</span>
            </li>
          </ul>
        </Card>

        {/* Nuestros compromisos */}
        <Card hover={false} className="p-8 md:p-10">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-geo-green">💎</span> Nuestros compromisos
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-geo-green/10 text-geo-green">
                  <Heart className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-white text-lg">Honestidad</h4>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Aquí no escondemos errores ni maquillamos resultados. Documentamos todo: lo que funciona y lo que se rompe. Porque crecer es parte del proceso.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-geo-cyan/10 text-geo-cyan">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-white text-lg">Apertura</h4>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                El conocimiento se comparte. El código se libera. Y las ideas se construyen colectivamente.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-geo-green/10 text-geo-green">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-white text-lg">Comunidad Real</h4>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Nos importan las personas, no las métricas. Preferimos una conversación honesta a mil likes vacíos.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-geo-cyan/10 text-geo-cyan">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-white text-lg">Impacto</h4>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Medimos el éxito por lo que logramos juntos: capas que ayudan, modelos que sirven, mapas que cuentan verdades.
              </p>
            </div>

            <div className="space-y-3 md:col-span-2 md:max-w-md md:mx-auto">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-geo-green/10 text-geo-green">
                  <Leaf className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-white text-lg">Sostenibilidad</h4>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Construimos despacio, sin prisa pero sin pausa. Lo importante es que esto dure, que crezca y que deje huella.
              </p>
            </div>
          </div>
        </Card>

        {/* Nuestra Voz */}
        <Card hover={false} className="p-8 md:p-10">
          <div className="space-y-6 text-white/80">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-geo-green">📢</span> Nuestra Voz
              </h3>

              <div className="space-y-4 leading-relaxed">
                <p>
                  Creemos que Latinoamérica no solo puede usar GeoAI.<br />
                  <span className="text-white font-semibold">Puede liderarla.</span><br />
                  Porque aquí los desafíos son inmensos, sí… pero también lo es la creatividad, el talento y la capacidad de resolver con lo que tenemos.
                </p>

                <p>
                  Este manifiesto no es una meta final.<br />
                  Es una invitación: a quienes ya están en este camino, a quienes están empezando, y a quienes no saben por dónde entrar pero sienten la curiosidad despertándose.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <blockquote className="text-center italic text-lg text-white/90 mb-6">
                "Cada mapa que compartimos, cada modelo que entrenamos, cada error del que aprendemos… nos acerca a una Latinoamérica más informada, más consciente y más capaz de decidir su futuro."
              </blockquote>

              <div className="text-center">
                <p className="text-2xl font-bold gradient-text mb-2">
                  GeoAI LATAM
                </p>
                <p className="text-white/70">
                  Territorio, datos y comunidad.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default Manifest
