import Link from 'next/link'
import { siteTitle } from 'next-seo.config'

const headMenus = [
  { name: 'Home', href: '/' },
  { name: 'GitHub', href: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/' },
  { name: 'Twitter', href: process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com/' },
]

const Header = () => {
  return (
    <header id="header" className="p-3 md:py-24 md:px-0 mb-6 md:mb-0">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <h1 className="text-lg font-bold tracking-widest">{siteTitle}</h1>

          {/* menus */}
          <nav className="flex">
            {headMenus.map((val, key) => {
              return (
                <Link href={val.href} key={key}>
                  <a className="ml-6 text-sm md:text-base leading-4 hover:text-gray-700">
                    {val.name}
                  </a>
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
