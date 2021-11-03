export interface PostProperty {
  title: {
    type: string
    text: {
      content: string
    }
  }
}

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
