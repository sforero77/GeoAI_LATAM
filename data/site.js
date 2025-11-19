// Configuración centralizada del sitio GeoAI LATAM
// Edita este archivo para actualizar información global

export const siteConfig = {
  name: 'GeoAI LATAM',
  tagline: 'Del dato a la acción',
  description: 'Comunidad de GeoAI enfocada en soluciones integrales para los desafíos de Latinoamérica',
  url: 'https://geoai-latam.vercel.app', // Actualiza con tu dominio

  // Redes sociales
  social: {
    github: 'https://github.com/geoai-latam',
    twitter: 'https://twitter.com/tu-usuario', // TODO: Actualizar
    linkedin: 'https://www.linkedin.com/in/sebastian-forero-552581145/',
    youtube: 'https://www.youtube.com/@GeoAI-Latam',
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
    { value: '20+', label: 'Países en LATAM' },
    { value: '∞', label: 'Potencial de Impacto' },
    { value: '1', label: 'Comunidad Unida' },
  ],

  // Valores/Pilares de la comunidad
  values: [
    {
      icon: 'BookOpen',
      title: 'Aprendizaje Colaborativo',
      description: 'Contenido técnico riguroso pero comprensible. Aprendemos juntos, sin barreras, compartiendo experiencias y conocimientos.',
    },
    {
      icon: 'Code',
      title: 'Código Abierto',
      description: 'Todo el código disponible. Cada proyecto, tutorial y experimento. El conocimiento que no se comparte se desperdicia.',
    },
    {
      icon: 'Users',
      title: 'Comunidad Primero',
      description: 'Aquí nos conocemos, nos ayudamos y creamos juntos. Cada persona aporta y todos crecemos.',
    },
    {
      icon: 'Heart',
      title: 'Honestidad Radical',
      description: 'Documentamos errores y fracasos. La transparencia construye confianza y acelera el aprendizaje de todos.',
    },
    {
      icon: 'Globe',
      title: 'Soluciones para LATAM',
      description: 'Enfocados en problemas reales de nuestra región: deforestación, agricultura, urbanización, gestión de riesgos.',
    },
    {
      icon: 'Rocket',
      title: 'Impacto Real',
      description: 'El éxito se mide en proyectos implementados y problemas resueltos, no en métricas de vanidad.',
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
  heroTags: ['Python', 'TensorFlow', 'QGIS', 'Sentinel-2', 'Google Earth Engine', 'ArcGIS Pro', 'ArcPy', 'ArcGIS JS', 'Leaflet', 'DuckDB', 'GeoPandas'],
}

export default siteConfig
