/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'blink': {
          '0%, 100%': { color: 'transparent' },
          '50%': { color: 'var(--blink-color)' },
        },
      },
      animation: {
        'blink': 'blink .75s step-end infinite'
      }
    },
  },
  plugins: [],
}

