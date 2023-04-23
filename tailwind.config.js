/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        ubuntu : ['Ubuntu', ...defaultTheme.fontFamily.sans]
      },
      container: {
        center: true,
          padding: {
            DEFAULT: "0.5rem",
            sm: "1rem",
        },
      },
    },
  },
  plugins: [],
}

