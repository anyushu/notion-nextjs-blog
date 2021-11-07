import { Container, Box, Typography, Grid } from '@mui/material'
import type { NextPage } from 'next'
import Layout from '../components/common/Layout'
import PostCard from '../components/page/post/PostCard'
import { getDatabase } from '../lib/notion'
import type { Post } from '../models/notion'

export const databaseId = process.env.NOTION_DATABASE_ID || ''

export async function getStaticProps() {
  const database = await getDatabase(databaseId)

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  }
}

const Hero = () => {
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
        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
          Hero Section
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
        </Typography>
      </Container>
    </Box>
  )
}

const Home: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <Layout>
      <Hero />
      <Container>
        <Grid container spacing={3}>
          {posts.map((post: Post, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <PostCard post={post} />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Layout>
  )
}

export default Home
