import { notion, databaseFilter } from './client'

/**
 * get notion database by id
 *
 * @param {string} databaseId
 * @returns notion.databases.query
 */
export const getDatabaseChildren = async (
  databaseId: string,
  pageSize = 12,
  startCursor?: string,
) => {
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
