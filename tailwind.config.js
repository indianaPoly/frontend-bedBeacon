/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: { min: '0px', max: '900px' },
        deskTop: { min: '901px'}
      },
    },
  },
  plugins: [],
}

