import React from 'react'
import { Helmet } from 'react-helmet'
import Carriers from '../../Components/Carriers/Carriers'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Shared/Footer/Footer'
import ShortNav from '../../Components/Shared/Navbar/ShortNav'
import MotorAbout from './MotorAbout/MotorAbout'
import MotorBanner from './MotorHero/MotorBanner'
import MotorHero from './MotorHero/MotorHero'

const Motorcycle = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Motorcycle Insurance | Insurance Trendy Quote </title>
      </Helmet>
      <Header />
      <MotorBanner />
      <MotorAbout />
      <Carriers />
      <Footer />
    </div>
  )
}

export default Motorcycle