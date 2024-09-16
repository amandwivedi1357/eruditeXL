/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    keyframes: {
      marquee: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
    },
    animation: {
      marquee: 'marquee 15s linear infinite',
    },
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

