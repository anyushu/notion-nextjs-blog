import { Box, Container, Typography } from '@mui/material'

interface Props {
  title: string
}

const Footer = (props: Props) => {
  const { title } = props

  return (
    <Box component="footer" sx={{ py: 3 }}>
      <Container>
        <Typography variant="body2" color="text.secondary" align="center">
          {'© '}
          {title} {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
