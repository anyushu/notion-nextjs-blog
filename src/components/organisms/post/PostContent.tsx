import { GetBlockResponse } from '@notionhq/client/build/src/api-endpoints'
import PostBlock from 'components/organisms/post/PostBlock'

type Porps = {
  blocks: GetBlockResponse[]
}

const PostContent = ({ blocks }: Porps) => {
  return (
    <>
      {blocks.map((block: GetBlockResponse, index) => {
        return <PostBlock key={index} block={block} />
      })}
    </>
  )
}

export default PostContent
