import Header from './Header'
import Footer from './Footer'

interface Props {
  children: React.ReactNode
}

const siteTitle = 'blogでっす'

const Layout: React.VFC<Props> = ({ children }) => {
  return (
    <>
      <Header title={siteTitle} />
      <main>{children}</main>
      <Footer title={siteTitle} />
    </>
  )
}

export default Layout
