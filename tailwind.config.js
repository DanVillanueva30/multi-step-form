/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'ubuntu': ["Ubuntu", 'sans-serif'] //weights: 400, 500, 700
    },
    extend: {
      colors: {
        'marine': '#02295a',
        'purplish': '#473dff',
        'pastel': '#adbeff',
        'light-blue': '#bfe2fd',
        'strawberry': '#ed3548',
        'cool-gray': '#9699ab',
        'light-gray': '#d6d9e6',
        'magnolia': '#f0f6ff',
        'alabaster': '#fafbff',
      },
    },
  },
  plugins: [],
}

