import PostBlock from 'components/organisms/post/PostBlock'
import { GetBlockResponse } from 'types/notion'

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
