import { Client } from '@notionhq/client'

/**
 * notion sdk client
 */
const notion = new Client({
  auth: process.env.NOTION_KEY,
})

/**
 * default database filter
 */
export const databaseFilter = {
  or: [
    {
      property: 'published',
      checkbox: {
        equals: true,
      },
    },
  ],
}

/**
 * get notion database by id
 *
 * @param {string} databaseId
 * @returns notion.databases.query
 */
export const getAllPages = async (databaseId: string) => {
  let results = []
  let response = await notion.databases.query({
    database_id: databaseId,
    filter: databaseFilter,
    sorts: [
      {
        property: 'published_at',
        direction: 'descending',
      },
    ],
  })
  results = [...response.results]
  while (response.has_more) {
    response = await notion.databases.query({
      database_id: databaseId,
      filter: databaseFilter,
      sorts: [
        {
          property: 'published_at',
          direction: 'descending',
        },
      ],
    })
    results = [...results, ...response.results]
  }
  return results
}

/**
 * get notion database by id
 *
 * @param {string} databaseId
 * @returns notion.databases.query
 */
export const getDatabase = async (databaseId: string, pageSize = 12, startCursor?: string) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    page_size: pageSize,
    start_cursor: startCursor,
    filter: databaseFilter,
    sorts: [
      {
        property: 'published_at',
        direction: 'descending',
      },
    ],
  })
  return response
}

/**
 * get notion database by id
 *
 * @param {string} databaseId
 * @returns notion.databases.query
 */
export const getDatabaseProperties = async (databaseId: string) => {
  const response = await notion.databases.retrieve({
    database_id: databaseId,
  })
  return response
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
  let results = []
  let response = await notion.blocks.children.list({
    block_id: blockId,
  })
  results = [...response.results]
  while (response.has_more) {
    response = await notion.blocks.children.list({
      block_id: blockId,
      start_cursor: response.next_cursor || undefined,
    })
    results = [...results, ...response.results]
  }
  return results
}
