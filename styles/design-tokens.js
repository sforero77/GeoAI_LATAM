/**
 * Design Tokens - Centralización de valores de diseño
 *
 * Este archivo contiene todos los valores mágicos y configuraciones
 * de diseño del proyecto para facilitar mantenimiento y consistencia.
 */

export const designTokens = {
  // ====== COLORES ======
  colors: {
    geoGreen: {
      DEFAULT: '#10b981',
      light: '#34d399',
      dark: '#059669',
    },
    geoCyan: {
      DEFAULT: '#06b6d4',
      light: '#22d3ee',
    },
    geoDark: {
      DEFAULT: '#020a12',
      100: '#04121d',
      200: '#061524',
      300: '#071a29',
      400: '#0a2133',
    },
  },

  // ====== SOMBRAS ======
  shadows: {
    // Sombras de glow
    glowGreen: {
      sm: '0 0 20px rgba(16, 185, 129, 0.3)',
      md: '0 0 30px rgba(16, 185, 129, 0.3)',
      lg: '0 0 30px rgba(16, 185, 129, 0.8), 0 0 40px rgba(16, 185, 129, 0.4)',
    },
    glowCyan: {
      md: '0 0 30px rgba(6, 182, 212, 0.3)',
    },
    // Sombra de borde sutil
    cardBorder: '0 0 0 1px rgba(255, 255, 255, 0.04)',
    // Sombra de hover en cards
    cardHover: '0 25px 50px -12px rgba(16, 185, 129, 0.1)',
  },

  // ====== TIPOGRAFÍA ======
  typography: {
    // Tamaños personalizados
    sizes: {
      xxs: '0.65rem',    // 10.4px - Para labels muy pequeños
      '2xs': '0.7rem',   // 11.2px - Para textos compactos
    },
    // Letter spacing
    tracking: {
      wider: '0.15em',
      widest: '0.2em',
    },
  },

  // ====== ANIMACIONES ======
  animations: {
    durations: {
      slow: '4s',
      float: '6s',
      glow: '2s',
    },
    timings: {
      ease: 'cubic-bezier(0.4, 0, 0.6, 1)',
      easeInOut: 'ease-in-out',
    },
  },

  // ====== GRADIENTES ======
  gradients: {
    // Fondo principal oscuro
    dark: 'radial-gradient(60% 80% at 70% 10%, #0b6070 0%, #04121d 55%, #020a12 100%)',
    // Hero section
    hero: 'radial-gradient(600px 200px at 70% -10%, rgba(16, 185, 129, 0.25), transparent)',
  },

  // ====== BLUR ======
  blur: {
    heroGlow: '3rem', // 48px
  },

  // ====== BORDER RADIUS ======
  borderRadius: {
    card: '1.5rem', // 24px
    cardLg: '2rem', // 32px
  },
}

export default designTokens
