import type { GetBlockResponse } from '@notionhq/client/build/src/api-endpoints.d'
import { Container, Box, Typography, Stack } from '@mui/material'
import { NextPage } from 'next'

const NotionBlock: NextPage<{ block: GetBlockResponse }> = ({ block }) => {
  const { type } = block

  switch (type) {
    case 'paragraph':
      return <Typography>{block.paragraph.text[0].plain_text}</Typography>
    case 'heading_1':
      return <Typography component="h1">{block.heading_1.text[0].plain_text}</Typography>
    case 'heading_2':
      return <Typography component="h2">{block.heading_2.text[0].plain_text}</Typography>
    case 'heading_3':
      return <Typography component="h3">{block.heading_3.text[0].plain_text}</Typography>
    default:
      return <></>
  }
}

export default NotionBlock
