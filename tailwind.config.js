/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-img': "url('./bg.webp')",
        'custom-gradient': "linear-gradient(to right, #06b6d4, #0891b2)",
      }
    },
  },
  plugins: [],
}