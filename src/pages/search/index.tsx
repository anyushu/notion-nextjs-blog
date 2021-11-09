import { Box, Container, Grid, Typography } from '@mui/material'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useContext } from 'react'
import { Twemoji } from 'react-emoji-render'
import Layout from '../../components/common/Layout'
import PostCard from '../../components/page/post/PostCard'
import { SearchContext } from '../../context/searchContext'
import { getDatabase } from '../../lib/notion'
import type { Post } from '../../models/notion'

export const databaseId = process.env.NOTION_DATABASE_ID || ''

export async function getStaticProps() {
  const database = await getDatabase(databaseId)
  const revalidate = 60 * 60

  return {
    props: {
      posts: database.results,
    },
    revalidate: revalidate,
  }
}

const Search: NextPage<{ posts: Post[] }> = ({ posts }) => {
  const { search } = useContext(SearchContext)
  let reslutCounts = 0
  return (
    <>
      <NextSeo
        noindex={true}
        nofollow={true}
        description="JAMstack Blog with Notion API x Next.js"
      />
      <Layout>
        <Container>
          <Box py={{ xs: 3, md: 6 }}>
            <Typography component="h2" variant="h5" textAlign="center">
              <Twemoji svg text="🔍" /> Keyword: {search || '...'}
            </Typography>
          </Box>
          {/* posts */}
          <Grid container spacing={3} mb={5}>
            {posts.map((post: Post, index: number) => {
              const postTitle = post.properties.title.title[0].text.content
              if (postTitle.indexOf(search) != -1) {
                ++reslutCounts
                return (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <PostCard post={post} />
                  </Grid>
                )
              }
            })}
          </Grid>
          {reslutCounts <= 0 && (
            <Typography variant="h5" textAlign="center">
              <Twemoji svg text="🙇‍♂️" /> Post not found <Twemoji svg text="🙇‍♂️" />
            </Typography>
          )}
        </Container>
      </Layout>
    </>
  )
}

export default Search
