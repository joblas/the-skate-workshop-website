import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // The Skate Workshop Red Branding
        brand: {
          red: '#E84545',
          'red-dark': '#D13939',
          'red-light': '#FF5555',
          black: '#000000',
          white: '#FFFFFF',
        },
        // Keep existing grays for UI elements
        background: '#000000',
        foreground: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
