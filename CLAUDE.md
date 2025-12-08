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

**Design Tokens** (`styles/design-tokens.js`):
- **Single source of truth** for all design values (colors, shadows, typography, animations, gradients)
- Centralized configuration prevents hardcoded values and ensures consistency
- Used by Tailwind config and referenced throughout the application
- Makes theme changes easy by updating values in one place

**Global Styles** (`styles/globals.css`):
- Custom scrollbar styling (geo-green color)
- Utility classes: `.gradient-text`, `.glass`, `.glow-green`, `.glow-cyan`, `.text-shadow-glow-green`, `.noise-bg`
- Gradient backgrounds (`.gradient-dark`, `.gradient-hero`)
- Smooth scroll behavior configured in `pages/_app.js`
- Well-documented with comments explaining each utility's purpose

**Tailwind Configuration** (`tailwind.config.js`):
- Imports and uses `design-tokens.js` for consistency
- Custom color scales: `geo-green`, `geo-cyan`, `geo-dark` (sourced from design tokens)
- Extended typography: `text-xxs` (0.65rem), `text-2xs` (0.7rem), `tracking-wider`, `tracking-widest`
- Custom shadows: `shadow-glow-green`, `shadow-glow-cyan`, `shadow-card-border`, `shadow-card-hover`
- Extended animations: `pulse-slow`, `float`, `glow` (using token-defined durations and timings)
- Custom fonts: Inter (sans), JetBrains Mono (mono)
- Custom border radius: `rounded-card`, `rounded-card-lg`
- Background image gradients for hero section
- Scans `pages/`, `components/`, `app/` directories for class detection

**Mobile-First Design:**
- Responsive breakpoints via Tailwind (md, lg)
- Mobile menu state management with React hooks
- Optimized image delivery through Next.js

### Key Files

- `pages/index.js` - Main homepage with all sections
- `pages/_app.js` - Global app wrapper with smooth scroll behavior
- `pages/_document.js` - HTML meta tags (language: es, OpenGraph, Twitter cards)
- `styles/design-tokens.js` - **Centralized design system tokens (single source of truth)**
- `styles/globals.css` - Custom utilities and effects
- `tailwind.config.js` - Theme configuration (imports design tokens)
- `next.config.js` - React Strict Mode enabled, image optimization configured
- `data/site.js` - Site configuration (social links, navigation, metrics, values)
- `components/sections/` - Section components (Hero, Metrics, Values, etc.)
- `components/ui/` - Reusable UI components (Card, Badge, Tag, etc.)
- `components/layout/` - Layout components (Navbar, Footer)

## Styling Best Practices

**DO:**
- ✅ Use design tokens from `styles/design-tokens.js` for all theme values
- ✅ Use Tailwind utilities: `text-xxs`, `text-2xs`, `shadow-glow-green`, `rounded-card-lg`
- ✅ Use semantic class names from `globals.css`: `.gradient-text`, `.glass`, `.text-shadow-glow-green`
- ✅ Document custom utilities with comments explaining their purpose
- ✅ Keep styles consistent with the existing design system

**DON'T:**
- ❌ Use arbitrary values like `text-[0.65rem]` or `shadow-[0_0_0_1px_rgba(...)]`
- ❌ Use inline styles (`style={{ ... }}`) except for truly dynamic values
- ❌ Duplicate color values across files (use design tokens instead)
- ❌ Create magic numbers without documenting them in design tokens

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
