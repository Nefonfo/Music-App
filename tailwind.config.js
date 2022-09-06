/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        1: '1px'
      },
      colors: {
        'cupertino-pink': {
          200: '#ff6483',
          400: '#ff375f',
          600: '#ff2d55',
          800: '#d30f45'
        },
        'cupertino-label': {
          dark: '#ffffff',
          light: '#000000',
          DEFAULT: '#000000'
        },
        'cupertino-system-grey': {
          200: '#aeaeb2',
          400: '#8e8e93',
          600: '#6c6c70'
        },
      }
    },
  },
  plugins: [],
}