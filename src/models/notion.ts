/**
 * notion database as table content
 */
export interface Post {
  id: string
  icon: {
    type: string
    emoji: string
  }
  created_time: string
  last_edited_time: string
  properties: PostProperty
}

/**
 * property of notion database content
 */
export interface PostProperty {
  title: {
    type: 'title'
    title: [
      {
        text: {
          content: string
        }
      },
    ]
  }
  description: {
    type: 'rich_text'
    rich_text: [
      {
        plain_text: string
      },
    ]
  }
  tags: {
    type: 'multi_select'
    multi_select: [
      {
        color: string
        name: string
      },
    ]
  }
}
