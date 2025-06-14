/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        sans: ['Poppins', 'sans-serif'], // for body text
      },
    }
  },
  plugins: [],
}

