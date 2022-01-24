import Image from 'next/image'
import type { FC } from 'react'
import { Twemoji } from 'react-emoji-render'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { ocean } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import Heading from 'components/atoms/Heading'
import RichText from 'components/organisms/post/RichText'
import { RichTextItem } from 'types/notion'
import type { GetBlockResponse } from 'types/notion'
import { jpParse } from 'util/japaneseParser'

/**
 * Notion Block render
 */
const PostBlock: FC<{ block: GetBlockResponse }> = ({ block }) => {
  const { type, id } = block

  switch (type) {
    case 'paragraph':
      return <RichText texts={block.paragraph.text as Array<RichTextItem>} />

    case 'heading_1':
      return (
        <Heading h={1} className="mt-7 mb-4">
          {jpParse(block.heading_1.text[0].plain_text)}
        </Heading>
      )

    case 'heading_2':
      return (
        <Heading h={2} className="mt-7 mb-4">
          {jpParse(block.heading_2.text[0].plain_text)}
        </Heading>
      )

    case 'heading_3':
      return (
        <Heading h={3} className="mt-7 mb-4">
          {jpParse(block.heading_3.text[0].plain_text)}
        </Heading>
      )

    case 'bulleted_list_item':
      return (
        <li id={id} className="ml-3">
          {block.bulleted_list_item.text[0].plain_text}
        </li>
      )

    case 'numbered_list_item':
      return (
        <li id={id} className="ml-3">
          {block.numbered_list_item.text[0].plain_text}
        </li>
      )

    case 'code':
      const language = block.code.language
      return (
        <SyntaxHighlighter
          id={id}
          language={language}
          style={ocean}
          customStyle={{
            padding: '0.75rem',
            margin: '1rem 0',
            lineHeight: 1.5,
            letterSpacing: 0,
            fontSize: '90%',
          }}
        >
          {block.code.text[0].plain_text}
        </SyntaxHighlighter>
      )

    case 'quote':
      return (
        <blockquote id={id} className="py-2 px-3 my-3 bg-gray-100 dark:bg-black-700 border-l-2">
          <p className="whitespace-pre-wrap">{block.quote.text[0].plain_text}</p>
        </blockquote>
      )

    case 'to_do':
      return (
        <p className="flex items-center ml-2">
          <input
            id={id}
            className="mr-3"
            type="checkbox"
            checked={block.to_do.checked ? true : false}
            readOnly={true}
          />
          <label htmlFor={id}>{block.to_do.text[0].plain_text}</label>
        </p>
      )

    case 'image':
      // @ts-ignore
      const src = block.image.file.url as string
      const alt = block.image?.caption[0]?.plain_text || ''
      return (
        <div id={id}>
          <Image layout="fill" objectFit="contain" src={src} alt={alt} priority={true} />
        </div>
      )

    case 'embed':
      return (
        <p id={id} className="mb-3">
          <a
            className="tracking-normal leading-normal text-blue-500 hover:text-blue-200 underline"
            href={block.embed.url}
            target="_blank"
            rel="noreferrer"
          >
            {block.embed.url}
          </a>
        </p>
      )

    case 'bookmark':
      return (
        <p id={id} className="mb-3">
          <a
            className="tracking-normal leading-normal text-blue-500 hover:text-blue-200 underline"
            href={block.bookmark.url}
            target="_blank"
            rel="noreferrer"
          >
            {block.bookmark.url}
          </a>
        </p>
      )

    case 'callout':
      return (
        <div className="flex items-start p-3 bg-gray-100 dark:bg-black-700 rounded">
          <Twemoji
            className="block mt-1 mr-3 w-5 h-5"
            onlyEmojiClassName="twemoji"
            svg
            // @ts-ignore
            text={block.callout.icon?.emoji || '☕'}
          />
          <div>
            <RichText className="mb-0" texts={block.callout.text as Array<RichTextItem>} />
          </div>
        </div>
      )

    case 'divider':
      return <hr className="my-3 border-gray-300" />

    default:
      return <></>
  }
}

export default PostBlock
