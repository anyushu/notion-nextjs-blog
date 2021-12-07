import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import React, { useState } from 'react'
import GoogleTagManager from '../components/common/GoogleTagManager'
import { defaultSeo } from '../next-seo.config'
import { GTM_ID } from '../util/gtm'
import { SearchContext } from 'context/searchContext'

export default function MyApp({ Component, pageProps }: AppProps) {
  const [search, setSearch] = useState<string>('')

  return (
    <>
      <DefaultSeo {...defaultSeo} />
      {GTM_ID && <GoogleTagManager googleTagManagerId={GTM_ID} />}
      <SearchContext.Provider value={{ search, setSearch }}>
        <Component {...pageProps} />
      </SearchContext.Provider>
    </>
  )
}
