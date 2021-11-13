const colors = require('tailwindcss/colors')


module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'primary': colors.gray[800],
        'secondary': colors.gray[100],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
