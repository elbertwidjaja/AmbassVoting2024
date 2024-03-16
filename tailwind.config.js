/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'gold': '#FFD700',
      'black': '#000000',
      'dark-gray':'#333333',
      'white': '#FFFFFF',
    },
    fontFamily: {
      sans: ['Poppins'], 
    },
  },
  plugins: [],
}

