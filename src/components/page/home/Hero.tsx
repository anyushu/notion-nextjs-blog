import { Container, Box, Typography } from '@mui/material'
import { jpParse } from '../../../util/japaneseParser'
import { siteTitle } from 'next-seo.config'

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
          {jpParse(siteTitle)}
        </Typography>
        <Typography align="center" color="text.secondary" paragraph>
          {jpParse(`フロントエンドエンジニア。サッカーと映画が好きです。`)}
        </Typography>
      </Container>
    </Box>
  )
}

export default Hero
