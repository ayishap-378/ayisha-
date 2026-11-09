/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        peach: {
          50: '#FDF8F5',
          100: '#FAF1EB',
          200: '#F6E3D6',
          300: '#F1D1BD',
          400: '#E8B99D',
          500: '#DE9F7E',
          600: '#C77D57',
        },
        cream: {
          50: '#FDFCF9',
          100: '#FAF8F3',
          200: '#F5F1E8',
          300: '#EBE5D6',
        },
        charcoal: {
          900: '#141413',
          800: '#1F1E1D',
          700: '#2D2B29',
          600: '#4A4744',
          500: '#6B6762',
          400: '#9C9690',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        script: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        'soft-sm': '0 2px 10px rgba(0, 0, 0, 0.03)',
        'soft': '0 10px 30px -5px rgba(28, 25, 23, 0.05)',
        'soft-lg': '0 20px 40px -10px rgba(28, 25, 23, 0.08)',
        'glow-peach': '0 0 25px rgba(222, 159, 126, 0.25)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

