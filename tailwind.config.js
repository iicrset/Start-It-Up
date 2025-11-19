/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['GlacialIndifference', 'sans-serif'],
        decalotype: ['Decalotype', 'sans-serif'],
      },
      colors: {
        primary: '#FF6B35',
        secondary: '#2563EB',
      },
      
    },
  },
  plugins: [],
};