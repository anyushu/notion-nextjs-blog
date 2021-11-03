import { AppBar, Toolbar, Typography } from '@mui/material'

interface Props {
  title: string
}

const Header = (props: Props) => {
  const { title } = props

  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography component="h1" variant="h6">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
