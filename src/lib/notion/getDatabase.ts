import type {
  GetDatabaseResponse,
  QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints'
import { notion, databaseFilter } from './client'

/**
 * get notion database by id
 */
export const getDatabaseChildren = async (
  databaseId: string,
  pageSize = 12,
  startCursor?: string,
): Promise<QueryDatabaseResponse> => {
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
 */
export const getDatabaseProperties = async (databaseId: string): Promise<GetDatabaseResponse> => {
  const response = await notion.databases.retrieve({
    database_id: databaseId,
  })
  return response
}
