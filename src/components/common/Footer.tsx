import { Box, Container, Typography } from '@mui/material'
import type { NextPage } from 'next'

interface Props {
  title: string
}

const Footer: NextPage<{ props: Props }> = ({ props }) => {
  const { title } = props

  return (
    <Box component="footer" py={3} mt={4}>
      <Container>
        <Typography variant="body2" color="text.secondary" align="center">
          {'©'} {new Date().getFullYear()} {title} {'.'}
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
