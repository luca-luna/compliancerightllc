/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'bright-turquoise': {
          '50': '#ecffff',
          '100': '#d0fafd',
          '200': '#a7f4fa',
          '300': '#6aebf6',
          '400': '#21d5e9',
          '500': '#0bb9cf',
          '600': '#0c94ae',
          '700': '#11768d',
          '800': '#176073',
          '900': '#184f61',
          '950': '#093443',
        },
      },
      textColor: {
        'bright-turquoise': {
          '50': '#ecffff',
          '100': '#d0fafd',
          '200': '#a7f4fa',
          '300': '#6aebf6',
          '400': '#21d5e9',
          '500': '#0bb9cf',
          '600': '#0c94ae',
          '700': '#11768d',
          '800': '#176073',
          '900': '#184f61',
          '950': '#093443',
        },
      },
    },
  },
  plugins: [],
};
