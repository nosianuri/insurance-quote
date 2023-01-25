import React from 'react'
import { Helmet } from 'react-helmet'
import Carriers from '../../Components/Carriers/Carriers'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Shared/Footer/Footer'
import ShortNav from '../../Components/Shared/Navbar/ShortNav'
import PrivacyBody from './PrivacyBody'

const Privacy = () => {
    return (
        <>
        <Helmet>
        <meta charSet="utf-8" />
        <title>Privacy Policy | Insurance Trendy Quote </title>
      </Helmet>
      <Header />
      <ShortNav />
      <PrivacyBody />
      <Carriers />
      <Footer />
        </>
    )
}

export default Privacy