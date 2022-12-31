/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 'index.html' ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: '#d946ef',
        dark: "#292524"
      }
    },
  },
  plugins: [],
}
