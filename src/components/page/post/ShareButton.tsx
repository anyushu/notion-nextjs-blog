import { Box, Stack, Typography } from '@mui/material'
import { NextPage } from 'next'
import {
  TwitterShareButton,
  FacebookShareButton,
  HatenaShareButton,
  PocketShareButton,
  TwitterIcon,
  FacebookIcon,
  HatenaIcon,
  PocketIcon,
} from 'react-share'
import { siteTitle } from '../../../next-seo.config'

interface Props {
  slug: string
  postTitle: string
}

const ShareButton: NextPage<Props> = ({ postTitle, slug }) => {
  const url = process.env.NEXT_PUBLIC_SITE_URL + '/' + slug
  const title = siteTitle + ' | ' + postTitle

  return (
    <Box mt={6}>
      <Typography variant="h6" textAlign="center">
        Share Me !!
      </Typography>
      <Stack mt={2} direction="row" justifyContent="center" alignItems="center" spacing={2}>
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <FacebookShareButton url={url} quote={title}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <PocketShareButton url={url} title={title}>
          <PocketIcon size={32} round={true} />
        </PocketShareButton>
        <HatenaShareButton url={url} title={title}>
          <HatenaIcon size={32} round={true} />
        </HatenaShareButton>
      </Stack>
    </Box>
  )
}

export default ShareButton
