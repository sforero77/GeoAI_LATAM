import { motion } from 'framer-motion'
import { MapPin, Briefcase, GraduationCap, Target } from 'lucide-react'
import { Card, SectionTitle } from '../ui'

export const AboutMe = () => {
  return (
    <section id="sobre-mi" className="mx-auto max-w-5xl px-4 py-16 md:px-8">
      <SectionTitle
        kicker="Quién Soy"
        title="La persona detrás de GeoAI LATAM"
        subtitle="Construyendo puentes entre IA y Geoespacial en Latinoamérica"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="md:col-span-2"
        >
          <Card hover={false} className="p-6 md:p-8 h-full">
            <h3 className="text-xl font-bold text-white mb-4">Mi Historia</h3>
            <div className="space-y-4 text-white/80">
              <p>
                Soy un profesional apasionado por la intersección entre la inteligencia artificial
                y los sistemas de información geográfica. Mi camino en GeoAI comenzó cuando descubrí
                el potencial de estas tecnologías para resolver problemas reales en Latinoamérica.
              </p>
              <p>
                A lo largo de mi carrera, he trabajado en proyectos que van desde detección de
                cambios en uso de suelo hasta análisis predictivo para agricultura. Cada proyecto
                me ha enseñado algo nuevo y me ha convencido más de la importancia de compartir
                este conocimiento.
              </p>
              <p>
                GeoAI LATAM nace de una convicción simple: el conocimiento crece cuando se comparte.
                No tengo todas las respuestas, pero estoy comprometido a aprender en público,
                documentar mis procesos y crear un espacio donde todos podamos crecer juntos.
              </p>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card hover={false} className="p-6 h-full">
            <h3 className="text-xl font-bold text-white mb-4">En Resumen</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-geo-green mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Ubicación</p>
                  <p className="text-sm text-white/70">Latinoamérica</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-geo-green mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Enfoque</p>
                  <p className="text-sm text-white/70">GeoAI & Remote Sensing</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-geo-green mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Formación</p>
                  <p className="text-sm text-white/70">Aprendizaje continuo</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-geo-green mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Misión</p>
                  <p className="text-sm text-white/70">Construir comunidad GeoAI</p>
                </div>
              </li>
            </ul>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-6"
      >
        <Card hover={false} className="p-6 md:p-8">
          <h3 className="text-xl font-bold text-white mb-4">Por qué hago esto</h3>
          <div className="text-white/80 space-y-3">
            <p>
              Creo firmemente que Latinoamérica tiene los problemas más interesantes para resolver
              con GeoAI: desde la Amazonía hasta los Andes, desde megalópolis hasta comunidades rurales.
              Tenemos los datos, tenemos el talento, solo necesitamos conectarnos mejor.
            </p>
            <p>
              Mi objetivo no es ser el experto que da todas las respuestas, sino ser alguien que
              aprende en voz alta, que comparte sus errores tanto como sus éxitos, y que ayuda a
              construir una comunidad donde todos nos apoyemos mutuamente.
            </p>
            <p className="font-medium text-geo-green">
              Si estás aquí, ya eres parte de esto. Bienvenido.
            </p>
          </div>
        </Card>
      </motion.div>
    </section>
  )
}

export default AboutMe
