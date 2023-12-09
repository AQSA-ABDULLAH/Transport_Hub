/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.js",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#7E22CE',
        },
      },
    },
    plugins: [],
  }