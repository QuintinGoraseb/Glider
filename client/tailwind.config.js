/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px'
      }
    },
    extend: {
      backgroundImage: {
        'hero': "url('/img/focus.jpg')",
        'banner': "url('/img/banner1.jpeg')",
        'services': "url('/img/hero-bg.jpg')",
        'rimg': "url('/img/rimg.jpg')",
        'newsletter': "url('/img/newsletter.jpg)",
      },

      colors: {
        primary: '#697792',
        secondary: '#848D9C',
        tertiary: '#02304A',
        primbtn: '#373A40',
      },

      boxShadow: {
        custom1: '0px 2px 40px 0px rgba(8, 70, 78, 0.08)',
        custom2: '0px 0px 30px 0px rgba(8, 73, 81, 0.06)',
        custom3: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
        custom4: '0px 1px 0px rgba(17, 17, 26, 0.1)',
        custom5: '0px 25px 20px -20px rgba(0, 0, 0, 0.45)',
      }
    },
  },
  plugins: [],
}

