import React from 'react'
import { Helmet } from 'react-helmet'
import Carriers from '../../Components/Carriers/Carriers'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Shared/Footer/Footer'
import LifeAbout from './LifeAbout/LifeAbout'
import LifeHero from './LifeHero/LifeHero'

const Life = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Life Insurance | Insurance Trendy Quote </title>
      </Helmet>
      <Header />
      <LifeHero />
      <LifeAbout />
      <Carriers />
      <Footer />
    </div>
  )
}

export default Life