/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#77ECB2',
        'secondary': '#284b70',
      }
    },
  },
  plugins: [],
}
