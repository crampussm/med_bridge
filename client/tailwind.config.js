/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        color1: '#f2eddb',
        color2: '#eceaf3',
        color3: '#223b1e',
        color4: '#fbfbf3',
      },
      fontFamily: {
        font1: ["Lora", "serif"],
      }
    },
  },
  plugins: [],
}

