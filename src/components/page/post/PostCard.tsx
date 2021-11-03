import type { NextPage } from 'next'
import type { Post } from '../../../models/notion'
import { Card, CardContent, Typography, CardActionArea } from '@mui/material'

const PostCard: NextPage<{ post: Post }> = ({ post }) => {
  console.log(post)
  return (
    <Card>
      <CardActionArea>
        {post.icon.emoji && (
          <Typography variant="h5" component="div">
            {post.icon.emoji}
          </Typography>
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.properties.title.title[0].text.content}
          </Typography>
          {post.created_time && (
            <Typography variant="body2" color="text.secondary">
              {post.created_time}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default PostCard
