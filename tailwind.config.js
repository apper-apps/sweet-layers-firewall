/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          primary: '#D4516F',
          light: '#E578A3',
          dark: '#B03A5A'
        },
        peach: {
          primary: '#F8B5A5',
          light: '#FADDD6',
          dark: '#F5A289'
        },
        plum: {
          primary: '#6B4E71',
          light: '#8B6E91',
          dark: '#4B3651'
        },
        cream: '#FFF5F3',
        ivory: '#FFFBF7'
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif']
      },
      boxShadow: {
        'cake': '0 2px 8px rgba(0,0,0,0.08)',
        'cake-hover': '0 8px 32px rgba(212, 81, 111, 0.15)'
      },
      backdropBlur: {
        'xs': '2px'
      }
    },
  },
  plugins: [],
}