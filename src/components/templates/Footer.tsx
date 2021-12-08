import Link from 'next/link'
import { siteTitle } from 'next-seo.config'

const Footer = () => {
  return (
    <footer id="footer" className="py-12 mt-24 bg-gray-100">
      <div className=" container mx-auto">
        <div className="text-center">
          <h2 className="tracking-widest text-xl">
            <Link href="/">
              <a>{siteTitle}</a>
            </Link>
          </h2>
          <nav className="flex justify-center text-sm my-6">
            <Link href="/">
              <a className="hover:text-gray-700">Home</a>
            </Link>
            <Link href={process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/'}>
              <a className="hover:text-gray-700 ml-3">GitHub</a>
            </Link>
            <Link href={process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com/'}>
              <a className="hover:text-gray-700 ml-3">Twitter</a>
            </Link>
          </nav>
          <p className="text-xs">© 2021 {siteTitle}.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
