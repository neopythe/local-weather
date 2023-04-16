/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,vue}'],
  theme: {
    extend: {
      fontFamily: {
        mustica: ['MusticaPro-SemiBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
