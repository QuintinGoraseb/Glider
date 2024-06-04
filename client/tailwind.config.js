/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/home/hadoop/Dev/Glider/client/src/assets/logo.png')",
      },

      colors: {
        primary: '#285192',
        secondary: '#848D9C',
        tertiary: '#F5F5F5',
      }
    },
  },
  plugins: [],
}

