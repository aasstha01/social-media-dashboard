/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#a855f7',
        secondary: '#ec4899',
        dark: '#1e1e2f',
        card: '#2a2a3b',
      },
    },
  },
  plugins: [],
}
