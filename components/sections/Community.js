import { Github, Twitter, Linkedin, Youtube } from 'lucide-react'
import { Card, SectionTitle } from '../ui'
import { siteConfig } from '../../data/site'

export const Community = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: siteConfig.social.github,
      description: 'Código abierto',
      color: 'text-geo-green',
    },
    {
      name: 'Twitter/X',
      icon: Twitter,
      url: siteConfig.social.twitter,
      description: 'Actualizaciones',
      color: 'text-geo-cyan',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: siteConfig.social.linkedin,
      description: 'Profesional',
      color: 'text-geo-green',
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: siteConfig.social.youtube,
      description: 'Tutoriales',
      color: 'text-geo-cyan',
    },
  ]

  return (
    <section id="comunidad" className="mx-auto max-w-6xl px-4 py-16 md:px-8">
      <SectionTitle
        kicker="Únete"
        title="Conecta con la Comunidad"
        subtitle="No busco audiencia, busco comunidad"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {socialLinks.map((social) => {
          const IconComponent = social.icon
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card>
                <IconComponent className={`w-8 h-8 ${social.color} mb-3`} />
                <h4 className="font-semibold mb-1">{social.name}</h4>
                <p className="text-xs text-white/60">{social.description}</p>
              </Card>
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default Community
