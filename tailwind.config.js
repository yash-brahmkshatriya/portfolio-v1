module.exports = {
  purge: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/styles/**/*.css',
  ],
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

    screens: {
      xs: '475px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  variants: {
    extend: {
      rotate: ['group-hover'],
      filter: ['focus', 'hover'],
      mixBlendMode: ['focus', 'hover'],
      transitionDuration: ['hover', 'focus'],
    },
  },
  plugins: [],
};
