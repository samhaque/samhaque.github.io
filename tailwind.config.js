export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // page background
        "primary-bg": "#00202d",
        // off-white text
        "text-light": "#efefef",
        // dark card backgrounds (used in Experience, Projects, Skills, etc.)
        "card-bg": "#0a0a0a",
        // slightly lighter gray for borders/separators
        "border-gray-700": "#4a4a4a"
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.20s ease-in forwards',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    }
  }
};
