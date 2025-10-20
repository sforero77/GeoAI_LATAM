# 🌎 GeoAI LATAM - Next.js

Website moderno para democratizar el conocimiento de inteligencia artificial geoespacial en español.

## 🚀 Stack Tecnológico

- **Framework:** Next.js 14 con React 18
- **Estilos:** Tailwind CSS 3.4
- **Animaciones:** Framer Motion
- **Iconos:** Lucide React
- **Deploy:** Optimizado para Vercel

## 📦 Instalación

```bash
# Clonar o descargar el proyecto
cd geoai-nextjs

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## 🎨 Características

- ✅ **Diseño Moderno Dark**: Gradientes, glassmorphism, efectos de luz
- ✅ **100% Responsive**: Mobile-first design
- ✅ **Animaciones Suaves**: Framer Motion para transiciones elegantes
- ✅ **Performance Optimizada**: Next.js con SSG/SSR
- ✅ **SEO Ready**: Meta tags configurados
- ✅ **Componentes Reutilizables**: Card, Badge, SectionTitle, etc.

## 🏗️ Estructura

```
/
├── pages/
│   ├── index.js        # Página principal (todo en uno)
│   ├── _app.js        # Configuración global
│   └── _document.js   # HTML base
├── styles/
│   └── globals.css    # Estilos Tailwind
├── public/            # Archivos estáticos
├── package.json
├── tailwind.config.js # Configuración de colores personalizados
└── next.config.js
```

## 🎯 Personalización Rápida

### Colores (en `tailwind.config.js`):
- `geo-green`: #10b981 (Verde principal)
- `geo-cyan`: #06b6d4 (Cyan acento)
- `geo-dark`: #020a12 (Fondo oscuro)

### Contenido:
Todo el contenido está en `pages/index.js`. Busca y modifica:
- `proyectos`: Array con tus proyectos
- `blogPosts`: Array con posts del blog
- Textos del manifiesto en la sección MANIFIESTO

### Redes Sociales:
Actualiza los enlaces en la sección COMUNIDAD/CONECTA

## 🚢 Deployment

### Vercel (Recomendado - Un click)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Sube el proyecto a GitHub
2. Conecta con Vercel
3. Deploy automático

### Build Local
```bash
npm run build
npm start
```

## 📱 Vista Previa

- **Hero**: Introducción con código ejemplo animado
- **Métricas**: Stats importantes de la comunidad
- **Valores**: 6 pilares fundamentales
- **Proyectos**: Cards con status, tags y links
- **Blog**: Posts recientes con tags
- **Manifiesto**: Tu visión y valores
- **Comunidad**: Links a redes sociales
- **Newsletter**: Formulario de suscripción

## 🤝 Contribuir

1. Fork el proyecto
2. Crea tu rama (`git checkout -b feature/nueva-caracteristica`)
3. Commit (`git commit -m 'Add: nueva característica'`)
4. Push (`git push origin feature/nueva-caracteristica`)
5. Pull Request

## 📄 Licencia

MIT - Código abierto con ❤️

---

**Del dato a la acción, del presente al futuro** 🌎🚀

Creado con pasión para la comunidad GeoAI LATAM
