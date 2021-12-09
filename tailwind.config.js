/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Red Hat Display', 'Noto Sans JP', 'sans-serif'],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
    },
    colors: {
      black: '#000',
      white: '#fff',
      gray: {
        900: '#323232',
        700: '#565656',
        500: '#7B7B7B',
        300: '#CCCCCC',
        100: '#F4F4F4',
      },
      errors: '#E10000',
      indigo: colors.indigo,
      red: colors.red,
      yellow: colors.yellow,
      blue: colors.blue,
      green: colors.green,
      purple: colors.purple,
    },
    extend: {},
  },
  variants: {
    extend: {
      textColor: ['active'],
    },
  },
  plugins: [],
}
