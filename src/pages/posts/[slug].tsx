import type { GetBlockResponse } from '@notionhq/client/build/src/api-endpoints.d'
import type { GetStaticPropsContext, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Button from 'components/atoms/Button'
import Container from 'components/atoms/Container'
import PostContent from 'components/organisms/post/PostContent'
import PostHeader from 'components/organisms/post/PostHeader'
import Layout from 'components/templates/Layout'
import getBlocks from 'lib/notion/getBlocks'
import getPage from 'lib/notion/getPage'
import getPageIndex from 'lib/notion/getPageIndex'
import type { Post } from 'models/notion'

export async function getStaticPaths() {
  const database = await getPageIndex(process.env.NOTION_DATABASE_ID || '')
  const paths = database.map((post) => ({
    params: {
      slug: post.id,
    },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const post = await getPage(context?.params?.slug as string)
  const blocks = await getBlocks(context?.params?.slug as string)

  return {
    props: {
      post,
      blocks,
    },
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
          <Container>
            <PostHeader post={post} />
            <div className="md:px-24 mt-12 md:mt-24 tracking-wider leading-relaxed">
              <PostContent blocks={blocks} />
            </div>
            <div className="mt-12 tracking-widest text-center">
              <Button href="/">Back Home</Button>
            </div>
          </Container>
        </Layout>
      </>
    )
  }
}

export default Index
