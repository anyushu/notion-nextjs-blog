import { Box, Typography, FormGroup, FormControlLabel, Checkbox, Divider } from '@mui/material'
import { styled } from '@mui/material/styles'
import type { GetBlockResponse } from '@notionhq/client/build/src/api-endpoints.d'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Twemoji } from 'react-emoji-render'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { ocean } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

/**
 * blockquote wrapper
 */
const BlockquoteBox = styled(Box)(({ theme }) => ({
  margin: `${theme.spacing(3)} 0`,
  padding: `${theme.spacing(2)} ${theme.spacing(2)}`,
  fontStyle: 'italic',
  borderLeft: `4px solid ${theme.palette.text.disabled}`,
  backgroundColor: theme.palette.action.disabledBackground,
  marginBottom: theme.spacing(1),
}))

/**
 * image wrapper
 */
const ImageBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: 0,
  paddingBottom: '56.25%',
  marginBottom: theme.spacing(1),
}))

/**
 * Notion Block render
 */
const NotionBlock: NextPage<{ block: GetBlockResponse }> = ({ block }) => {
  const { type } = block

  switch (type) {
    case 'paragraph':
      return <Typography mb={1}>{block.paragraph.text[0].plain_text}</Typography>

    case 'heading_1':
      return (
        <Typography component="h1" variant="h4" mt={3} mb={2}>
          {block.heading_1.text[0].plain_text}
        </Typography>
      )

    case 'heading_2':
      return (
        <Typography component="h2" variant="h5" mt={3} mb={2}>
          {block.heading_2.text[0].plain_text}
        </Typography>
      )

    case 'heading_3':
      return (
        <Typography component="h3" variant="h6" mt={2} mb={1}>
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
      const checked = block.to_do.checked ? (
        <Checkbox readOnly={true} defaultChecked />
      ) : (
        <Checkbox readOnly={true} />
      )
      return (
        <FormGroup>
          <FormControlLabel
            sx={{
              pointerEvents: 'none',
            }}
            control={checked}
            label={block.to_do.text[0].plain_text}
          />
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
        <BlockquoteBox component="blockquote">
          <Typography>{block.quote.text[0].plain_text}</Typography>
        </BlockquoteBox>
      )

    case 'image':
      // @ts-ignore
      const src = block.image.file.url as string
      const alt = block.image?.caption[0]?.plain_text || ''
      return (
        <ImageBox>
          <Image layout="fill" objectFit="contain" src={src} alt={alt} priority={true} />
        </ImageBox>
      )

    case 'embed':
      return (
        <Typography
          mb={1}
          sx={{
            '& a': {
              color: 'text.secondary',
            },
          }}
        >
          <Link href={block.embed.url} passHref>
            <Twemoji svg text="📎" /> {block.embed.url}
          </Link>
        </Typography>
      )

    case 'bookmark':
      return (
        <Typography
          mb={1}
          sx={{
            '& a': {
              color: 'text.secondary',
            },
          }}
        >
          <Link href={block.bookmark.url} passHref>
            <Twemoji svg text="📎" /> {block.bookmark.url}
          </Link>
        </Typography>
      )

    case 'divider':
      return <Divider sx={{ margin: '1rem 0' }} />

    default:
      return <></>
  }
}

export default NotionBlock
