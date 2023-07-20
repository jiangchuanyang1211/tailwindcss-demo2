
/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [],
  theme: {
    extend: {
      fontFamily: ['book-bold', 'book-normal'],
    },
  },
  plugins: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}']
}

