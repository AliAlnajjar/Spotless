/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        hero: '#F0F1EA', // Hero section background color
        header: '#F0F1EA', // Header background color
      },
      fontFamily: {
        sans: ['Encode sans', 'sans-serif'],
      },
      colors: {
        primary: { DEFAULT: '#05a105', light: '#F0F1EA', dark: '#acd394' }, // Custom primary color
        secondary: '#4B3CFB', // Custom secondary color
        accent: '#f3f3f2', // Custom accent color
        neutral: '#fdfdfd', // Custom neutral background color
        // text: '', // Custom text color
      },
      backgroundImage: {
        'hero-pattern': "url('/image/money-bg.png')",
      },
    },
  },
  plugins: [],
});
