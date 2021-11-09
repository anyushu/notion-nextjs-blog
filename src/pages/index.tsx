import { Box, Container, Grid } from '@mui/material'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Layout from '../components/common/Layout'
import Hero from '../components/page/home/Hero'
import PostCard from '../components/page/post/PostCard'
import { getDatabase } from '../lib/notion'
import type { Post } from '../models/notion'

export const databaseId = process.env.NOTION_DATABASE_ID || ''
// TODO: pagination
// const PER_PAGE = 12

export async function getStaticProps() {
  // TODO: pagination
  // const pageIndex = await getAllPages(databaseId)
  const database = await getDatabase(databaseId)
  const revalidate = 60 * 60

  return {
    props: {
      // TODO: pagination
      // totalCounts: pageIndex.length,
      posts: database.results,
    },
    revalidate: revalidate,
  }
}

const Home: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <>
      <NextSeo description="JAMstack Blog with Notion API x Next.js" />
      <Layout>
        <Hero />
        <Container>
          {/* posts */}
          <Grid container spacing={3} mb={5}>
            {posts.map((post: Post, index: number) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <PostCard post={post} />
                </Grid>
              )
            })}
          </Grid>
          {/* Pagination */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {/* TODO: pagination
            <Pagination color="primary" count={Math.ceil(totalCounts / PER_PAGE)} /> */}
          </Box>
        </Container>
      </Layout>
    </>
  )
}

export default Home
