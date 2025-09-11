/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark mode color palette based on brand colors
        'vortize': {
          'purple': {
            '50': '#faf7ff',
            '100': '#f4edff',
            '200': '#ebe0ff',
            '300': '#dcc7ff',
            '400': '#c4a0ff',
            '500': '#AC41F2',
            '600': '#9333ea',
            '700': '#7c2d12',
            '800': '#5b1f5a',
            '900': '#3d1a3d'
          },
          'navy': {
            '50': '#f8fafc',
            '100': '#f1f5f9',
            '200': '#e2e8f0',
            '300': '#cbd5e1',
            '400': '#94a3b8',
            '500': '#241C59',
            '600': '#1e1548',
            '700': '#1a1140',
            '800': '#130d2e',
            '900': '#0f0a24'
          },
          'turquoise': {
            '50': '#f0fdfc',
            '100': '#ccfbf1',
            '200': '#99f6e4',
            '300': '#5eead4',
            '400': '#79F2E6',
            '500': '#14b8a6',
            '600': '#0d9488',
            '700': '#0f766e',
            '800': '#115e59',
            '900': '#134e4a'
          }
        },
        // Dark theme backgrounds and surfaces
        'dark': {
          '50': '#18181b',
          '100': '#27272a',
          '200': '#3f3f46',
          '300': '#52525b',
          '400': '#71717a',
          '500': '#a1a1aa',
          '600': '#d4d4d8',
          '700': '#e4e4e7',
          '800': '#f4f4f5',
          '900': '#fafafa'
        },
        // Legacy colors for compatibility
        'vortize-purple': '#AC41F2',
        'vortize-navy': '#241C59',
        'vortize-turquoise': '#79F2E6',
        'vortize-black': '#0D0D0D',
      },
      fontFamily: {
        'heading': ['Inter', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'float-slow': 'float 8s ease-in-out infinite',
        'slideInUp': 'slideInUp 0.8s ease-out',
        'fadeInScale': 'fadeInScale 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-gentle': 'bounce-gentle 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        slideInUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        fadeInScale: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(172, 65, 242, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(172, 65, 242, 0.6)' }
        }
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'dark': '0 10px 25px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
        'dark-lg': '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
        'purple': '0 10px 25px -3px rgba(172, 65, 242, 0.3)',
        'turquoise': '0 10px 25px -3px rgba(121, 242, 230, 0.3)',
      }
    },
  },
  plugins: [],
}