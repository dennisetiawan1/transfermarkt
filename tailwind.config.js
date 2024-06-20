/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-primary': 'rgb(0, 25, 63)',
        'blue-secondary': 'rgba(255, 255, 255, .2)',
        'button-click' : '#5ca6ff;',
        'grey-nav' : 'rgb(233, 233, 233)',
        'blue-muda' : '#1D75A3',
        'gray-con' : '#F2F2F2' 
      },
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif']
      }
    },
  },
  plugins: [],
}