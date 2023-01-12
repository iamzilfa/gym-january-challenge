/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        UniversOne:["UniversOne", "sans-serif"],
        UniversTwo:["UniversTwo", "sans-serif"],
        sans:["Univers", "sans-serif"],
      }
    },
  },
  plugins: [],
}
