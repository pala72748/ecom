/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': { 'min': '200px', 'max': '767px' },
      'md': { 'min': '768px', 'max': '991px' },
      'lg': { 'min': '992px', 'max': '1200px' },
      'xl': { 'min': '1200px', 'max': '1600px' }, // Added 'max' property for xl size
      '2xl': { 'min': '1601px' }, // Add 2xl size
    },
    extend: {
      fontFamily: {
        graphik: ['"graphik"', "helvetica", "sans-serif"],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [
  ],
}
