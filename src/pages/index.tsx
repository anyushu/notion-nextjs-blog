import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Container from 'components/atoms/Container'
import Heading from 'components/atoms/Heading'
import Posts from 'components/molecules/Posts'
import Hero from 'components/organisms/Hero'
import Layout from 'components/templates/Layout'
import { getDatabaseChildren, getDatabaseProperties } from 'lib/notion/getDatabase'
import type { Post } from 'models/notion'

export async function getStaticProps() {
  const database = await getDatabaseChildren(process.env.NOTION_DATABASE_ID || '')
  const databaseProperties = await getDatabaseProperties(process.env.NOTION_DATABASE_ID || '')

  return {
    props: {
      posts: database.results,
      databaseProperties: databaseProperties,
    },
  }
}

const Home: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <>
      <NextSeo description="フロントエンドエンジニア。サッカーと映画が好きです。" />

      <Layout>
        <Hero />
        <Container>
          <Heading h={2} className="mb-6 tracking-wider">
            Latest posts
          </Heading>
          <Posts posts={posts} />
        </Container>
      </Layout>
    </>
  )
}

export default Home
