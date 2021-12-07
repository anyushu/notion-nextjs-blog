import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useCallback, useContext, useState } from 'react'
import { getDatabaseChildren, getDatabaseProperties } from '../lib/notion/getDatabase'
import type { Database, Post } from '../models/notion'
import { SearchContext } from 'context/searchContext'

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
    </>
  )
}

export default Home
