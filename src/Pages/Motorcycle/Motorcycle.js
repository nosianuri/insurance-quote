import React from 'react'
import { Helmet } from 'react-helmet'
import Carriers from '../../Components/Carriers/Carriers'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Shared/Footer/Footer'
import ShortNav from '../../Components/Shared/Navbar/ShortNav'

const Motorcycle = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Motorcycle Insurance | Insurance Trendy Quote </title>
      </Helmet>
      <Header />
      <ShortNav />
      <Carriers />
      <Footer />
    </div>
  )
}

export default Motorcycle