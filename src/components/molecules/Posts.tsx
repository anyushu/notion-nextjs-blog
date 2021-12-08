import type { Post } from '../../models/notion'
import PostCard from '../organisms/PostCard'

type Props = {
  posts: Post[]
}

const Posts = ({ posts }: Props) => {
  return (
    <div id="posts" className="grid md:grid-cols-3 gap-8 md:gap-4">
      {posts.map((post: Post, index: number) => {
        return <PostCard key={index} post={post} />
      })}
    </div>
  )
}

export default Posts
