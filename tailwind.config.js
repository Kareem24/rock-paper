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
        scissorsEnd: 'hsl(40, 84%, 53%)',
        rockEnd: 'hsl(349, 70%, 56%)',
        rockStart: 'hsl(349, 71%, 52%)',
        start: 'hsl(214, 47%, 23%)',
        end: 'hsl(237, 49%, 15%)',

      },
      backgroundImage: {
        triangle: "url('./assets/images/bg-triangle.svg')",
        mobile: "url('./assets/design/original/mobile-rules-modal.jpg')",
        desktop: "url('./assets/design/original/desktop-rules-modal.jpg')"
      }
    },
  },
  plugins: [],
}

