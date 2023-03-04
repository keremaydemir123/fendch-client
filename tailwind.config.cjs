/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui'), require('@tailwindcss/line-clamp')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#0701a8',

          secondary: '#668ecc',

          accent: '#06b6d4',

          neutral: '#1C151E',

          'base-100': '#F6F6F9',

          info: '#449FE9',

          success: '#41D8AD',

          warning: '#F29531',

          error: '#EF6270',
        },
      },
    ],
  },
};
