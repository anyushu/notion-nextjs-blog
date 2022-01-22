import { notion, databaseFilter } from 'lib/notion/client'

/**
 * get notion database by id
 *
 * @param {string} databaseId
 * @returns notion.databases.query
 */
export default async function getPageIndex(databaseId: string) {
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
