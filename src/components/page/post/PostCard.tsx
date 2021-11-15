import { Box, Card, CardContent, Typography, CardActionArea, Stack, Chip } from '@mui/material'
import { styled } from '@mui/material/styles'
import type { NextPage } from 'next'
import Link from 'next/link'
import { Twemoji } from 'react-emoji-render'
import { getPostLink } from '../../../lib/blog-helpers'
import type { Post } from '../../../models/notion'
import { formatDate } from '../../../util/formatDate'

/**
 * thumbnail wrapper
 */
const ThumbnailBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: `${theme.spacing(5)} ${theme.spacing(3)}`,
  backgroundColor: theme.palette.action.hover,
  textAlign: 'center',
  fontSize: '5rem',
  lineHeight: 1,
}))

/**
 * PostCard component
 */
const PostCard: NextPage<{ post: Post }> = ({ post }) => {
  return (
    <Card>
      <Link href="/posts/[slug]" as={getPostLink(post.id)} passHref>
        <CardActionArea>
          <ThumbnailBox>
            <Twemoji svg text={post.icon?.emoji || '☕'} />
          </ThumbnailBox>
          <CardContent>
            <Typography variant="h6" component="h2" mb={3}>
              {post.properties.title.title[0].text.content}
            </Typography>
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
              {post.properties.tags.multi_select[0].name && (
                <Chip
                  color="secondary"
                  label={post.properties.tags.multi_select[0].name}
                  size="small"
                />
              )}
              {post.created_time && (
                <Typography color="text.secondary" textAlign="right">
                  <Twemoji svg text="✏️" /> {formatDate(post.created_time)}
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
