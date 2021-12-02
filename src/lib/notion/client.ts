import { Client } from '@notionhq/client'

/**
 * notion sdk client
 */
export const notion = new Client({
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
