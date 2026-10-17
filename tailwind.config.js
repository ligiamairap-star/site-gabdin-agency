/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
  ],
  theme: {
    extend: {
      colors: {
        gabdin: {
          blue: '#0a2a5e',
          bluedark: '#061a3b',
          bluelight: '#123e85',
          cyan: '#00D2FF',
          cyandark: '#0099cc',
          green: '#25D366',
          greendark: '#1eb857',
          black: '#000000',
          dark: '#040d1a',
          yellow: '#FFEB00',
          white: '#FFFFFF',
          gray: '#141414',
          graylight: '#1e293b',
        }
      },
      fontFamily: {
        anton: ['Anton', '"Arial Black"', 'sans-serif'],
        sans: ['Inter', 'Arial', 'sans-serif']
      },
      boxShadow: {
        'brutal-blue': '5px 5px 0px 0px #0a2a5e',
        'brutal-cyan': '5px 5px 0px 0px #00D2FF',
        'brutal-green': '5px 5px 0px 0px #25D366',
        'brutal-black': '5px 5px 0px 0px #000000',
        'brutal-yellow': '5px 5px 0px 0px #FFEB00',
        'brutal-white': '5px 5px 0px 0px #FFFFFF',
        'brutal-sm': '3px 3px 0px 0px #000000',
        'brutal-lg': '8px 8px 0px 0px #0a2a5e',
        'brutal-cyan-lg': '8px 8px 0px 0px #00D2FF',
        'brutal-green-lg': '8px 8px 0px 0px #25D366',
      }
    }
  },
  plugins: [],
}
