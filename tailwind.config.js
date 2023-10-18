/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'biro.html'],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        purple: '#6C2A87',
        navy:'#142B6F',
        grey:'#E1DEE6',
        orange: '#FFA726',
      },
      fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Playfair', 'serif'],

}
    },
  },
  plugins: [],
}

