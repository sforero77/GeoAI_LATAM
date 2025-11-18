import { CheckCircle } from 'lucide-react'
import { Card, SectionTitle } from '../ui'

export const Manifest = () => {
  return (
    <section id="manifiesto" className="mx-auto max-w-5xl px-4 py-16 md:px-8">
      <SectionTitle kicker="El Core Genuino" title="Manifiesto GeoAI LATAM" />

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
  )
}

export default Manifest
