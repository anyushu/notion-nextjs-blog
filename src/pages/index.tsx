import type { NextPage } from 'next'
import type { Post } from '../models/notion'
import { getDatabase } from '../lib/notion'
import Layout from '../components/common/Layout'
import PostCard from '../components/page/post/PostCard'
import { Container, Box, Typography, Stack } from '@mui/material'

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
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
          Hero
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
        <Stack direction="row" spacing={2}>
          {posts.map((post: Post, index) => {
            return <PostCard key={index} post={post} />
          })}
        </Stack>
      </Container>
    </Layout>
  )
}

export default Home
