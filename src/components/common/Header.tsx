import type { NextPage } from 'next'
import Link from 'next/link'
import { AppBar, Toolbar, Typography } from '@mui/material'

interface Props {
  title: string
}

const Header: NextPage<{ props: Props }> = ({ props }) => {
  const { title } = props

  return (
    <AppBar position="relative">
      <Toolbar>
        <Link href="/" passHref>
          <Typography
            component="h1"
            variant="h6"
            color="text.white"
            sx={{ cursor: 'pointer' }}
          >
            {title}
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Header
