/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        jade: {
          50: '#f0f7f0',
          100: '#dbecdc',
          200: '#bcd8bd',
          300: '#93be95',
          400: '#6ca16f',
          500: '#4d8950',
          600: '#2E7D32', // Primary jade
          700: '#27652a',
          800: '#235127',
          900: '#1e4422',
        },
        coral: {
          50: '#fff2ed',
          100: '#ffe1d3',
          200: '#ffc1a6',
          300: '#ff9b71',
          400: '#FF7043', // Primary coral
          500: '#ff4d1a',
          600: '#f53000',
          700: '#cb2702',
          800: '#a12408',
          900: '#82220d',
        },
        mint: {
          50: '#f2f8f3',
          100: '#EAF5EB', // Light mint
          200: '#d1e9d3',
          300: '#abd5af',
          400: '#81bc87',
          500: '#60a268',
          600: '#478a50',
          700: '#3b6e41',
          800: '#335838',
          900: '#2c4930',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'card': '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
        'button': '0 10px 15px -3px rgba(46, 125, 50, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'progress': 'progress 30s linear forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        progress: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};