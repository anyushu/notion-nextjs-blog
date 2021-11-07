/* eslint-disable import/named */
import { CacheProvider, EmotionCache } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import Head from 'next/head'
import * as React from 'react'
import TransitionProps from '../components/common/TransitionProps'
import { defaultSeo } from '../next-seo.config'
import createEmotionCache from '../styles/createEmotionCache'
import theme from '../styles/theme'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps): JSX.Element {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TransitionProps />
        <DefaultSeo {...defaultSeo} />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}
