import Heading from 'components/atoms/Heading'
import { Post } from 'models/notion'
import { formatDate } from 'util/formatDate'
import { jpParse } from 'util/japaneseParser'

type Porps = {
  post: Post
}

const PostHeader = ({ post }: Porps) => {
  return (
    <>
      {/* title */}
      <div id="post-title" className="mb-6">
        <Heading h={2} className="tracking-wider leading-relaxed">
          {jpParse(post.properties.title.title[0].text.content)}
        </Heading>
      </div>
      <div className="flex items-center">
        {/* tag */}
        {post.properties.tags.multi_select[0].name && (
          <p className="text-gray-500">{post.properties.tags.multi_select[0].name}</p>
        )}
        {/* date */}
        <time className="ml-6 text-gray-500" dateTime={formatDate(post.created_time)}>
          {formatDate(post.created_time)}
        </time>
      </div>
    </>
  )
}

export default PostHeader
