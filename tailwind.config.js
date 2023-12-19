/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F8F1ED',
        secondary: '#362D3B',
        accent: '#5E41A7'
      }
    }
  },
  darkMode: 'class',
}
