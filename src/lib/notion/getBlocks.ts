import { notion } from 'lib/notion/client'

/**
 * get notion pages by id
 *
 * @param {string} pageId
 * @returns notion.pages.retrieve
 */
export default async function getBlocks(blockId: string) {
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
