/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
        colors: {
        "primary": "#66CCFF",
        "secondary" : "#0e1925",
        "tertiary" : "rgb(150,100,0)"
      }
    },
  },
  plugins: [],
}

