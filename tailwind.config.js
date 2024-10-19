/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': { 'min': '360px' }, // Custom breakpoint for 639px and below
      },
      fontFamily: {
        logo: ["Ruge Boogie", "cursive"], // Use your custom font name
      },
    },
  },
  plugins: [],
}

