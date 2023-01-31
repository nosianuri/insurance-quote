import React from 'react'
import { Helmet } from 'react-helmet'
import Carriers from '../../Components/Carriers/Carriers'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Shared/Footer/Footer'
import ShortNav from '../../Components/Shared/Navbar/ShortNav'
import AcaAbout from './AcaAbout/AcaAbout'
import AcaBanner from './AcaHero/AcaBanner'
import AcaHero from './AcaHero/AcaHero'

const Aca = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Aca Insurance | Insurance Trendy Quote </title>
      </Helmet>
      <Header />
      <AcaBanner />
      <AcaAbout />
      <Carriers />
      <Footer />
    </div>
  )
}

export default Aca