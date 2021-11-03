import type { Post } from '../../models/notion'
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material'

const PostCard = ({ post }: { post: Post }) => {
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
            {post.properties.title.text}
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
