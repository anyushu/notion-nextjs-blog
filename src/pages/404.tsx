import { Container, Box, Button, Typography } from '@mui/material'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import Layout from '../components/common/Layout'

const Custom404 = () => {
  return (
    <>
      <NextSeo description="JAMstack Blog with Notion API x Next.js" />
      <Layout>
        <Container>
          <Box pt={7} pb={6}>
            <Typography component="h1" variant="h1" textAlign="center">
              404
            </Typography>
            <Typography variant="h4" textAlign="center">
              Page Not Found
            </Typography>
            <Box textAlign="center" mt={4}>
              <Link href="/" passHref>
                <Button variant="outlined" color="secondary">
                  Back Home
                </Button>
              </Link>
            </Box>
          </Box>
        </Container>
      </Layout>
    </>
  )
}

export default Custom404
