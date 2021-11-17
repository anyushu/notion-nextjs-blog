/* eslint-disable import/named */
import { CacheProvider, EmotionCache } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import TransitionProps from '../components/common/TransitionProps'
import { defaultSeo } from '../next-seo.config'
import createEmotionCache from '../styles/createEmotionCache'
import theme from '../styles/theme'
import { GTM_ID } from '../util/gtm'
import GoogleTagManager from 'components/common/GoogleTagManager'
import { SearchContext } from 'context/searchContext'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps): JSX.Element {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const [search, setSearch] = useState<string>('')

  return (
    <>
      <DefaultSeo {...defaultSeo} />
      {GTM_ID && <GoogleTagManager googleTagManagerId={GTM_ID} />}
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <TransitionProps />
          <SearchContext.Provider value={{ search, setSearch }}>
            <Component {...pageProps} />
          </SearchContext.Provider>
        </ThemeProvider>
      </CacheProvider>
    </>
  )
}
