/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#F48727',
          light: '#F7B33D',
          dark: '#F45127',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        impact: ['Impact', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
        luckiest: ['Luckiest Guy', 'cursive'],
      },
      backgroundImage: {
        'gradient-line': 'linear-gradient(to right, #F45127, #F7B33D)',
      },
    },
  },
  plugins: [],
}



