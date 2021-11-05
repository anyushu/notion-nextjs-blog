import type { NextPage } from 'next'
import Link from 'next/link'
import type { Post } from '../../../models/notion'
import { Box, Card, CardContent, Typography, CardActionArea } from '@mui/material'
import { formatDate } from '../../../util/formatDate'
import { Twemoji } from 'react-emoji-render'

/**
 * PostCard component
 */
const PostCard: NextPage<{ post: Post }> = ({ post }) => {
  return (
    <Card>
      <Link href={`/posts/${post.id}`} passHref>
        <CardActionArea>
          {post.icon.emoji && (
            <Box
              px={2}
              pt={2}
              sx={{
                textAlign: 'center',
                fontSize: '3rem',
                lineHeight: 1,
              }}
            >
              <Twemoji svg text={post.icon.emoji} />
            </Box>
          )}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {post.properties.title.title[0].text.content}
            </Typography>
            {post.created_time && (
              <Typography variant="body2" color="text.secondary" textAlign="right">
                {formatDate(post.created_time)}
              </Typography>
            )}
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  )
}

export default PostCard
