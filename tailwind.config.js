/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: theme => ({
        'header-color': '#032541',
      })
    },
  },
  plugins: [],
}