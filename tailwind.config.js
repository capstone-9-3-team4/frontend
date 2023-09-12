/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-purple': '#B2A4C3',
        'dark-purple': '#7E679B',
        'blue': '#99B4DF',
        'dark-green': '#62BD69',
        'light-green': '#BEDFDB',
        'dark-blue': '#0B2C4A',
        'grey': '#EBEBEB',
        'ppp': '#FFE800',
        'red': '#FF0000',
        
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

