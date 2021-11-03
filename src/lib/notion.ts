import { Client } from '@notionhq/client'

/**
 * notion sdk client
 */
const notion = new Client({
  auth: process.env.NOTION_KEY,
})

export const getDatabase = async (databaseId: string) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      or: [
        {
          property: 'published',
          checkbox: {
            equals: true,
          },
        },
      ],
    },
    sorts: [
      {
        property: 'published_at',
        direction: 'descending',
      },
    ],
  })
  return response.results
}

export const getPost = async (pageId: string) => {
  const response = await notion.pages.retrieve({ page_id: pageId })
  return response
}

export const getBlocks = async (blockId: string) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
  })
  return response.results
}
