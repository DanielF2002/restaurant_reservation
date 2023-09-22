/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'karla': ['"Karla"', 'sans-serif'],
        'markazi': ['"Markazi Text"', 'serif'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'pjgreen': '#495e57',
        'pjyellow': '#f4ce14',
        'pjorange': '#ee9972',
        'pjgray': '#edefee',
        'pjblack': '#333333',
      },
    },
  },
  plugins: [],
}
