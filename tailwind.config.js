/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ✅ 요 줄 추가
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

