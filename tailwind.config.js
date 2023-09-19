/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkText: 'hsl(229, 25%, 31%)',
        scoreText: 'hsl(229, 64%, 46%)',
        headerOutline: ' hsl(217, 16%, 45%)',
        lizardGradientStart: 'hsl(261, 73%, 60%)',
        lizardGradientStop: 'hsl(261, 72%, 63%)',
        cyanStart: 'hsl(189, 59%, 53%)',
        cyanStop: ' hsl(189, 58%, 57%)',
        scissorsStart: 'hsl(39, 89%, 49%)',
      },
    },
  },
  plugins: [],
}

