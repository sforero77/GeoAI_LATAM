import { CheckCircle } from 'lucide-react'
import { Card, SectionTitle } from '../ui'

export const Manifest = () => {
  return (
    <section id="manifiesto" className="mx-auto max-w-5xl px-4 py-16 md:px-8">
      <SectionTitle kicker="El Core Genuino" title="Manifiesto GeoAI LATAM" />

      <Card hover={false} className="p-8 md:p-10">
        <div className="space-y-6 text-white/80">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">
              Nuestro Propósito
            </h3>
            <p className="leading-relaxed">
              Crear un espacio donde profesionales, estudiantes y entusiastas de Latinoamérica podamos desarrollar
              soluciones de inteligencia geoespacial adaptadas a los desafíos únicos de nuestra región.
            </p>
            <p className="mt-2 text-sm italic">
              No se trata de ser expertos perfectos. Se trata de aprender juntos,
              compartir lo que sabemos y construir algo que realmente sirva.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">
              Lo que Buscamos
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-geo-green mt-1 flex-shrink-0" />
                <span>Profesionales en cualquier país de LATAM implementando GeoAI para resolver problemas locales</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-geo-green mt-1 flex-shrink-0" />
                <span>Proyectos colaborativos que aborden deforestación, agricultura, urbanización y gestión de riesgos</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-geo-green mt-1 flex-shrink-0" />
                <span>Una comunidad activa donde el conocimiento fluye en todas las direcciones</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-geo-green mt-1 flex-shrink-0" />
                <span>Herramientas y metodologías adaptadas a las realidades de Latinoamérica</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">
              Nuestros Compromisos
            </h3>
            <ul className="space-y-2">
              <li><b>Honestidad:</b> Documentamos errores y fracasos porque de ahí aprendemos más</li>
              <li><b>Código Abierto:</b> Todo público, reproducible y disponible para quien lo necesite</li>
              <li><b>Comunidad Real:</b> Preferimos conexiones genuinas sobre números grandes</li>
              <li><b>Impacto Medible:</b> El éxito son proyectos funcionando, no métricas de vanidad</li>
              <li><b>Sostenibilidad:</b> Construimos para el largo plazo, paso a paso</li>
            </ul>
          </div>

          <div className="pt-4 border-t border-white/10">
            <blockquote className="text-center italic text-lg">
              "Cada proyecto compartido, cada problema resuelto en conjunto,
              cada error del que aprendemos, nos acerca más a una Latinoamérica
              que lidera en soluciones geoespaciales para sus propios desafíos."
            </blockquote>
            <div className="flex justify-center my-6">
              <img src="/globe-animated.gif" alt="GeoAI LATAM Animated Globe" style={{ width: '800px', height: '400px' }} className="object-contain rounded-lg" />
            </div>
            <p className="text-center mt-4 font-semibold gradient-text">
              Del dato a la acción. Juntos.
            </p>
          </div>
        </div>
      </Card>
    </section>
  )
}

export default Manifest
