# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**GeoAI LATAM** is a modern Next.js 14 portfolio/showcase website promoting democratization of geospatial AI knowledge for Spanish-speaking communities (500+ million speakers across LATAM). The site is fully responsive, features custom animations, and is optimized for Vercel deployment. All content is hardcoded in a single page component.

**Tech Stack:**
- Next.js 14.2.33 with React 18
- Tailwind CSS 3.4 with custom color palette
- Framer Motion for animations
- Lucide React for icons
- TypeScript 5 (available but not enforced)

## Development Commands

```bash
npm run dev        # Start development server at http://localhost:3000
npm run build      # Create production build
npm start          # Run production server (requires build first)
npm run lint       # Run ESLint checks
```

**Testing:** No testing framework is configured. This is a presentation/portfolio site without automated tests.

## Code Architecture & Structure

### Single-Page Design
All page content lives in `pages/index.js` (900+ lines). The page is organized into logical sections:

1. **Navbar** - Sticky navigation with mobile menu toggle
2. **Hero** - Welcome section with gradient text effect and CTA buttons
3. **Metrics** - 4 stat cards (Open Source %, speakers, impact, community unity)
4. **Values/Pillars** - 6 foundational community values
5. **Projects** - 3 project showcase cards with status badges, GitHub stars/contributors
6. **Blog** - 3 recent blog posts with tags and reading time
7. **Manifest** - Community vision and values statement
8. **Community/Connect** - Social media links
9. **Newsletter** - Email subscription form

### Component Library
Reusable components are defined inline in `pages/index.js`:
- `Badge` - Status indicator (e.g., "En Desarrollo")
- `Tag` - Category label with styling
- `Card` - Reusable card container with hover effects
- `SectionTitle` - Consistent section heading styling
- `Stat` - Metric display component

### Styling Architecture

**Global Styles** (`styles/globals.css`):
- Custom CSS variables for the GeoAI color palette
- Custom scrollbar styling (geo-green color)
- Utility classes: `.gradient-text`, `.glass`, `.glow-green`, `.glow-cyan`, `.noise-bg`, gradient backgrounds
- Smooth scroll behavior configured in `pages/_app.js`

**Tailwind Configuration** (`tailwind.config.js`):
- Custom color scales: `geo-green` (#10b981), `geo-cyan` (#06b6d4), `geo-dark` (#020a12)
- Extended animations: `pulse-slow`, `float`, `glow`
- Custom fonts: Inter (sans), JetBrains Mono (mono)
- Background image gradients for hero section
- Scans `pages/`, `components/`, `app/` directories for class detection

**Mobile-First Design:**
- Responsive breakpoints via Tailwind (md, lg)
- Mobile menu state management with React hooks
- Optimized image delivery through Next.js

### Key Files

- `pages/index.js` - All page content and components (primary file to edit for content changes)
- `pages/_app.js` - Global app wrapper with smooth scroll behavior
- `pages/_document.js` - HTML meta tags (language: es, OpenGraph, Twitter cards)
- `styles/globals.css` - Custom utilities and effects
- `tailwind.config.js` - Theme configuration and custom animations
- `next.config.js` - React Strict Mode enabled, image optimization configured

## Content Customization

### Projects Section
Edit the `proyectos` array in `pages/index.js`:
```javascript
const proyectos = [
  {
    titulo: "Project Name",
    descripcion: "Description",
    estado: "En Desarrollo", // Status badge
    tags: ["Python", "TensorFlow"],
    github: "https://github.com/...",
    stars: 42,
    contributors: 5
  }
  // Add more projects
];
```

### Blog Posts
Edit the `blogPosts` array in `pages/index.js`:
```javascript
const blogPosts = [
  {
    titulo: "Post Title",
    extracto: "Short excerpt",
    tags: ["GeoAI", "Sentinel-2"],
    tiempoLectura: "8 min"
  }
  // Add more posts
];
```

### Social Links
Locate the COMUNIDAD/CONECTA section and update social media URLs directly in the JSX.

### Colors & Theme
Modify `tailwind.config.js` to adjust:
- `geo-green`, `geo-cyan`, `geo-dark` color scales
- Custom animations: `pulse-slow`, `float`, `glow`
- Font families and background gradients

## Important Notes

1. **No Database/CMS**: Content is fully hardcoded. For dynamic content, would need to integrate a CMS or API.
2. **No Testing**: Add Jest/Vitest if test coverage becomes necessary.
3. **TypeScript Optional**: Types are available (`@types/react`, `@types/node`) but not currently enforced. Add a `tsconfig.json` enforcement if stricter typing is needed.
4. **Deployment**: Built for Vercel. Push to GitHub and connect to Vercel for one-click deployments.
5. **Language**: Default language is Spanish (es). English content is minimal.
6. **Performance**: Uses Next.js static generation for fast page loads. No dynamic API calls configured.

## Development Workflow

1. `npm install` - Install dependencies
2. `npm run dev` - Start local development server
3. Edit `pages/index.js` for content, styling, or components
4. Test responsive design using browser dev tools
5. `npm run lint` - Check for ESLint issues
6. Commit and push to trigger Vercel deployment

For styling changes, modify `styles/globals.css` (custom utilities) or `tailwind.config.js` (theme/animation configuration).
