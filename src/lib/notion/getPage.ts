import { notion } from './client'

/**
 * get notion pages by id
 *
 * @param {string} pageId
 * @returns notion.pages.retrieve
 */
export default async function getPage(pageId: string) {
  return await notion.pages.retrieve({ page_id: pageId })
}
