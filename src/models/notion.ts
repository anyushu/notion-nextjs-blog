/**
 * notion database as table content
 */
export interface Post {
  id: string
  icon: {
    type: string
    emoji: string
  }
  archived: boolean
  created_time: string
  last_edited_time: string
  properties: PostProperty
  url: string
}

/**
 * property of notion database content
 */
export interface PostProperty {
  title: {
    type: 'title'
    title: [{
      text: {
        content: string
      }
    }]
  }
  slug: {
    type: 'rich_text'
    rich_text: [{
      plain_text: string
    }]
  }
}

/**
 * property of notion database content
 */
export interface Blocks {
  type: string
}