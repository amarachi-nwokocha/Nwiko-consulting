/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue: "#11253D",
        yellow: "#FCB714",
        brightBackGround: '#FDF8EE',
         lightText: '#959595',
      },
    },
  },
  plugins: [],
}

