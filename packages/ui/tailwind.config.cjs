/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{tsx,ts}","./stories/**/*.{tsx,ts,mdx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('windy-radix-palette')]
}