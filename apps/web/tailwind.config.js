const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,modules}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Roboto', 'serif'],
      bebas: ['Bebas Neue', 'sans-serif'],
      pop: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#f77318',
        'primary-200': '#fcd7aa',
        'primary-300': '#faba75',
        'primary-origin': '#ee4d2d',

      },
      lineHeight: {
        'extra-loose': '2.5',
        '0': '0rem',
      }
    },
  },
  plugins: [],
};
