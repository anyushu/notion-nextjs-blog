import { Twitter, GitHub } from '@mui/icons-material'
import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material'
import type { NextPage } from 'next'
import Link from 'next/link'

interface Props {
  title: string
}

const Header: NextPage<{ props: Props }> = ({ props }) => {
  const { title } = props

  return (
    <AppBar position="relative">
      <Toolbar>
        <Link href="/" passHref>
          <Typography component="h1" variant="h6" sx={{ cursor: 'pointer' }}>
            {title}
          </Typography>
        </Link>
        <Box ml="auto" display="flex">
          <Link href={process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/'} passHref>
            <IconButton>
              <GitHub />
            </IconButton>
          </Link>
          <Link href={process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com/'} passHref>
            <IconButton>
              <Twitter />
            </IconButton>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
