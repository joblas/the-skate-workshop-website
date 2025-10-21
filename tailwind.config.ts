import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // Premium Breakpoints - Mobile First
    screens: {
      'sm': '800px',   // Tablet
      'md': '1200px',  // Desktop
      'lg': '1280px',  // Large Desktop
      'xl': '2048px',  // Ultra-wide
    },
    extend: {
      colors: {
        // The Skate Workshop Premium Red Branding
        brand: {
          red: '#E84545',
          'red-dark': '#D13939',
          'red-light': '#FF5555',
          black: '#000000',
          white: '#FFFFFF',
        },
        // Premium Background System
        background: '#000000',
        foreground: '#FFFFFF',
        surface: '#0A0A0A',
        // State Colors
        success: '#4CAF50',
        warning: '#FF9800',
        error: '#F44336',
        // Extended Neutral Palette for Glass Effects
        neutral: {
          400: '#9CA3AF',
          800: '#1F2937',
        },
      },
      fontFamily: {
        sans: ['var(--font-anek-tamil)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-anek-tamil)', 'system-ui', 'sans-serif'],
        body: ['var(--font-geist)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'SF Mono', 'Monaco', 'monospace'],
      },
      fontSize: {
        // Premium Typography Scale with Tight Letter-Spacing
        'display-xl': ['clamp(4rem, 8vw, 8rem)', { lineHeight: '1', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-lg': ['clamp(3.5rem, 7vw, 7rem)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display': ['clamp(3rem, 6vw, 6rem)', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '700' }],
        'h1': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],
        'h3': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.25', letterSpacing: '-0.015em', fontWeight: '600' }],
        'h4': ['clamp(1.5rem, 2.5vw, 2rem)', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body-xl': ['1.375rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
        'body-lg': ['1.25rem', { lineHeight: '1.6', letterSpacing: '-0.005em' }],
        'body': ['1.125rem', { lineHeight: '1.7', letterSpacing: '0' }],
        'body-sm': ['1rem', { lineHeight: '1.7', letterSpacing: '0' }],
      },
      spacing: {
        // Premium Spacing Scale matching Primal Training
        '14': '3.5rem',    // 56px
        '18': '4.5rem',    // 72px
        '20': '5rem',      // 80px
        '23': '5.75rem',   // 92px
        '88': '22rem',     // 352px
        '128': '32rem',    // 512px
      },
      maxWidth: {
        // Premium Content Max Width
        'content': '2048px',
        'section': '1280px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          md: '3rem',
          lg: '4rem',
        },
        screens: {
          sm: '800px',
          md: '1200px',
          lg: '1280px',
          xl: '2048px',
        },
      },
      boxShadow: {
        // Premium Shadows
        'glow': '0 0 20px rgba(232, 69, 69, 0.3)',
        'glow-lg': '0 0 40px rgba(232, 69, 69, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
export default config
