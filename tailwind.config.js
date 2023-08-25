/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white_: '#fdfffc',
        blue_: '#011627',
        red_: '#e71d36',
      },
    },
  },
  plugins: [],
}
