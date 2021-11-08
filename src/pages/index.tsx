import { Container, Box, Typography, Grid } from '@mui/material'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Layout from '../components/common/Layout'
import Hero from '../components/page/home/Hero'
import PostCard from '../components/page/post/PostCard'
import { getDatabase } from '../lib/notion'
import type { Post } from '../models/notion'

export const databaseId = process.env.NOTION_DATABASE_ID || ''

export async function getStaticProps() {
  const database = await getDatabase(databaseId)
  const revalidate = 60 * 60

  return {
    props: {
      posts: database,
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
    </>
  )
}

export default Home
