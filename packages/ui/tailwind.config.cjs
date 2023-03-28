/** @type {import('tailwindcss').Config} */

const theme = require('./theme.json')
module.exports = {
  content: [
    "./components/**/*.{tsx,ts}","./stories/**/*.{tsx,ts,mdx}"
  ],
  theme: {
    spacing: {
      ...theme.spacing
    },

    extend: {},
  },
  plugins: [require('windy-radix-palette')]
}