import { Header } from 'components/header/header'
import { About } from 'components/about/about'
import { Services } from 'components/services/services'
import { Footer } from 'components/footer/footer'
import { Calculator } from 'components/calculator/calculator'
import { Outstaffing } from 'components/outstaffing/outstaffing'

export const Wrapper = () => {

  return (
    <>
      <Header />
      <About  />
      <Services />
      <Calculator />
      <Outstaffing />
      <Footer />
    </>
  )
}