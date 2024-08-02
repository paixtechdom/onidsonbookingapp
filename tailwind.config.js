/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#66CCFF",
        "primaryFade": "#66CCFF63",
        "secondary" : "#0e1925",
        "secondaryFade" : "#0e1925A3",
        "tertiary" : "rgb(150,100,0)"
      }
    },
  },
  plugins: [],
}

