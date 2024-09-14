/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    listStyleType: {
      none: 'none',
      square: 'square'
    },
    extend: {
      colors:{
        primary:"#FDFEFE",
        secondary:"#F2F2F2",
        black:"#000000",
        pink:"#EA377A",
        blue:"#BADEFC",
        grey:'#6C757D'
      }
    },
  },
  plugins: [],
}