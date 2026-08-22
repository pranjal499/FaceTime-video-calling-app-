/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // Files Tailwind scans to generate CSS
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: '#1e40af', // Custom color addition
      },
    },
  },
  plugins: [],
}
