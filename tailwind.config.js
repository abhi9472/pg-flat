/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray20: '#333333',
        offwhite: '#f8f8f8',
        customRed: '#e3342f',
      },
    },
  },
  plugins: [],
};
