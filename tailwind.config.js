module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ['Squada One', 'system-ui', 'cursive'],
        heading: ['Raleway', 'monospace'],
        body: ['Open Sans', 'system-ui', 'sans-serif'],
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
