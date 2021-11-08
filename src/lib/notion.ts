import { Client } from '@notionhq/client'

/**
 * notion sdk client
 */
const notion = new Client({
  auth: process.env.NOTION_KEY,
})

/**
 * get notion database by id
 *
 * @param {string} databaseId
 * @returns notion.databases.query
 */
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

/**
 * get notion pages by id
 *
 * @param {string} pageId
 * @returns notion.pages.retrieve
 */
export const getPost = async (pageId: string) => {
  const response = await notion.pages.retrieve({ page_id: pageId })
  return response
}

/**
 * get notion blocks children list by id
 *
 * @param {string} blockId
 * @returns notion.blocks.children.list
 */
export const getBlocks = async (blockId: string) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
  })
  return response.results
}
