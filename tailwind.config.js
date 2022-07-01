/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif"
      },
      colors: {
        neutral: {
          800: "#121212",
          900: "#151515" 
        },
        gray: {
          100: "#ffffff",
          300: "#C4C4C4"
        },
        blue: {
          800: "#10D7E2",
          900: "#00D2DF"
        },
        purple: {
          500: "#9358F7",
          900:"#6518B4"
        },
        pink: {
          500: "#D24074"
        }
      }
    },
  },
  plugins: [],
}
