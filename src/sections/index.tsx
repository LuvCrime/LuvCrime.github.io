import { Header } from 'components/header/header'
import { About } from 'components/about/about'
import { Services } from 'components/services/services'
import { Footer } from 'components/footer/footer'

export const Wrapper = () => {

  return (
    <>
      <Header />
      <About  />
      <Services />
      <Footer />
    </>
  )
}