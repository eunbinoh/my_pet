/** @type {import('tailwindcss').Config} */
const { screens } = require('./src/assets/style/screen.js')
const colors = require('./src/assets/style/colors.js')

export default {
  content: [
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: screens,
    colors: colors
  },
  plugins: [require("@tailwindcss/typography")],
}

