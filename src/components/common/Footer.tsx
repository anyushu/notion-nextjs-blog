import { Box, Container, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Link from 'next/link'

interface Props {
  title: string
}

const Footer: NextPage<{ props: Props }> = ({ props }) => {
  const { title } = props

  return (
    <Box component="footer" py={3} mt={4}>
      <Container>
        <Typography
          align="center"
          mb={1}
          sx={{
            '& a': {
              color: 'text.secondary',
            },
          }}
        >
          <Link href="https://github.com/lamp-suzuki/notion-nextjs-blog">SourceCode</Link>
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {'©'} {new Date().getFullYear()} {title} {'.'}
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
