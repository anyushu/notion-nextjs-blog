import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Fragment } from 'react'
import { siteTitle } from 'next-seo.config'

const headMenus = [
  { name: 'Home', href: '/' },
  { name: 'GitHub', href: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/' },
  { name: 'Twitter', href: process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com/' },
]

const Header = () => {
  return (
    <header id="header" className="p-3 md:py-24 md:px-0 mb-12 md:mb-0">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <h1 className="text-lg font-bold tracking-widest">
            <Link href="/">{siteTitle}</Link>
          </h1>
          {/* menus */}
          <Popover>
            <nav
              className="flex relative justify-between lg:justify-start items-center sm:h-10"
              aria-label="Global"
            >
              <div className="flex md:hidden items-center">
                <Popover.Button className="bg-white dark:bg-black-900 focus:outline-none">
                  <span>Menu</span>
                </Popover.Button>
              </div>
              <div className="hidden md:flex">
                {headMenus.map((val, key) => {
                  return (
                    <Link href={val.href} key={key}>
                      <a className="ml-6 text-sm md:text-base leading-4 hover:text-gray-700">
                        {val.name}
                      </a>
                    </Link>
                  )
                })}
              </div>
            </nav>
            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="md:hidden absolute inset-x-0 top-0 z-10 p-2 transition transform origin-top-right"
              >
                <div className="flex overflow-hidden justify-center py-6 px-3 bg-white dark:bg-black-800 rounded-lg ring-1 ring-black-900 ring-opacity-5 shadow-md">
                  {headMenus.map((val, key) => {
                    return (
                      <Link href={val.href} key={key}>
                        <a className="px-3 leading-4 text-center hover:text-gray-700">{val.name}</a>
                      </Link>
                    )
                  })}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
      </div>
    </header>
  )
}

export default Header
