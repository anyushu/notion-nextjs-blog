import type { NextPage } from 'next'
import { siteTitle } from '../../next-seo.config'
import Header from './Header'
import Footer from './Footer'

interface Props {
  children: React.ReactNode
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <>
      <Header props={{ title: siteTitle }} />
      <main>{children}</main>
      <Footer props={{ title: siteTitle }} />
    </>
  )
}

export default Layout
