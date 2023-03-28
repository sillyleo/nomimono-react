/** @type {import('tailwindcss').Config} */

const theme = require('./theme.json')
module.exports = {
    darkMode: 'class',
  content: [
    "./components/**/*.{tsx,ts}","./stories/**/*.{tsx,ts,mdx}"
  ],
  theme: {
     fontFamily: {
			heading: ['Sk-Modernist','SkModernistBold','Sk-Modernist-Bold','sans-serif'],
      body: ['Inter', 'Inter Tight']
    },
    spacing: {
      ...theme.spacing
    },
    letterSpacing: {
      ...theme.letterSpacing
    },
    fontSize: {
      ...theme.fontSize
    },
    borderRadii: {...theme.borderRadius},
    extend: {
      colors: {
        brand: theme.brand,
        support: theme.support,
        accent: theme.colors.blue, // change accent here
      },
    },
  },
  plugins: [require('windy-radix-palette')]
}