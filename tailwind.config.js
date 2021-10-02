module.exports = {
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ['Squada One', 'system-ui', 'cursive'],
        heading: ['Raleway', 'monospace'],
        body: ['Open Sans', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        dark: {
          light: '#3C4657',
          DEFAULT: '#1B212C',
          // light: '#444444',
          // DEFAULT: '#171717',
        },
        primary: { DEFAULT: '#E31B6D', slate: '#B14E77' },
        secondary: { DEFAULT: '#04C3C9', slate: '#52F9FF', slate2: '#014446' },
      },
    },
  },
  variants: {
    extend: {
      rotate: ['group-hover'],
      filter: ['focus', 'hover'],
    },
  },
  plugins: [],
};
