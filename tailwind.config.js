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
        'blue': '#2C2C80',
        'dark-green': '#66AFA5',
        'light-green': '#BEDFDB',
        'grey': '#F2F2F2',
        'dark-blue': '#4c85ad',
       
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

