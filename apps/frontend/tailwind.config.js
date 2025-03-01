const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        white: '#fff',  
        azure: '#01BAEF',
        blue: '#004aad',  
        red: '#C81D25',
        green: '#329F5B',
        black: '#000',
        gray: '#333',
      },
    },
  },
  plugins: [],
};
