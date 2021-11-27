import { Box, Typography, FormGroup, FormControlLabel, Checkbox, Divider } from '@mui/material'
import { styled } from '@mui/material/styles'
import type { GetBlockResponse } from '@notionhq/client/build/src/api-endpoints.d'
import { NextPage } from 'next'
import Image from 'next/image'
import { Twemoji } from 'react-emoji-render'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { ocean } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { jpParse } from '../../../util/japaneseParser'
import RichText from './RichText'
import CustomAccordion from 'components/common/Accordion'
import { RichTextItem } from 'models/notion'

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
  const { type, id } = block

  switch (type) {
    case 'paragraph':
      return <RichText texts={block.paragraph.text as Array<RichTextItem>} />

    case 'heading_1':
      return (
        <Typography id={id} component="h1" variant="h4" mt={3} mb={2}>
          {jpParse(block.heading_1.text[0].plain_text)}
        </Typography>
      )

    case 'heading_2':
      return (
        <Typography id={id} component="h2" variant="h5" mt={3} mb={2}>
          {jpParse(block.heading_2.text[0].plain_text)}
        </Typography>
      )

    case 'heading_3':
      return (
        <Typography id={id} component="h3" variant="h6" mt={2} mb={1}>
          {jpParse(block.heading_3.text[0].plain_text)}
        </Typography>
      )

    case 'bulleted_list_item':
      return (
        <li
          id={id}
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
          id={id}
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
        <Checkbox id={id} readOnly={true} defaultChecked />
      ) : (
        <Checkbox id={id} readOnly={true} />
      )
      return (
        <FormGroup id={id}>
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
          id={id}
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
        <BlockquoteBox id={id} component="blockquote">
          <Typography>{block.quote.text[0].plain_text}</Typography>
        </BlockquoteBox>
      )

    case 'image':
      // @ts-ignore
      const src = block.image.file.url as string
      const alt = block.image?.caption[0]?.plain_text || ''
      return (
        <ImageBox id={id}>
          <Image layout="fill" objectFit="contain" src={src} alt={alt} priority={true} />
        </ImageBox>
      )

    case 'embed':
      return (
        <Typography
          id={id}
          mb={1}
          sx={{
            '& a': {
              color: 'text.secondary',
            },
          }}
        >
          <a href={block.embed.url} target="_blank" rel="noreferrer">
            <Twemoji svg text="📎" /> {block.embed.url}
          </a>
        </Typography>
      )

    case 'bookmark':
      return (
        <Typography
          id={id}
          mb={1}
          sx={{
            '& a': {
              color: 'text.secondary',
            },
          }}
        >
          <a href={block.bookmark.url} target="_blank" rel="noreferrer">
            <Twemoji svg text="📎" /> {block.bookmark.url}
          </a>
        </Typography>
      )

    case 'toggle':
      return (
        <CustomAccordion
          props={{
            id: id,
            title: block.toggle.text[0].plain_text,
          }}
        />
      )

    case 'divider':
      return <Divider id={id} sx={{ margin: '1rem 0' }} />

    default:
      return (
        <Box id={id} my={2}>
          this block unsupported type: <b>{block.type}</b>
        </Box>
      )
  }
}

export default NotionBlock
