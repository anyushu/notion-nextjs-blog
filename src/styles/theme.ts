import { blue } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
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
