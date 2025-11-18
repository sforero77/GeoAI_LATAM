import {
  BookOpen,
  Code,
  Users,
  Heart,
  Globe,
  Rocket,
} from 'lucide-react'
import { Card, SectionTitle } from '../ui'
import { siteConfig } from '../../data/site'

// Mapa de iconos
const iconMap = {
  BookOpen,
  Code,
  Users,
  Heart,
  Globe,
  Rocket,
}

export const Values = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <SectionTitle
        kicker="Nuestros Pilares"
        title="Construyendo el futuro GeoAI de LATAM"
        subtitle="Valores que nos guían como comunidad. Principios que compartimos y defendemos juntos."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteConfig.values.map((value, i) => {
          const IconComponent = iconMap[value.icon]
          return (
            <Card key={i}>
              {IconComponent && <IconComponent className="w-10 h-10 text-geo-green mb-4" />}
              <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-white/75">{value.description}</p>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

export default Values
