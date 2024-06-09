/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/focus.jpg')",
      },

      colors: {
        primary: '#285192',
        secondary: '#848D9C',
        tertiary: '#F5F5F5',
        primbtn: '#373A40',
      }
    },
  },
  plugins: [],
}

