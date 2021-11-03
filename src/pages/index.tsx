import type { NextPage, InferGetStaticPropsType } from 'next'
import { getDatabase } from '../lib/notion'

export const databaseId = process.env.NOTION_DATABASE_ID || ''

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Home: NextPage<Props> = ({ posts }) => {

  return (
    <>
      <div></div>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const database = await getDatabase(databaseId)

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  }
}
