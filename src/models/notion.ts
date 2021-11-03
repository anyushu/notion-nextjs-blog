export interface Database {
  object: string
  id: string
  created_time: string
  last_edited_time: string
  parent: {
    type: string
    page_id: string
  }
  icon: {
    type: string
    emoji: string
  }
  url: string
  title: []
}
