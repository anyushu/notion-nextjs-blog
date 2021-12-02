import { Box, Button, Container, Grid, Stack } from '@mui/material'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useCallback, useContext, useState } from 'react'
import Layout from '../components/common/Layout'
import SearchInput from '../components/common/SearchInput'
import Hero from '../components/page/home/Hero'
import PostCard from '../components/page/post/PostCard'
import { getDatabaseChildren, getDatabaseProperties } from '../lib/notion/getDatabase'
import type { Database, Post } from '../models/notion'
import { SearchContext } from 'context/searchContext'

export async function getStaticProps() {
  const database = await getDatabaseChildren(process.env.NOTION_DATABASE_ID || '')
  const databaseProperties = await getDatabaseProperties(process.env.NOTION_DATABASE_ID || '')
  const revalidate = 60

  return {
    props: {
      posts: database.results,
      databaseProperties: databaseProperties,
    },
    revalidate: revalidate,
  }
}

const Home: NextPage<{ posts: Post[]; databaseProperties: Database }> = ({
  posts,
  databaseProperties,
}) => {
  const postTags = databaseProperties.properties.tags.multi_select.options || []
  const { search } = useContext(SearchContext)
  const [tagFilter, setTagFilter] = useState<string>('')
  const handleClickTag = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const clickTag = e.currentTarget.textContent
      setTagFilter(clickTag == tagFilter ? '' : e.currentTarget.textContent || '')
    },
    [tagFilter],
  )

  return (
    <>
      <NextSeo description="フロントエンドエンジニア。サッカーと映画が好きです。" />
      <Layout>
        <Hero />
        <Container>
          <Box textAlign="center" mb={5}>
            <SearchInput />
            <Stack direction="row" justifyContent="center" spacing={2} mt={3}>
              {postTags.map((tag) => {
                return (
                  <Button
                    key={tag.id}
                    color="secondary"
                    variant={tag.name == tagFilter ? 'contained' : 'outlined'}
                    size="small"
                    onClick={handleClickTag}
                  >
                    {tag.name}
                  </Button>
                )
              })}
            </Stack>
          </Box>
          {/* posts */}
          <Grid container spacing={3} mb={5}>
            {posts.map((post: Post, index: number) => {
              const postTitle = post.properties.title.title[0].text.content
              const tagName = post.properties.tags.multi_select[0].name
              if (postTitle.indexOf(search) != -1 && tagName && tagName.indexOf(tagFilter) != -1) {
                return (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <PostCard post={post} />
                  </Grid>
                )
              }
            })}
          </Grid>
          {/* Pagination */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          ></Box>
        </Container>
      </Layout>
    </>
  )
}

export default Home
