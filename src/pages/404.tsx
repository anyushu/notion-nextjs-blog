import { NextSeo } from 'next-seo'
import Link from 'next/link'
import Button from 'components/atoms/Button'
import Container from 'components/atoms/Container'
import { siteTitle } from 'next-seo.config'

const Custom404 = () => {
  return (
    <>
      <NextSeo description="JAMstack Blog with Notion API x Next.js" />

      <Container className="py-24 text-center">
        <h1 className="text-xl tracking-widest">
          <Link href="/">
            <a>{siteTitle}</a>
          </Link>
        </h1>
        <h2 className="mt-24 text-9xl tracking-widest text-gray-300">404</h2>
        <p className="mt-12 tracking-widest">
          I am sorry, but the page you requested was not found.
        </p>
        <div className="mt-12 tracking-widest">
          <Button href="/">Home</Button>
        </div>
      </Container>
    </>
  )
}

export default Custom404
