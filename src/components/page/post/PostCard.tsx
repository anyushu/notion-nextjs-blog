import { Box, Card, CardContent, Typography, CardActionArea, Stack, Chip } from '@mui/material'
import { blue } from '@mui/material/colors'
import type { NextPage } from 'next'
import Link from 'next/link'
import { Twemoji } from 'react-emoji-render'
import type { Post } from '../../../models/notion'
import { formatDate } from '../../../util/formatDate'

/**
 * PostCard component
 */
const PostCard: NextPage<{ post: Post }> = ({ post }) => {
  console.log(post.properties.tags.multi_select[0].name)
  return (
    <Card>
      <Link href={`/posts/${post.id}`} passHref>
        <CardActionArea>
          {post.icon.emoji && (
            <Box
              py={5}
              px={3}
              sx={{
                backgroundColor: blue[50],
                textAlign: 'center',
                fontSize: '5rem',
                lineHeight: 1,
              }}
            >
              <Twemoji svg text={post.icon.emoji} />
            </Box>
          )}
          <CardContent>
            <Typography variant="h5" component="h2" mb={3}>
              {post.properties.title.title[0].text.content}
            </Typography>
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
              {post.properties.tags.multi_select[0].name && (
                <Chip
                  label={post.properties.tags.multi_select[0].name}
                  color="primary"
                  size="small"
                  sx={{
                    lineHeight: '1rem',
                  }}
                />
              )}
              {post.created_time && (
                <Typography variant="body2" color="text.secondary" textAlign="right">
                  {formatDate(post.created_time)}
                </Typography>
              )}
            </Stack>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  )
}

export default PostCard
