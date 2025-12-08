const { designTokens } = require('./styles/design-tokens')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ====== COLORES ======
      colors: {
        geo: {
          green: designTokens.colors.geoGreen.DEFAULT,
          'green-light': designTokens.colors.geoGreen.light,
          'green-dark': designTokens.colors.geoGreen.dark,
          cyan: designTokens.colors.geoCyan.DEFAULT,
          'cyan-light': designTokens.colors.geoCyan.light,
          blue: {
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9',
            600: '#0284c7',
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e',
            950: '#082f49',
          },
          dark: designTokens.colors.geoDark,
          gray: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
          },
        },
      },

      // ====== TIPOGRAFÍA ======
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        xxs: [designTokens.typography.sizes.xxs, { lineHeight: '1rem' }],
        '2xs': [designTokens.typography.sizes['2xs'], { lineHeight: '1rem' }],
      },
      letterSpacing: {
        wider: designTokens.typography.tracking.wider,
        widest: designTokens.typography.tracking.widest,
      },

      // ====== SOMBRAS ======
      boxShadow: {
        'glow-green-sm': designTokens.shadows.glowGreen.sm,
        'glow-green': designTokens.shadows.glowGreen.md,
        'glow-green-lg': designTokens.shadows.glowGreen.lg,
        'glow-cyan': designTokens.shadows.glowCyan.md,
        'card-border': designTokens.shadows.cardBorder,
        'card-hover': designTokens.shadows.cardHover,
      },

      // ====== ANIMACIONES ======
      animation: {
        'pulse-slow': `pulse ${designTokens.animations.durations.slow} ${designTokens.animations.timings.ease} infinite`,
        'float': `float ${designTokens.animations.durations.float} ${designTokens.animations.timings.easeInOut} infinite`,
        'glow': `glow ${designTokens.animations.durations.glow} ${designTokens.animations.timings.easeInOut} infinite alternate`,
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: designTokens.shadows.glowGreen.sm },
          '100%': { boxShadow: designTokens.shadows.glowGreen.lg },
        },
      },

      // ====== BACKGROUNDS ======
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      // ====== BLUR ======
      blur: {
        'hero': designTokens.blur.heroGlow,
      },

      // ====== BORDER RADIUS ======
      borderRadius: {
        'card': designTokens.borderRadius.card,
        'card-lg': designTokens.borderRadius.cardLg,
      },
    },
  },
  plugins: [],
}
