import type { NextPage } from 'next'
import Link from 'next/link'
import type { Post } from '../../../models/notion'
import { Card, CardContent, Typography, CardActionArea } from '@mui/material'

/**
 * PostCard component
 */
const PostCard: NextPage<{ post: Post }> = ({ post }) => {
  return (
    <Card>
      <Link href={`/posts/${post.id}`} passHref>
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
      </Link>
    </Card>
  )
}

export default PostCard
