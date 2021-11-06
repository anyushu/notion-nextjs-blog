import { createTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontSize: 14,
    fontFamily: ['Noto Sans JP', 'sans-serif'].join(','),
    h1: {
      fontWeight: 'bold',
      lineHeight: 1.5,
    },
    h2: {
      fontWeight: 'bold',
      lineHeight: 1.5,
    },
    h3: {
      fontWeight: 'bold',
      lineHeight: 1.5,
    },
    h4: {
      fontWeight: 'bold',
      lineHeight: 1.5,
    },
    h5: {
      fontWeight: 'bold',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 'bold',
      lineHeight: 1.5,
    },
    body1: {
      lineHeight: 1.5,
    },
    body2: {
      lineHeight: 1.5,
    },
  },
})

export default theme
