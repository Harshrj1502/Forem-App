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
        primary:"#16181C",
        secondary:"#242832",
        pink:"#EA377A",
        blue:"#BADEFC",
        grey:'#6C757D'
      }
    },
  },
  plugins: [],
}