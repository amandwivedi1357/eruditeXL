/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      backgroundColor: {
        'transparent-black': 'rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [ require('preline/plugin'),],
}

