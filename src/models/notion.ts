/**
 * notion database
 */
export interface Database {
  properties: {
    title?: [plain_text: string]
    tags: {
      multi_select: {
        options?: [
          {
            color: string
            id: string
            name: string
          },
        ]
      }
    }
  }
}

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
  author: {
    type: 'created_by'
    created_by: {
      avatar_url?: string
      name: string
    }
  }
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

/**
 * property of notion rich text
 */
export interface RichTextItem {
  text: {
    content: string
    link?: {
      url: string
    } | null
  }
  type?: 'text'
  annotations?: {
    bold?: boolean
    italic?: boolean
    strikethrough?: boolean
    underline?: boolean
    code?: boolean
    color?:
      | 'default'
      | 'gray'
      | 'brown'
      | 'orange'
      | 'yellow'
      | 'green'
      | 'blue'
      | 'purple'
      | 'pink'
      | 'red'
      | 'gray_background'
      | 'brown_background'
      | 'orange_background'
      | 'yellow_background'
      | 'green_background'
      | 'blue_background'
      | 'purple_background'
      | 'pink_background'
      | 'red_background'
  }
  plain_text: string
  href: string | null
}
