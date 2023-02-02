import React from 'react'
import { Helmet } from 'react-helmet'
import Carriers from '../../Components/Carriers/Carriers'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Shared/Footer/Footer'
import AboutBanner from './AboutBanner'
import AboutBody from './AboutBody'

const About = () => {
  return (
    <div>
         <Helmet>
        <meta charSet="utf-8" />
        <title>About Us | Insurance Trendy Quote </title>
      </Helmet>
      <Header />
      <AboutBanner />
      <AboutBody />
      <Footer />
    </div>
  )
}

export default About