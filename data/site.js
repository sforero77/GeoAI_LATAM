// Configuración centralizada del sitio GeoAI LATAM
// Edita este archivo para actualizar información global

export const siteConfig = {
  name: 'GeoAI LATAM',
  tagline: 'Del dato a la acción',
  description: 'Democratizando el conocimiento de GeoAI en español para 500+ millones de hispanohablantes',
  url: 'https://geoai-latam.vercel.app', // Actualiza con tu dominio

  // Redes sociales - Actualiza con tus URLs reales
  social: {
    github: 'https://github.com/tu-usuario', // TODO: Actualizar
    twitter: 'https://twitter.com/tu-usuario', // TODO: Actualizar
    linkedin: 'https://linkedin.com/in/tu-usuario', // TODO: Actualizar
    youtube: 'https://youtube.com/@tu-canal', // TODO: Actualizar
    email: 'contacto@geoai-latam.com', // TODO: Actualizar
  },

  // Newsletter - Configura tu proveedor
  newsletter: {
    provider: 'buttondown', // 'buttondown', 'mailchimp', 'resend'
    // Para Buttondown: crea cuenta en buttondown.email
    buttondownUsername: '', // TODO: Tu username de Buttondown
    // Para Mailchimp: usa tu ID de audiencia
    mailchimpAudienceId: '',
  },

  // Métricas del hero (puedes hacerlas dinámicas luego)
  metrics: [
    { value: '100%', label: 'Código Abierto' },
    { value: '500M+', label: 'Hispanohablantes' },
    { value: '∞', label: 'Potencial de Impacto' },
    { value: '1', label: 'Comunidad Unida' },
  ],

  // Valores/Pilares de la comunidad
  values: [
    {
      icon: 'BookOpen',
      title: 'Educación Accesible',
      description: 'Contenido técnico riguroso pero comprensible. Todo en español, sin barreras, para cualquier profesional motivado.',
    },
    {
      icon: 'Code',
      title: 'Código Abierto',
      description: 'Todo el código disponible. Cada proyecto, tutorial y experimento. El conocimiento que no se comparte se desperdicia.',
    },
    {
      icon: 'Users',
      title: 'Comunidad Primero',
      description: 'No busco audiencia, busco comunidad. Personas que se conocen, se ayudan y crean juntos.',
    },
    {
      icon: 'Heart',
      title: 'Honestidad Radical',
      description: 'Documento mis errores y fracasos. Aprende de mis tropiezos. La transparencia construye confianza.',
    },
    {
      icon: 'Globe',
      title: 'Contexto Local',
      description: 'Aplicaciones para problemas latinoamericanos reales: deforestación, agricultura tropical, urbanización.',
    },
    {
      icon: 'Rocket',
      title: 'Impacto Real',
      description: 'El éxito se mide en proyectos implementados y vidas mejoradas, no en likes o seguidores.',
    },
  ],

  // Navegación principal
  navigation: [
    { name: 'Conoceme', href: '/blog/conoceme' },
    { name: 'Proyectos', href: '/#proyectos' },
    { name: 'Blog', href: '/#blog' },
    { name: 'Manifiesto', href: '/#manifiesto' },
    { name: 'Conecta', href: '/#comunidad' },
  ],

  // Tags tecnológicos del hero
  heroTags: ['Python', 'TensorFlow', 'QGIS', 'Sentinel-2', 'Google Earth Engine'],
}

export default siteConfig
