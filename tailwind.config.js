/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#eef3f9',
          100: '#d6e2f0',
          200: '#adc5e0',
          300: '#7ea3cc',
          400: '#4f7fb3',
          500: '#2f5f94',
          600: '#1f4a7a',
          700: '#17395f',
          800: '#0f2947',
          900: '#0b2545',
        },
        mint: {
          50: '#effbf8',
          100: '#d3f5ee',
          200: '#a8ead9',
          300: '#7ddcc4',
          400: '#55c9ae',
          500: '#3ab59b',
          600: '#2a9581',
          700: '#21776a',
          800: '#1d5f56',
          900: '#1a4e47',
        },
        coral: {
          50: '#fff4f2',
          100: '#ffe3dd',
          200: '#ffc4b8',
          300: '#ff9c8a',
          400: '#ff7e6b',
          500: '#f96a55',
          600: '#e04f3b',
          700: '#b93d2d',
          800: '#8f3024',
          900: '#6b251c',
        },
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
      },
    },
  },
  plugins: [],
};
