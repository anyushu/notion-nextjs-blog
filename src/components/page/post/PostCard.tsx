import {
  Avatar,
  Box,
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Stack,
  Chip,
} from '@mui/material'
import { blue } from '@mui/material/colors'
import type { NextPage } from 'next'
import Link from 'next/link'
import { Twemoji } from 'react-emoji-render'
import { getPostLink } from '../../../lib/blog-helpers'
import type { Post } from '../../../models/notion'
import { formatDate } from '../../../util/formatDate'

/**
 * PostCard component
 */
const PostCard: NextPage<{ post: Post }> = ({ post }) => {
  return (
    <Card>
      <Link href="/posts/[slug]" as={getPostLink(post.id)} passHref>
        <CardActionArea>
          <Box
            py={5}
            px={3}
            sx={{
              position: 'relative',
              backgroundColor: blue[50],
              textAlign: 'center',
              fontSize: '5rem',
              lineHeight: 1,
            }}
          >
            {post.properties.tags.multi_select[0].name && (
              <Chip
                label={post.properties.tags.multi_select[0].name}
                color="primary"
                size="small"
                sx={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  lineHeight: '1rem',
                }}
              />
            )}
            <Twemoji svg text={post.icon?.emoji || '☕'} />
          </Box>
          <CardContent>
            <Typography variant="h6" component="h2" mb={3}>
              {post.properties.title.title[0].text.content}
            </Typography>
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
              {post.properties.author.created_by.avatar_url && (
                <Avatar
                  sx={{ width: 28, height: 28 }}
                  alt={post.properties.author.created_by.name}
                  src={post.properties.author.created_by.avatar_url}
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
