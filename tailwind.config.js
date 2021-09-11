module.exports = {
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ['Squada One', 'system-ui', 'cursive'],
        heading: ['Raleway', 'monospace'],
        sans: ['Open Sans', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        dark: {
          light: '#3C4657',
          DEFAULT: '#1B212C',
          // light: '#444444',
          // DEFAULT: '#171717',
        },
        primary: '#E31B6D',
        secondary: '#04C3C9',
        white: '#EDEDED',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
