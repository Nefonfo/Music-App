/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    fontFamily: {
      sans: ['-apple-system', 'BlinkMacSystemFont', 'sans-serif']
    },
    extend: {
      borderWidth: {
        1: '0.1px'
      },
      colors: {
        'cupertino-destructive-red': '#ff3b30',
        'cupertino-basic-background': {
          light: '#ffffff',
          dark: '#000000',
          darkalt: '#242426',
          DEFAULT: '#ffffff'
        },
        'cupertino-basic-grey': {
          200: '#efeff4d9',
          400: '#e5e5ea',
          600: '#999999'
        },
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
      },
    },
  },
  plugins: [],
}