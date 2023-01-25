import React from 'react'
import { Helmet } from 'react-helmet'
import Carriers from '../../Components/Carriers/Carriers'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Shared/Footer/Footer'
import ShortNav from '../../Components/Shared/Navbar/ShortNav'
import HiAbout from './HiAbout/HiAbout'
import HiHero from './HiHero/HiHero'

const HomeInsurance = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Insurance | Insurance Trendy Quote </title>
      </Helmet>
      <Header />
      <ShortNav />
      <HiHero />
      <HiAbout />
      <Carriers />
      <Footer />
    </div>
  )
}

export default HomeInsurance