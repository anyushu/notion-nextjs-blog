import type { GetStaticPropsContext, NextPage } from 'next'
import type { GetBlockResponse } from '@notionhq/client/build/src/api-endpoints.d'
import Head from 'next/head'
import type { Post } from '../../models/notion'
import { getPost, getDatabase, getBlocks } from '../../lib/notion'
import Layout from '../../components/common/Layout'
import NotionBlock from '../../components/page/post/NotionBlock'
import { Container, Box, Typography, Stack } from '@mui/material'

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

    console.log(blocks)

    return (
      <>
        <Head>
          <title>{`${postTitle}`}</title>
          <meta property="og:title" content={`${postTitle}`} />
          <meta
            property="og:image"
            content={`https://diary.unronritaro.net/api/ogp?title=${encodeURIComponent(postTitle)}`}
          />
          <meta
            name="twitter:image"
            content={`https://diary.unronritaro.net/api/ogp?title=${encodeURIComponent(postTitle)}`}
          />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <Layout>
          <Container>
            {blocks.map((block: GetBlockResponse, index) => {
              return <NotionBlock key={index} block={block} />
            })}
          </Container>
        </Layout>
      </>
    )
  }
}

export default Index
