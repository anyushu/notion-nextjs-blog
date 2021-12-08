import { ReactNode } from 'react'
import Footer from 'components/templates/Footer'
import Header from 'components/templates/Header'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
