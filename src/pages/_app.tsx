import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import React, { useState } from 'react'
import TransitionProps from '../components/common/TransitionProps'
import { defaultSeo } from '../next-seo.config'
import theme from '../styles/theme'
import { GTM_ID } from '../util/gtm'
import GoogleTagManager from 'components/common/GoogleTagManager'
import { SearchContext } from 'context/searchContext'

export default function MyApp({ Component, pageProps }: AppProps) {
  const [search, setSearch] = useState<string>('')

  return (
    <>
      <DefaultSeo {...defaultSeo} />
      {GTM_ID && <GoogleTagManager googleTagManagerId={GTM_ID} />}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TransitionProps />
        <SearchContext.Provider value={{ search, setSearch }}>
          <Component {...pageProps} />
        </SearchContext.Provider>
      </ThemeProvider>
    </>
  )
}
