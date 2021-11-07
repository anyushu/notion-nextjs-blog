import { Box, Typography, FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import { grey } from '@mui/material/colors'
import type { GetBlockResponse } from '@notionhq/client/build/src/api-endpoints.d'
import { NextPage } from 'next'
import Image from 'next/image'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { ocean } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const NotionBlock: NextPage<{ block: GetBlockResponse }> = ({ block }) => {
  const { type } = block

  switch (type) {
    case 'paragraph':
      return <Typography mb={1}>{block.paragraph.text[0].plain_text}</Typography>
    case 'heading_1':
      return (
        <Typography component="h1" variant="h3" mt={3} mb={2}>
          {block.heading_1.text[0].plain_text}
        </Typography>
      )
    case 'heading_2':
      return (
        <Typography component="h2" variant="h4" mt={3} mb={2}>
          {block.heading_2.text[0].plain_text}
        </Typography>
      )
    case 'heading_3':
      return (
        <Typography component="h3" variant="h5" mt={2} mb={1}>
          {block.heading_3.text[0].plain_text}
        </Typography>
      )
    case 'bulleted_list_item':
      return (
        <li
          style={{
            marginLeft: '1rem',
            marginBottom: '0.5rem',
          }}
        >
          {block.bulleted_list_item.text[0].plain_text}
        </li>
      )
    case 'numbered_list_item':
      return (
        <li
          style={{
            marginLeft: '1rem',
            marginBottom: '0.5rem',
          }}
        >
          {block.numbered_list_item.text[0].plain_text}
        </li>
      )
    case 'to_do':
      const checked = block.to_do.checked ? <Checkbox defaultChecked /> : <Checkbox />
      return (
        <FormGroup>
          <FormControlLabel control={checked} label={block.to_do.text[0].plain_text} />
        </FormGroup>
      )
    case 'code':
      const language = block.code.language
      return (
        <SyntaxHighlighter
          language={language}
          style={ocean}
          customStyle={{
            padding: '1rem',
            margin: '1rem 0',
          }}
        >
          {block.code.text[0].plain_text}
        </SyntaxHighlighter>
      )
    case 'quote':
      return (
        <Box
          component="blockquote"
          mb={1}
          sx={{
            margin: '1rem 0',
            padding: '0.5rem 1rem',
            fontStyle: 'italic',
            color: grey[800],
            borderLeft: `4px solid ${grey[500]}`,
            backgroundColor: `${grey.A100}`,
          }}
        >
          {block.quote.text[0].plain_text}
        </Box>
      )
    case 'image':
      // @ts-ignore
      const src = block.image.file.url as string
      const alt = block.image?.caption[0]?.plain_text || ''
      return (
        <Box
          mb={1}
          sx={{ position: 'relative', width: '100%', height: 0, paddingBottom: '56.25%' }}
        >
          <Image layout="fill" objectFit="contain" src={src} alt={alt} priority={true} />
        </Box>
      )
    default:
      return <></>
  }
}

export default NotionBlock
