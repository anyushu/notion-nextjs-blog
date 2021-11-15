import { createTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#282c34',
      paper: '#282c34',
    },
    primary: {
      main: '#61afef',
    },
  },
  typography: {
    fontSize: 14,
    fontFamily: ['Noto Sans JP', 'sans-serif'].join(','),
    h1: {
      fontWeight: 'bold',
      lineHeight: 1.25,
    },
    h2: {
      fontWeight: 'bold',
      lineHeight: 1.25,
    },
    h3: {
      fontWeight: 'bold',
      lineHeight: 1.25,
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
