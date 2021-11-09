import { Container, Box, Typography } from '@mui/material'

const Hero = (): JSX.Element => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: {
          xs: 4,
          md: 8,
        },
        pb: {
          xs: 3,
          md: 6,
        },
      }}
    >
      <Container maxWidth="sm">
        <Typography component="h1" variant="h3" align="center" color="text.primary" gutterBottom>
          Notion API Blog
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph>
          JAMstack Blog with Notion API x Next.js
        </Typography>
      </Container>
    </Box>
  )
}

export default Hero
