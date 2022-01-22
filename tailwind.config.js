/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Red Hat Display', 'Noto Sans JP', 'sans-serif'],
      },
      colors: {
        black: colors.slate,
        gray: colors.slate,
        indigo: colors.indigo,
        red: colors.red,
        pink: colors.pink,
        yellow: colors.amber,
        orange: colors.orange,
        blue: colors.blue,
        green: colors.emerald,
        purple: colors.violet,
      },
    },
  },
}
