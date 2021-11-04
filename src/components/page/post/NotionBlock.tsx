import type { GetBlockResponse } from '@notionhq/client/build/src/api-endpoints.d'
import { Box, Typography } from '@mui/material'
import { NextPage } from 'next'
import Image from 'next/image'

const NotionBlock: NextPage<{ block: GetBlockResponse }> = ({ block }) => {
  const { type } = block

  switch (type) {
    case 'paragraph':
      return <Typography>{block.paragraph.text[0].plain_text}</Typography>
    case 'heading_1':
      return (
        <Typography component="h1" variant="h2">
          {block.heading_1.text[0].plain_text}
        </Typography>
      )
    case 'heading_2':
      return (
        <Typography component="h2" variant="h3">
          {block.heading_2.text[0].plain_text}
        </Typography>
      )
    case 'heading_3':
      return (
        <Typography component="h3" variant="h4">
          {block.heading_3.text[0].plain_text}
        </Typography>
      )
    case 'bulleted_list_item':
      return <li>{block.bulleted_list_item.text[0].plain_text}</li>
    case 'numbered_list_item':
      return <li>{block.numbered_list_item.text[0].plain_text}</li>
    case 'code':
      return <Box component="code">{block.code.text[0].plain_text}</Box>
    case 'quote':
      return <Box component="blockquote">{block.quote.text[0].plain_text}</Box>
    case 'image':
      // @ts-ignore
      const src = block.image.file.url as string
      const alt = block.image?.caption[0]?.plain_text || ''
      return (
        <Box style={{ position: 'relative', width: '100%', height: 0, paddingBottom: '56.25%' }}>
          <Image layout="fill" objectFit="contain" src={src} alt={alt} priority={true} />
        </Box>
      )
    default:
      return <></>
  }
}

export default NotionBlock
