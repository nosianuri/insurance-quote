import React from 'react'
import { Helmet } from 'react-helmet'
import Carriers from '../../Components/Carriers/Carriers'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Shared/Footer/Footer'
import ShortNav from '../../Components/Shared/Navbar/ShortNav'
import HealthAbout from './HealthAbout/HealthAbout'
import HealthBanner from './HealthHero/HealthBanner'
import HealthHero from './HealthHero/HealthHero'

const Health = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Health Insurance | Insurance Trendy Quote </title>
      </Helmet>
      <Header />
      <HealthBanner />
      <HealthAbout />
      <Carriers />
      <Footer />
    </div>
  )
}

export default Health