import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'
import React from 'react'
import GoogleTagManager from 'components/templates/GoogleTagManager'
import { defaultSeo } from 'next-seo.config'
import { GTM_ID } from 'util/gtm'
import 'styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...defaultSeo} />
      {GTM_ID && <GoogleTagManager googleTagManagerId={GTM_ID} />}

      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
