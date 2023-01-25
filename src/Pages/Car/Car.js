import React from 'react'
import { Helmet } from 'react-helmet'
import Carriers from '../../Components/Carriers/Carriers'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Shared/Footer/Footer'
import ShortNav from '../../Components/Shared/Navbar/ShortNav'
import CarAbout from './CarAbout/CarAbout'
import CarHero from './CarHero/CarHero'

const Car = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Car Insurance | Insurance Trendy Quote </title>
      </Helmet>
      <Header />
      <ShortNav />
      <CarHero />
      <CarAbout />
      <Carriers />
      <Footer />
    </div>
  )
}

export default Car