import type { GetStaticPropsContext, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import type { GetBlockResponse } from '@notionhq/client/build/src/api-endpoints.d'
import type { Post } from '../../models/notion'
import { getPost, getDatabase, getBlocks } from '../../lib/notion'
import Layout from '../../components/common/Layout'
import NotionBlock from '../../components/page/post/NotionBlock'
import { Container, Box, Typography, Divider, Stack, Chip } from '@mui/material'
import { formatDate } from '../../util/formatDate'

export const databaseId = process.env.NOTION_DATABASE_ID || ''

export async function getStaticPaths() {
  const database = await getDatabase(databaseId)
  const paths = database.map((post) => ({
    params: {
      slug: post.id,
    },
  }))

  return { paths, fallback: 'blocking' }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const post = await getPost(context?.params?.slug as string)
  const blocks = await getBlocks(context?.params?.slug as string)

  return {
    props: {
      post,
      blocks,
    },
    revalidate: 1,
  }
}

const Index: NextPage<{ post: Post; blocks: GetBlockResponse[] }> = ({ post, blocks }) => {
  if (!post || !blocks) {
    return <></>
  } else {
    const postTitle = post.properties.title.title[0].text.content

    return (
      <>
        <NextSeo title={`${postTitle}`} />
        <Layout>
          <Container maxWidth="md">
            <Box component="article" py={4}>
              {/* blog title */}
              <Typography component="h1" variant="h3">
                {postTitle}
              </Typography>

              <Stack direction="row" alignItems="center" spacing={2} mt={2} mb={3}>
                {post.created_time && (
                  <Typography variant="body2" color="text.secondary" textAlign="right">
                    {formatDate(post.created_time)}
                  </Typography>
                )}
                {post.properties.tags.multi_select[0].name && (
                  <Chip
                    label={post.properties.tags.multi_select[0].name}
                    color="primary"
                    size="small"
                    sx={{
                      lineHeight: '1rem',
                    }}
                  />
                )}
              </Stack>

              <Divider />

              {/* blog content */}
              <Box pt={4}>
                {blocks.map((block: GetBlockResponse, index) => {
                  return <NotionBlock key={index} block={block} />
                })}
              </Box>
            </Box>
          </Container>
        </Layout>
      </>
    )
  }
}

export default Index
