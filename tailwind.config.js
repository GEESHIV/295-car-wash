/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050608',
          900: '#0a0c10',
          850: '#0e1117',
          800: '#13161d',
          700: '#1b1f29',
          600: '#262b38',
          500: '#3a4150',
        },
        electric: {
          50: '#eaf6ff',
          100: '#d0ecff',
          200: '#9fd8ff',
          300: '#5cc1ff',
          400: '#22a8ff',
          500: '#0091f7',
          600: '#0072cc',
          700: '#005a9f',
          800: '#004a82',
          900: '#003e6d',
        },
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.6' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        'shine': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'fade-in': 'fade-in 0.9s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2s ease-out infinite',
        'shine': 'shine 6s linear infinite',
      },
    },
  },
  plugins: [],
};
