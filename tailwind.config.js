/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6C63FF',
        secondary: '#2A2A2A',
        accent: '#FF6B6B',
        gaming: {
          100: '#FF4655',
          200: '#0F1923',
          300: '#8E2DE2',
        }
      },
      fontFamily: {
        gaming: ['Rajdhani', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}