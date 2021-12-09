import Link from 'next/link'
import { Twemoji } from 'react-emoji-render'
import { getPostLink } from 'lib/blog-helpers'
import type { Post } from 'models/notion'
import { formatDate } from 'util/formatDate'

type Props = {
  post: Post
}

const PostCard = ({ post }: Props) => {
  return (
    <Link href="/posts/[slug]" as={getPostLink(post.id)} passHref>
      <a className="hover:opacity-75 transition-all">
        {/* thumbnail */}
        <figure className="relative pt-[46.29%] h-0 bg-gray-100">
          <Twemoji
            className="absolute inset-0 m-auto w-16 h-16 text-7xl"
            onlyEmojiClassName="twemoji"
            svg
            text={post.icon?.emoji || '☕'}
          />
        </figure>
        <div className="flex justify-between items-center my-6 text-xs tracking-widest text-gray-500">
          {/* tag */}
          <div>
            {post.properties.tags.multi_select[0].name && (
              <span>{post.properties.tags.multi_select[0].name}</span>
            )}
          </div>
          {/* created_time */}
          <time dateTime={formatDate(post.created_time)}>{formatDate(post.created_time)}</time>
        </div>
        {/* title */}
        <h2 className="text-lg tracking-wider">{post.properties.title.title[0].text.content}</h2>
      </a>
    </Link>
  )
}

export default PostCard
