/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pug/*.pug',
    './src/html/*.html',
    "index.html", 
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
