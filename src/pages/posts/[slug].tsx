import { Container, Box, Typography, Divider, Stack, Chip } from '@mui/material'
import type { GetBlockResponse } from '@notionhq/client/build/src/api-endpoints.d'
import type { GetStaticPropsContext, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { Twemoji } from 'react-emoji-render'
import Layout from '../../components/common/Layout'
import NotionBlock from '../../components/page/post/NotionBlock'
import ShareButton from '../../components/page/post/ShareButton'
import getBlocks from '../../lib/notion/getBlocks'
import getPage from '../../lib/notion/getPage'
import type { Post } from '../../models/notion'
import { formatDate } from '../../util/formatDate'
import { jpParse } from '../../util/japaneseParser'
import getPageIndex from 'lib/notion/getPageIndex'

export async function getStaticPaths() {
  const database = await getPageIndex(process.env.NOTION_DATABASE_ID || '')
  const paths = database.map((post) => ({
    params: {
      slug: post.id,
    },
  }))

  return { paths, fallback: 'blocking' }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const post = await getPage(context?.params?.slug as string)
  const blocks = await getBlocks(context?.params?.slug as string)
  const revalidate = 60

  return {
    props: {
      post,
      blocks,
    },
    revalidate: revalidate,
  }
}

const Index: NextPage<{ post: Post; blocks: GetBlockResponse[] }> = ({ post, blocks }) => {
  if (!post || !blocks) {
    return <></>
  } else {
    const postTitle = post.properties.title.title[0].text.content

    return (
      <>
        <NextSeo
          title={`${postTitle}`}
          description={post.properties?.description?.rich_text[0]?.plain_text || ''}
        />
        <Layout>
          <Container maxWidth="md">
            <Box
              component="article"
              py={6}
              sx={{
                wordBreak: 'break-all',
              }}
            >
              {/* blog title */}
              <Typography component="h1" variant="h4">
                {jpParse(postTitle)}
              </Typography>

              <Stack direction="row" alignItems="center" mt={2} mb={3}>
                {post.properties.tags.multi_select[0].name && (
                  <Chip label={post.properties.tags.multi_select[0].name} size="small" />
                )}
                {post.created_time && (
                  <Typography color="text.secondary" textAlign="right" sx={{ marginLeft: 'auto' }}>
                    <Twemoji svg text="✏️" /> {formatDate(post.created_time)}
                  </Typography>
                )}
                {post.last_edited_time && (
                  <Typography color="text.secondary" textAlign="right" ml={2}>
                    <Twemoji svg text="🕓" /> {formatDate(post.last_edited_time)}
                  </Typography>
                )}
              </Stack>

              <Divider />

              {/* blog content */}
              <Box pt={4}>
                {blocks.map((block: GetBlockResponse, index) => {
                  return <NotionBlock key={index} block={block} />
                })}
              </Box>

              {/* ShareButton */}
              <ShareButton postTitle={postTitle} slug={post.id} />
            </Box>
          </Container>
        </Layout>
      </>
    )
  }
}

export default Index
