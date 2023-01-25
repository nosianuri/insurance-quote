import React from 'react'
import { Helmet } from 'react-helmet'
import Banner from '../../Components/Banner/Banner'
import Cta from '../../Components/Cta/Cta'
import Hero from '../../Components/Hero/Hero'
import Footer from '../../Components/Shared/Footer/Footer'
// import Navbar from '../../Components/Shared/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Service from '../../Components/Service/Service'
import Carriers from '../../Components/Carriers/Carriers'
import Offer from '../../Components/Offer/Offer'

import ShortNav from '../../Components/Shared/Navbar/ShortNav'

const Home = () => {
  return (
    <div>
        <Helmet>
        <meta charSet="utf-8" />
        <title>Insurance Trendy Quote </title>
      </Helmet>
      <div>
      <Header />
        <ShortNav />
        <Hero />
        <Service />
        <Cta />
        <Offer />
        <Carriers />
        <Footer />
      </div>
    </div>
  )
}

export default Home