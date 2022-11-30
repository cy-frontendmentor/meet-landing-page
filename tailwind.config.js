/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '425px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'hippie-Blue': '#4D96A9',
        'deep-Lavender': '#855FB1',
        'ebony-Clay': '#28283D',
        'oslo-Grey': '#87879D',
        'columbia-Blue': '#8FE3F9',
        'light-violet': '#D9B8FF',
        'white-transparent': '#FAFAFA',
      },
      fontFamily: {
        sans: ['var(--font-red-hat)'],
      },
    },
  },
  plugins: [],
};
