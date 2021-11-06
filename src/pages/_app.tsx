import * as React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import theme from '../styles/theme'
import createEmotionCache from '../styles/createEmotionCache'
import TransitionProps from '../components/common/TransitionProps'
import { defaultSeo } from '../next-seo.config'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps): JSX.Element {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TransitionProps />
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <DefaultSeo {...defaultSeo} />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}
