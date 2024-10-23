/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark_purple: '#aa4b9c'

      },
      inset: {
        81: '20.2rem',
        96.4: '33rem',
        97: '35rem',
        97.1: '35.4rem',
        97.2: '35.8rem',
        97.3: '35.9rem',
        97.5: '39.5rem',
        97.6: '39.9rem',
        97.7: '43rem',
        97.8: '44rem',
        98: '58rem',
        99: '66rem',
        100: '79rem'
      },
      margin: {
        100: '30rem',
        101: '54.5rem',
        102: '62rem',
        105: '420rem'
      },
      width: {
        81: '20.2rem',
        96.5: '23rem',
        97: '27rem',
        97.5: '28rem',
        98: '30rem',
        200: '38rem',
        300: '35rem',
        350: '55rem',
        480: '30rem',
        620: '38.75rem',
        800: '50rem',
        900: '56.25rem',
        1000: '62.5rem',
        
      },
      height: {
        480: '30rem',
        500: '35rem',
        600: '45rem',
        750: '46.875rem',
        3000: '460rem'

      }
    },
  },
  plugins: [],
}

