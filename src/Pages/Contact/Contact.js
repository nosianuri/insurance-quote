import React from 'react'
import { Helmet } from 'react-helmet'
import Carriers from '../../Components/Carriers/Carriers'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Shared/Footer/Footer'
import ShortNav from '../../Components/Shared/Navbar/ShortNav'
import ContactBody from './ContactBody'
import ContactHero from './ContactHero'

const Contact = () => {
  return (
    <>
    <Helmet>
    <meta charSet="utf-8" />
    <title>Contact Us | Insurance Trendy Quote </title>
  </Helmet>
  <Header />
  <ShortNav />
  <ContactHero />
  <ContactBody />
  <Carriers />
  <Footer />
    </>
  )
}

export default Contact