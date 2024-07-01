/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "/*eslint-env node*/",
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
        'cta': "url('https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      },

      colors: {
        primary: '#697792',
        secondary: '#cdb99f',
        tertiary: '#31496b',
        primbtn: '#373A40',
      },

      boxShadow: {
        custom1: '0px 2px 40px 0px rgba(8, 70, 78, 0.08)',
        custom2: '0px 0px 30px 0px rgba(8, 73, 81, 0.06)',
        custom3: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
        custom4: '0px 1px 0px rgba(17, 17, 26, 0.1)',
        custom5: '0px 25px 20px -20px rgba(0, 0, 0, 0.45)',
        custom6: 'linear-gradient rgba(2, 2, 2, 0.5), rgba(0, 0, 0, 0.5))',
        custom7: '0px 2px 5px -1px rgba(50, 50, 93, 0.25),  0px 1px 3px -1px rgba(0, 0, 0, 0.3)',
        custom8: '0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
}

